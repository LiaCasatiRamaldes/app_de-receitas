import * as React from 'react';
import { Text, View, StyleSheet, Image, SafeAreaView, Button } from 'react-native';
import { Card } from 'react-native-elements';
import IconeBotao from './IconeBotao';
import styles from '../assets/estilo';
import { useNavigation } from '@react-navigation/native';
import Receita_conteudo from './Receita_conteudo';


// const navigation = useNavigation();

// function handleProfilePress() {
//   navigation.navigate('Receita_conteudo');
// }

export default function Receita({nome, uri}) {
  
  return (
    <cCard>
      <View style={styles.container_receita}>
        <Image style={styles.img_receita} source={uri} />
        <Text style={styles.title}>
          {nome}
        </Text>
        <IconeBotao name="rightcircle" size={34} color="white" />
      </View>
    </cCard>
  );
}


