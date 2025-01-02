import React from 'react';
import {SafeAreaView, View} from "react-native";
import tw from "@/utils/tailwind";
import {Slot} from "expo-router";

type componentPropType = {
    children: React.ReactNode;
}

const AuthLayout = () => {
    return <Slot />;
};

export default AuthLayout;
