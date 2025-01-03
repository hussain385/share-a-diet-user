import React from 'react';
import {View, Text, Image, ViewStyle, Pressable} from 'react-native';
import tw from "@/utils/tailwind";
import {commonStyles} from "@/styles/common.styles";

type AvatarProps = {
    name: string;
    pictureUrl?: string; // Optional profile picture
    size?: number; // Avatar size (width and height)
    style?: string; // Additional style for the avatar container (optional)
    onClick?: () => void
};

const Avatar: React.FC<AvatarProps> = ({ name, pictureUrl, size = 50, style, onClick }) => {
    // Generate a random color based on the name
    const randomColor = React.useMemo(() => {
        const colors = ['bg-red-500', 'bg-green-500', 'bg-blue-500', 'bg-yellow-500', 'bg-purple-500', 'bg-teal-500'];
        const index = name.charCodeAt(0) % colors.length;
        return colors[index];
    }, [name]);

    const firstLetter = name.charAt(0).toUpperCase(); // Get the first letter of the name

    return pictureUrl ? (
        <Pressable onPress={onClick}>
            <Image
                source={{ uri: pictureUrl }}
                style={tw.style(
                    `rounded-full bg-gray-400 ${style || ''}`,
                    {
                        width: size,
                        height: size,
                        ...commonStyles.shadow
                    }
                )}
            />
        </Pressable>
    ) : (
        <Pressable
            onPress={onClick}
            style={tw.style(
                `flex justify-center bg-gray-400 items-center rounded-full ${randomColor} ${style || ''}`,
                {
                    width: size,
                    height: size,
                    ...commonStyles.shadow
                }
            )}
        >
            <Text style={tw.style(`text-white font-bold`, { fontSize: size / 2 })}>{firstLetter}</Text>
        </Pressable>
    );
};

export default Avatar;
