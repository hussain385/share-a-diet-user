import React, {useState} from 'react';
import {Image, TouchableOpacity, View, TextInput, ScrollView} from "react-native";
import {commonStyles} from "../../../styles/common.styles";
import tw from "../../../utils/tailwind";
import UserInfoAvatar from "../../../components/common/UserInfoAvatar";
import Text from "../../../components/common/Text";
import Button from "../../../components/common/Button";
import {OrdersArray} from "../../../data/new-orders";
import Warning from "@/assets/icons/warning.svg";
import Clock from "@/assets/icons/clock-circle.svg";
import ArrowRight from "@/assets/icons/arrow-right-orrange.svg";
import Star from "@/assets/icons/star.svg"
import Chat from "@/assets/icons/chat.svg";
import {screen_width} from "../../../constants/common";
import Fonts from "../../../constants/fonts";
import MealCard from "@/components/cards/meal-card.component";
import AntDesign from "@expo/vector-icons/AntDesign";
import BagWhite from "@/assets/icons/bag-white.svg";

const MealDetails = () => {
    const [numberItem, setNumberItem] = useState<number>(1)
    const [isDelivery, setIsDelivery] = useState(false);
    const order = OrdersArray[0]

    return (
        <View style={tw`gap-5`}>
            <View style={[tw`relative -ml-[5.55%]`, {width: screen_width}]}>
                <Image source={{uri: order.picture}} style={tw`w-full h-[350px] rounded-xl`}/>
                <TouchableOpacity style={tw`bg-white absolute bottom-3 right-3 rounded-full p-2`}>
                    <Chat />
                </TouchableOpacity>
            </View>
            <UserInfoAvatar picture={order.user.avatar} name={order.user.name} distance={`${order.user.distance}`}/>
            <View style={tw`flex-row justify-between items-center`}>
                <Text variant={"title-lg"}>{order.itemName}</Text>
                <View style={tw`flex-row items-center gap-2`}>
                    <View style={tw`flex-row gap-2 items-center`}>
                        <Star />
                        <Text variant={'body-lg'}>
                            4.9
                        </Text>
                    </View>
                    <Warning />
                </View>
            </View>
            <View style={tw`w-full p-4 rounded-lg border border-[#FF3B30] flex-row gap-2 items-center`}>
                <Warning />
                <Text variant={"body-lg-light"} style={{color: "#697079"}}>Allergy Alert:</Text>
                <Text variant={"body-lg-light"} >Milk</Text>
            </View>
            <Text variant={'body-lg-light'} style={tw`text-[#697079]`}>
                A delicious chicken burger served on a toasted bun with fresh lettuce, tomato slices, and mayonnaise. Juicy grilled chicken patty seasoned to perfection for a mouthwatering taste experience.
            </Text>
            <View style={tw`flex-row items-center gap-1`}>
                <Clock />
                <Text variant={"body-lg-bold"} style={tw`text-secondary200`}>{order.estimatedTime} mins left</Text>
            </View>
            <Text variant={"title-lg"} style={tw`text-secondary200 self-end`}>SGD {order.totalPrice}</Text>
            <Text variant={'body-lg-bold'}>Special Instructions</Text>
            <TextInput placeholder={"Add note"} multiline style={[tw`h-20 border border-[#E9EAEB] p-3 rounded-xl`, {textAlignVertical: "top"}]}/>
            <View style={tw`flex-row gap-4`}>
                <Button textVariant={"body-lg"} onPress={() => setIsDelivery(true)} style={tw`flex-1 ${isDelivery ? 'bg-secondary200' : 'bg-white'}`} textStyle={tw`${isDelivery ? 'text-white' : 'text-black'}`}>Delivery</Button>
                <Button textVariant={"body-lg"} onPress={() => setIsDelivery(false)} style={tw`flex-1 ${!isDelivery ? 'bg-secondary200' : 'bg-white'}`} textStyle={tw`${!isDelivery ? 'text-white' : 'text-black'}`}>Pickup</Button>
            </View>
            <View style={[tw`p-2 rounded-lg flex-row gap-4 w-full self-center items-center bg-white`, commonStyles.shadow]}>
                <TouchableOpacity disabled={numberItem === 1} onPress={() => setNumberItem(numberItem - 1)} style={tw`border rounded-full w-10 h-10 border-[#E9EAEB] bg-white items-center justify-center`}>
                    <AntDesign name="minus" size={24} color="black" />
                </TouchableOpacity>
                <Text variant={"title-lg"} style={{fontFamily: Fonts.Roboto.Regular, marginTop: 4}}>{numberItem}</Text>
                <TouchableOpacity onPress={() => setNumberItem(numberItem + 1)} style={tw`border rounded-full w-10 h-10 border-[#E9EAEB] bg-white items-center justify-center`}>
                    <AntDesign name="plus" size={24} color="black" />
                </TouchableOpacity>
                <Button style={tw`flex-1`} icon={<BagWhite />}>
                    Order Now
                </Button>
            </View>
            <View style={tw`flex-row justify-between`}>
                <Text variant={'body-lg-bold'}>Explore Sying Ku More Meals</Text>
                <TouchableOpacity style={tw`flex-row gap-1`}>
                    <Text variant={'body-lg-bold'} style={tw`text-secondary200`}>View All</Text>
                    <ArrowRight width={18} height={18}/>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal contentContainerStyle={tw`gap-4 p-1`}>
                {OrdersArray.map(order => <MealCard order={order} key={order.orderId}/>)}
            </ScrollView>
        </View>
    );
};

export default MealDetails;
