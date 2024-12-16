import React from 'react';
import {View} from "react-native";
import CheckCircle from "@/assets/icons/check-circle.svg"
import tw from "@/utils/tailwind";
import Text from "@/components/common/Text";
import Button from "@/components/common/Button";
import {useRouter} from "expo-router";

const RegistrationComplete = () => {
    const router = useRouter();

    return (
        <View style={tw`flex-col flex-1 justify-between py-4`}>
            <View style={tw`flex-col items-center pt-16 gap-3 w-11/12 self-center`}>
                <CheckCircle />
                <Text variant="title-lg" style={tw`text-center mt-1`}>
                    Registration Complete!
                </Text>
                <Text variant="body-md" style={tw`text-center text-[#294736]`}>
                    Lorem ipsum dolor sit amet consectetur. Condimentum lacus nulla vestibulum in enim malesuada et est id. Enim facilisi sagittis et donec urna in. Malesuada elementum in facilisi augue tortor tellus. Suspendisse libero aliquet et pellentesque volutpat nunc.
                </Text>
            </View>
            <Button style={tw`py-4`} onPress={() => router.push('/(Session)/(Tabs)/home')}>
                Next
            </Button>
        </View>
    );
};

export default RegistrationComplete;
