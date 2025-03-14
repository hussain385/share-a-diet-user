import React, {useState} from 'react';
import {Image, SafeAreaView, ScrollView, TouchableOpacity, View} from "react-native";
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
import Text from "@/components/common/Text";
import AntDesign from '@expo/vector-icons/AntDesign';
import DeliveryStepComponent from "@/components/home/delivery-step.component";
import TextInput from "@/components/common/TextInput";
import Magnifer from "@/assets/icons/magnifer.svg";
import Calendar from "@/assets/icons/calendar.svg";
import Setting from "@/assets/icons/setting.svg";
import {categories} from "@/data/home";
import CategorySectionComponent from "@/components/home/categories-section.component";
import MealCardHomeComponent from "@/components/cards/meal-card-home.component";
import {OrdersArray} from "@/data/new-orders";

const Home = () => {
    const router = useRouter()
    const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();

    return (
        <SafeAreaView>
            <View style={[tw`flex-col gap-4 pt-4`, {maxHeight: screen_height * 0.87}]}>
                <AppBar
                    title={''}
                    right={<View style={tw`flex-row gap-2 items-center`}>
                        <Button onPress={() => router.push('/notifications')} variant={'ghost'} style={[tw`w-[40px] h-[40px] bg-white rounded-full`, commonStyles.shadow]}><Bell/></Button>
                        <Button onPress={() => router.push('/pickup-info')} variant={'ghost'} style={[tw`w-[40px] h-[40px] bg-white rounded-full`, commonStyles.shadow]}><Bag /></Button>
                        <Avatar onClick={() => router.push('/user-profile')} size={40} name={'Lee Chang'} pictureUrl={require('@/assets/images/user.jpg')}/>
                </View>}
                    left={<Button variant={'ghost'} onPress={() => navigation.openDrawer()}>
                        <Menu/>
                    </Button>}
                />
                <View style={{height: screen_height * 0.84}}>
                    <ScrollView contentContainerStyle={tw`px-[5%] gap-5 pb-34`}>
                        <Text variant={"body-lg-light"}>Deliver to <Text variant={"body-lg-bold"}>{"->"} Home</Text></Text>
                        <View style={tw`flex-row gap-2`}>
                            <Text variant={"body-lg-bold"} style={tw`text-head-xs`}>221B Baker Street</Text>
                            <AntDesign name="caretdown" size={14} color="black" />
                        </View>
                        <View style={[tw`p-2.5 rounded-full items-center flex-row bg-white gap-4`, commonStyles.shadow]}>
                            <Avatar name={""} pictureUrl={require('@/assets/images/user.jpg')} size={50}/>
                            <Text variant={"body-lg-bold"} style={tw`text-head-xs`}>Chicken Noodle Soup</Text>
                        </View>
                        <DeliveryStepComponent />
                        <View style={tw`flex-row justify-between`}>
                            <Text variant={"body-lg-bold"}>Estimated Delivery Time</Text>
                            <Text variant={"body-lg-light"} style={tw`text-gray-400`}>10:25</Text>
                        </View>
                        <View style={tw`flex-row justify-between`}>
                            <Text variant={"body-lg-bold"}>My Order</Text>
                            <Button variant={"outlined"} style={tw`border-secondary200 h-[22px] px-2 py-1`} textStyle={tw`text-secondary200 -mt-px`} textVariant={"body-sm"}>
                                Details
                            </Button>
                        </View>
                        <TextInput icon={<Magnifer />} placeholder={"Search Orders"}/>
                        <CategorySectionComponent />
                        <View style={tw`justify-between flex-row`}>
                            <Text variant={"body-lg-bold"}>Meals Near You</Text>
                            <Text variant={"body-lg-bold"} style={tw`text-secondary200`}>Map View</Text>
                        </View>
                        <MealCardHomeComponent order={OrdersArray[0]}/>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Home;
