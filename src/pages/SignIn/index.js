import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
} from 'react-native';

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'

export default function SignIn() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>

            <Animatable.View animation="fadeInLeft" style={styles.containerHeader}>
                <Text style={styles.text}>Entrar</Text>
            </Animatable.View>

            <Animatable.View animation="fadeInUp" style={styles.containerForm}>
                <View style={styles.profileImage}>
                    <Animatable.Image
                        animation="fadeInDown"
                        source={require('../../assets/logo.png')}
                        style={styles.logo}
                        resizeMode='contain'
                    />
                </View>
                <View style={styles.formSection}>
                    <Text style={styles.title}>Email</Text>
                    <TextInput
                        placeholder='Digite seu email'
                        style={styles.input}
                    />

                    <Text style={styles.title}>Senha</Text>
                    <TextInput
                        placeholder='Digite sua senha'
                        style={styles.input}
                    />

                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Welcome')}>
                        <Text style={styles.buttonText}>Entrar</Text>
                    </TouchableOpacity>

                    <View style={styles.buttonRegisterRow}>
                        <Text style={styles.buttonRegisterText}>Não possui uma conta?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
                            <Text style={styles.buttonRegisterOther}> Registre-se</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.buttonForgotPassword} onPress={() => navigation.navigate('Welcome')}>
                        <Text style={styles.buttonForgotPasswordText}>Esqueceu a sua senha?</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
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
        marginBottom: 20,
        alignItems: 'center'
    },

    logo: {
        width: 130,
        height: 130,
        borderRadius: 50,
    },

    containerForm: {
        backgroundColor: 'white',
        flex: 1,
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100,
        paddingHorizontal: '15%',
        justifyContent: 'center'
    },

    formSection: {
        marginTop: 20, 
        marginBottom: 20, 
      },    

    title: {
        fontSize: 16,
        color: '#333',
        
    },

    input: {
        borderWidth: 1,
        borderColor: '#7BB0EF',
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 15,
        fontSize: 16,
        marginTop: 10
    },

    button: {
        backgroundColor: '#EF9D5D',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        marginBottom: 10,
        marginTop: 50
    },

    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },

    buttonRegister: {
        alignItems: 'center',
        marginBottom: 20,
    },

    buttonRegisterText: {
        fontSize: 16,
        color: '#333'
    },

    buttonRegisterOther: {
        color: '#EF9D5D',
        fontSize: 16,
    },

    buttonForgotPassword: {
        alignItems: 'center',
    },

    buttonForgotPasswordText: {
        alignItems: 'center',
        fontSize: 16,
        color: '#EF9D5D',
        marginTop: 30
    },

    buttonRegisterRow: {
        flexDirection: 'row', // Arrange elements in a row
        justifyContent: 'center',
    }
})