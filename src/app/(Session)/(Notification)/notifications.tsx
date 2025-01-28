import React from 'react';
import {FlatList, SafeAreaView, View} from "react-native";
import tw from "@/utils/tailwind";
import AppBar from "@/components/common/AppBar";
import BackBtn from "@/components/common/BackBtn";
import {OrdersArray} from "@/data/new-orders";
import {screen_height} from "@/constants/common";
import NotificationCardComponent from "@/components/cards/notification-card.component";
import {useRouter} from "expo-router";

const Notifications = () => {
    const router = useRouter();

    return (
        <SafeAreaView>
            <View style={tw`flex-col gap-3 pt-4`}>
                <AppBar title={'Notifications'} left={<BackBtn />} right={<View style={tw`w-11`}/>}/>
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
