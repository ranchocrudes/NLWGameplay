import React, { useState } from "react";

import { View, FlatList } from "react-native";
import { styles } from './styles';
import { Guild } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";
import { GuildProps } from '../../components/Guild/index';

type Props = {
    handleGuildSelect: (guild: GuildProps) => void
}

export function Guilds({ handleGuildSelect }: Props) {
    const guilds = [
        {
            id: '1',
            name: 'Lendários',
            icon: null,
            owner: true
        }
    ]

    return (
        <View style={styles.container}>
            <FlatList
                data={guilds}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Guild
                    onPress={()=>handleGuildSelect(item)}
                        data={item}
                    />
                )}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={() => <ListDivider />}
                style={styles.guilds}
            />
        </View>

    );
}