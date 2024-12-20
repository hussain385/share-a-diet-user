import React from 'react';
import {TouchableOpacity, View} from "react-native";
import tw from "@/utils/tailwind";
import Text from "@/components/common/Text";
import location from "@/data/location";
import {screen_width} from "@/constants/common";

type componentPropType = {
    item: typeof location[0],
    selectedItemId: number,
    setSelectedLocation: (value: number) => void
}

const LocationCardComponent = ({item, selectedItemId, setSelectedLocation}: componentPropType) => {
    return (
        <TouchableOpacity onPress={() => setSelectedLocation(item.id)} style={tw`flex-row items-center gap-5 justify-between p-4 border border-themeBorderColor rounded-xl`}>
            <View>
                <Text numberOfLines={1} variant={'body-lg-bold'}>{item.name}</Text>
                <Text numberOfLines={2} variant={'body-lg'} style={{width: screen_width * 0.65}}>{item.address}</Text>
            </View>
            <View style={tw`w-5 h-5 border bg-transparent p-[3px] rounded-full`}>
                <View style={tw`${selectedItemId === item.id ? 'bg-black' : 'bg-white'} w-full h-full rounded-full`}/>
            </View>
        </TouchableOpacity>
    );
};

export default LocationCardComponent;
