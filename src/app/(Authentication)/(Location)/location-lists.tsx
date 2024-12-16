import React, {useState} from 'react';
import {FlatList, Image, View} from "react-native";
import AppBar from "@/components/common/AppBar";
import BackBtn from "@/components/common/BackBtn";
import tw from "@/utils/tailwind";
import location from '@/data/location';
import Plus from "@/assets/icons/plus.svg"
import LocationCardComponent from "@/components/auth/location-card.component";
import Button from "@/components/common/Button";
import {useRouter} from "expo-router";

const LocationLists = () => {
    const [selectedLocation, setSelectedLocation] = useState<number>(1);
    const router = useRouter();

    return (
        <View style={tw`flex-1 py-4`}>
            <AppBar title={'My Locations'} left={<BackBtn/>} right={<View style={tw`w-11`}/>}/>
            <FlatList
                data={location}
                contentContainerStyle={tw`gap-3 mt-4 pb-10 px-[5%]`}
                renderItem={({item, index}) => {
                    return (
                        <>
                            <LocationCardComponent setSelectedLocation={(value) => setSelectedLocation(value)}
                                                   selectedItemId={selectedLocation} item={item}/>
                            {location.length - 1 === index && (
                                <Button onPress={() => router.push('/add-location')} icon={<Plus />} style={tw`bg-secondary100 rounded-xl justify-start pl-4 mt-3`} textStyle={tw`text-secondary200 ml-2`}>
                                    Add New Location
                                </Button>
                            )}
                        </>
                    )
                }}
                keyExtractor={(item) => item.id.toString()}
            />

            <View style={tw`bg-white px-[5%]`}>
                <Button onPress={() => router.push('/(Authentication)/(Signup)/complete')} style={tw`w-full`}>
                    Apply
                </Button>
            </View>
        </View>
    );
};

export default LocationLists;
