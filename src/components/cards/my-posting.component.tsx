import React from 'react';
import {Image, TouchableOpacity, View} from "react-native";
import {commonStyles} from "@/styles/common.styles";
import tw from "@/utils/tailwind";
import Chat from "@/assets/icons/chat.svg";
import Text from "@/components/common/Text";
import UserInfoAvatar from "@/components/common/UserInfoAvatar";
import {OrdersArray} from "@/data/new-orders";
import Star from "@/assets/icons/star.svg";
import Button from "@/components/common/Button";
import {useRouter} from "expo-router";

type componentPropType = {
    order: typeof OrdersArray[0]
}

const MyPostingComponent = ({order}: componentPropType) => {
    const router = useRouter();

    return (
        <View style={[commonStyles.shadow, tw`rounded-xl p-2 bg-white w-full`]}>
            <View>
                <Image source={{uri: order.picture}} style={tw`w-full h-[150px] rounded-lg`}/>
                <TouchableOpacity style={tw`bg-white absolute bottom-2 right-2 rounded-full p-2`}>
                    <Chat />
                </TouchableOpacity>
            </View>
            <View style={tw`flex-col gap-2 mt-4`}>
                <Text variant={"body-lg"}>Order Date & Time: {order.date}</Text>
                <Text variant={"title-lg"}>{order.itemName}</Text>
                <Text variant={"title-lg"} style={tw`text-secondary200`}>SGD {order.totalPrice}</Text>
                <View style={tw`flex-row gap-2 items-center`}>
                    <Text variant={'body-lg'}>
                        Rating:
                    </Text>
                    <Star />
                    <Text variant={'body-lg'}>
                        4.9
                    </Text>
                </View>
            </View>
            <Button onPress={() => router.push("/(Session)/(Order)/order-details")} variant={'outlined'} style={tw`my-4 mt-6`}>More Details</Button>
        </View>
    );
};

export default MyPostingComponent;
