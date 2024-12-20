import React, {useState} from 'react';
import {TouchableOpacity, View} from "react-native";
import Animated, {useSharedValue, useAnimatedStyle, withTiming} from "react-native-reanimated";
import faqs from "@/data/faqs";
import Text from "@/components/common/Text";
import ArrowRight from "@/assets/icons/arrow-right.svg";
import tw from "@/utils/tailwind";

const FAQsCard = ({question, answer}: typeof faqs[0]) => {
    const [expanded, setExpanded] = useState(false);
    const height = useSharedValue(0);
    const opacity = useSharedValue(0);

    const toggleAnswer = () => {
        if (expanded) {
            height.value = withTiming(0, {duration: 300});
            opacity.value = withTiming(0, {duration: 300});
        } else {
            height.value = withTiming(100, {duration: 300}); // Adjust height as needed for content
            opacity.value = withTiming(1, {duration: 300});
        }
        setExpanded(!expanded);
    };

    const animatedStyle = useAnimatedStyle(() => ({
        height: height.value,
        opacity: opacity.value,
    }));

    return (
        <View style={tw`${expanded ? 'border-0' : 'border-b'} border-gray-300 gap-2 py-2`}>
            <TouchableOpacity onPress={toggleAnswer} style={tw`flex-row gap-2 items-center`}>
                <Text style={tw`flex-1`} variant={"body-lg"}>{question}</Text>
                <Animated.View style={{transform: [{rotate: expanded ? '90deg' : '0deg'}]}}>
                    <ArrowRight />
                </Animated.View>
            </TouchableOpacity>
            <Animated.View style={[tw`overflow-hidden bg-gray-100 rounded-lg`, animatedStyle]}>
                <Text variant={"body-lg-light"} style={tw`p-3`}>
                    {answer}
                </Text>
            </Animated.View>
        </View>
    );
};

export default FAQsCard;
