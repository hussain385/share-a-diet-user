import React from 'react';
import {ScrollView, View} from "react-native";
import TextInput from "@/components/common/TextInput";
import Magnifer from "@/assets/icons/magnifer.svg";
import AppBar from "@/components/common/AppBar";
import BackBtn from "@/components/common/BackBtn";
import tw from "@/utils/tailwind";
import Avatar from "@/components/common/Avatar";
import Button from "@/components/common/Button";
import PhoneInputComponent from "@/components/common/PhoneInput";
import Letter from "@/assets/icons/letter.svg";
import User from "@/assets/icons/user.svg";
import {screen_height} from "@/constants/common";
import {useRouter} from "expo-router";

const EditProfile = () => {
    const router = useRouter();
    return (
        <View style={tw`pt-3`}>
            <AppBar title={'Edit Profile'} left={<BackBtn customOnPress={() => router.push("/home")}/>} right={<View style={tw`w-11`}/>}/>
            <View style={tw`flex-col items-center px-[5%] justify-center`}>
                <Avatar name={''} size={65} pictureUrl={"https://s3-alpha-sig.figma.com/img/d3b2/1420/be0c601433a270f2eab8f555d444da52?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LbLXdMLDCpfKWd6AJfAqrBbjddPSfiH6mFrsPJWUmPz-b622sF7yR2hUgJypm-B30yY~IDKoqaTOeTrK84LZUeJe9Gmt4dN2pkRI5mqluWZ4mqbEValge59GUSH~yObbxKZ8WFv9Vj96rl9bcepJ6tTENMgHfjKw3euF~gjcFw~QIKJlyNPHwsv0rLDrkdW~OiISIA-0p2NoyTDVEfSGq09JZH4iSzgStWBPmwBwB0vORpcG8ywH0kMY00BRyxdiKj2FvqHL1KS5hOAo6~EwYtACLcWvtkBVypFDa7RskvACqGrw~JX1Wn3QWawvKXdvWBR7HA~vuUD-OwP9UY-~2Q__"}/>
                <Button variant={"ghost"} textVariant={"body-lg"} textStyle={tw`underline text-secondary200`}>
                    Upload New Picture
                </Button>
            </View>
            <View style={{maxHeight: screen_height * 0.73, marginTop: 20}}>
                <ScrollView contentContainerStyle={[tw`flex-col px-[5%] gap-4 pb-6`]}>
                    <TextInput icon={<User />} placeholder={'Enter username'}/>
                    <TextInput icon={<Letter />} placeholder={'Enter email'}/>
                    <PhoneInputComponent />
                    <TextInput label={"Country"} placeholder={'Enter username'}/>
                    <TextInput label={"Street Address"} placeholder={'Enter email'}/>
                    <TextInput label={"City"} placeholder={'Enter email'}/>
                    <TextInput label={"State/Province"} placeholder={'Enter email'}/>
                    <TextInput label={"Zip/Postal Code"} placeholder={'Enter email'}/>
                    <Button style={tw`mt-4`}>Save Changes</Button>
                </ScrollView>
            </View>
        </View>
    );
};

export default EditProfile;
