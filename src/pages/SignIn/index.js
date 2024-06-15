import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

export default function SignIn() {
    return (
        <View style={styles.container}>

            <View style={styles.text}>
                {/* <Text>
                    Entrar
                </Text> */}
            </View>

            <View style={styles.profileImage}>
                {/* <Image

                /> */}
            </View>

            <View style={styles.form}>

            </View>

            <TouchableOpacity
                style={styles.button} 
                onPress={() => navigation.navigate('SignIn')}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <View>
                <Text>

                </Text>
                <Text>
                    
                </Text>
            </View>
       </View> 
    )
}

const styles = StyleSheet.create({

})