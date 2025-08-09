import React from 'react';
import { Text, Pressable } from 'react-native';
import { styles } from './CopyButtonStyles';
import * as Clipboard from 'expo-clipboard';

interface CopyButtonProps {
    pass: string;
}

export default function CopyButton({ pass }: CopyButtonProps) {
    const handleCopyButton = () => {
        Clipboard.setStringAsync(pass);
    };
    return (
        <>
            <Pressable onPress={handleCopyButton} style={styles.button}
                accessibilityRole='button'
                accessibilityLabel='Copy Password'>

                <Text style={styles.text}>Copy</Text>
            </Pressable>
        </>

    );
}