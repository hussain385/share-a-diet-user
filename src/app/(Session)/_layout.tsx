import React from 'react';
import {SafeAreaView, View} from "react-native";
import tw from "@/utils/tailwind";
import {Slot} from "expo-router";
import {Drawer} from "expo-router/drawer";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import CustomDrawerComponent from "@/components/navigation/custom-drawer.component";

const HomeLayout = () => {
    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <Drawer screenOptions={{headerShown: false}} drawerContent={(props) => <CustomDrawerComponent {...props} />} />
        </GestureHandlerRootView>
    );
};

export default HomeLayout;
