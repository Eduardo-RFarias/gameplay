import React from 'react'
import { ScrollView } from 'react-native'
import { styles } from './style'
import { categories } from '../../utils/categories'
import { Category } from '../Category'

export function CategorySelect() {
  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {categories.map((category) => (
        <Category />
      ))}
    </ScrollView>
  )
}
