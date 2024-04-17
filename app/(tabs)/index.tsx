import React from "react";
import { StyleSheet } from 'react-native';
import { View } from '@/components/Themed';
import Title from "../../src/components/Title";
import Form from "../../src/components/Form";

export default function TabOneScreen() {
  return (
      <View style={styles.container}>
        <Title />
        <Form />
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //100% da tela
    backgroundColor: "#e0e5e5",
    paddingTop: 80,
  },
});

// Entrar na pasta: C:\Users\gcald\Documents\cursoreactnative\calculadoraImc\my-app>
// npx expo start
// Abrir o Expo Go no celular e acessar 'my-app'
