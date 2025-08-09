import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    button:{
        padding: 10,
        backgroundColor: '#c93981',
        borderRadius: 10,
        shadowColor: '#000000',
        marginRight: 40,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    text:{
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold'
    }
});