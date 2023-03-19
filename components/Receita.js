import * as React from 'react';
import { Text, View, StyleSheet, Image, SafeAreaView, Button } from 'react-native';
import { Card } from 'react-native-elements';
import IconeBotao from './IconeBotao';



export default function Receita({nome, uri}) {
  return (
    <cCard style={styles.card}>
      <View style={styles.container}>
        <Image style={styles.img} source={uri} />
        <Text style={styles.paragraph}>
          {nome}
        </Text>
        <IconeBotao name="rightcircle" size={35} color="white"/>
      </View>
    </cCard>
  );
}

const styles = StyleSheet.create({
  card:{
    backgroundColor: "#F2911B",
  },
  container: {
    backgroundColor: "#F2911B",
    flex: 1,
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    
  },
  paragraph: {
    flex: 100,
    margin: 10,
    marginBottom: 0,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  img: {
    padding: 0,
    height: 100,
    width: 100,
    borderRadius: 20,
  },

});
