import React from 'react';
import {BottomTabBarProps} from "@react-navigation/bottom-tabs";
import {Text, View} from "react-native";
import tw from "@/utils/tailwind";
import {useTheme} from "@react-navigation/core";
import {useLinkBuilder} from "@react-navigation/native";
import {commonStyles} from "@/styles/common.styles";
import TabBtnComponent from "@/components/navigation/tab-btn.component";

const CustomBottomTabComponent = (props: BottomTabBarProps) => {
    const { colors } = useTheme();
    const { buildHref } = useLinkBuilder();

    return (
        <View style={[tw`absolute bottom-10 flex-row justify-between items-center bg-white self-center py-2 rounded-2xl w-10/12`, commonStyles.shadow]}>
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
                    <TabBtnComponent
                        key={index}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        isFocused={isFocused}
                        routeName={route.name}
                        label={label as string}
                    />
                    // <PlatformPressable
                    //     key={index}
                    //     href={buildHref(route.name, route.params)}
                    //     accessibilityState={isFocused ? { selected: true } : {}}
                    //     accessibilityLabel={options.tabBarAccessibilityLabel}
                    //     testID={options.tabBarButtonTestID}
                    //     onPress={onPress}
                    //     onLongPress={onLongPress}
                    //     style={tw`flex-1 justify-center items-center gap-1`}
                    // >
                    //     {icon[route.name](isFocused)}
                    //     <Text style={{ color: isFocused ? colors.primary : colors.text }}>
                    //         {label as string}
                    //     </Text>
                    // </PlatformPressable>
                );
            })}
        </View>
    );
};

export default CustomBottomTabComponent;
