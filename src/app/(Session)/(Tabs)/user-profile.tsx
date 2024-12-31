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
import Receipt from "@/assets/icons/receipt.svg";
import Wallet from "@/assets/icons/wallet-black.svg";
import ChatDots from "@/assets/icons/chat-dots.svg";
import ShieldUser from "@/assets/icons/shield-user.svg";
import QuestionCircle from "@/assets/icons/question-circle.svg";
import {Dropdown} from "react-native-element-dropdown";

const UserProfile = () => {
    const [value, setValue] = useState<string>("english");
    const router = useRouter()

    return (
        <SafeAreaView>
            <View style={[tw`flex-col gap-4 pt-4`, {maxHeight: screen_height * 0.87}]}>
                <AppBar title={'Profile'} left={<BackBtn customOnPress={() => router.push("/home")}/>}
                        right={<View style={tw`w-11`}/>}/>
                <View style={{height: screen_height * 0.85}}>
                    <ScrollView contentContainerStyle={tw`px-[5%] pb-36`}>
                        <View style={tw`flex-row flex-1 gap-4`}>
                            <Avatar size={65} name={""}
                                    pictureUrl={"https://s3-alpha-sig.figma.com/img/d3b2/1420/be0c601433a270f2eab8f555d444da52?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LbLXdMLDCpfKWd6AJfAqrBbjddPSfiH6mFrsPJWUmPz-b622sF7yR2hUgJypm-B30yY~IDKoqaTOeTrK84LZUeJe9Gmt4dN2pkRI5mqluWZ4mqbEValge59GUSH~yObbxKZ8WFv9Vj96rl9bcepJ6tTENMgHfjKw3euF~gjcFw~QIKJlyNPHwsv0rLDrkdW~OiISIA-0p2NoyTDVEfSGq09JZH4iSzgStWBPmwBwB0vORpcG8ywH0kMY00BRyxdiKj2FvqHL1KS5hOAo6~EwYtACLcWvtkBVypFDa7RskvACqGrw~JX1Wn3QWawvKXdvWBR7HA~vuUD-OwP9UY-~2Q__"}/>
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
                        <AnalyticsLinksComponents onPress={() => router.push("/(Session)/(Order)/order-history")}
                                                  icons={<Receipt/>} label={"Order History"}
                                                  style={tw`pb-4 px-2 rounded-md`}/>
                        <AnalyticsLinksComponents onPress={() => router.push("/(Session)/(Analytics)/analytics")}
                                                  icons={<Wallet/>} label={"Payment Methods"}
                                                  style={tw`pb-4 px-2 rounded-md`}/>
                        <AnalyticsLinksComponents onPress={() => router.push("/(Session)/(Chat)/chat")}
                                                  icons={<ChatDots/>} label={"Messages"}
                                                  style={tw`pb-4 px-2 rounded-md`} count={1}/>
                        <AnalyticsLinksComponents onPress={() => router.push("/(Session)/(Review)/customer-feedback")}
                                                  icons={<ShieldUser/>} label={"Security"}
                                                  style={tw`pb-4 px-2 rounded-md`}/>
                        <AnalyticsLinksComponents onPress={() => router.push("/faqs")}
                                                  icons={<QuestionCircle/>} label={"FAQs"}
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
                        <AnalyticsLinksComponents label={"Security"} style={tw`pb-6 px-2 rounded-md`}/>
                        <AnalyticsLinksComponents label={"Push Notification"} style={tw`pb-6 px-2 rounded-md`}/>
                        <AnalyticsLinksComponents label={"Term of Service"} style={tw`pb-6 px-2 rounded-md`}/>
                        <AnalyticsLinksComponents label={"Privacy Policy"} style={tw`pb-6 px-2 rounded-md`}/>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default UserProfile;
