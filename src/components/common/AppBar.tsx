import React from "react";
import {StyleProp, View, ViewStyle} from "react-native";

import Text from "@/components/common/Text";

interface AppBarProps {
    title: string;
    right?: React.JSX.Element;
    left?: React.JSX.Element;
    style?: StyleProp<ViewStyle>;
}

function AppBar({title, right, left, style}: AppBarProps) {
    return (
        <View
            style={[{
                maxHeight: 64,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: '90%',
                alignSelf: 'center'
            }, style]}
        >
            {left}
            <Text variant="title-lg">{title}</Text>
            {right}
        </View>
    );
}

export default AppBar;
