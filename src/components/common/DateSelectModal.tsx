import React, {useState} from 'react';
import {Modal, Pressable, StyleSheet, View} from "react-native";
import tw from "@/utils/tailwind";
import Text from "@/components/common/Text";
import DatePicker from "react-native-date-picker";
import Button from "@/components/common/Button";
import dayjs from "dayjs";
import {screen_width} from "@/constants/common";

type componentPropType = {
    modalVisible: boolean;
    toggleTimePopup: () => void;
    onConfirm: (date: Date) => void;
    mode: "time" | "date";
}

const DateSelectModal = ({modalVisible, toggleTimePopup, onConfirm, mode}: componentPropType) => {
    const [openTimeDatePicker, setOpenTimeDatePicker] = useState(new Date());

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={toggleTimePopup}>
            <View style={styles.centeredView}>
                <Pressable
                    onPress={toggleTimePopup}
                    style={tw`bg-[rgba(157,157,157,0.70)] h-full w-full absolute -top-1`}
                />
                <View style={[styles.modalView, tw`pb-14 pt-7`]}>
                    <Text style={tw`pb-7 text-title-sm font-bold`}>Choose a option</Text>
                    <DatePicker date={openTimeDatePicker} onDateChange={setOpenTimeDatePicker} mode={mode} theme={"light"}/>
                    <Button style={tw`w-full`} onPress={() => {
                        onConfirm(openTimeDatePicker)
                        toggleTimePopup()
                    }}>
                        Done
                    </Button>
                </View>
            </View>
        </Modal>
    );
};

export default DateSelectModal;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        // backgroundColor: 'rgba(157,157,157,0.70)'
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: screen_width,
        position: 'relative',
    },
});
