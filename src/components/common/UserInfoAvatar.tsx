import React from 'react';
import {StyleProp, TextStyle, View, ViewStyle} from "react-native";
import Avatar from "@/components/common/Avatar";
import Text from "@/components/common/Text";
import Location from "@/assets/icons/location.svg";
import tw from "@/utils/tailwind";

type componentPropType = {
    picture: string;
    name: string;
    distance: string;
    avatarSize?: number;
    nameStyle?: StyleProp<TextStyle>;
    distanceStyle?: StyleProp<TextStyle>;
    locationIconSize?: number;
    style?: StyleProp<ViewStyle>;
    subStyle?: StyleProp<ViewStyle>;
}

const UserInfoAvatar = ({picture, name, distance , avatarSize, locationIconSize, nameStyle, distanceStyle, subStyle, style}: componentPropType) => {
    return (
        <View style={[tw`flex-row gap-3 items-center`, style]}>
            <Avatar name={name} pictureUrl={picture} size={avatarSize || 48} />
            <View style={[tw`gap-1.5`, subStyle]}>
                <Text variant={'body-lg-bold'} style={nameStyle}>{name}</Text>
                <View style={tw`flex-row gap-1`}>
                    <Location width={locationIconSize || 18} height={locationIconSize || 19}/>
                    <Text style={distanceStyle}>{distance}km</Text>
                </View>
            </View>
        </View>
    );
};

export default UserInfoAvatar;
