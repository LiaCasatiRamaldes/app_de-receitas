import * as React from 'react';
import { Text, SafeAreaView, stylesheet, ScrollView} from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Arquivos Locais
import Receita from './components/Receita';
import Receita_conteudo from './components/Receita_conteudo';
import styles from './assets/estilo';
import listaReceitas from './lista';
import Home from './Home';

// or any pure javascript modules available in npm
import { Card } from 'react-native-elements';

// Fontes 
import {useFonts} from 'expo-font';
import AppLoading from 'expo-app-loading';



export default function App() {

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView style={styles.container}>
          <Header
            placement="left"
            leftComponent={{ icon: 'menu', color: '#fff' }}
            rightComponent={{ icon: 'home', color: '#fff' }}
            containerStyle={styles.menu}
            centerComponent={<Text style={styles.title_menu}>Receitas da Lia</Text>}
          />
          <Home />     
          
        </ScrollView>
    </SafeAreaView>
    </SafeAreaProvider>
  );
}


