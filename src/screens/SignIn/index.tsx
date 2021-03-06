import React from 'react'
import { View, Image, Text } from 'react-native'
import { ButtonIcon } from '../../components/ButtonIcon'
import { useNavigation } from '@react-navigation/native'
import IllustrationImg from '../../assets/illustration.png'
import { styles } from './style'

export function SignIn() {
  const navigation = useNavigation()

  function handleSignIn() {
    navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>
      <Image
        source={IllustrationImg}
        style={styles.image}
        resizeMode='stretch'
      />
      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se{'\n'}e organize suas{'\n'}
          jogatinas
        </Text>
        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games{'\n'}
          favoritos com seus amigos
        </Text>
        <ButtonIcon title='Entrar com discord' onPress={handleSignIn} />
      </View>
    </View>
  )
}
