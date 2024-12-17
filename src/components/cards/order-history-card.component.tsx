import React from 'react';
import {OrdersArray} from "@/data/new-orders";
import {Image, TouchableOpacity, View} from "react-native";
import tw from "@/utils/tailwind";
import Text from "@/components/common/Text";
import Clock from "@/assets/icons/clock-circle.svg";
import Chat from "@/assets/icons/chat.svg";
import {commonStyles} from "@/styles/common.styles";
import Button from "@/components/common/Button";
import UserInfoAvatar from "@/components/common/UserInfoAvatar";
import Avatar from "@/components/common/Avatar";
import Star from "@/assets/icons/star.svg";
import {useRouter} from "expo-router";

type componentPropType = {
    order: typeof OrdersArray[0]
}

const OrderHistoryCardComponent = ({order}: componentPropType) => {
    const router = useRouter();

    return (
        <View style={[commonStyles.shadow, tw`rounded-xl p-2 bg-white w-full`]}>
            <View>
                <Image source={{uri: order.picture}} style={tw`w-full h-[150px] rounded-lg`}/>
                <TouchableOpacity style={tw`bg-white absolute bottom-2 right-2 rounded-full p-2`}>
                    <Chat />
                </TouchableOpacity>
            </View>
            <Text variant={"body-lg-bold"} style={tw`mt-4`}>Order ID: #{order.orderId}</Text>
            <Text variant={"body-lg"}>Order Date & Time: {order.date}</Text>
            <View style={tw`my-4`}>
                <UserInfoAvatar picture={order.user.avatar} name={order.user.name} distance={`${order.user.distance}`}/>
            </View>
            <View style={tw`flex-col gap-3`}>
                <Text variant={"title-lg"}>{order.itemName}</Text>
                <Text variant={"body-lg"}>Quantity: {order.quantity}</Text>
                <View style={tw`flex-row gap-2 items-center`}>
                    <Text variant={'body-lg'}>
                        Rating:
                    </Text>
                    <Star />
                    <Text variant={'body-lg'}>
                        4.9
                    </Text>
                </View>
                <View style={tw`flex-row gap-2 items-center`}>
                    <Text variant={'body-lg'}>
                        Earned:
                    </Text>
                    <Text variant={'body-lg'} style={tw`text-secondary200`}>
                        SGD {order.totalPrice}
                    </Text>
                </View>
            </View>
            <Button onPress={() => router.push("/(Session)/(Order)/order-details")} variant={'outlined'} style={tw`my-4 mt-6`}>More Details</Button>
        </View>
    );
};

export default OrderHistoryCardComponent;
