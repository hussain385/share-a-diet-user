import React from "react";
import { View, TouchableOpacity } from "react-native";
import ActiveStar from "@/assets/icons/star.svg";
import InactiveStar from "@/assets/icons/unactive-star.svg";
import tw from "@/utils/tailwind";

interface RatingsProps {
    totalStars?: number; // Total number of stars to display
    rating?: number; // Current rating value
    onRate?: (rating: number) => void; // Callback triggered when a star is pressed
    size?: number; // Size of the stars
}

const Ratings: React.FC<RatingsProps> = ({
                                             totalStars = 5,
                                             rating = 0,
                                             onRate = () => {},
                                             size = 24,
                                         }) => {
    const handlePress = (index: number) => {
        onRate(index + 1);
    };

    return (
        <View style={tw`flex-row items-center justify-center gap-2`}>
            {Array.from({ length: totalStars }).map((_, index) => (
                <TouchableOpacity
                    key={index}
                    onPress={() => handlePress(index)}
                    activeOpacity={0.7}
                >
                    {index < rating ? (
                        <ActiveStar width={size} height={size} />
                    ) : (
                        <InactiveStar width={size} height={size} />
                    )}
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default Ratings;
