import React from 'react';
import {TouchableOpacity} from "react-native";
import Text from "@/components/common/Text";
import tw from "@/utils/tailwind";
import {commonStyles} from "@/styles/common.styles";

type componentPropType = {
    textValue: string;
    onPress: () => void;
    selected?: boolean;
}

const FilterBtnComponent = ({textValue, selected, onPress}: componentPropType) => {
    return (
        <TouchableOpacity onPress={onPress} style={[tw`border ${selected ? 'border-secondary200' : 'border-gray-400'} bg-white justify-center items-center px-6 py-2 rounded-md`, commonStyles.shadow]}>
            <Text variant={'body-sm'}>{textValue}</Text>
        </TouchableOpacity>
    );
};

export default FilterBtnComponent;
