import React from 'react';
import {TouchableOpacity} from "react-native";
import tw from "@/utils/tailwind";

type componentPropTypes = {
    icon: React.ReactNode;
    onPress: () => void;
}

const SocialBtnComponent = ({onPress, icon}: componentPropTypes) => {
    return (
        <TouchableOpacity onPress={onPress} style={tw`p-2 rounded-full border border-gray-400`}>
            {icon}
        </TouchableOpacity>
    );
};

export default SocialBtnComponent;
