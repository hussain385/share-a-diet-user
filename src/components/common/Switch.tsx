import React from 'react';
import {Switch as SwitchNative, StyleSheet} from 'react-native';

type componentPropType = {
    isEnabled: boolean;
    toggleSwitch: () => void;
}

const Switch = ({isEnabled, toggleSwitch}: componentPropType) => {
    return (
        <SwitchNative
            trackColor={{false: '#E9EAEB', true: '#F36A26'}}
            thumbColor={isEnabled ? '#f4f3f4' : '#F36A26'}
            ios_backgroundColor="#E9EAEB"
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
    );
};

export default Switch;
