import React from 'react';
import { 
    View, 
    Text, 
    Image,
    StyleSheet,
    Dimensions,
    TouchableOpacity
    } from 'react-native';

export default function Welcome() {
    return (
        <View style={styles.container}>

            <View styles={styles.logo}>
                <Image
                    source={require('../../assets/logo.png')}
                    style={{ width: '100%' }}
                    resizeMode='contain'
                />
            </View>

            <View styles={styles.container2}>
                <Text style={styles.title}>Bem vindo ao</Text>
                <Text style={styles.subtitle}>PetAlerta</Text>
            
                <TouchableOpacity style={styles.button} onPress={() => alert('Botão pressionado!')}>
                    <Text style={styles.buttonText}>Comece aqui</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#7BB0EF",
    },

    logo: {
        borderRadius: 10
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 20,
        fontFamily: 'benne'
    },

    subtitle: {
        fontSize: 60,
        color: 'white',
        marginBottom: 20,
        textAlign: 'center',
        fontFamily: 'benne'
    },

    button: {
        position: 'absolute',
        bottom: 30,
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 50,
    },

    buttonText: {
        color: '#EF9D5D',
        fontSize: 25,
        fontWeight: 'bold',
        padding: 5,
    },
})