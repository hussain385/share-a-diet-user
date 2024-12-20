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
                style={tw`w-16 h-16`}
                source={{uri: "https://s3-alpha-sig.figma.com/img/9c98/1ac5/6eeaa76d64c962191b0402565d48b00f?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Dp-5U1ae7844SHxyYf-Oz2OBW43lPQJHjVLE9GZDWXYrLlrWVMu7wL6FuOrFAsh3suLifVfucXlnR6OVNIaD4Q4jhZUM1DVFiKbWKwz1wYV-J3Q7nlocy4a15pDDJMtoGD0BDxekje3pySFFjCTYwEEBGAB6wNzn9yT0DDHlnq1Xz8KpXezQvY4SSX-lebVfiDVCVGhN~M1pebgaas5SyADxhBDn8z2S-d2hDS7myo~LvM-oW-wlP7zOOR1pldJ4GzkFfONulK5LbZsVXmejVm1qZ3DBpZ0Y~e5ZNC4Ckh-dxh~VLzzc4KIOhvUVMj-VhfZjB2Px8nTBmD4sbNtlxg__"}}
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
