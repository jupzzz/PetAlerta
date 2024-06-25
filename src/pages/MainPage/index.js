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
            <Animatable.View animation="fadeInLeft" style={styles.containerHeader}>
                <Text style={styles.text}>MainPage</Text>
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
})