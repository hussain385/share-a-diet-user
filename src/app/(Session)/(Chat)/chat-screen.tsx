import React, {useEffect, useRef, useState} from 'react';
import {FlatList, Keyboard, KeyboardAvoidingView, Platform, SafeAreaView, TouchableOpacity, View} from "react-native";
import {screen_height, screen_width} from "@/constants/common";
import tw from "@/utils/tailwind";
import {useLocalSearchParams, useRouter} from "expo-router";
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
import useImagePicker from "@/hooks/useImagePicker";
import ImagePickerComponent from "@/components/common/ImagePicker";

const ChatScreen = () => {
    const [keyboardVisible, setKeyboardVisible] = useState(false);
    const flatListRef = useRef<FlatList>(null);
    const {
        image,
        openLibrary,
        openCamera,
        isImagePickerPopupVisible,
        toggleImagePickerPopup,
    } = useImagePicker();

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
        <SafeAreaView>
            <KeyboardAvoidingView
                style={tw`flex-1 bg-[#0D12170D]`}
                behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            >
                <View style={tw`flex-1 gap-4`}>
                    <View style={tw`bg-white gap-4 pb-4`}>
                        <AppBar
                            title="Messages"
                            left={<BackBtn />}
                            right={<View style={tw`w-11`} />}
                        />

                        {/* Header Section */}
                        <View style={tw`flex-row gap-3 items-center px-[5%] justify-between`}>
                            <View style={tw`flex-row gap-3 items-center`}>
                                <Avatar
                                    name="John"
                                    pictureUrl={require('@/assets/images/user.jpg')}
                                    size={48}
                                />
                                <View style={tw`gap-1.5`}>
                                    <Text variant="body-lg-bold">John Doe</Text>
                                    <View style={tw`flex-row gap-1`}>
                                        <Text>Cook</Text>
                                    </View>
                                </View>
                            </View>
                            {/*<TouchableOpacity*/}
                            {/*    style={[tw`rounded-full items-center justify-center bg-white w-10 h-10`]}*/}
                            {/*>*/}
                            {/*    <Phone />*/}
                            {/*</TouchableOpacity>*/}
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
                        <Button onPress={toggleImagePickerPopup} icon={<Plus />} style={tw`bg-white w-10 h-10`} />
                        <TextInput
                            placeholder="Type here..."
                            mainContainer={tw`flex-1`}
                            styleCustom={"px-0 pr-3 h-12"}
                        />
                        <Button icon={<Plain />} style={tw`rounded-full w-10 h-10`} />
                    </View>
                </View>
                <ImagePickerComponent modalVisible={isImagePickerPopupVisible} toggleImagePickerPopup={toggleImagePickerPopup} openCamera={openCamera} openLibrary={openLibrary}/>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default ChatScreen;
