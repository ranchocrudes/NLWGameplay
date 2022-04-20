import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

import { Avatar } from '../Avatar';

export function Profile() {
    return (
        <View style={styles.container}>
            <Avatar urlImage='https://github.com/ranchocrudes.png' />
            <View>
                <View style={styles.user}>
                    <Text style={styles.greeting}>
                        Ola
                    </Text>
                    <Text style={styles.username}>
                        Mateus
                    </Text>
                  
                </View>
                <Text style={styles.message}>
                        Hoje é dia de vitoria
                    </Text>
            </View>
        </View>

    )

}