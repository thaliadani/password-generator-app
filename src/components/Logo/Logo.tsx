import React from 'react';
import { Text, Image } from 'react-native';
import { styles } from './LogoStyles';
import logo from '../../../assets/logo.png';

export default function Logo() {
    return (
        <>
            <Text style={styles.title}>⭐ Password Generator ⭐</Text>
            <Image style={styles.logo} source={logo} />
        </>
    );
}