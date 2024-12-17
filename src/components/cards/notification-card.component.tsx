import React from 'react';
import {commonStyles} from "@/styles/common.styles";
import tw from "@/utils/tailwind";
import {Image, TouchableOpacity, View} from "react-native";
import Chat from "@/assets/icons/chat.svg";
import Text from "@/components/common/Text";
import Star from "@/assets/icons/star.svg";
import Button from "@/components/common/Button";
import {OrdersArray} from "@/data/new-orders";
import {useRouter} from "expo-router";
import UserInfoAvatar from "@/components/common/UserInfoAvatar";

type componentPropType = {
    order: typeof OrdersArray[0]
}

const NotificationCardComponent = ({order}: componentPropType) => {
    const router = useRouter();

    return (
        <View style={[commonStyles.shadow, tw`rounded-xl p-2 bg-white w-full`]}>
            <Text variant={"title-md"} style={tw`text-center`}>Order Request</Text>
            <View style={tw`flex-col gap-2 mt-4`}>
                <Text variant={"body-lg"}>Order Date & Time: {order.date}</Text>
                <Text variant={"title-lg"}>{order.itemName}</Text>
                <Text variant={"title-lg"} style={tw`text-secondary200`}>SGD {order.totalPrice}</Text>
                <Text variant={"body-lg"}>Quantity: {order.quantity}</Text>
            </View>
            <View style={tw`my-4`}>
                <UserInfoAvatar picture={order.user.avatar} name={order.user.name} distance={`${order.user.distance}`}/>
            </View>
            <Button onPress={() => router.push("/(Session)/(Order)/order-details")} variant={'outlined'} style={tw`my-4 mt-6`}>View Order</Button>
        </View>
    );
};

export default NotificationCardComponent;
