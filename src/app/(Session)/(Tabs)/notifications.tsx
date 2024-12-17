import React from 'react';
import {FlatList, SafeAreaView, View} from "react-native";
import HomeWrapperComponent from "@/components/home/home-wrapper.component";
import tw from "@/utils/tailwind";
import AppBar from "@/components/common/AppBar";
import BackBtn from "@/components/common/BackBtn";
import TextInput from "@/components/common/TextInput";
import Magnifer from "@/assets/icons/magnifer.svg";
import Calendar from "@/assets/icons/calendar.svg";
import {filters, OrdersArray} from "@/data/new-orders";
import FilterBtnComponent from "@/components/home/filter-btn.component";
import {screen_height} from "@/constants/common";
import OrderDetailsCardComponent from "@/components/cards/order-details-card.component";
import NotificationCardComponent from "@/components/cards/notification-card.component";
import {useRouter} from "expo-router";

const Notifications = () => {
    const router = useRouter();

    return (
        <SafeAreaView>
            <View style={tw`flex-col gap-3 pt-4`}>
                <AppBar title={'Notifications'} left={<BackBtn customOnPress={() => router.push("/home")}/>} right={<View style={tw`w-11`}/>}/>
                <FlatList
                    data={OrdersArray}
                    contentContainerStyle={tw`gap-4 pt-2 pb-10 px-[5%]`}
                    style={{height: screen_height * 0.8}}
                    renderItem={({item}) => <NotificationCardComponent order={item}/>}
                />
            </View>
        </SafeAreaView>
    );
};

export default Notifications;
