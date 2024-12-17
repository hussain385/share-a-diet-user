import React, {useState} from 'react';
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
import SuccessModal from "@/components/modals/success.modal";
import {useRouter} from "expo-router";
import RejectOrderModal from "@/components/modals/reject-order.modal";

type componentPropType = {
    order: typeof OrdersArray[0],
    showBtn?: boolean
}

const OrderDetailsCardComponent = ({order, showBtn}: componentPropType) => {
    const [openSuccessModal, setOpenSuccessModal] = useState(false);
    const [openRejectModal, setOpenRejectModal] = useState(false)

    const handleToggleOrderSuccess = () => {
        setOpenSuccessModal(!openSuccessModal);
    };

    const handleToggleOrderReject = () => {
        setOpenRejectModal(!openRejectModal);
    };

    return (
        <View style={[commonStyles.shadow, tw`rounded-xl p-2 bg-white w-full`]}>
            <View>
                <Image source={{uri: order.picture}} style={tw`w-full h-[150px] rounded-lg`}/>
                <TouchableOpacity style={tw`bg-white absolute bottom-2 right-2 rounded-full p-2`}>
                    <Chat />
                </TouchableOpacity>
            </View>
            <Text variant={"body-lg-bold"} style={tw`mt-4`}>Order ID: #{order.orderId}</Text>
            <Text variant={"body-lg"}>Order Date & Time: {order.date}</Text>
            <View style={tw`my-4`}>
                <UserInfoAvatar picture={order.user.avatar} name={order.user.name} distance={`${order.user.distance}`}/>
            </View>
            <View style={tw`flex-col gap-3`}>
                <Text variant={"title-lg"}>{order.itemName}</Text>
                <Text variant={"body-lg"}>Quantity: {order.quantity}</Text>
                <View style={tw`flex-col gap-1`}>
                    <Text variant={"body-lg-bold"}>Special Instructions:</Text>
                    <Text variant={"body-lg"}>{order.specialInstructions}</Text>
                </View>
                <View style={tw`flex-col gap-1`}>
                    <Text variant={"body-lg-bold"}>Food Allergy:</Text>
                    <Text variant={"body-lg"}>{order.foodAllergy}</Text>
                </View>
                <View style={tw`flex-col gap-1`}>
                    <Text variant={"body-lg-bold"}>Payment Method:</Text>
                    <Text variant={"body-lg"}>{order.paymentMethod}</Text>
                </View>
                <View style={tw`flex-col gap-1`}>
                    <Text variant={"body-lg-bold"}>Payment Status:</Text>
                    <Text variant={"body-lg"}>{order.paymentStatus}</Text>
                </View>
                <View style={tw`flex-col gap-1`}>
                    <Text variant={"body-lg-bold"}>Dining Options:</Text>
                    <Text variant={"body-lg"}>{order.dinningOptions}</Text>
                </View>
            </View>
            <Text variant={"title-lg"} style={tw`text-secondary200 text-center`}><Text variant={"title-lg"} style={tw`text-black`}>Total</Text> SGD {order.totalPrice}</Text>
            {showBtn && <View style={tw`flex-row gap-2 my-5`}>
                <Button style={tw`flex-1`} onPress={handleToggleOrderSuccess}>Accept</Button>
                <Button variant={'outlined'} style={tw`flex-1`} onPress={handleToggleOrderReject}>Reject</Button>
            </View>}
            <SuccessModal modalVisible={openSuccessModal} togglePopup={handleToggleOrderSuccess}
                          title={"Congratulations!\nOrder accepted successfully!"} btnTitle={"Close"}
                          onPressBtn={handleToggleOrderSuccess}/>
            <RejectOrderModal modalVisible={openRejectModal} togglePopup={handleToggleOrderReject}/>
        </View>
    );
};

export default OrderDetailsCardComponent;
