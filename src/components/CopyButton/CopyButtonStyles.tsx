import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    button:{
        padding: 10,
        backgroundColor: '#fae315',
        borderRadius: 10,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    text:{
        color: '#000000',
        fontSize: 16,
        fontWeight: 'bold'
    }
});