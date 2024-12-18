import React, {useState} from 'react';
import tw from "@/utils/tailwind";
import {categories} from "@/data/home";
import {Image, ScrollView, TouchableOpacity} from "react-native";
import {commonStyles} from "@/styles/common.styles";
import Text from "@/components/common/Text";

const CategorySectionComponent = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>("All")

    return (
        <ScrollView
            horizontal
            contentContainerStyle={tw`gap-4 p-1 items-center`}
            indicatorStyle="white"
        >
            {categories.map((category) => (
                <TouchableOpacity
                    key={category.title}
                    onPress={() => setSelectedCategory(category.title)}
                    style={[
                        tw`rounded-lg w-20 h-16 border ${selectedCategory === category.title ? "border-secondary200" : "border-white"} items-center justify-center gap-1 bg-white`,
                        commonStyles.shadow,
                    ]}
                >
                    <Image source={category.image} style={tw`w-6 h-6`} />
                    <Text variant="body-sm">{category.title}</Text>
                </TouchableOpacity>
            ))}
        </ScrollView>

    );
};

export default CategorySectionComponent;
