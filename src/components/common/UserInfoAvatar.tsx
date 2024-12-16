import React from 'react';
import {View} from "react-native";
import Avatar from "@/components/common/Avatar";
import Text from "@/components/common/Text";
import Location from "@/assets/icons/location.svg";
import tw from "@/utils/tailwind";

type componentPropType = {
    picture: string;
    name: string;
    distance: string;
}

const UserInfoAvatar = ({picture, name, distance}: componentPropType) => {
    return (
        <View style={tw`flex-row gap-3 items-center`}>
            <Avatar name={name} pictureUrl={picture} size={48} />
            <View style={tw`gap-1.5`}>
                <Text variant={'body-lg-bold'}>{name}</Text>
                <View style={tw`flex-row gap-1`}>
                    <Location />
                    <Text>{distance}km</Text>
                </View>
            </View>
        </View>
    );
};

export default UserInfoAvatar;
