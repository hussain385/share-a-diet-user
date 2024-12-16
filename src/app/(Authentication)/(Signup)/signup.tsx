import React from 'react';
import {View, Image, SafeAreaView} from "react-native";
import Text from "@/components/common/Text";
import {useRouter} from "expo-router";
import tw from "@/utils/tailwind";
import PhoneInputComponent from "@/components/common/PhoneInput";
import Button from "@/components/common/Button";
import SocialBtnComponent from "@/components/auth/social-btn.component";
import TextInput from "@/components/common/TextInput";
import Letter from "@/assets/icons/letter.svg";
import User from "@/assets/icons/user.svg";
import DropDown from "@/components/common/DropDown";

const Signup = () => {
    const router = useRouter();

    return (
        <View style={tw`flex-1 justify-between py-4`}>
            <View>
                <Text variant={'title-xl'} style={tw`pb-4 text-center mb-8`}>Registration</Text>
                <View style={tw`flex-col gap-4`}>
                    <PhoneInputComponent />
                    <TextInput icon={<Letter />} placeholder={'Enter email'}/>
                    <TextInput icon={<User />} placeholder={'Enter username'}/>
                    <DropDown />
                </View>
            </View>
            <View style={tw`gap-8 flex-col pb-4`}>
                <Button onPress={() => router.push('/(Authentication)/(Signup)/otp')} variant={'filled'}>
                    Register
                </Button>
                <View style={tw`flex-row gap-4 w-full items-center`}>
                    <View style={tw`w-[30%] bg-gray-400 h-px`}/>
                    <Text style={tw`text-gray-500`} variant={'body-lg'}>Or sign up with</Text>
                    <View style={tw`w-[30%] bg-gray-400 h-px`}/>
                </View>
                <View style={tw`items-center justify-center flex-row gap-6`}>
                    <SocialBtnComponent onPress={() => {}} icon={<Image source={require('@/assets/socials/google.png')} style={tw`w-6 h-6`}/>}/>
                    <SocialBtnComponent onPress={() => {}} icon={<Image source={require('@/assets/socials/facebook.png')} style={tw`w-6 h-6`}/>}/>
                    <SocialBtnComponent onPress={() => {}} icon={<Image source={require('@/assets/socials/apple.png')} style={tw`w-6 h-6`}/>}/>
                </View>
                <Text variant={'body-lg'} style={tw`text-center -mt-2`}>Do have an account? <Text onPress={() => router.push('/(Authentication)/(Login)/login')} variant={'body-lg-bold'} style={tw`text-secondary200`}>Sign In</Text></Text>
            </View>
        </View>
    );
};

export default Signup;
