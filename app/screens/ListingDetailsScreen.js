import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import AppText from '../components/AppText'
import colors from '../config/colors'
import ListItem from '../components/ListItem'

const ListingDetailsScreen = () => {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/jacket.jpg')} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>Red Jacket for Sale</AppText>
                <AppText style={styles.price}>$100</AppText>
                <View style={styles.userContainer}>
                    <ListItem
                        image={require('../assets/wofei.jpg')}
                        title='Wolfgang Janes'
                        subTitle='5 Listing' />
                </View>
            </View>
        </View>
    )
}

export default ListingDetailsScreen

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300
    },
    detailsContainer: {
        padding: 20
    },
    price: {
        color: colors.secondary,
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10
    },
    title: {
        fontSize: 24,
        fontWeight: '500'
    },
    userContainer: {
        marginVertical: 40
    }

})