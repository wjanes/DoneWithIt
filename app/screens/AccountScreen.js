import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Screen from '../components/Screen'
import ListItem from '../components/ListItem'
import colors from '../config/colors'
import Icon from '../components/Icon'

export default function () {

    const menuItems = [
        {
            title: "My Listings",
            icon: {
                name: "format-list-bulleted",
                backgroundColor: colors.primary
            }
        },
        {
            title: "My Messages",
            icon: {
                name: "email",
                backgroundColor: colors.secondary
            }
        }
    ]

    return (
        <Screen>
            <View style={styles.container}>
                <ListItem
                    title={"Wolfgang Janes"}
                    subTitle={"wolfgang.janes.82@gmail.com"}
                    image={require("../assets/wofei.jpg")} />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    renderItem={({ item }) =>
                        <ListItem title={item.title} ImageComponent={<Icon name={item.icon.name} backgroundColor={item.icon.backgroundColor} />} />
                    } />
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20
    }
})