import { Input } from '@rneui/themed';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import { Fila } from '../components/Fila';
import { APP_SCREENS } from './AppScreen';

export default function SaludoScreen({navigation}) {
  const [result, setResult] = useState("10,000")

  const irASaludo = () => {
    navigation.navigate(APP_SCREENS.HOME)
  }

  return (
    <View style={styles.container}>

      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
        <View style={{ flexDirection: 'row', width: '85%' }}>
          <Input placeholder={result} style={styles.campoTexto} />
        </View>
        <View style={{ flexDirection: 'column', gap: 10 }}>
          <Fila col1="7" col2="8" col3="9" col4="x" col2Style="error" />
          <Fila col1="4" col2="5" col3="6" col4="/" />
          <Fila col1="1" col2="2" col3="3" col4="-" />
          <Fila col1="C" col1Color="error" col2="0" col3="=" col3Color="secondary" col4="+" />
        </View>
      </View>
      <View>
        <Button title='Ir a Saludo' onPress={irASaludo} />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'azure'
  },
  campoTexto: {
    fontSize: 50,
    textAlign: 'right',
    paddingHorizontal: 15,
    borderWidth: .5,
  }
});
