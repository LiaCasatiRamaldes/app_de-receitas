import * as React from 'react';
import { Text, View, StyleSheet, Image, FileList } from 'react-native';
import { Card } from 'react-native-elements';
import styles from '../assets/estilo';


export default function Receita_conteudo({nome, uri, ingredientes, modo_de_fazer}) {
  return (
    <cCard>
      <View style={styles.container_receitac}>
        <Text style={styles.title_receitac}>{nome}</Text>

        <Image style={styles.img_receitac} source={uri} />

        <Text style={styles.title2}>Ingredientes</Text>
        <Text style={styles.text}>{ingredientes}</Text>

        <Text style={styles.title2}>Modo de Fazer</Text>
        <Text style={styles.text}>{modo_de_fazer}</Text>
      </View>
    </cCard>
  );
}