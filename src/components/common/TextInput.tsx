import React from 'react';
import {View, TextInput as TextInputComponent, StyleProp, TextStyle, ViewStyle} from "react-native";
import tw from "@/utils/tailwind";
import {Colors} from "@/constants/Colors";
import {screen_width} from "@/constants/common";
import Text from "@/components/common/Text";

type componentPropType = {
    placeholder: string;
    icon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    styleCustom?: string;
    label?: string;
    labelStyle?: StyleProp<TextStyle>
    textInputStyle?: string
    value?: string;
    mainContainer?: StyleProp<ViewStyle>
}

const TextInput = ({placeholder, icon, rightIcon, styleCustom, label, labelStyle, textInputStyle, value, mainContainer}: componentPropType) => {
    return (
        <View style={mainContainer}>
            {label && <Text variant={"label-lg"} style={[tw`mb-1`, labelStyle]}>{label}</Text>}
            <View style={tw`bg-inputBgColor border border-themeBorderColor flex-row items-center px-4 w-full rounded-lg ${styleCustom ? styleCustom : ""}`}>
                {icon && icon}
                <TextInputComponent value={value} placeholder={placeholder} placeholderTextColor={'#BABDC1'} style={[tw`h-14 text-primary flex-1 ml-3 ${textInputStyle ? textInputStyle : ""}`]}/>
                {rightIcon && rightIcon}
            </View>
        </View>
    );
};

export default TextInput;
