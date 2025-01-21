import React from 'react';
import {commonStyles} from "@/styles/common.styles";
import tw from "@/utils/tailwind";
import {Image, TouchableOpacity, View} from "react-native";
import Chat from "@/assets/icons/chat.svg";
import Text from "@/components/common/Text";
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
        <View style={[commonStyles.shadow, tw`rounded-xl p-2 bg-white w-full gap-4 py-4 items-center`]}>
            <Text variant={"title-md"} style={tw`text-center`}>Order Request</Text>
            <Text variant={"title-lg"}>{order.itemName}</Text>
            <Text variant={"title-lg"} style={tw`text-secondary200`}>SGD {order.totalPrice}</Text>
            <Text variant={"body-lg"}>Quantity: {order.quantity}</Text>
            {/*<View style={tw`my-4 mb-6`}>*/}
            {/*    <UserInfoAvatar picture={order.user.avatar} name={order.user.name} distance={`${order.user.distance}`}/>*/}
            {/*</View>*/}
            {order.orderId === '18361' && <Button style={tw`w-full`} onPress={() => router.push({pathname: "/(Session)/(Order)/order-details", params: {route: "/(Session)/(Notification)/notifications", noBottom: 'true', status: order.orderStatus, dinningOptions: order.dinningOptions}})} variant={'outlined'}>Track Order</Button>}
            <Button style={tw`w-full`} onPress={() => router.push({pathname: "/chat-screen", params: {route: "/(Session)/(Notification)/notifications"}})} variant={'outlined'} icon={<Chat />}>Chat with cook</Button>
        </View>
    );
};

export default NotificationCardComponent;
