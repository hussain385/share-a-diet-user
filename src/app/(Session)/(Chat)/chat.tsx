import React from 'react';
import {FlatList, View} from "react-native";
import tw from "@/utils/tailwind";
import AppBar from "@/components/common/AppBar";
import BackBtn from "@/components/common/BackBtn";
import {chat} from "@/data/messages";
import ChatComponent from "@/components/chat/chat.component";
import {screen_height} from "@/constants/common";
import TextInput from "@/components/common/TextInput";
import Magnifer from "@/assets/icons/magnifer.svg";
import Calendar from "@/assets/icons/calendar.svg";
import {useRouter} from "expo-router";

const Chat = () => {
    const router = useRouter();

    return (
        <View style={[tw`flex-col gap-6`, {maxHeight: screen_height * 0.93}]}>
            <AppBar title={'Messages'} left={<BackBtn customOnPress={() => router.push("/home")}/>} right={<View style={tw`w-11`}/>}/>
            <TextInput icon={<Magnifer />} placeholder={"Search Orders"} styleCustom={"w-[90%] self-center"}/>
            <FlatList data={chat} contentContainerStyle={tw`px-[5%] gap-6 pb-10`} renderItem={({item}) => <ChatComponent {...item}/>} />
        </View>
    );
};

export default Chat;
