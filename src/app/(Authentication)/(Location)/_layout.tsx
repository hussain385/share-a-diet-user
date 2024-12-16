import React from 'react';
import {SafeAreaView, View} from "react-native";
import tw from "@/utils/tailwind";
import {Slot} from "expo-router";

const AuthLayout = () => {
    return (
        <SafeAreaView style={tw`flex-1`}>
            <Slot />
        </SafeAreaView>
    );
};

export default AuthLayout;
