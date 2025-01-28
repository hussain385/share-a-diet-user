import React from 'react';
import {SafeAreaView, View} from "react-native";
import tw from "@/utils/tailwind";
import AppBar from "@/components/common/AppBar";
import BackBtn from "@/components/common/BackBtn";
import Text from "@/components/common/Text";
import CheckGreen from "@/assets/icons/check-circle.svg";
import Clock from "@/assets/icons/clock-circle.svg";
import Button from "@/components/common/Button";
import PhoneCall from "@/assets/icons/phone-call.svg";
import {useRouter} from "expo-router";

const OrderSuccess = () => {
    const router = useRouter();

    return (
        <SafeAreaView>
            <View style={tw`gap-4 items-center justify-center h-[97%] px-[5%]`}>
                <CheckGreen />
                <Text variant={"body-lg-light"} style={tw`text-center`}>Time</Text>
                <View style={tw`flex-row justify-center items-center gap-2`}>
                    <Clock />
                    <Text variant={'body-lg-light'}>
                        6:00 pm
                    </Text>
                </View>
                <Text variant={"body-lg-bold"}>Order placed successfully!</Text>
                <Button onPress={() => router.push('/order-history')} style={tw`w-full`}>Close</Button>
            </View>
        </SafeAreaView>
    );
};

export default OrderSuccess;
