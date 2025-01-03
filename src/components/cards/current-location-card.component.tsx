import React from 'react';
import {View, Image} from "react-native";
import tw from "@/utils/tailwind";
import Ionicons from '@expo/vector-icons/Ionicons';
import Text from "@/components/common/Text";

type componentPropType = {
    isDelivery?: boolean
}

const CurrentLocationCardComponent = ({isDelivery}: componentPropType) => {
    return (
        <View style={tw`gap-3 rounded-xl flex-row bg-white p-3 border border-themeBorderColor`}>
            <Image
                style={tw`w-16 h-16 rounded-lg`}
                source={require('@/assets/images/location.png')}
            />
            <View style={tw`gap-1 flex-1`}>
                <View style={tw`flex-row gap-1`}>
                    <Ionicons name="location-sharp" size={20} color="#323150" />
                    <Text variant={"body-lg-light"}>{isDelivery ? "Delivery" : "Pickup"} Location</Text>
                </View>
                <Text variant={"body-lg-bold"}>
                    221B Baker Street, London, United Kingdom
                </Text>
            </View>
        </View>
    );
};

export default CurrentLocationCardComponent;
