import React from 'react';
import {TextInput} from 'react-native';
import { styles } from './PasswordInputStyles';

interface TextInputProps{
    pass:string
}

export default function PasswordInput(props:TextInputProps) {
    return (
        <>
            <TextInput placeholder='Password' value={props.pass} style={styles.input}/>
        </>
    );
}