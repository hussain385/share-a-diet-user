import React from 'react';
import {OrdersArray} from "@/data/new-orders";
import {TouchableOpacity, View, Image} from "react-native";
import {commonStyles} from "@/styles/common.styles";
import tw from "@/utils/tailwind";
import Chat from "@/assets/icons/chat.svg";
import UserInfoAvatar from "@/components/common/UserInfoAvatar";
import Star from "@/assets/icons/star.svg"
import Text from "@/components/common/Text";
import Warning from "@/assets/icons/warning.svg";
import Clock from "@/assets/icons/clock-circle.svg";
import BagWhite from "@/assets/icons/bag-white.svg";
import Button from "@/components/common/Button";
import {useRouter} from "expo-router";

type componentPropType = {
    order: typeof OrdersArray[0]
}

const MealCardHomeComponent = ({order}: componentPropType) => {
    const router = useRouter()

    return (
        <View style={[commonStyles.shadow, tw`rounded-xl p-4 bg-white w-full gap-5`]}>
            <View style={tw`relative`}>
                <Image source={{uri: order.picture}} style={tw`w-full h-[300px] rounded-lg`}/>
                <TouchableOpacity style={tw`bg-white absolute bottom-2 right-2 rounded-full p-2`}>
                    <Chat />
                </TouchableOpacity>
            </View>
            <UserInfoAvatar picture={order.user.avatar} name={order.user.name} distance={`${order.user.distance}`}/>
            <View style={tw`flex-row justify-between items-center`}>
                <Text variant={"title-lg"}>{order.itemName}</Text>
                <View style={tw`flex-row items-center gap-2`}>
                    <View style={tw`flex-row gap-2 items-center`}>
                        <Star />
                        <Text variant={'body-lg'}>
                            4.9
                        </Text>
                    </View>
                    <Warning />
                </View>
            </View>
            <Text variant={"title-lg"} style={tw`text-secondary200`}>SGD {order.totalPrice}</Text>
            <Text variant={'body-lg-light'} style={tw`text-[#697079]`}>
                A delicious chicken burger served on a toasted bun with fresh lettuce, tomato slices, and mayonnaise. Juicy grilled chicken patty seasoned to perfection for a mouthwatering taste experience.
            </Text>
            <View style={tw`flex-row items-center gap-1`}>
                <Clock />
                <Text variant={"body-lg-bold"} style={tw`text-secondary200`}>{order.estimatedTime} mins left</Text>
            </View>
            <Button onPress={() => router.push("/meal-details")} icon={<BagWhite />}>
                Order Now
            </Button>
        </View>
    );
};

export default MealCardHomeComponent;
