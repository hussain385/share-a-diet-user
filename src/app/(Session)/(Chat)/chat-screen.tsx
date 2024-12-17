import React, {useEffect, useRef, useState} from 'react';
import {FlatList, Keyboard, KeyboardAvoidingView, Platform, TouchableOpacity, View} from "react-native";
import {screen_height, screen_width} from "@/constants/common";
import tw from "@/utils/tailwind";
import {useRouter} from "expo-router";
import AppBar from "@/components/common/AppBar";
import BackBtn from "@/components/common/BackBtn";
import Avatar from "@/components/common/Avatar";
import Text from "@/components/common/Text";
import Phone from "@/assets/icons/phone.svg";
import Plus from "@/assets/icons/plus.svg";
import Plain from "@/assets/icons/plain.svg";
import {commonStyles} from "@/styles/common.styles";
import Button from "@/components/common/Button";
import TextInput from "@/components/common/TextInput";
import {messages} from "@/data/messages";
import MessageComponent from "@/components/chat/message.component";

const ChatScreen = () => {
    const [keyboardVisible, setKeyboardVisible] = useState(false);
    const router = useRouter();
    const flatListRef = useRef<FlatList>(null);


    useEffect(() => {
        const keyboardDidShow = () => {
            setKeyboardVisible(true);
        };

        const keyboardDidHide = () => {
            setKeyboardVisible(false);
        };

        const showListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
        const hideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);

        return () => {
            showListener.remove();
            hideListener.remove();
        };
    }, []);

    const scrollToBottom = () => {
        if (flatListRef.current) {
            flatListRef.current.scrollToEnd({ animated: true });
        }
    };

    // Automatically scroll to bottom when messages or keyboard visibility changes
    useEffect(() => {
        scrollToBottom();
    }, [messages, keyboardVisible]);

    return (
        <KeyboardAvoidingView
            style={tw`flex-1 bg-[#0D12170D]`}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <View style={tw`flex-1 gap-4`}>
                <View style={tw`bg-white gap-4 pb-4`}>
                    <AppBar
                        title="Messages"
                        left={<BackBtn customOnPress={() => router.push('/chat')} />}
                        right={<View style={tw`w-11`} />}
                    />

                    {/* Header Section */}
                    <View style={tw`flex-row gap-3 items-center px-[5%] justify-between`}>
                        <View style={tw`flex-row gap-3 items-center`}>
                            <Avatar
                                name="John"
                                pictureUrl="https://s3-alpha-sig.figma.com/img/5e93/fc79/647a008768064652aafb8b860bdbd078?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DsADjUbO63Xj~DFxh38fFG0B6L9X2j2Fb~QYiEgRmUyLvBQIAnL5blcELYQhZ~F~Xcr6-sF7fKfMeOp8DmbTCmSfcxVy45tC1pS1~M4nlTpqkl06vkYiIdq4fTZZ3Bg3b9xg3wFXKNHbOIhlRPULIRPAubb7BYsHGrQCswEsgplDLsDIxI~S8RExeVawalua2ctXgfxX2KD6mh1~MyZzSvFiugvP0Gn8n6T3x6q3J01WPdof8wCF~RKHqQStAL7-GvnphI5PrznCC0ocfjdJk3d0h7jiFIjLof3oho8vAiDupAjX5Fca9l4TkHBy8q05TQ5DgTSim7Z95zNy1SFfEw__"
                                size={48}
                            />
                            <View style={tw`gap-1.5`}>
                                <Text variant="body-lg-bold">John Doe</Text>
                                <View style={tw`flex-row gap-1`}>
                                    <Text>Cook</Text>
                                </View>
                            </View>
                        </View>
                        <TouchableOpacity
                            style={[tw`rounded-full items-center justify-center bg-white w-10 h-10`]}
                        >
                            <Phone />
                        </TouchableOpacity>
                    </View>
                </View>

                {/* FlatList */}
                <FlatList
                    contentContainerStyle={[tw`px-[5%]`]}
                    data={messages}
                    renderItem={({ item }) => <MessageComponent message={item} />}
                    ref={flatListRef}
                    onContentSizeChange={scrollToBottom} // Scroll to bottom when content changes
                    onLayout={scrollToBottom} // Scroll to bottom on initial render
                />

                {/* Input Section */}
                <View style={tw`flex-row bg-white gap-3 px-[5%] items-center py-5`}>
                    <Button icon={<Plus />} style={tw`bg-white w-10 h-10`} />
                    <TextInput
                        placeholder="Type here..."
                        mainContainer={tw`flex-1`}
                        styleCustom={"px-0 pr-3 h-12"}
                    />
                    <Button icon={<Plain />} style={tw`rounded-full w-10 h-10`} />
                </View>
            </View>
        </KeyboardAvoidingView>
    );
};

export default ChatScreen;
