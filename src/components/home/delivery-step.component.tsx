import React from 'react';
import {View} from "react-native";
import Shop from "@/assets/icons/shop.svg"
import Box from "@/assets/icons/box.svg"
import Scooter from "@/assets/icons/scooter.svg"
import CheckCircleGrey from "@/assets/icons/check-circle-grey.svg"
import tw from "@/utils/tailwind";

const DeliveryStepComponent = () => {
    return (
        <View style={tw`flex-row items-center`}>
            <View style={tw`border border-gray-300 w-8 h-8 items-center justify-center rounded-full`}>
                <Shop />
            </View>
            <View style={tw`h-px flex-1 bg-gray-300`}/>
            <View style={tw`border border-gray-300 w-8 h-8 items-center justify-center rounded-full`}>
                <Box />
            </View>
            <View style={tw`h-px flex-1 bg-gray-300`}/>
            <View style={tw`border border-gray-300 w-8 h-8 items-center justify-center rounded-full`}>
                <Scooter />
            </View>
            <View style={tw`h-px flex-1 bg-gray-300`}/>
            <View style={tw`border border-gray-300 w-8 h-8 items-center justify-center rounded-full`}>
                <CheckCircleGrey />
            </View>
        </View>
    );
};

export default DeliveryStepComponent;
