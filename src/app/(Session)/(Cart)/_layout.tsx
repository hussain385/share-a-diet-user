import React from 'react';
import {SafeAreaView} from "react-native";
import {Slot} from "expo-router";

const CartLayout = () => {
    return (
        <SafeAreaView>
            <Slot />
        </SafeAreaView>
    );
};

export default CartLayout;
