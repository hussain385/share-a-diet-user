import React from 'react';
import tw from "@/utils/tailwind";
import {Image, SafeAreaView, TouchableOpacity, View} from "react-native";
import Text from "@/components/common/Text";
import {Router, useRouter} from "expo-router";

const welcomeData = [
    {
        image: require('@/assets/images/cooking.png'),
        title: 'Become a Cook',
        onClick: (router: Router) => router.push('/introduction')
    },
    {
        image: require('@/assets/images/hot-food.png'),
        title: 'Explore Meals',
        onClick: (router: Router) => router.push('/introduction')
    }
]

const Welcome = () => {
    const router = useRouter()

    return (
        <View style={tw`bg-primary flex-1 flex-col justify-center items-center gap-8`}>
            {welcomeData.map((data, key) => (
                <TouchableOpacity onPress={() => data.onClick(router)} key={key} style={tw`p-6 w-10/12 bg-white gap-6 rounded-2xl items-center justify-center`}>
                    <Image source={data.image} style={tw`h-36 w-36`}/>
                    <Text variant={"title-lg"}>
                        {data.title}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default Welcome;
