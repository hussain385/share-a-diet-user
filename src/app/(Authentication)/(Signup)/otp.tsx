import React, {useEffect, useState} from 'react';
import {SafeAreaView, View} from "react-native";
import AppBar from "@/components/common/AppBar";
import BackBtn from "@/components/common/BackBtn";
import tw from "@/utils/tailwind";
import Text from "@/components/common/Text";
import {OtpInput} from "react-native-otp-entry";
import Clock from "@/assets/icons/clock-circle.svg"
import {screen_width} from "@/constants/common";
import Button from "@/components/common/Button";
import {startTwoMinuteTimer} from "@/utils/common";
import {isEmpty} from "lodash"
import {useRouter} from "expo-router";

const Otp = () => {
    const [timerDisplay, setTimerDisplay] = useState<string>('')
    const router = useRouter()

    useEffect(() => {
        startTwoMinuteTimer(
            (timeRemaining: number) => {
                const minutes = Math.floor(timeRemaining / 60);
                const seconds = timeRemaining % 60;
                setTimerDisplay(`0${minutes} : ${seconds < 10 ? '0' : ''}${seconds}`)
            },
            () => {
                console.log('Timer complete!');
            }
        );
    }, []);

    return (
        <View style={tw`flex-col justify-between flex-1 py-4`}>
            <View>
                <AppBar style={tw`w-full`} title={'Verification'} left={<BackBtn/>} right={<View style={tw`w-11`}/>}/>
                <View style={tw`flex-col gap-6 mt-6`}>
                    <Text variant={'body-lg-bold'}>
                        Code has been send to (+44) 20 **** *678
                    </Text>
                    <OtpInput
                        numberOfDigits={4}
                        focusColor="green"
                        focusStickBlinkingDuration={500}
                        onTextChange={(text) => console.log(text)}
                        onFilled={(text) => console.log(`OTP is ${text}`)}
                        textInputProps={{
                            accessibilityLabel: "One-Time Password",
                        }}
                        theme={{
                            pinCodeContainerStyle: {
                                height: screen_width * 0.185,
                                width: screen_width * 0.185,
                                backgroundColor: "#1F2A370D",
                                borderColor: "#E9EAEB",
                                borderWidth: 1
                            },
                        }}
                    />
                    <View style={tw`flex-row justify-between items-center -mt-2`}>
                        <Text variant={'body-lg-bold'}>
                            Didn’t receive code?
                        </Text>
                        <Button variant={'ghost'} textStyle={tw`text-[#0D8A6B]`} textVariant={'body-lg-bold'}>
                            Resend Code
                        </Button>
                    </View>
                    {!isEmpty(timerDisplay) ? (
                        <View style={tw`flex-row justify-center items-center gap-2`}>
                            <Clock />
                            <Text variant={'body-lg-bold'}>
                                {timerDisplay}
                            </Text>
                        </View>
                    ) : null}
                </View>
            </View>
            <Button style={tw`py-4`} onPress={() => router.push('/(Location)/location-lists')} variant={'filled'}>
                Verify
            </Button>
        </View>
    );
};

export default Otp;
