import React from 'react';
import {BottomTabBarProps, BottomTabView} from "@react-navigation/bottom-tabs";
import {Text, View} from "react-native";
import Home from "@/assets/icons/home-tab.svg";
import List from "@/assets/icons/list-tab.svg";
import Bell from "@/assets/icons/bell-tab.svg";
import Wallet from "@/assets/icons/wallet-tab.svg";
import WalletActive from "@/assets/icons/wallet-tab-active.svg";
import HomeActive from "@/assets/icons/home-tab-active.svg";
import ListActive from "@/assets/icons/list-tab-active.svg";
import Plus from "@/assets/icons/plus-white.svg";
import tw from "@/utils/tailwind";
import {useTheme} from "@react-navigation/core";
import {useLinkBuilder} from "@react-navigation/native";
import {PlatformPressable} from "@react-navigation/elements";
import {commonStyles} from "@/styles/common.styles";
import Button from "@/components/common/Button";
import {isIOS} from "@/constants/common";

const CustomBottomTabComponent = (props: BottomTabBarProps) => {
    const { colors } = useTheme();
    const { buildHref } = useLinkBuilder();

    return (
        <View style={[tw`flex-row justify-evenly pt-2 py-3 ${isIOS() ? "pb-5" : "pb-4"} px-4 rounded-xl bg-white border-t border-t-gray-100`, commonStyles.shadow]}>
            {props.state.routes.map((route, index) => {
                const { options } = props.descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = props.state.index === index;

                const onPress = () => {
                    const event = props.navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        props.navigation.navigate(route.name, route.params);
                    }
                };

                const onLongPress = () => {
                    props.navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <PlatformPressable
                        key={index}
                        href={buildHref(route.name, route.params)}
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarButtonTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={tw`p-2 rounded-lg`}
                    >
                        {(label as string) === "Home" ? (
                            <>
                                {isFocused ? <HomeActive /> : <Home />}
                            </>
                        ) : (label as string) === "My Postings" ? (
                                <>
                                    {isFocused ? <ListActive /> : <List />}
                                </>
                        ) : (label as string) === "Add Item" ? (
                            <Button onPress={onPress} icon={<Plus width={60} height={60}/>} style={tw`w-[70px] h-[70px] rounded-full -mt-12`}>
                            </Button>
                        ): (label as string) === "Earnings" ? (
                            <>
                                {isFocused ? <WalletActive /> : <Wallet />}
                            </>
                        ) : (
                            <Bell />
                        )}
                    </PlatformPressable>
                );
            })}
        </View>
    );
};

export default CustomBottomTabComponent;
