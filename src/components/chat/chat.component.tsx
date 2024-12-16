import React from 'react';
import {Pressable, View} from "react-native";
import Avatar from "@/components/common/Avatar";
import {chat} from "@/data/messages";
import Text from "@/components/common/Text";
import tw from "@/utils/tailwind";
import {useRouter} from "expo-router";

const ChatComponent = ({message, name, date, picture}: typeof chat[0]) => {
    const router = useRouter();

    return (
        <Pressable onPress={() => router.push("/chat-screen")} style={tw`flex-row gap-2 items-center`}>
            <Avatar name={name} pictureUrl={picture} size={42}/>
           <View style={tw`flex-col flex-1 justify-between`}>
               <View style={tw`flex-row flex-1 justify-between`}>
                   <Text variant={"body-lg-bold"}>
                       {name}
                   </Text>
                   <Text style={tw`text-[#4C555F]`}>
                       {date}
                   </Text>
               </View>
               <Text>
                   {message}
               </Text>
           </View>
        </Pressable>
    );
};

export default ChatComponent;
