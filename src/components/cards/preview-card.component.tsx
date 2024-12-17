import React, {useState} from 'react';
import {FlatList, Image, View} from "react-native";
import {commonStyles} from "@/styles/common.styles";
import tw from "@/utils/tailwind";
import {filters, OrdersArray} from "@/data/new-orders";
import RatingFiltersComponent from "@/components/reviews/rating-filters.component";
import UserInfoAvatar from "@/components/common/UserInfoAvatar";
import Text from "@/components/common/Text";
import Warning from "@/assets/icons/warning.svg";
import Fonts from "@/constants/fonts";
import dayjs from "dayjs";
import Clock from "@/assets/icons/clock-circle.svg";
import Button from "@/components/common/Button";

type componentPropType = {
    order: typeof OrdersArray[0]
}

const PreviewCardComponent = ({order}: componentPropType) => {
    const [filter, setFilter] = useState<boolean>(false)
    return (
        <View style={[commonStyles.shadow, tw`rounded-xl p-2 bg-white w-full gap-4`]}>
            <Image source={{uri: order.picture}} style={tw`w-full h-[150px] rounded-lg`}/>
            <FlatList
                data={filters}
                contentContainerStyle={tw`gap-2 pb-2`}
                renderItem={({item}) => <RatingFiltersComponent value={item} onPress={() => setFilter(item)} selected={item === filter}/>}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
            <FlatList
                data={filters}
                contentContainerStyle={tw`gap-2 pb-2`}
                renderItem={({item}) => <RatingFiltersComponent value={item} onPress={() => setFilter(item)} selected={item === filter}/>}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
            <View>
                <UserInfoAvatar picture={order.user.avatar} name={order.user.name} distance={`${order.user.distance}`}/>
            </View>
            <Text variant={"title-lg"}>{order.itemName}</Text>
            <View style={tw`w-full p-4 rounded-lg border border-[#FF3B30] flex-row gap-2 items-center`}>
                <Warning />
                <Text variant={"body-lg"} style={{fontFamily: Fonts.Roboto.Light, color: "#697079"}}>Allergy Alert:</Text>
                <Text variant={"body-lg"} style={{fontFamily: Fonts.Roboto.Light}}>Milk</Text>
            </View>
            <Text variant={"body-lg-bold"} style={tw`mt-4`}>Portion: 200g</Text>
            <View style={tw`flex-row justify-between flex-1`}>
                <Text variant={"body-lg"}>Date & Time:</Text>
                <Text variant={"body-lg"}>{dayjs(new Date()).format("MMM D, YYYY, HH:MM")}</Text>
            </View>
            <View style={tw`flex-row justify-between flex-1`}>
                <Text variant={"body-lg"}>Delivery Time:</Text>
                <View style={tw`flex-row items-center gap-1`}>
                    <Clock />
                    <Text variant={"body-lg"}>30 mins</Text>
                </View>
            </View>
            <View style={tw`flex-row justify-between flex-1`}>
                <Text variant={"body-lg"}>Pickup Time:</Text>
                <View style={tw`flex-row items-center gap-1`}>
                    <Clock />
                    <Text variant={"body-lg"}>30 mins</Text>
                </View>
            </View>
            <Text variant={"body-lg"} style={{fontFamily: Fonts.Roboto.Light, color: "#697079"}}>
                A delicious chicken burger served on a toasted bun with fresh lettuce, tomato slices, and mayonnaise. Juicy grilled chicken patty seasoned to perfection for a mouthwatering taste experience.
            </Text>
            <Text variant={"body-lg-bold"} style={tw`text-secondary200`}>
                <Text variant={"body-lg-bold"} style={tw`text-black`}>
                    Price:{" "}
                </Text>
                SGD {order.totalPrice}
            </Text>
            <Text variant={"body-lg-bold"} style={tw`mt-4`}>Options:</Text>
            <View style={tw`flex-row gap-3`}>
                <Button style={tw`bg-[#E9EAEB] flex-1 rounded-lg h-9`} textVariant={"body-sm"} textStyle={tw`text-black`}>
                    Delivery
                </Button>
                <Button style={tw`bg-[#E9EAEB] flex-1 rounded-lg h-9`} textVariant={"body-sm"} textStyle={tw`text-black`}>
                    Pickup
                </Button>
            </View>
        </View>
    );
};

export default PreviewCardComponent;
