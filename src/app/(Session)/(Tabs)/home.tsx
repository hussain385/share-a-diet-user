import React from 'react';
import {SafeAreaView, View} from "react-native";
import tw from "@/utils/tailwind";
import Button from "@/components/common/Button";
import Avatar from "@/components/common/Avatar";
import {useNavigation, useRouter} from "expo-router";
import {DrawerNavigationProp} from "@react-navigation/drawer";
import {ParamListBase} from "@react-navigation/native";
import AppBar from "@/components/common/AppBar";
import Menu from "@/assets/icons/menu.svg"
import {commonStyles} from "@/styles/common.styles";
import Bell from "@/assets/icons/bell.svg"
import Bag from "@/assets/icons/bag.svg"
import {screen_height} from "@/constants/common";

const Home = () => {
    const router = useRouter()
    const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();

    return (
        <SafeAreaView>
            <View style={[tw`flex-col gap-4 pt-4`, {maxHeight: screen_height * 0.87}]}>
                <AppBar
                    title={''}
                    right={<View style={tw`flex-row gap-2 items-center`}>
                        <Button onPress={() => router.push('/notifications')} variant={'ghost'} style={[tw`w-[40px] h-[40px] bg-white rounded-full`, commonStyles.shadow]}><Bell/></Button>
                        <Button onPress={() => router.push('/notifications')} variant={'ghost'} style={[tw`w-[40px] h-[40px] bg-white rounded-full`, commonStyles.shadow]}><Bag /></Button>
                        <Avatar size={40} name={'Lee Chang'}
                                pictureUrl={"https://s3-alpha-sig.figma.com/img/bb37/c0d8/0b097a885cf1c4ea4d9f1bac1c110278?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SfU280ixD02kyRqsS3QGjgSCYzy1y4FS2ndAwLEjrzTwRuuWlwz1Jq3iyrZ2d1zhednmUjE535Pn00eQy6nAf9zjfn9IVC4fASuGovipf87Cr9UreVfz2lhZ-NlGHASRoa1P0E3gax6QVj1bjuTV-Yp9KvzlOHa6j9b~DfX9Exg8v-yfle5BVX7XVtrzANQuMjrN-ySnMzlYHUfblg1VGtjtcwltCJZXPWqPQblbSD7hOTjv2ivt7u6WVQBCLMQR9YVupBQPbzON1ho6gBHo6dO2ZSVAhrAu4a66IvliUfTDz20aJY~Q5NMygmOan4Yf7JyRlhShfiFSKLQm683dBA__"}/>
                    </View>}
                    left={<Button variant={'ghost'} onPress={() => navigation.openDrawer()}>
                        <Menu/>
                    </Button>}
                />
            </View>
        </SafeAreaView>
    );
};

export default Home;
