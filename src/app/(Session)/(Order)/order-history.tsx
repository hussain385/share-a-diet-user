import React, {useState} from 'react';
import {FlatList, View} from "react-native";
import TextInput from "@/components/common/TextInput";
import Magnifer from "@/assets/icons/magnifer.svg";
import Calendar from "@/assets/icons/calendar.svg";
import AppBar from "@/components/common/AppBar";
import BackBtn from "@/components/common/BackBtn";
import tw from "@/utils/tailwind";
import {filters, OrdersArray} from "@/data/new-orders";
import Button from "@/components/common/Button";
import FilterBtnComponent from "@/components/home/filter-btn.component";
import {screen_height} from "@/constants/common";
import OrderHistoryCardComponent from "@/components/cards/order-history-card.component";
import {useRouter} from "expo-router";

const OrderHistory = () => {
    const [filter, setFilter] = useState<string>('All');
    const router = useRouter()

    return (
        <View style={tw`flex-col gap-6`}>
            <AppBar title={'Order history'} left={<BackBtn customOnPress={() => router.push("/home")}/>} right={<View style={tw`w-11`}/>}/>
            <TextInput icon={<Magnifer />} styleCustom={"-mt-2 w-[90%] self-center"} rightIcon={<Calendar />} placeholder={"Search Orders"}/>
            <FlatList
                data={filters}
                contentContainerStyle={tw`gap-2 pb-2 px-[5%]`}
                renderItem={({item}) => <FilterBtnComponent textValue={item} onPress={() => setFilter(item)} selected={item === filter}/>}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
            <FlatList
                data={OrdersArray}
                contentContainerStyle={tw`gap-4 p-2 pb-4 px-[5%]`}
                style={{height: screen_height * 0.7}}
                renderItem={({item}) => <OrderHistoryCardComponent order={item}/>}
                />
        </View>
    );
};

export default OrderHistory;
