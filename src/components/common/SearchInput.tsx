import React, {useState} from 'react';
import TextInput from "@/components/common/TextInput";
import Magnifer from "@/assets/icons/magnifer.svg";
import Calendar from "@/assets/icons/calendar.svg";
import {TouchableOpacity} from "react-native";
import dayjs from "dayjs";
import DateSelectModal from "@/components/common/DateSelectModal";

type componentPropType = {
    styleCustom?: string
}

const SearchInput = ({styleCustom}: componentPropType) => {
    const [selectedDate, setSelectedDate] = useState<string>("--/--");
    const [modalVisible, setModalVisible] = useState(false);

    const toggleDatePopup = () => {
        setModalVisible(!modalVisible);
    };

    return (
        <>
            <TextInput
                styleCustom={`w-[90%] self-center ${styleCustom}`}
                icon={<Magnifer />}
                rightIcon={
                    <TouchableOpacity onPress={toggleDatePopup}>
                        <Calendar />
                    </TouchableOpacity>
                }
                placeholder={"Search questions"}
            />
            <DateSelectModal modalVisible={modalVisible} mode={"date"} toggleTimePopup={toggleDatePopup} onConfirm={(openDatePicker) => {
                setSelectedDate(dayjs(openDatePicker).format("MM/DD"));
            }}/>
        </>
    );
};

export default SearchInput;
