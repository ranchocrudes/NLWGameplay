import React from 'react';
import { Text, View, ImageBackground, FlatList } from 'react-native';

import { BorderlessButton } from 'react-native-gesture-handler';
import { LisHeader } from '../../components/LisHeader/index';
import { ButtonIcon } from '../../components/ButtonIcon';
import { ListDivider } from '../../components/ListDivider';
import { Background } from '../../components/Background';
import { theme } from '../../global/styles/theme';
import { Member } from '../../components/Member';
import { Header } from '../../components/Header';
import { Fontisto } from '@expo/vector-icons'
import { styles } from './styles';

import BannerImg from '../../assets/banner.png'

export function AppointmentDetails() {
    const members = [
        {
            id: '1',
            username: 'Rodrigo',
            avatar_url: 'https://github.com/rodrigorgtic.png',
            status: 'online'
        },
        {
            id: '2',
            username: 'Mateus',
            avatar_url: 'https://github.com/rodrigorgtic.png',
            status: 'offline'
        }
    ]
    return (
        <Background>
            <Header
                title='Detalhes'
                action={
                    <BorderlessButton>
                        <Fontisto
                            name='share'
                            size={24}
                            color={theme.colors.primary}
                        />
                    </BorderlessButton>
                }
            />
            <ImageBackground
                source={BannerImg}
                style={styles.banner}

            >
                <Text style={styles.title}>
                    Lendários
                </Text>
                <Text style={styles.subTitle}>
                    É hoje que vamos chegar ao challenger sem perder uma partida da md10
                </Text>
            </ImageBackground>

            <LisHeader
                title='Jogadores'
                subtitle='Total 3'
            />
            <FlatList
                data={members}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Member
                        data={item}
                    />
                )}
                ItemSeparatorComponent={() => <ListDivider />}
                style={styles.members}
            />
            <View style={styles.footer}>
                <ButtonIcon
                    title='Entrar na partida'
                />
            </View>
        </Background>


    );

}

