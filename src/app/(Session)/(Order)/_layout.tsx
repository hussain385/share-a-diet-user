import React from 'react';
import {SafeAreaView, View} from "react-native";
import tw from "@/utils/tailwind";
import {Slot} from "expo-router";

type componentPropType = {
    children: React.ReactNode;
}

const AuthLayout = () => {
    return (
        <SafeAreaView>
            <View style={tw`pt-3`}>
                <Slot />
            </View>
        </SafeAreaView>
    );
};

export default AuthLayout;
