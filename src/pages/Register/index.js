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

    // const [name, setName] = useState('');
    // const [phone, setPhone] = useState('');
    // const [email, setEmail] = useState('');
    // const [createPassword, setCreatePassword] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Animatable.View animation="fadeInLeft" style={styles.containerHeader}>
                    <Text style={styles.text}>Registrar</Text>
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
                        <Text style={styles.title}>Nome completo</Text>
                        <TextInput
                            placeholder='Digite o seu nome completo'
                            style={styles.input}
                        // value={name}
                        // onChangeText={setName}
                        />

                        <Text style={styles.title}>Email</Text>
                        <TextInput
                            placeholder='Digite o seu email'
                            style={styles.input}
                        // value={email}
                        // onChangeText={setEmail}
                        />

                        <Text style={styles.title}>Celular</Text>
                        <TextInput
                            placeholder='Digite o seu celular'
                            style={styles.input}
                        // value={phone}
                        // onChangeText={setPhone}
                        />

                        <Text style={styles.title}>Senha</Text>
                        <TextInput
                            placeholder='Crie uma senha'
                            style={styles.input}
                            // value={createPassword}
                        // onChangeText={setCreatePassword}
                        // secureTextEntry
                        />

                        <Text style={styles.title}>Confirme a senha</Text>
                        <TextInput
                            placeholder='Confirme a sua senha'
                            style={styles.input}
                            // value={confirmPassword}
                        // onChangeText={setConfirmPassword}
                        // secureTextEntry
                        />

                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SignIn')}>
                            <Text style={styles.buttonText}>Criar sua conta</Text>
                        </TouchableOpacity>

                        <View style={styles.buttonRegisterRow}>
                            <Text style={styles.buttonRegisterText}>Se já possui conta,</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                                <Text style={styles.buttonRegisterOther}> login</Text>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity style={styles.buttonForgotPassword} onPress={() => navigation.navigate('Welcome')}>
                            <Text style={styles.buttonForgotPasswordText}>Esqueceu a sua senha?</Text>
                        </TouchableOpacity>
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
        marginTop: 20,
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
        marginTop: 10
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
        flexDirection: 'row',
        justifyContent: 'center',
    }
})
