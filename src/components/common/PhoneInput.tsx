import React, {useState} from 'react';
import PhoneInput from "react-native-phone-number-input";
import tw from "@/utils/tailwind";

const PhoneInputComponent = () => {
    const [value, setValue] = useState<string>('')
    const [formattedValue, setFormattedValue] = useState<string>('')

    return (
        <PhoneInput
            defaultValue={value}
            defaultCode="DM"
            layout="first"
            onChangeText={(text) => {
                setValue(text);
            }}
            onChangeFormattedText={(text) => {
                setFormattedValue(text);
            }}
            autoFocus
            containerStyle={tw`bg-inputBgColor rounded-lg border border-[#E9EAEB] w-full`}
            textContainerStyle={tw`bg-transparent rounded-lg`}
            textInputStyle={tw`text-body-lg`}
            codeTextStyle={tw`text-[#697079] -ml-4`}
        />
    );
};

export default PhoneInputComponent;
