import React, { useState } from "react";

import { CategorySelect } from '../../components/CategorySelect';
import { Appointment } from "../../components/Appointment";
import { ListDivider } from "../../components/ListDivider";
import { Background } from '../../components/Background';
import { ButtonAdd } from '../../components/ButtonAdd';
import { LisHeader } from "../../components/LisHeader";
import { View, FlatList, Text } from 'react-native';
import { Profile } from "../../components/profile";
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';

export function Home() {
    const [category, setCategory] = useState('')

    const navigation =useNavigation();

    const appointments = [
        {
            id: '1',
            guild: {
                id: '1',
                name: 'Lendarios',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        },     {
            id: '2',
            guild: {
                id: '1',
                name: 'Lendarios',
                icon: null,
                owner: true
            },
            category: '1',
            date: '22/06 às 20:40h',
            description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        },
        
    ]
    function handleCategorySelect(categoryId: string) {
        if (categoryId === category) {
            setCategory('');
        } else {
            setCategory(categoryId)
        }
    }
    function handleAppointmentDetails(){
        navigation.navigate('AppointmentDetails');

    }
    function handleAppointmentCreate(){
        navigation.navigate('AppointmentCreate');

    }
    return (
        <Background>
            <View style={styles.header}>
                <Profile />
                <ButtonAdd onPress={handleAppointmentCreate} />
            </View>

            
                <CategorySelect
                    categorySelected={category}
                    setCategory={handleCategorySelect}
                />
                <View style={styles.content}>
                    <LisHeader
                        title="Partidas Agendadas"
                        subtitle="Total 6"
                    />
                    <FlatList
                        data={appointments}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <Appointment 
                            data={item} 
                            onPress={handleAppointmentDetails} />
                        )}
                        ItemSeparatorComponent={()=> <ListDivider/>}
                        style={styles.matches}
                        showsHorizontalScrollIndicator={false}
                    />

                </View>
            </Background>
      
    );
}