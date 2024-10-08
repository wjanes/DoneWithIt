import { Platform, StyleSheet, Text, View } from 'react-native'

const AppText = ({ children, style }) => {
    return (
        <View>
            <Text style={[styles.text, style]}>{children}</Text>
        </View>
    )
}

export default AppText

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir'
    }
})