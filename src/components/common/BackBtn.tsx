import React, {useCallback} from 'react';
import {StyleProp, TouchableOpacity, ViewStyle} from "react-native";
import ArrowLeft from "@/assets/icons/arrow-left.svg"
import tw from "@/utils/tailwind";
import {useRouter} from "expo-router";
import {commonStyles} from "@/styles/common.styles";

type componentPropType = {
    customOnPress?: () => void
    style?: StyleProp<ViewStyle>
}

const BackBtn = ({customOnPress, style}: componentPropType) => {
    const router = useRouter()
    const handleBack = useCallback(() => {
        if (customOnPress) {
            customOnPress()
        } else {
            router.back()
        }
    }, [])

    return (
        <TouchableOpacity onPress={handleBack} style={[tw`rounded-full items-center justify-center bg-white w-10 h-10`, commonStyles.shadow, style]}>
            <ArrowLeft />
        </TouchableOpacity>
    );
};

export default BackBtn;
