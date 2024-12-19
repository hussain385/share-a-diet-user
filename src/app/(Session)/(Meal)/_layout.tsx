import React from 'react';
import {SafeAreaView, ScrollView, View} from "react-native";
import tw from "@/utils/tailwind";
import {Slot} from "expo-router";
import {screen_height} from "@/constants/common";

type componentPropType = {
    children: React.ReactNode;
}

const AuthLayout = () => {
    return (
        <View style={{height: screen_height * 0.97}}>
            <ScrollView contentContainerStyle={tw`px-[5%] pb-20`}>
                <Slot />
            </ScrollView>
        </View>
    );
};

export default AuthLayout;
