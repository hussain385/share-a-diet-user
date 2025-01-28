import React from 'react';
import {FlatList, SafeAreaView, View} from "react-native";
import tw from "@/utils/tailwind";
import AppBar from "@/components/common/AppBar";
import BackBtn from "@/components/common/BackBtn";
import faqs from "@/data/faqs";
import FAQsCard from "@/components/cards/faqs-card.component";
import Magnifer from "@/assets/icons/magnifer.svg";
import LetterOutline from "@/assets/icons/letter-outline.svg";
import TextInput from "@/components/common/TextInput";
import Button from "@/components/common/Button";

const FAQs = () => {
    return (
        <SafeAreaView style={tw`gap-4 h-11/12`}>
            <AppBar style={tw`pt-3`} title={'FAQs'} left={<BackBtn />} right={<View style={tw`w-11`}/>}/>
            <TextInput styleCustom={'w-[90%] self-center'} icon={<Magnifer />} placeholder={"Search questions"}/>
            <FlatList data={faqs} renderItem={({item}) => <FAQsCard {...item}/>} contentContainerStyle={tw`px-[5%] gap-2`}/>
            <View style={tw`gap-3 absolute bottom-0 right-5`}>
                <Button style={tw`w-12 h-12`} icon={<LetterOutline />}></Button>
                {/*<Button style={tw`w-12 h-12`} icon={<PhoneCalling />}></Button>*/}
            </View>
        </SafeAreaView>
    );
};

export default FAQs;
