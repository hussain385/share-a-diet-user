import React, {useState} from 'react';
import {FlatList, SafeAreaView, View} from "react-native";
import tw from "@/utils/tailwind";
import Button from "@/components/common/Button";
import Avatar from "@/components/common/Avatar";
import {useNavigation, useRouter} from "expo-router";
import {DrawerNavigationProp} from "@react-navigation/drawer";
import {ParamListBase} from "@react-navigation/native";
import AppBar from "@/components/common/AppBar";
import Menu from "@/assets/icons/menu.svg"
import {commonStyles} from "@/styles/common.styles";
import Bell from "@/assets/icons/bell.svg"
import Bag from "@/assets/icons/bag.svg"
import {screen_height} from "@/constants/common";
import BackBtn from "@/components/common/BackBtn";
import TextInput from "@/components/common/TextInput";
import Magnifer from "@/assets/icons/magnifer.svg";
import Calendar from "@/assets/icons/calendar.svg";
import {filters, OrdersArray} from "@/data/new-orders";
import FilterBtnComponent from "@/components/home/filter-btn.component";
import OrderHistoryCardComponent from "@/components/cards/order-history-card.component";

const List = () => {
    const [filter, setFilter] = useState("All")
    const router = useRouter()
    const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();

    return (
        <SafeAreaView>
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
                    contentContainerStyle={tw`gap-4 p-2 pb-36 px-[5%]`}
                    style={{height: screen_height * 0.7}}
                    renderItem={({item}) => <OrderHistoryCardComponent order={item}/>}
                />
            </View>
        </SafeAreaView>
    );
};

export default List;
