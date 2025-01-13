import React from 'react';
import {Image, Modal, Pressable, StyleSheet, TouchableOpacity, View} from "react-native";
import tw from "@/utils/tailwind";
import {screen_width} from "@/constants/common";
import CheckCircle from "@/assets/icons/check-circle.svg";
import Cancel from "@/assets/icons/cancel.svg";
import Text from "@/components/common/Text";
import Button from "@/components/common/Button";

type componentPropType = {
    modalVisible: boolean;
    togglePopup: () => void;
    title: string;
    btnTitle: string;
    onPressBtn: () => void;
};

const SuccessModal = ({modalVisible, togglePopup, title, btnTitle, onPressBtn}: componentPropType) => {
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
                    <Text variant={"title-md-bold"} style={tw`text-center`}>{title}</Text>
                    <Image
                        source={require('@/assets/images/thank-you.png')}
                        style={tw`h-40 w-40`}
                    />
                    <Button style={tw`w-10/12 mb-4`} onPress={onPressBtn}>{btnTitle}</Button>
                    <Button onPress={togglePopup} variant={"ghost"} style={tw`absolute top-0 right-3`}>
                        <Cancel />
                    </Button>
                </View>
            </View>
        </Modal>
    );
};

export default SuccessModal;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'rgba(157,157,157,0.70)'
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 15,
        paddingTop: 20,
        alignItems: 'center',
        gap: 20,
        shadowColor: '#000',
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
