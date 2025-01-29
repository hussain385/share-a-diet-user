import React, {useCallback, useState} from 'react';
import {Image, SafeAreaView, TextInput, View} from "react-native";
import AppBar from "@/components/common/AppBar";
import BackBtn from "@/components/common/BackBtn";
import tw from "@/utils/tailwind";
import Text from "@/components/common/Text";
import Camera from "@/assets/icons/camera.svg";
import Gallery from "@/assets/icons/gallery.svg";
import Button from "@/components/common/Button";
import SuccessModal from "@/components/modals/success.modal";
import Ratings from "@/components/common/Ratings";
import useImagePicker from "@/hooks/useImagePicker";
import {useLocalSearchParams, useRouter} from "expo-router";
import {screen_width} from "@/constants/common";


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
    const {isFromReview} = useLocalSearchParams();

    const toggleModal = useCallback(() => {
        setOpenSuccessModal(!openSuccessModal)
    }, [openSuccessModal])

    return (
        <SafeAreaView>
            <View style={tw`pt-3`}>
            <View style={tw`h-full pb-10`}>
                <AppBar title={'Order Rating'} left={<BackBtn />} right={<View style={tw`w-11`}/>}/>
                <View style={tw`px-[5%] justify-between flex-1`}>
                    <View style={tw`gap-4`}>
                        <Text variant={"title-md"} style={tw`text-center`}>
                            Rate your Experience
                        </Text>
                        <Image
                            source={require('@/assets/images/diamond.png')}
                            style={tw`w-40 h-40 self-center mt-6`}
                        />
                    </View>
                    <View style={tw`gap-5`}>
                        <Ratings size={screen_width * 0.15} rating={ratingStars} onRate={(rating) => setRatingStars(rating)}/>
                        <View style={tw`bg-inputBgColor rounded-lg p-3`}>
                            <TextInput placeholder={"Type your review"} multiline
                                       style={[tw`h-20`, {textAlignVertical: "top"}]}/>
                            <View style={tw`flex-row items-center gap-2 justify-end`}>
                                <Button onPress={openCamera} style={tw`h-6`} variant={"ghost"} icon={<Camera/>}></Button>
                                <Button onPress={openLibrary} style={tw`h-6`} variant={"ghost"} icon={<Gallery width={22} height={22}/>}></Button>
                            </View>
                        </View>
                        <View style={tw`items-center flex-row`}>
                            {isFromReview === 'true' ? (
                                <></>
                            ) : (
                                <Button onPress={() => router.push('/(Session)/(Tabs)/list')} variant={"ghost"} style={tw`flex-1`}>
                                    Skip
                                </Button>
                            )}
                            <Button onPress={toggleModal} style={tw`flex-1`}>
                                Submit
                            </Button>
                        </View>
                    </View>
                </View>
                <SuccessModal modalVisible={openSuccessModal} togglePopup={toggleModal} btnTitle={isFromReview === 'true' ? 'Close' : "Back to dashboard"}
                              title={"Thank you!"} onPressBtn={() => {
                    router.push(isFromReview === 'true' ? '/order-review' : '/(Session)/(Tabs)/list')
                    toggleModal()
                }}/>
            </View>
            </View>
        </SafeAreaView>
    );
};

export default OrderRating;
