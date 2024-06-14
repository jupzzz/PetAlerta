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
    <View>
        <Image 
        source={require('../../assets/logo.png')}
        style={styles.logo} 
        resizeMode='cover'
        />

      <Text>Bem vindo ao</Text>
      <Text>PetAlerta</Text>
    
      <TouchableOpacity style={styles.button} onPress={() => alert('Botão pressionado!')}>
        <Text style={styles.buttonText}>Comece aqui</Text>
      </TouchableOpacity>
    </View>
    )
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#7BB0EF",
        justifyContent: 'center',
        alignItems: 'center',
    },

    logo: {
        width: width * 0.6,
        height: height * 0.35,
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