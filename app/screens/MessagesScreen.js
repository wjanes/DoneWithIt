import { FlatList, StyleSheet } from 'react-native'
import React, { useState } from 'react';

import ListItem from '../components/ListItem'
import ListItemDeleteAction from '../components/ListItemDeleteAction'
import ListItemSeparator from '../components/ListItemSeparator'
import Screen from '../components/Screen'

const initialMessags = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/wofei.jpg')
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/wofei.jpg')
    }
]


const MessagesScreen = () => {

    //States
    const [messages, setMessages] = useState(initialMessags);
    const [refreshing, setRefreshing] = useState(false);

    //Handler
    const handleDelete = message => {
        setMessages(messages.filter(m => m.id !== message.id));
    }

    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={message => message.id}
                renderItem={({ item }) =>
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log("Message selected")}
                        renderRightActions={() =>
                            <ListItemDeleteAction onPress={() => handleDelete(item)} />} />}
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: 2,
                            title: 'T2',
                            description: 'D2',
                            image: require('../assets/wofei.jpg')
                        }
                    ])
                }}
            />
        </Screen>
    )

}

export default MessagesScreen

const styles = StyleSheet.create({

})