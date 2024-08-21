import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import * as Haptics from 'expo-haptics';

import AppButton from '../components/AppButton'

const WelcomeScreen = () => {
    return (
        <ImageBackground
            blurRadius={4}
            style={styles.background}
            source={require("../assets/background.jpg")}>
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require("../assets/logo-red.png")} />
                <Text style={styles.logoText}>Sell What You Dont Need</Text>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title='Login' onPress={() => Haptics.selectionAsync()} color='primary' />
                <AppButton title='Register' onPress={() => Haptics.selectionAsync()} color='secondary' />
            </View>
        </ImageBackground>

    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    buttonContainer: {
        padding: 20,
        width: '100%'
    },
    logo: {
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center'
    },
    logoText: {
        padding: 20
    }
})