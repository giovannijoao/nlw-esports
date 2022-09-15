import React from 'react';
import { Image, View } from 'react-native';

import { styles } from './styles';

import logoImg from '../../assets/logo-nlw-esports.png';
import { Header } from '../../components/Header';

export function Home() {
  return (
    <View style={styles.container}>
      <Image
        source={logoImg}
        style={styles.logo}
      />
      <Header
        title='Encontre seu duo!'
        subtitle='Selecione o game que deseja jogar...'
      />
    </View>
  );
}