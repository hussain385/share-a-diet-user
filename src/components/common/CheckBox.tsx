import React from 'react';
import {StyleProp, TouchableOpacity, View, ViewStyle} from "react-native";
import Check from "@/assets/icons/check.svg";
import Text from "@/components/common/Text";
import tw from "@/utils/tailwind";

type componentPropType = {
    label: string;
    selected: boolean;
    onPress: () => void;
    size: number,
    style?: StyleProp<ViewStyle>
}

const CheckBox = ({label, onPress, selected, size, style}: componentPropType) => {
    return (
        <View style={[tw`flex-row gap-3 items-center`, style]}>
            <TouchableOpacity onPress={onPress} style={[tw`border border-[#BABDC1] items-center justify-center rounded-md ${selected ? "bg-[#FF6347] border-[#FF6347]" : "bg-transparent"}`, {width: size, height: size}]}>
                <Check width={size} height={size} style={tw`-ml-px`}/>
            </TouchableOpacity>
            <Text>{label}</Text>
        </View>
    );
};

export default CheckBox;
