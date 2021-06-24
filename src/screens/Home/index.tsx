import React, { useState } from 'react'
import { View, FlatList } from 'react-native'
import { Appointment } from '../../components/Appointment'
import { ButtonAdd } from '../../components/ButtonAdd'
import { CategorySelect } from '../../components/CategorySelect'
import { ListDivider } from '../../components/ListDivider'
import { ListHeader } from '../../components/ListHeader'
import { Profile } from '../../components/Profile'
import { styles } from './style'

export function Home() {
  const [category, setCategory] = useState('')

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '22/06 às 20:40h',
      description: 'Soloq com o Leffa',
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true,
      },
      category: '1',
      date: '23/06 às 20:40h',
      description: 'Flex das estrelas',
    },
  ]

  const handleCategorySelect = (categoryId: string) => {
    setCategory(categoryId === category ? '' : categoryId)
  }

  return (
    <>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>
      <CategorySelect
        categorySelected={category}
        setCategory={handleCategorySelect}
      />
      <View style={styles.content}>
        <ListHeader
          title='Partidas agendadas'
          subtitle={`Total ${appointments.length}`}
        />
        <FlatList
          data={appointments}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Appointment data={item} />}
          style={styles.matches}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <ListDivider />}
        />
      </View>
    </>
  )
}
