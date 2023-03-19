import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, Header } from 'react-native';
import Constants from 'expo-constants';
import { Icon } from 'react-native-elements'

// You can import from local files
import Receita from './components/Receita';
import Receita_conteudo from './components/Receita_conteudo';

// or any pure javascript modules available in npm
import { Card } from 'react-native-elements';

let listaReceitas = [{nome: "Brownie", 
              uri : require("./assets/brownie.jpeg"), 
              ingredientes: "*1 xícara de farinha de trigo \n*3 ovos \n*1 e meia xícara de açúcar \n*6 colheres de sopa de chocolate em pó \n*100 gramas de manteiga derretida",
              modo_de_fazer: "1.Em uma tigela, coloque 1 xícara de farinha de trigo, 1 e meia xícara de açúcar e misture. \n2.Em seguida, adicione 100 gramas de manteiga sem sal derretida e misture novamente. \n3.Depois, acrescente 3 ovos e misture até ficar homogêneo. \n4.Transfira a mistura para uma forma revestida com papel-manteiga. Espalhe para cobrir toda a forma. \n5.Leve ao forno preaquecido a 180 graus Celsius por 30 minutos. \n6.Retire do forno e corte em quadradinhos. \n7.Se quiser, polvilhe com chocolate em pó."},
              {nome: "Angú à baiana", 
              uri : "./assets/angu.jpg", 
              ingredientes: "*3 copos de fubá \n*500 ml de água \n*Uma pitada de sal \n*500 g de carne moída \n*1/2 pimentão picado \n*Cheiro verde a gosto  \n*1 lata de molho de tomate \n*1 lata de milho verde \n*1 caldo de galinha knorr \n*3 dentes de alho amassado \n*1 colher de óleo \n*200 g de mussarela",
              modo_de_fazer: "1.Frite a carne moída com o alho amassado. \n2.Coloque o molho de tomate, o cheiro verde, o milho verde, meio knorr, e o pimentão picado. \n3.Deixe ferver até formar um molho bem consistente. \n4.Enquanto ferve faça o angú, misturando a água com o fubá, o óleo, meio caldo knorr e uma pitada de sal. \n5.Deixe ferver bastante até obter um angú bem consistente e cremoso. \n6.Coloque em uma assadeira a mussarela, um pouco do angú ainda quente e o molho que se formou da carne moída por cima do angú. \n7.Depois, coloque mais angú e mussarela e assim até acabar. \n8.Por último, acrescentar o molho de carne moída."}

          ]

export default function App() {

  return (
    <ScrollView style={styles.container}>
      
      <Text style={styles.paragraph}>
      Receitas que aquecem o coração
      </Text>
    
    {listaReceitas.map((receita) => {
        return (
          <>
            <Receita nome={receita.nome} uri={receita.uri}/>
            <Receita_conteudo nome={receita.nome} uri={receita.uri} ingredientes={receita.ingredientes} modo_de_fazer={receita.modo_de_fazer}/>
          </>
        );}
        )
      }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    backgroundColor: '#fffff',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
