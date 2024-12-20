import React from 'react';
import {ScrollView, View} from "react-native";
import tw from "@/utils/tailwind";
import AppBar from "@/components/common/AppBar";
import BackBtn from "@/components/common/BackBtn";
import Text from "@/components/common/Text";
import OrderCardComponent from "@/components/cards/order-card.component";
import CurrentLocationCardComponent from "@/components/cards/current-location-card.component";
import Clock from "@/assets/icons/clock-circle.svg";
import {commonStyles} from "@/styles/common.styles";
import Button from "@/components/common/Button";

const OrderDetails = () => {
    return (
        <View style={tw`gap-5 h-full`}>
            <AppBar title={'Order Details'} left={<BackBtn/>} right={<View style={tw`w-11`}/>}/>
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
                        <Text variant={"body-lg-light"} style={tw`text-center`}>VAT</Text>
                        <Text variant={"body-lg-light"} style={tw`text-center`}>SGD 6.00</Text>
                    </View>
                    <View style={tw`h-px bg-black`}/>
                    <View style={tw`flex-row justify-between items-center`}>
                        <Text variant={"title-sm"} style={tw`text-center`}>Total</Text>
                        <Text variant={"title-sm"} style={tw`text-center`}>SGD 18.00</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default OrderDetails;
