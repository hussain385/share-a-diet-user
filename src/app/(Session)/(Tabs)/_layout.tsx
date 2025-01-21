import React from 'react';
import {Tabs} from "expo-router";
import CustomBottomTabComponent from "@/components/navigation/custom-bottom-tab.component";

const AuthLayout = () => {
    return (
        <Tabs screenOptions={{headerShown: false}} tabBar={props => <CustomBottomTabComponent {...props}/>}>
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Home',
                }}
            />
            <Tabs.Screen
                name="list"
                options={{
                    title: 'History',
                }}
            />
            <Tabs.Screen
                name="search"
                options={{
                    title: 'Search',
                }}
            />
            <Tabs.Screen
                name="user-profile"
                options={{
                    title: 'Profile',
                }}
            />
        </Tabs>
    )
};

export default AuthLayout;
