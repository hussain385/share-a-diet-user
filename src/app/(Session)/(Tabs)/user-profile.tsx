import React, {useState} from 'react';
import {SafeAreaView, ScrollView, TouchableOpacity, View} from "react-native";
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
import Text from "@/components/common/Text";
import Pen from "@/assets/icons/pen-white.svg";
import Phone from "@/assets/icons/phone.svg";
import Letter from "@/assets/icons/letter.svg";
import Logout from "@/assets/icons/logout.svg";
import AnalyticsLinksComponents from "@/components/analytics/analytics-links.components";
import Location from "@/assets/icons/location.svg";
import Wallet from "@/assets/icons/wallet-black.svg";
import ChatDots from "@/assets/icons/chat-dots.svg";
import ShieldUser from "@/assets/icons/shield-user.svg";
import QuestionCircle from "@/assets/icons/question-circle.svg";
import {Dropdown} from "react-native-element-dropdown";
import LabelWithSwitch from "@/components/common/LabelWithSwitch";

const UserProfile = () => {
    const [value, setValue] = useState<string>("english");
    const router = useRouter()

    return (
        <SafeAreaView>
            <View style={[tw`flex-col gap-4 pt-4`, {maxHeight: screen_height * 0.87}]}>
                <AppBar title={'Profile'} left={<BackBtn />}
                        right={<View style={tw`w-11`}/>}/>
                <View style={{height: screen_height * 0.85}}>
                    <ScrollView contentContainerStyle={tw`px-[5%] pb-36`}>
                        <View style={tw`flex-row flex-1 gap-4`}>
                            <Avatar size={65} name={""} pictureUrl={require('@/assets/images/user.jpg')}/>
                            <View style={tw`flex-row justify-between flex-1`}>
                                <View style={tw`flex-col flex-1 justify-between`}>
                                    <Text variant={"title-sm"}>Chang LI</Text>
                                    <View style={tw`flex-row items-center gap-1`}>
                                        <Phone width={14} height={14}/>
                                        <Text variant={"body-sm"}>(+44) 20 1234 5629</Text>
                                    </View>
                                    <View style={tw`flex-row items-center gap-1`}>
                                        <Letter width={14} height={14}/>
                                        <Text variant={"body-sm"}>licheng.inc@gmail.com</Text>
                                    </View>
                                </View>
                                <TouchableOpacity onPress={() => router.push("/(Session)/(Profile)/edit-profile")}
                                                  style={tw`flex-row items-center gap-2 bg-primary w-9 h-9 justify-center rounded-full`}>
                                    <Pen width={26} height={26}/>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <Button onPress={() => router.push("/(Introduction)/introduction")} icon={<Logout/>}
                                style={tw`bg-secondary100 my-6`} textStyle={tw`text-secondary200`}>
                            Logout
                        </Button>
                        <AnalyticsLinksComponents onPress={() => router.push("/(Authentication)/(Location)/location-lists")}
                                                  icons={<Location width={24} height={24}/>} label={"My Locations"}
                                                  style={tw`pb-4 px-2 rounded-md`}/>
                        <AnalyticsLinksComponents onPress={() => {}}
                                                  icons={<Wallet/>} label={"Payment Methods"}
                                                  style={tw`pb-4 px-2 rounded-md`}/>
                        <AnalyticsLinksComponents onPress={() => router.push("/(Session)/(Chat)/chat")}
                                                  icons={<ChatDots width={24} height={24}/>} label={"Messages"}
                                                  style={tw`pb-4 px-2 rounded-md`} count={1}/>
                        <AnalyticsLinksComponents onPress={() => router.push({pathname: "/faqs", params: {route: "/user-profile"}})}
                                                  icons={<QuestionCircle width={24} height={24}/>} label={"FAQs"}
                                                  style={tw`pb-4 px-2 rounded-md`}/>
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
                        <LabelWithSwitch label={"Sound"} style={tw`pb-6 px-2 rounded-md`}/>
                        <LabelWithSwitch label={"Automatically Updated"} style={tw`pb-6 px-2 rounded-md`}/>
                        <AnalyticsLinksComponents onPress={() => router.push('/term-conditions')} label={"Term of Service"} style={tw`pb-6 px-2 rounded-md`}/>
                        <AnalyticsLinksComponents onPress={() => router.push('/privacy-policy')} label={"Privacy Policy"} style={tw`pb-6 px-2 rounded-md`}/>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default UserProfile;
