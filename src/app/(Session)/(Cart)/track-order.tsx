import React from 'react';
import tw from "@/utils/tailwind";
import BackBtn from "@/components/common/BackBtn";
import {View} from "react-native";
import AppBar from "@/components/common/AppBar";
import Text from "@/components/common/Text";
import Clock from "@/assets/icons/clock-circle.svg";
import PhoneCall from "@/assets/icons/phone-call.svg";
import Button from "@/components/common/Button";
import {useRouter} from "expo-router";

const TrackOrder = () => {
    const router = useRouter();

    return (
        <View style={tw`pt-4 gap-5 h-11/12`}>
            <AppBar title={'Track Order'} left={<BackBtn/>} right={<View style={tw`w-11`}/>}/>
            <View style={tw`gap-4 items-center justify-center h-full px-[5%]`}>
                <Text variant={"body-lg-light"} style={tw`text-center`}>To arrive at</Text>
                <View style={tw`flex-row justify-center items-center gap-2`}>
                    <Clock />
                    <Text variant={'body-lg-light'} style={tw`text-[#FF3B30]`}>
                        6:00 pm
                    </Text>
                </View>
                {/*<Button style={tw`bg-primary pr-6 pl-4`} icon={<PhoneCall />}>*/}
                {/*    Call cook*/}
                {/*</Button>*/}
                <Button onPress={() => router.push('/order-details')} style={tw`w-full`}>Order Details</Button>
            </View>
        </View>
    );
};

export default TrackOrder;
