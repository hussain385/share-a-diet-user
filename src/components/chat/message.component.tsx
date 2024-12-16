import React from 'react';
import {View} from "react-native";
import {messages} from "@/data/messages";
import Text from "@/components/common/Text";
import Read from "@/assets/icons/check-read.svg";
import tw from "@/utils/tailwind";

type componentPropType = {
    message: typeof messages[0]
}

const MessageComponent = ({message}: componentPropType) => {
    const userId = 1

    return (
        <View style={tw`rounded-2xl p-4 w-9/12 my-1.5 ${message.userId === userId ? "bg-[#FF6347] rounded-br-0 self-end" : "bg-white rounded-bl-0"}`}>
            <Text variant={"body-lg"} style={tw`${message.userId === userId ? "text-white" : ""}`}>{message.message}</Text>
            <View style={tw`flex-row gap-1 mt-1 ${message.userId === userId ? "justify-end" : "justify-start"}`}>
                <Text variant={"body-sm"} style={tw`${message.userId === userId ? "text-white" : "text-[#BABDC1]"}`}>{message.date}</Text>
                {message.userId === userId && <Read/>}
            </View>
        </View>
    );
};

export default MessageComponent;
