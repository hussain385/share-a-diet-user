import React from 'react';
import tw from "@/utils/tailwind";
import AppBar from "@/components/common/AppBar";
import BackBtn from "@/components/common/BackBtn";
import {SafeAreaView, ScrollView, View} from "react-native";
import {useRouter} from "expo-router";
import Text from "@/components/common/Text";
import {screen_height} from "@/constants/common";

const PrivacyPolicy = () => {

    return (
        <SafeAreaView>
            <View style={tw`pt-3`}>
            <View style={tw`flex-col gap-6`}>
                <AppBar title={'Privacy Policy'} left={<BackBtn />} right={<View style={tw`w-11`}/>}/>
                <View style={{height: screen_height * 0.8}}>
                    <ScrollView contentContainerStyle={tw`px-[5%]`}>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ullamcorper turpis in elit ornare, eget viverra enim dignissim. Vestibulum molestie elit vitae risus eleifend convallis. Etiam varius est metus, ut laoreet nulla volutpat vel. Etiam id tincidunt sem. Sed at dui bibendum, lacinia ipsum ut, tincidunt mi. Aenean faucibus erat velit, sed consectetur lacus vestibulum in. Vestibulum sit amet tempus tortor. Donec vel tempus dui. Vestibulum nisl justo, semper eget condimentum vitae, pulvinar non est. Sed dapibus porttitor orci. Sed non facilisis tortor, a posuere enim. Etiam est est, pharetra ut nibh nec, efficitur facilisis purus.
                            {'\n\n'}
                            Suspendisse dapibus, nunc nec ullamcorper vulputate, purus nulla maximus massa, sit amet hendrerit nibh lorem nec mauris. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis tristique eget magna ut semper. Aliquam fermentum sagittis tellus, nec feugiat lacus auctor eget. Quisque odio ante, sagittis vitae est et, fermentum dictum felis. Maecenas et purus eu tortor aliquam vulputate vitae sed enim. Vestibulum pulvinar, lacus in pulvinar cursus, augue lacus consectetur magna, a laoreet nibh ante et erat. Aliquam a libero enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis ac condimentum sem.
                            {'\n\n'}
                            Phasellus hendrerit lorem scelerisque purus sodales sagittis. Quisque tristique nibh eu sem suscipit hendrerit. Ut erat diam, egestas quis nisi sit amet, feugiat sodales massa. Nam quis ipsum in orci ultricies convallis. Duis massa enim, semper porta eros vel, vehicula malesuada urna. Nullam laoreet vel felis eu scelerisque. Vivamus id elit eu dui euismod cursus condimentum eget urna.
                            {'\n\n'}
                            In nec tellus a mi fermentum venenatis. Praesent facilisis non augue sed rutrum. Etiam tincidunt orci nibh, id tincidunt odio sollicitudin at. Nam volutpat nisi eget ipsum tristique, id elementum tortor convallis. Donec ut finibus massa. Integer maximus nunc diam, sodales pretium metus dictum congue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            {'\n\n'}
                            In semper odio eget ipsum posuere mollis. Pellentesque ullamcorper erat ut turpis maximus, nec bibendum metus pulvinar. Maecenas semper, lacus eu sagittis tempor, libero augue fermentum lectus, a porttitor ipsum odio vitae ipsum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla enim erat, aliquam sit amet lectus in, molestie congue eros. Quisque accumsan arcu lectus. Vestibulum et sem eu ligula eleifend euismod id ac libero.
                        </Text>
                    </ScrollView>
                </View>
            </View>
            </View>
        </SafeAreaView>
    );
};

export default PrivacyPolicy;
