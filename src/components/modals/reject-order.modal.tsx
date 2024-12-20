import React from 'react';
import {Modal, Pressable, StyleSheet, View} from "react-native";
import tw from "@/utils/tailwind";
import CheckCircle from "@/assets/icons/check-circle.svg";
import Text from "@/components/common/Text";
import Button from "@/components/common/Button";
import {screen_width} from "@/constants/common";
import {useRouter} from "expo-router";
import Cancel from "@/assets/icons/cancel.svg";

type componentPropType = {
    modalVisible: boolean;
    togglePopup: () => void;
};

const RejectOrderModal = ({modalVisible, togglePopup}: componentPropType) => {
    const router = useRouter()

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={togglePopup}>
            <View style={styles.centeredView}>
                <Pressable
                    onPress={togglePopup}
                    style={tw`bg-[rgba(157,157,157,0.70)] h-full w-full absolute -top-1`}
                />
                <View style={styles.modalView}>
                    <Text variant={"title-lg"} style={tw`text-center`}>Reject Order</Text>
                    <Text variant={"body-lg"} style={tw`text-center w-[60%]`}>Are you sure you want to reject this order!</Text>
                    <Button variant={"outlined"} style={tw`border-themeBorderColor w-full`} textStyle={tw`text-[#FF6347]`} onPress={togglePopup}>No</Button>
                    <Button variant={"outlined"} style={tw`w-full`} onPress={() => router.push("/reject-order")}>Reject</Button>
                    <Button onPress={togglePopup} variant={"ghost"} style={tw`absolute top-0 right-3`}>
                        <Cancel />
                    </Button>
                </View>
            </View>
        </Modal>
    );
};

export default RejectOrderModal;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'rgba(157,157,157,0.70)'
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        gap: 14,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: screen_width * 0.8,
        position: 'relative',
    },
});
