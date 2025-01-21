import React from 'react';
import {OrdersArray} from "@/data/new-orders";
import {Image, TouchableOpacity, View} from "react-native";
import tw from "@/utils/tailwind";
import Text from "@/components/common/Text";
import Clock from "@/assets/icons/clock-circle.svg";
import Chat from "@/assets/icons/chat.svg";
import {commonStyles} from "@/styles/common.styles";
import Button from "@/components/common/Button";
import UserInfoAvatar from "@/components/common/UserInfoAvatar";
import Avatar from "@/components/common/Avatar";
import Star from "@/assets/icons/star.svg";
import {useRouter} from "expo-router";

type componentPropType = {
    order: typeof OrdersArray[0]
}

const OrderReviewCardComponent = ({order}: componentPropType) => {
    const router = useRouter();

    return (
        <View style={[commonStyles.shadow, tw`rounded-xl p-2 bg-white w-full`]}>
            <View>
                <Image source={order.picture} style={tw`w-full h-[150px] rounded-lg`}/>
                <TouchableOpacity style={tw`bg-white absolute bottom-2 right-2 rounded-full p-2`}>
                    <Chat />
                </TouchableOpacity>
            </View>
            <View style={tw`p-2 gap-3 mt-4`}>
                <Text variant={"title-lg"}>{order.itemName}</Text>
                <Text variant={"body-lg-bold"}>Order ID: #{order.orderId}</Text>
                <Text variant={"body-lg"}>Order Date & Time: {order.date}</Text>
                <Text variant={"body-lg"}>Quantity: {order.quantity}</Text>
                <View style={tw`flex-row gap-2 items-center`}>
                    <Text variant={'body-lg'}>
                        Price:
                    </Text>
                    <Text variant={'body-lg'} style={tw`text-secondary200`}>
                        SGD {order.totalPrice}
                    </Text>
                </View>
                {order.orderStatus === 'New' ? (
                    <Button onPress={() => router.push({pathname: '/order-rating', params: {isFromReview: 'true'}})}>
                        Add review
                    </Button>
                ) : (
                  <>
                      <View style={tw`justify-between items-center flex-row`}>
                          <View style={tw`flex-row gap-2 items-center`}>
                              <Text variant={'body-lg'}>
                                  Your Rating:
                              </Text>
                              <Star />
                              <Text variant={'body-lg'}>
                                  4.9
                              </Text>
                          </View>
                          <TouchableOpacity onPress={() => router.push({pathname: '/order-rating', params: {isFromReview: 'true'}})}>
                              <Text style={tw`text-secondary200 underline`} variant={'body-lg'}>Edit</Text>
                          </TouchableOpacity>
                      </View>
                      <View style={tw`bg-gray-100 rounded-xl p-2`}>
                          <Text style={tw`opacity-70`}>
                              loream ipsum dolor sit amet, con etetet ut sad kdsa sad asdas dasd asd s d fdsvmsikdm
                          </Text>
                      </View>
                  </>
                )}
            </View>
        </View>
    );
};

export default OrderReviewCardComponent;
