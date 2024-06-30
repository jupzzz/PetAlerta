import React, { useState } from 'react';

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Alert,
    ScrollView,
} from 'react-native';

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'

export default function Register() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Animatable.View animation="fadeInLeft" style={styles.containerHeader}>
                    <Text style={styles.text}>Sobre o PetAlerta</Text>
                </Animatable.View>
                
                <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                    <View style={styles.profileImage}>
                        <Animatable.Image
                            animation="fadeInDown"
                            source={require('../../assets/logoinitialpage.png')}
                            style={styles.logo}
                            resizeMode='contain'
                        />
                    </View>
                    <View style={styles.formSection}>
                        <Text style={styles.text2}>
                            O PetAlerta é um aplicativo gratuito dedicado a ajudar na localização de cães perdidos na sua comunidade.
                        </Text>
                    </View>
                </Animatable.View>

            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#7BB0EF",
    },

    containerHeader: {
        marginTop: '5%',
        paddingStart: '5%',
        alignItems: 'center',
        marginBottom: 20,
    },

    text: {
        alignItems: 'center',
        fontSize: 40,
        color: 'white',
        margimBottom: 50
    },

    profileImage: {
        alignItems: 'center',
        marginTop: 50,
        alignItems: 'center'
    },

    logo: {
        width: 230,
        height: 230,
        borderRadius: 50,
    },

    containerForm: {
        backgroundColor: 'white',
        flex: 1,
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100,
        paddingHorizontal: '5%',
    },

    formSection: {
        marginTop: 80,
        marginBottom: 80,
    },

    text2: {
        fontSize: 24,
        color: '#8E8E8E',
        marginTop: 10,
        textAlign: 'center'
    },
})
