import React, {useState} from 'react';
import {DrawerContentComponentProps, DrawerContentScrollView} from "@react-navigation/drawer";
import {TouchableOpacity, View} from "react-native";
import tw from "@/utils/tailwind";
import BackBtn from "@/components/common/BackBtn";
import Avatar from "@/components/common/Avatar";
import Text from "@/components/common/Text";
import Pen from "@/assets/icons/pen.svg";
import Phone from "@/assets/icons/phone.svg";
import Letter from "@/assets/icons/letter.svg";
import Logout from "@/assets/icons/logout.svg";
import ShieldUser from "@/assets/icons/shield-user.svg";
import Location from "@/assets/icons/location.svg";
import QuestionCircle from "@/assets/icons/question-circle.svg";
import Receipt from "@/assets/icons/receipt.svg";
import Button from "@/components/common/Button";
import AnalyticsLinksComponents from "@/components/analytics/analytics-links.components";
import ChatDots from "@/assets/icons/chat-dots.svg";
import {Dropdown} from "react-native-element-dropdown";
import {useRouter} from "expo-router";
import LabelWithSwitch from "@/components/common/LabelWithSwitch";
import AntDesign from '@expo/vector-icons/AntDesign';

const CustomDrawerComponent = (props: DrawerContentComponentProps) => {
    const [value, setValue] = useState<string>("english");
    const {navigation} = props;
    const router = useRouter()

    return (
        <DrawerContentScrollView {...props} style={tw`flex-1 bg-white`}>
            <BackBtn customOnPress={() => navigation.closeDrawer()} style={tw`ml-2 mb-6`}/>
            <View style={tw`flex-row gap-4`}>
                <Avatar size={65} name={""} pictureUrl={require('@/assets/images/user.jpg')}/>
                <View style={tw`flex-col flex-1 justify-between`}>
                    <TouchableOpacity onPress={() => router.push("/(Session)/(Profile)/edit-profile")} style={tw`flex-row items-center gap-2`}>
                        <Text variant={"title-sm"}>Chang LI</Text>
                        <Pen/>
                    </TouchableOpacity>
                    <View style={tw`flex-row items-center gap-1`}>
                        <Phone width={14} height={14}/>
                        <Text variant={"body-sm"}>(+44) 20 1234 5629</Text>
                    </View>
                    <View style={tw`flex-row items-center gap-1`}>
                        <Letter width={14} height={14}/>
                        <Text variant={"body-sm"}>licheng.inc@gmail.com</Text>
                    </View>
                </View>
            </View>
            <Button onPress={() => router.push("/(Introduction)/introduction")} icon={<Logout/>} style={tw`bg-secondary100 my-6`} textStyle={tw`text-secondary200`}>
                Logout
            </Button>
            <AnalyticsLinksComponents onPress={() => router.push("/(Session)/(Tabs)/list")} icons={<Receipt width={20} height={20}/>} label={"Order History"} style={tw`pb-4 px-2 rounded-md`}/>
            <AnalyticsLinksComponents onPress={() => router.push("/(Session)/(Review)/order-review")} icons={<AntDesign name="staro" size={20} color="black" />} label={"Reviews"} style={tw`pb-4 px-2 rounded-md`}/>
            <AnalyticsLinksComponents onPress={() => router.push("/location-lists")} icons={<Location width={20} height={20}/>} label={"My Location"} style={tw`pb-4 px-2 rounded-md`}/>
            <AnalyticsLinksComponents onPress={() => router.push("/(Session)/(Chat)/chat")} icons={<ChatDots width={20} height={20}/>} label={"Messages"} style={tw`pb-4 px-2 rounded-md`} count={1}/>
            <AnalyticsLinksComponents onPress={() => router.push("/(Session)/(FAQs)/faqs")} icons={<QuestionCircle width={20} height={20}/>} label={"FAQs"} style={tw`pb-4 px-2 rounded-md`}/>
            <View style={tw`mx-4 my-2`}>
                <View style={tw`h-px flex-1 bg-themeBorderColor`}/>
            </View>
            <View style={[tw`flex-row justify-between flex-1 pb-4 mt-2 px-2 items-center`]}>
                <Text variant={'body-lg'} style={tw`flex-1 gap-4`}>language</Text>
                <Dropdown
                    data={[{label: 'English', value: 'english'}]}
                    labelField="label"
                    valueField="value"
                    style={tw`bg-white border border-themeBorderColor text-body-lg p-1.5 px-2 flex-1 items-center rounded-lg`}
                    selectedTextStyle={tw`text-body-lg`}
                    placeholderStyle={tw`text-body-lg`}
                    itemTextStyle={tw`text-body-lg`}
                    containerStyle={tw`rounded-lg`}
                    placeholder="Select item"
                    value={value}
                    onChange={item => {
                        setValue(item.value);
                    }}
                    renderItem={(item) => (
                        <View style={tw`p-2`}>
                            <Text style={tw`text-body-lg`}>{item.label}</Text>
                        </View>
                    )}
                />

            </View>
            <LabelWithSwitch label={"Push Notification"} style={tw`pb-6 px-2 rounded-md`}/>
            <AnalyticsLinksComponents onPress={() => router.push('/term-conditions')} label={"Term of Service"} style={tw`pb-6 px-2 rounded-md`}/>
            <AnalyticsLinksComponents onPress={() => router.push('/privacy-policy')} label={"Privacy Policy"} style={tw`pb-6 px-2 rounded-md`}/>
        </DrawerContentScrollView>
    );
};

export default CustomDrawerComponent;
