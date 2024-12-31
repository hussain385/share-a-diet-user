import React, {useCallback, useState} from 'react';
import {Image, TextInput, View} from "react-native";
import AppBar from "@/components/common/AppBar";
import BackBtn from "@/components/common/BackBtn";
import tw from "@/utils/tailwind";
import Text from "@/components/common/Text";
import Camera from "@/assets/icons/camera.svg";
import Gallery from "@/assets/icons/gallery.svg";
import Star from "@/assets/icons/star.svg";
import Button from "@/components/common/Button";
import SuccessModal from "@/components/modals/success.modal";
import Ratings from "@/components/common/Ratings";
import useImagePicker from "@/hooks/useImagePicker";
import {useRouter} from "expo-router";


const OrderRating = () => {
    const [openSuccessModal, setOpenSuccessModal] = useState(false);
    const [ratingStars, setRatingStars] = useState(0);
    const {
        image,
        openLibrary,
        openCamera,
        isImagePickerPopupVisible,
        toggleImagePickerPopup,
    } = useImagePicker();
    const router = useRouter();

    const toggleModal = useCallback(() => {
        setOpenSuccessModal(!openSuccessModal)
    }, [openSuccessModal])

    return (
        <View style={tw`h-full pb-10`}>
            <AppBar title={'Order Rating'} left={<BackBtn/>} right={<View style={tw`w-11`}/>}/>
            <View style={tw`px-[5%] justify-between flex-1`}>
                <View style={tw`gap-4`}>
                    <Text variant={"title-md"} style={tw`text-center`}>
                        Rate your Experience
                    </Text>
                    <Image
                        source={{uri: "https://s3-alpha-sig.figma.com/img/12b4/c79f/a36364904f6a728c8a2d774230bec604?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=AvkrEhedDvDRT4aYVTgEJtrol6JAXh9QySFGVAftRXz4PCYUHKdnITIq~BwSqvRQ8DxSIN3aqGPsj47qOtgFJi9iZMZILHAfhAVqlnkDYM63S5ZoN83UWiR8td56ETW8hOtHqDics52-bffnyQGhdYnK07rcg6a-Vb2WTT6z5Y~q2IpNFOk7wleFtg4NStTTHYueK2w0IbgApqUIuRcQ9WsyhKOoXKFNabWhAE4FuDAQaHmWkSDKVjr6UlHUwFOEFcQFQ2aj5HGELqEMeLGFYRsDt-A8OhA6GpYJBINr2H96DEEiqSn46AZUabxy-piRFOYSPlPYjBpeqggstw~R3g__"}}
                        style={tw`w-40 h-40 self-center mt-6`}
                    />
                </View>
                <View style={tw`gap-5`}>
                    <Ratings size={60} rating={ratingStars} onRate={(rating) => setRatingStars(rating)}/>
                    <View style={tw`bg-inputBgColor rounded-lg`}>
                        <TextInput placeholder={"Type your review"} multiline
                                   style={[tw`h-20 p-3`, {textAlignVertical: "top"}]}/>
                        <View style={tw`flex-row items-center gap-2 justify-end p-3`}>
                            <Button onPress={openCamera} style={tw`h-6`} variant={"ghost"} icon={<Camera/>}></Button>
                            <Button onPress={openLibrary} style={tw`h-6`} variant={"ghost"} icon={<Gallery/>}></Button>
                        </View>
                    </View>
                    <View style={tw`items-center flex-row`}>
                        <Button variant={"ghost"} style={tw`flex-1`}>
                            Skip
                        </Button>
                        <Button onPress={toggleModal} style={tw`flex-1`}>
                            Submit
                        </Button>
                    </View>
                </View>
            </View>
            <SuccessModal modalVisible={openSuccessModal} togglePopup={toggleModal} btnTitle={"Back to dashboard"}
                          title={"Thank you!"} onPressBtn={() => {
                router.push('/home')
                toggleModal()
            }}/>
        </View>
    );
};

export default OrderRating;
