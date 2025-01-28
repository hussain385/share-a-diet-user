import React from 'react';
import {SafeAreaView, ScrollView, View} from "react-native";
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
import Setting from "@/assets/icons/setting.svg";
import CategorySectionComponent from "@/components/home/categories-section.component";
import Text from "@/components/common/Text";
import MealCardHomeComponent from "@/components/cards/meal-card-home.component";
import {OrdersArray} from "@/data/new-orders";

const Search = () => {
    const router = useRouter()
    const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();

    return (
        <SafeAreaView>
            <View style={[tw`flex-col gap-4 pt-4`, {maxHeight: screen_height * 0.87}]}>
                <AppBar title={'Search'} left={<BackBtn />} right={<View style={tw`w-11`}/>}/>
                <View style={{height: screen_height * 0.85}}>
                    <ScrollView contentContainerStyle={tw`px-[5%] pb-36 gap-4`}>
                        <TextInput icon={<Magnifer />} placeholder={"Search Orders"}/>
                        <CategorySectionComponent />
                        <View style={tw`justify-between flex-row`}>
                            <Text variant={"body-lg-bold"}>Meals Near You</Text>
                            <Text variant={"body-lg-bold"} style={tw`text-secondary200`}>Map View</Text>
                        </View>
                        <MealCardHomeComponent order={OrdersArray[0]}/>
                        <MealCardHomeComponent order={OrdersArray[0]}/>
                        <MealCardHomeComponent order={OrdersArray[0]}/>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Search;
