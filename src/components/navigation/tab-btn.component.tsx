import React, {useEffect} from 'react';
import tw from "@/utils/tailwind";
import {PlatformPressable} from "@react-navigation/elements";
import Home from "@/assets/icons/home-tab.svg";
import HomeActive from "@/assets/icons/home-tab-active.svg";
import List from "@/assets/icons/list-tab.svg";
import ListActive from "@/assets/icons/list-tab-active.svg";
import Search from "@/assets/icons/search-tab.svg";
import SearchActive from "@/assets/icons/search-tab-active.svg";
import User from "@/assets/icons/user-circle.svg";
import UserActive from "@/assets/icons/user-circle-active.svg";
import Animated, {interpolate, useAnimatedStyle, useSharedValue, withSpring} from "react-native-reanimated";
import Text from "@/components/common/Text";
import Fonts from "@/constants/fonts";

type componentPropType = {
    onPress: () => void;
    onLongPress: () => void;
    routeName: string;
    isFocused: boolean;
    label: string
}

const TabBtnComponent = ({onPress, onLongPress, routeName, isFocused, label}: componentPropType) => {
    const scale = useSharedValue(0);

    useEffect(() => {
        scale.value = withSpring(isFocused ? 1 : 0, { duration: 350 });
    }, [scale, isFocused]);

    const animatedTextStyle = useAnimatedStyle(() => {
        const opacity = interpolate(scale.value, [0, 1], [0, 1]);
        return { opacity, fontFamily: Fonts.Roboto.Medium };
    });

    const animatedIconStyle = useAnimatedStyle(() => {
        const scaleValue = interpolate(scale.value, [0, 1], [1, 1.2]);
        const top = interpolate(scale.value, [0, 1], [-3.5, -33]);
        return {
            // transform: [{ scale: scaleValue }],
            top,
            backgroundColor: isFocused ? "#323150" : "#fff",
            borderRadius: 100,
            width: isFocused ? 50 : 0,
            minHeight: isFocused ? 50 : 0,
            maxHeight: isFocused ? 50 : 0
        };
    });

    const icon = {
        home: (active: boolean) => (!active ? <Home /> : <HomeActive />),
        list: (active: boolean) => (!active ? <List /> : <ListActive />),
        search: (active: boolean) => (!active ? <Search /> : <SearchActive />),
        'user-profile': (active: boolean) => (!active ? <User /> : <UserActive />),
    };

    return (
        <PlatformPressable
            onPress={onPress}
            onLongPress={onLongPress}
            style={tw`flex-1 justify-center items-center gap-1 h-12`}
        >
            {/* Icon */}
            <Animated.View style={[animatedIconStyle, tw`flex-1 justify-center items-center`]}>
                {icon[routeName](isFocused)}
            </Animated.View>

            {/* Label */}
            <Text style={[animatedTextStyle, tw`text-body-md -mt-7`]}>
                {label as string}
            </Text>
        </PlatformPressable>
    );
};

export default TabBtnComponent;
