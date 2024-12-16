import React from 'react';
import {Image, SafeAreaView, View} from "react-native";
import tw from "@/utils/tailwind";
import Text from "@/components/common/Text";
import PhoneInputComponent from "@/components/common/PhoneInput";
import Button from "@/components/common/Button";
import Slides from "@/data/slider";
import SocialBtnComponent from "@/components/auth/social-btn.component";
import {useRouter} from "expo-router";

const Login = () => {
    const router = useRouter();

    return (
        <View style={tw`bg-white flex-col items-center justify-center flex-1 py-4`}>
            <Image source={require('@/assets/images/logo.png')} style={tw`w-[179px] h-[179px] mb-16`}/>
            <View style={tw`flex-col gap-8`}>
                <Text variant={'title-xl'} style={tw`text-center`}>Log In</Text>
                <PhoneInputComponent />
                <Button onPress={() => router.push('/(Session)/(Tabs)/home')} variant={'filled'}>
                    Log In
                </Button>
                <View style={tw`flex-row gap-4 w-full items-center`}>
                    <View style={tw`w-[30%] bg-gray-400 h-px`}/>
                    <Text style={tw`text-gray-500`} variant={'body-lg'}>Or sign in with</Text>
                    <View style={tw`w-[30%] bg-gray-400 h-px`}/>
                </View>
                <View style={tw`items-center justify-center flex-row gap-6`}>
                    <SocialBtnComponent onPress={() => {}} icon={<Image source={require('@/assets/socials/google.png')} style={tw`w-6 h-6`}/>}/>
                    <SocialBtnComponent onPress={() => {}} icon={<Image source={require('@/assets/socials/facebook.png')} style={tw`w-6 h-6`}/>}/>
                    <SocialBtnComponent onPress={() => {}} icon={<Image source={require('@/assets/socials/apple.png')} style={tw`w-6 h-6`}/>}/>
                </View>
                <Text variant={'body-lg'} style={tw`text-center -mt-2`}>Don’t have an account? <Text onPress={() => router.push('/(Authentication)/(Signup)/signup')} variant={'body-lg-bold'} style={tw`text-secondary200`}>Sign Up</Text></Text>
            </View>
        </View>
    );
};

export default Login;
