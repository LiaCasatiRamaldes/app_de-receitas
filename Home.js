import * as React from 'react';
import { Text, View, stylesheet, ScrollView} from 'react-native';
import { Header } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
// import ProfileScreen from './ProfileScreen';

// Arquivos Locais
import Receita from './components/Receita';
import Receita_conteudo from './components/Receita_conteudo';
import styles from './assets/estilo';
import listaReceitas from './lista';


export default function Home() {
  
  return (
      <View>
        {
         listaReceitas.map((receita) => {
            return (
                <Receita nome={receita.nome} uri={receita.uri}/>
            );
          })
        }
      </View>
  );
}
