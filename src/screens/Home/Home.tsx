import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { View } from "react-native";
import styles from "./HomeStyles";
import Logo from "../../components/Logo/Logo";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import GenerateButton from "../../components/GenerateButton/GenerateButton";
import CopyButton from "../../components/CopyButton/CopyButton";

export default function Home() {
    const [pass, setPass] = useState('');

    return (
        <View style={styles.homeContainer} >
            <View style={styles.logoContainer}>
                <Logo />
            </View>

            <View style={styles.inputContainer}>
                <PasswordInput pass={pass} />
            </View>

            <View style={styles.buttonContainer}>
                <GenerateButton onGeneratePassword={(newPass) => setPass(newPass)} />
                <CopyButton pass={pass} />
            </View>
            <StatusBar style="dark" />
        </View>
    );
}