import React, {useState} from 'react';
import {StyleProp, StyleSheet, TextStyle, View, ViewStyle} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import tw from "@/utils/tailwind";
import Text from "@/components/common/Text";

const data = [
    {label: 'Item 1', value: '1'},
    {label: 'Item 2', value: '2'},
    {label: 'Item 3', value: '3'},
    {label: 'Item 4', value: '4'},
    {label: 'Item 5', value: '5'},
    {label: 'Item 6', value: '6'},
    {label: 'Item 7', value: '7'},
    {label: 'Item 8', value: '8'},
];

type componentPropType = {
    dataProp?: Array<{ label: string, value: string }>,
    placeholder?: string,
    label?: string;
    labelStyle?: StyleProp<TextStyle>
    mainContainer?: StyleProp<ViewStyle>
}

const DropDown = ({dataProp, placeholder, labelStyle, label, mainContainer}: componentPropType) => {
    const [value, setValue] = useState<string | null>(null);

    const renderItem = (item: { label: string, value: string }) => {
        return (
            <View style={tw`flex-row p-4 justify-between items-center`}>
                <Text style={tw`flex-1 text-body-lg text-[#0D1217]`}>{item.label}</Text>
            </View>
        );
    };

    return (
        <View style={mainContainer}>
            {label && <Text variant={"label-lg"} style={[tw`mb-1`, labelStyle]}>{label}</Text>}
            <Dropdown
                style={tw`bg-inputBgColor border border-themeBorderColor items-center px-4 h-14 rounded-lg`}
                // placeholderStyle={styles.placeholderStyle}
                // selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={tw`rounded-md`}
                containerStyle={tw`rounded-lg`}
                data={dataProp || data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={placeholder || "Food allergy"}
                searchPlaceholder="Search..."
                placeholderStyle={tw`text-[#BABDC1]`}
                value={value}
                onChange={item => {
                    setValue(item.value);
                }}
                renderItem={renderItem}
            />
        </View>
    );
};

export default DropDown;
