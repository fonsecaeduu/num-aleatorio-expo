import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet } from 'react-native';

export default function HomeScreen() {
  const [min, setMin] = useState('');
  const [max, setMax] = useState('');
  const [randomNumber, setRandomNumber] = useState<number | string | null>(null);

  const generateRandomNumber = () => {
    const minValue = parseInt(min);
    const maxValue = parseInt(max);
    if (!isNaN(minValue) && !isNaN(maxValue) && maxValue >= minValue) {
      const number = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
      setRandomNumber(number);
    } else {
      setRandomNumber('Intervalo inválido');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Gerador de Números Aleatórios</Text>
      <TextInput
        style={styles.input}
        placeholder="Valor mínimo"
        keyboardType="numeric"
        value={min}
        onChangeText={setMin}
      />
      <TextInput
        style={styles.input}
        placeholder="Valor máximo"
        keyboardType="numeric"
        value={max}
        onChangeText={setMax}
      />
      <View style={styles.button}>
        <Button title="Gerar Número" onPress={generateRandomNumber} />
      </View>
      {randomNumber !== null && (
        <Text style={styles.result}>Número sorteado: {randomNumber}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  input: {
    width: '80%',
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  button: {
    width: '80%',
    marginBottom: 20,
  },
  result: {
    fontSize: 22,
    marginTop: 20,
    color: 'green',
    fontWeight: 'bold',
  },
});
