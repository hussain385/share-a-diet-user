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
                source={require('@/assets/images/burger.jpg')}
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
