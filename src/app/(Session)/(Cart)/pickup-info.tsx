import React, {useState} from 'react';
import {Image, ScrollView, TouchableOpacity, View} from "react-native";
import AppBar from "@/components/common/AppBar";
import BackBtn from "@/components/common/BackBtn";
import tw from "@/utils/tailwind";
import Text from "@/components/common/Text";
import {commonStyles} from "@/styles/common.styles";
import AntDesign from "@expo/vector-icons/AntDesign";
import Fonts from "@/constants/fonts";
import OrderCardComponent from "@/components/cards/order-card.component";
import CurrentLocationCardComponent from "@/components/cards/current-location-card.component";
import Clock from "@/assets/icons/clock-circle.svg";
import Button from "@/components/common/Button";
import BagWhite from "@/assets/icons/bag-white.svg";
import {useRouter} from "expo-router";

const PickupInfo = () => {
    const router = useRouter();

    return (
        <View style={tw`pt-4 gap-5 h-full`}>
            <AppBar title={'My Basket'} left={<BackBtn customOnPress={() => router.push('/meal-details')}/>} right={<View style={tw`w-11`}/>}/>
            <ScrollView contentContainerStyle={tw`px-[5%] gap-5 pb-4`}>
                <Text variant={"body-lg-light"}>Order Summary</Text>
                <OrderCardComponent />
                <CurrentLocationCardComponent />
                <Text variant={"body-lg-light"} style={tw`text-center`}>Pickup Time</Text>
                <View style={tw`flex-row justify-center items-center gap-2 -mt-3`}>
                    <Clock />
                    <Text variant={'body-lg-light'} style={tw`text-[#FF3B30]`}>
                        6:00 pm to 8:00 pm
                    </Text>
                </View>
                <View style={tw`gap-2.5`}>
                    <View style={tw`flex-row justify-between items-center`}>
                        <Text variant={"body-lg-light"} style={tw`text-center`}>Subtotal</Text>
                        <Text variant={"body-lg-light"} style={tw`text-center`}>SGD 12.00</Text>
                    </View>
                    <View style={tw`flex-row justify-between items-center`}>
                        <Text variant={"body-lg-light"} style={tw`text-center`}>GST</Text>
                        <Text variant={"body-lg-light"} style={tw`text-center`}>SGD 6.00</Text>
                    </View>
                    <View style={tw`h-px bg-black`}/>
                    <View style={tw`flex-row justify-between items-center`}>
                        <Text variant={"title-sm"} style={tw`text-center`}>Total</Text>
                        <Text variant={"title-sm"} style={tw`text-center`}>SGD 18.00</Text>
                    </View>
                </View>
            </ScrollView>
            <View style={[tw`p-2 rounded-lg flex-row gap-4 w-[90%] self-center items-center bg-white absolute bottom-3`, commonStyles.shadow]}>
                <Text variant={"title-lg"} style={tw`text-center flex-1`}>SGD 18.00</Text>
                <Button onPress={() => router.push('/order-success')} style={tw`flex-1`}>
                    Complete Order
                </Button>
            </View>
        </View>
    );
};

export default PickupInfo;
