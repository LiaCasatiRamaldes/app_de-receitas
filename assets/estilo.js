import { StyleSheet } from 'react-native'
// import { loadFont } from 'react-native-vector-icons';
// import './fonts/Fonts';



// const [fontsLoaded] = useFonts({ BebasNeueRegular : require('./fonts/BebasNeue-Regular.ttf') });

// Importações internas 
// import {BebasNeue-Regular} from './fonts/BebasNeue-Regular.ttf';

// const b = require('./fonts/BebasNeue-Regular.ttf');

const styles = StyleSheet.create({
// Geral
  title: {
    fontFamily: 'Open Sans',
    paddingHorizontal: 0,
    margin: 0,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  },
  title2: {
    padding: 10,
    fontFamily: 'Open Sans',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#59130C'
  },
  text:{
    color: '#59130C' , 
    fontFamily: 'Open Sans',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    paddingBottom : 10
  },
  container: {
    justifyContent: 'center',
    backgroundColor: '#F2B29B',
  },
  menu:{
    backgroundColor: '#59130C',
  },
// Menu 
  title_menu:{
    fontFamily: 'Open Sans',
    fontWeight: 'bold',
    paddingHorizontal: 0,
    margin: 0,
    fontSize: 20,
    textAlign: 'center',
    color: 'white'
  },
// Capa da Receita
  container_receita: {
    borderBottomWidth : 5,
    borderColor: '#59130C',
    backgroundColor: "#F2911B",
    flex: 1,
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    // margin: 8,
    
  },
  img_receita: {
    padding: 0,
    height: 100,
    width: 100,
    borderRadius: 20,
  },
// Receita Conteudo
  container_receitac: {
    backgroundColor: "#F2B29B",
    alignItems: 'center',
    padding: 15,
    textAlign: 'center',
    justifyContent: 'center',
    flex: 1,
    // alignSelf: 'center'
  },
  title_receitac: {
    fontFamily: 'Open Sans',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#59130C',
  },
  img_receitac: {
    // padding: 0,
    height: 200,
    width: 200,
    alignSelf: 'center'
    // borderRadius: 20,
  },

});

export default styles;