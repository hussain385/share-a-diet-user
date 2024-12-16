import React, {useEffect, useRef, useState} from 'react';
import {View} from "react-native";
import tw from "@/utils/tailwind";
import AppBar from "@/components/common/AppBar";
import BackBtn from "@/components/common/BackBtn";
import MapView, {PROVIDER_GOOGLE, Marker} from "react-native-maps";
import {screen_height, screen_width} from "@/constants/common";
import * as Location from 'expo-location';
import Toast from "react-native-toast-message";
import Text from "@/components/common/Text";
import LocationIcon from "@/assets/icons/location.svg";
import CurrentLocationIcon from "@/assets/icons/current-location.svg";
import Button from "@/components/common/Button";
import {commonStyles} from "@/styles/common.styles";
import {decodeLatLng, getCurrentLocation} from "@/utils/common";
import TextInput from "@/components/common/TextInput";
import {useRouter} from "expo-router";

const ASPECT_RATIO = screen_width / screen_height;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const latitude = 24.8589832664688;
const longitude = 67.03125063635105;

const AddLocation = () => {
    const [region, setRegion] = useState({
        latitude,
        longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
    });
    const [marker, setMarker] = useState<{ coordinate: { latitude: number, longitude: number } } | null>(null);
    const [location, setLocation] = useState<Location.LocationObject | null>(null);
    const [formattedAddress, setFormattedAddress] = useState("");
    const [changeView, setChangeView] = useState(false);
    const mapRef = useRef<MapView>(null);
    const router = useRouter()

    useEffect(() => {
        setChangeView(false)
        getCurrentLocation(((location) => setLocation(location)), ((address) => setFormattedAddress(address))).then(null);
    }, []);

    useEffect(() => {
        if (location?.coords.latitude && location?.coords.longitude) {
            const {latitude, longitude} = location.coords;
            setRegion({
                latitude,
                longitude,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            });
            setMarker({coordinate: {latitude, longitude}});
            if (mapRef.current) {
                mapRef.current?.animateCamera({
                    center: {
                        latitude: latitude,
                        longitude: longitude,
                    },
                });
            }
        }
    }, [location]);

    const handlePress = async e => {
        const newMarker = {
            coordinate: e.nativeEvent.coordinate,
        };
        setMarker(newMarker);
        setRegion({
            ...region,
            latitude: e.nativeEvent.coordinate.latitude,
            longitude: e.nativeEvent.coordinate.longitude,
        });
        if (mapRef.current) {
            mapRef.current?.animateCamera({
                center: {
                    latitude: e.nativeEvent.coordinate.latitude,
                    longitude: e.nativeEvent.coordinate.longitude,
                },
            });
        }
        await decodeLatLng(e.nativeEvent.coordinate.latitude, e.nativeEvent.coordinate.longitude, ((address) => setFormattedAddress(address)))
    };

    return (
        <View style={tw`flex-1 py-4 gap-4`}>
            <AppBar title={'Add Location'} left={<BackBtn/>} right={<View style={tw`w-11`}/>}/>
            <View style={tw`relative h-full`}>
                <MapView
                    ref={mapRef}
                    provider={PROVIDER_GOOGLE}
                    style={tw`w-full h-4/5 rounded-3xl`}
                    initialRegion={region}
                    onPress={handlePress}>
                    {marker && <Marker coordinate={marker.coordinate}/>}
                </MapView>
                {changeView ? (
                    <View
                        style={[tw`absolute bottom-0 p-4 gap-4 w-full bg-white pb-16 rounded-3xl pt-8`, commonStyles.shadow]}>
                        <Text variant={"body-lg-bold"}>Location</Text>
                        <TextInput placeholder={"Enter Complete Address"} value={formattedAddress} rightIcon={<LocationIcon/>}/>
                        <TextInput placeholder={"Enter Address Name"} />
                        <Button onPress={() => router.push('/complete')}>Save</Button>
                    </View>
                ) : (
                    <View
                        style={[tw`absolute bottom-0 p-4 gap-4 w-full bg-white pb-16 rounded-3xl pt-8`, commonStyles.shadow]}>
                        <Text variant={"body-lg-bold"}>Your Location Detected</Text>
                        <View style={tw`flex-row gap-2 mt-2 mb-6`}>
                            <LocationIcon/>
                            <Text variant={"body-lg"} style={tw`w-10/12`}>{formattedAddress}</Text>
                        </View>
                        <Button onPress={() => setChangeView(true)}>Save</Button>
                        <Button onPress={() => router.push('/add-manual-location')}>Add Manually</Button>
                    </View>
                )}
                <Button icon={<CurrentLocationIcon/>} style={tw`absolute top-5 right-5 bg-white w-11 h-11 rounded-lg`}
                        onPress={() => {
                            getCurrentLocation(((location) => setLocation(location)), ((address) => setFormattedAddress(address))).then(null);
                        }}>
                </Button>
            </View>
        </View>
    );
};

export default AddLocation;
