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
import SuccessModal from "@/components/modals/success.modal";
import {useRouter} from "expo-router";
import RejectOrderModal from "@/components/modals/reject-order.modal";

type componentPropType = {
    order: typeof OrdersArray[0]
}

const OrderCardComponent = ({order}: componentPropType) => {
    const [openSuccessModal, setOpenSuccessModal] = useState(false);
    const [openRejectModal, setOpenRejectModal] = useState(false)
    const router = useRouter();

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
                <Text variant={"title-lg"} style={tw`text-secondary200`}>SGD {order.totalPrice}</Text>
                <View style={tw`flex-row items-center gap-1`}>
                    <Clock />
                    <Text variant={"body-lg-bold"} style={tw`text-secondary200`}>{order.estimatedTime} mins left</Text>
                </View>
            </View>
            <View style={tw`flex-row gap-2 my-5`}>
                <Button style={tw`flex-1`} onPress={handleToggleOrderSuccess}>Accept</Button>
                <Button variant={'outlined'} style={tw`flex-1`} onPress={handleToggleOrderReject}>Reject</Button>
            </View>
            <TouchableOpacity onPress={() => router.push("/order-details")} style={tw`flex-row items-center`}>
                <Avatar name={""} size={48} pictureUrl={"https://s3-alpha-sig.figma.com/img/97b3/7a04/88ba2be5b4f555a16238a8536bb2372a?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nrWQDzRf4uuEi2zd2f2IgL-LHADwe8Y1XZAw3-tyzY1KLjEWfN85~RI-x030Va2oTdbLUYUCObyAq13r30JAfroGOzNxVZkz4QeaSxQUnVBeB3P9tn9VH6o~j4QGp5Bj7LUM6fmluIk~bU93SC~098LE7U9TS4KVxf7nmL1fF668k19JvOn4sUc2uJ9eS6CmNTIplCnZsX5aGX9VPBnSNMKWl-3f-KsSx-HOM-5PTUDIvOMxvrBdEDabxNUkLbzq0b0YRwQY-3jNA--0cZefwzCeloKkt8tLW8q46wT91~ALtlGCRQzeefEBmGK6nFFcT16-MafRjr2Ekm1wLWYeXA__"}/>
                <Avatar style={"-ml-4"} name={""} size={48} pictureUrl={"https://s3-alpha-sig.figma.com/img/97b3/7a04/88ba2be5b4f555a16238a8536bb2372a?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nrWQDzRf4uuEi2zd2f2IgL-LHADwe8Y1XZAw3-tyzY1KLjEWfN85~RI-x030Va2oTdbLUYUCObyAq13r30JAfroGOzNxVZkz4QeaSxQUnVBeB3P9tn9VH6o~j4QGp5Bj7LUM6fmluIk~bU93SC~098LE7U9TS4KVxf7nmL1fF668k19JvOn4sUc2uJ9eS6CmNTIplCnZsX5aGX9VPBnSNMKWl-3f-KsSx-HOM-5PTUDIvOMxvrBdEDabxNUkLbzq0b0YRwQY-3jNA--0cZefwzCeloKkt8tLW8q46wT91~ALtlGCRQzeefEBmGK6nFFcT16-MafRjr2Ekm1wLWYeXA__"}/>
                <Avatar style={"-ml-4"} name={""} size={48} pictureUrl={"https://s3-alpha-sig.figma.com/img/97b3/7a04/88ba2be5b4f555a16238a8536bb2372a?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nrWQDzRf4uuEi2zd2f2IgL-LHADwe8Y1XZAw3-tyzY1KLjEWfN85~RI-x030Va2oTdbLUYUCObyAq13r30JAfroGOzNxVZkz4QeaSxQUnVBeB3P9tn9VH6o~j4QGp5Bj7LUM6fmluIk~bU93SC~098LE7U9TS4KVxf7nmL1fF668k19JvOn4sUc2uJ9eS6CmNTIplCnZsX5aGX9VPBnSNMKWl-3f-KsSx-HOM-5PTUDIvOMxvrBdEDabxNUkLbzq0b0YRwQY-3jNA--0cZefwzCeloKkt8tLW8q46wT91~ALtlGCRQzeefEBmGK6nFFcT16-MafRjr2Ekm1wLWYeXA__"}/>
                <Text style={tw`text-[#FF3B30] ml-2`}>3 more Requests</Text>
            </TouchableOpacity>
            <SuccessModal modalVisible={openSuccessModal} togglePopup={handleToggleOrderSuccess}
                          title={"Congratulations!\nOrder accepted successfully!"} btnTitle={"Close"}
                          onPressBtn={handleToggleOrderSuccess}/>
            <RejectOrderModal modalVisible={openRejectModal} togglePopup={handleToggleOrderReject}/>
        </View>
    );
};

export default OrderCardComponent;
