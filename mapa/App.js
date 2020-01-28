import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Alert, TouchableOpacity } from "react-native";

export default class App extends Component {
  state = {
    ubicacion: null
  };

  encontrarCoordenadas = () => {
    navigator.geolocation.getCurrentPosition(
      posicion => {
        const coordenadas = JSON.stringify(posicion);
        alert(coordenadas);

        this.setState({ coordenadas });
      },
      error => Alert.alert(error.message),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };

  render() {
    return (
      <View style={estilos.contenedor}>
        <TouchableOpacity onPress={this.encontrarCoordenadas}>
          <Text style={estilos.texto}>Mi Ubicacion</Text>
          <Text>Ubicación: {this.state.ubicacion}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e1e7ea"
  },
  texto: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});