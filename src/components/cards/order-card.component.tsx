import React, {useState} from 'react';
import {commonStyles} from "@/styles/common.styles";
import tw from "@/utils/tailwind";
import {Image, TouchableOpacity, View} from "react-native";
import Text from "@/components/common/Text";
import AntDesign from "@expo/vector-icons/AntDesign";
import Fonts from "@/constants/fonts";

const OrderCardComponent = () => {
    const [numberItem, setNumberItem] = useState<number>(1)

    return (
        <View style={[tw`gap-3 rounded-xl flex-row bg-white p-3`, commonStyles.shadow]}>
            <Image
                source={{uri: 'https://s3-alpha-sig.figma.com/img/7745/e67f/aaa231e1fb67707d07040f3c29a761b6?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=McukUFDst8oJJXYaTjmgwhaGlsRFmpiTYMP23~dFzW2FL7aw5gPvY7cqjkAlloHCbo5cU9Q~O1hS5kmaDO4CgpIBF0Uejrq5EVAnwUdrauR-jPwXhDhTAIwYKfx1ge2U6IiyC1mi9pEa9KHFd9IThedXQrYrJ34BfIQqwADHz3Ed9uRSl42sIMGsBBIiKG0GNTOIakZg8kAlthCXLshwMrENemem6AzqsDUhwjvAx~U69Q4eqdgTZaJpz798Di6X9NGyPatPTbpcPUHDo7HAMQ4LfQqf-fLcxPOmKkpzColxXggc3ppCDFGnzMDRinIMJUI09LHsQ0VvxndGiXbGLw__'}}
                style={tw`w-20 h-20 rounded-lg`}
            />
            <View style={tw`justify-between`}>
                <Text variant={"body-sm"}>Chicken Noodle Soup</Text>
                <Text variant={"body-lg"} style={tw`text-secondary200`}>SGD 15.99 <Text>x {numberItem}</Text></Text>
                <View style={tw`flex-row gap-2`}>
                    <TouchableOpacity disabled={numberItem === 1} onPress={() => setNumberItem(numberItem - 1)} style={tw`border rounded-full w-7 h-7 border-themeBorderColor bg-white items-center justify-center`}>
                        <AntDesign name="minus" size={18} color="black" />
                    </TouchableOpacity>
                    <Text variant={"body-lg"} style={{fontFamily: Fonts.Roboto.Regular, marginTop: 4}}>{numberItem}</Text>
                    <TouchableOpacity onPress={() => setNumberItem(numberItem + 1)} style={tw`border rounded-full w-7 h-7 border-themeBorderColor bg-white items-center justify-center`}>
                        <AntDesign name="plus" size={18} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default OrderCardComponent;
