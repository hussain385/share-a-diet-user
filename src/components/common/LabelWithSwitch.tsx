import React, {useState} from 'react';
import tw from "@/utils/tailwind";
import {Pressable, StyleProp, View, ViewStyle} from "react-native";
import Text from "@/components/common/Text";
import ArrowRight from "@/assets/icons/arrow-right.svg";
import Switch from "@/components/common/Switch";

type componentPropType = {
    icons?: React.ReactNode;
    label: string;
    count?: number
    style?: StyleProp<ViewStyle>;
}

const LabelWithSwitch = ({icons, label, count, style}: componentPropType) => {
    const [switchState, setSwitchState] = useState(false);

    return (
        <View style={[tw`flex-row justify-between flex-1`, style]}>
            <View style={tw`flex-row gap-3 items-center`}>
                {icons && icons}
                <Text variant={'body-lg'}>{label}</Text>
                {count && <View style={tw`bg-secondary200 rounded-full w-5 h-5 items-center justify-center`}><Text
                    variant={"body-sm"} style={tw`text-white`}>{count}</Text></View>}
            </View>
            <Switch toggleSwitch={() => setSwitchState(!switchState)} isEnabled={switchState}/>
        </View>
    );
};

export default LabelWithSwitch;
