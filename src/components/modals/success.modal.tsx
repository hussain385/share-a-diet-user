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
                        source={{uri: "https://s3-alpha-sig.figma.com/img/84c7/b257/f53075fa47e29f2c98fce81622427042?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UEUEGbaANyxZhLl1CfRI3yrch5jd2jkG3A0D-hyszHLrP323J8y7n3WasqyTrxyDRYwyPGc5TfM4ADW1q1oNw-LnWS-1JL1FZLPsIILaRRfxztXwpHK02sDGylWQn2WKdyfQO1mp6ejFdBF278MgrGNfH3hcfXIBJhB116fKriU~62YEUp94thMN~8RIxleFOv7dOiqEXH1zFcI3YYfJWjIiyAoaII7QBTlDCN~Zu~aSgVsLs4FNjn~m1ejZ0r2l9Xdo9-Cqm0t9UyZCUs~AHTXxVDdJYTfsoLf6K~nJYmpEGpul3yWeaKuQ40wVuvEnfJyQkQSFcu3MojtPaH8jfg__"}}
                        style={tw`h-40 w-40`}
                    />
                    <Button style={tw`w-full`} onPress={onPressBtn}>{btnTitle}</Button>
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
