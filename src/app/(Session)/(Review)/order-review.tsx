import React, {useState} from 'react';
import {FlatList, View} from "react-native";
import TextInput from "@/components/common/TextInput";
import Calendar from "@/assets/icons/calendar.svg";
import AppBar from "@/components/common/AppBar";
import BackBtn from "@/components/common/BackBtn";
import tw from "@/utils/tailwind";
import {OrdersArray} from "@/data/new-orders";
import {screen_height} from "@/constants/common";
import {useRouter} from "expo-router";
import OrderReviewCardComponent from "@/components/cards/order-review-card.component";
import SearchInput from "@/components/common/SearchInput";

const OrderReview = () => {
    const router = useRouter()

    return (
        <View style={tw`flex-col gap-6`}>
            <AppBar title={'Reviews'} left={<BackBtn customOnPress={() => router.push("/home")}/>} right={<View style={tw`w-11`}/>}/>
            <SearchInput />
            <FlatList
                data={OrdersArray}
                contentContainerStyle={tw`gap-4 p-2 pb-12 px-[5%]`}
                style={{height: screen_height * 0.75}}
                renderItem={({item}) => <OrderReviewCardComponent order={item}/>}
                />
        </View>
    );
};

export default OrderReview;
