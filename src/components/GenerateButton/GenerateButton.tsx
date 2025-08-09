import React from 'react';
import { Text, Pressable, View } from 'react-native';
import { styles } from './GenerateButtonStyles';
import generatePassword from '../../services/passwordService';

interface GenerateButtonProps {
    onGeneratePassword: (newPass: string) => void;
}

export default function GenerateButton({ onGeneratePassword }: GenerateButtonProps) {
    const handleGeneratePassword = () => {
        let generateToken = generatePassword();
        const newPass = generateToken;
        onGeneratePassword(newPass);
    };

    return (
        <>
            <Pressable onPress={handleGeneratePassword} style={styles.button}
                accessibilityRole='button'
                accessibilityLabel='Generate Password'>
                <Text style={styles.text}>Generate</Text>
            </Pressable>
        </>

    );
}