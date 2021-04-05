import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

export const Header = ({title}) => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
        </View>

    );
};