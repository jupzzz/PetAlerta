import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'

export default function Welcome() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <View style={styles.containerLogo}>
                <Animatable.Image
                    animation="fadeInDown"
                    source={require('../../assets/logo.png')}
                    style={styles.logo}
                    resizeMode='contain'
                />
            </View>

            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerText}>
                <Text style={styles.title}>Bem vindo ao</Text>
                <Text style={styles.subtitle}>PetAlerta</Text>
            </Animatable.View>

            <TouchableOpacity
                style={styles.button} 
                onPress={() => navigation.navigate('SignIn')}>
                <Text style={styles.buttonText}>Comece aqui</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#7BB0EF",
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20',
    },

    containerLogo: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    logo: {
        width: 200,
        height: 200,
        borderRadius: 50,
    },

    containerText: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margimBottom: '60'
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'benne',
        marginBottom: 20,
    },

    subtitle: {
        fontSize: 60,
        color: 'white',
        textAlign: 'center',
        fontFamily: 'benne'
    },

    button: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 50,
        marginBottom: 50,
    },

    buttonText: {
        color: '#EF9D5D',
        fontSize: 25,
        fontWeight: 'bold',
        padding: 5,
    },
})