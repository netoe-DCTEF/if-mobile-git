import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [valor1,setValor1] = useState(0);
  const [valor2,setValor2] = useState(0);
  let resultado = 0;


  const somar = ()=>{
      resultado = parseFloat(valor1) - parseFloat(valor2);
      alert('O resultado é: ' + resultado);
          
  };

  return (
    <View style={styles.container}>

    <TextInput
      placeholder = 'Digite o primeiro valor'
      value = {valor1}
      onChangeText = {valor1 =>setValor1(valor1)}
      keyboardType = 'numeric'
    >
    </TextInput>

    <TextInput
      placeholder = 'Digite o segundo valor'
      value = {valor2}
      onChangeText = {valor2 =>setValor2(valor2)}
      keyboardType = 'numeric'
    >
    </TextInput>

    <Button
      title = 'Somar'
      onPress = {somar}
      color = '#841584'
    >
    </Button>
    <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});
