import React from 'react';
import {Image, TouchableOpacity, View} from "react-native";
import {commonStyles} from "@/styles/common.styles";
import tw from "@/utils/tailwind";
import Chat from "@/assets/icons/chat.svg";
import UserInfoAvatar from "@/components/common/UserInfoAvatar";
import Text from "@/components/common/Text";
import Star from "@/assets/icons/star.svg";
import Warning from "@/assets/icons/warning.svg";
import Clock from "@/assets/icons/clock-circle.svg";
import Button from "@/components/common/Button";
import BagWhite from "@/assets/icons/bag-white.svg";
import {OrdersArray} from "@/data/new-orders";
import Fonts from "@/constants/fonts";

type componentPropType = {
    order: typeof OrdersArray[0]
}

const MealCard = ({order}: componentPropType) => {
    return (
        <View style={[commonStyles.shadow, tw`rounded-xl p-2 bg-white gap-2 w-[280px]`]}>
            <View style={tw`relative`}>
                <Image source={{uri: order.picture}} style={tw`w-full h-[141px] rounded-lg`}/>
                <TouchableOpacity style={tw`bg-white absolute bottom-2 right-2 rounded-full p-2`}>
                    <Chat width={16} height={16}/>
                </TouchableOpacity>
            </View>
            <UserInfoAvatar
                picture={order.user.avatar}
                name={order.user.name}
                distance={`${order.user.distance}`}
                avatarSize={31}
                nameStyle={tw`text-body-sm`}
                distanceStyle={tw`text-body-sm`}
                locationIconSize={15}
                style={tw`gap-1.5`}
                subStyle={tw`gap-0.5`}
            />
            <View style={tw`flex-row justify-between items-center`}>
                <Text variant={"body-sm"} style={{fontFamily: Fonts.Roboto.Bold}}>{order.itemName}</Text>
                <View style={tw`flex-row items-center gap-2`}>
                    <View style={tw`flex-row gap-2 items-center`}>
                        <Star />
                        <Text variant={'body-sm'}>
                            4.9
                        </Text>
                    </View>
                    <Warning width={18} height={18}/>
                </View>
            </View>
            <Text variant={'body-sm'} style={[tw`text-[#697079]`, {fontFamily: Fonts.Roboto.Light}]}>
                A delicious chicken burger served on a toasted bun with fresh lettuce, tomato slices, and mayonnaise. Juicy grilled chicken patty seasoned to perfection for a mouthwatering taste experience.
            </Text>
            <Text variant={"body-lg"} style={tw`text-secondary200`}>SGD {order.totalPrice}</Text>
        </View>
    );
};

export default MealCard;
