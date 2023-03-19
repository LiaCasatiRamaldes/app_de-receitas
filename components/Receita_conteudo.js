import * as React from 'react';
import { Text, View, StyleSheet, Image, FileList } from 'react-native';
import { Card } from 'react-native-elements';

export default function Receita_conteudo({nome, uri, ingredientes, modo_de_fazer}) {
  return (
    <Card style={styles.container}>
    
      <Text style={styles.paragraph}>
        {nome}
      </Text>

      <Image style={styles.img} source={{ uri: uri }} />

      <Text>
      {ingredientes}
      </Text>

      <Text>
        {modo_de_fazer}
      </Text>

    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    height: 100,
    flexDirection: "collumn",
    
  },
  paragraph: {
    marginTop: 20,
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  img: {
    marginLeft : 100,
    height: 100,
    width: 100,
    
  }
});
