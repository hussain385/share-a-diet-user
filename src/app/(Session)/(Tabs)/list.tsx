import React from 'react';
import {SafeAreaView, View} from "react-native";
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

const List = () => {
    const router = useRouter()
    const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();

    return (
        <SafeAreaView>
            <View style={[tw`flex-col gap-4 pt-4`, {maxHeight: screen_height * 0.87}]}>
                <AppBar title={''} left={<BackBtn customOnPress={() => router.push("/home")}/>} right={<View style={tw`w-11`}/>}/>
            </View>
        </SafeAreaView>
    );
};

export default List;
