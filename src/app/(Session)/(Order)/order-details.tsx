import React, {useMemo} from 'react';
import {SafeAreaView, ScrollView, View} from "react-native";
import tw from "@/utils/tailwind";
import AppBar from "@/components/common/AppBar";
import BackBtn from "@/components/common/BackBtn";
import Text from "@/components/common/Text";
import OrderCardComponent from "@/components/cards/order-card.component";
import CurrentLocationCardComponent from "@/components/cards/current-location-card.component";
import Clock from "@/assets/icons/clock-circle.svg";
import {commonStyles} from "@/styles/common.styles";
import Button from "@/components/common/Button";
import {useLocalSearchParams, useRouter} from "expo-router";
import {isUndefined} from "lodash";

const OrderDetails = () => {
    const router = useRouter();
    const {noBottom, status, dinningOptions} = useLocalSearchParams();
    const bgColor = useMemo(() => {
        switch (status) {
            case 'New':
                return 'bg-secondary200'
            case 'Ready':
                return 'bg-blue-500'
            case 'Delivered':
                return 'bg-green-500'
            case 'Preparing':
                return 'bg-yellow-500'
            default:
                return 'bg-primary'
        }
    }, [status])

    return (
        <SafeAreaView>
            <View style={tw`pt-3`}>
            <View style={tw`gap-5 h-full`}>
                <AppBar title={'Order Details'} left={<BackBtn customOnPress={status ? () => router.push('/(Session)/(Tabs)/list') : undefined}/>} right={<View style={tw`w-11`}/>}/>
                <ScrollView contentContainerStyle={tw`px-[5%] gap-5 pb-4`}>
                    <View style={tw`flex-row justify-between items-center`}>
                        <Text variant={"body-lg-light"}>Order Summary</Text>
                        {status && (
                            <View style={tw`${bgColor} rounded-full p-2 px-4`}>
                                <Text variant={"body-md"} style={[tw`text-white`, commonStyles.shadow]}>{status}</Text>
                            </View>
                        )}
                    </View>
                    <OrderCardComponent showBtn={isUndefined(status)}/>
                    <CurrentLocationCardComponent isDelivery={dinningOptions ? dinningOptions === 'Delivery' : undefined}/>
                    <Text variant={"body-lg-light"} style={tw`text-center`}>{dinningOptions ? dinningOptions : 'Pickup'} Time</Text>
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
                {noBottom !== 'true' && (
                    <View style={[tw`p-2 rounded-lg flex-row gap-4 w-[90%] self-center items-center bg-white absolute bottom-3`, commonStyles.shadow]}>
                        <Text variant={"title-lg"} style={tw`text-center flex-1`}>SGD 18.00</Text>
                        <Button onPress={dinningOptions ? dinningOptions === 'Delivery' ? () => router.push('/delivery-info') : () => router.push('/pickup-info') : () => router.push('/delivery-info')} style={tw`flex-1`}>
                            Order Again
                        </Button>
                    </View>
                )}
            </View>
            </View>
        </SafeAreaView>
    );
};

export default OrderDetails;
