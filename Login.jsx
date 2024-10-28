import React, { Component } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';
import { supabase } from './Supabase';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      correo: "",
      password: "",
    };
  }

  render() {
      const Loggin = async() =>{
        const {error} = await supabase.auth.signInWithPassword({
          email: this.state.correo,
          password: this.state.password,
        })
        if(error){
          Alert.alert("El correo o la contrasseña no coincide")
        }else {
          Alert.alert("Inicio de sesion correcto" ,'Bienvenido ',);
          
        }
      }

    return (
      <View style={styles.container}>
        <ImageBackground source={require('./images/fondo.jpg')} style={styles.backgroundImage}>
          <View style={styles.header}>
            <Text style={styles.title}>Login</Text>
          </View>

          <TextInput
            placeholder='Código'
            style={styles.input}
            placeholderTextColor="gray"
            value={this.state.correo}
            onChangeText={correo => this.setState({ correo })}
          />
          <TextInput
            placeholder='Contraseña'
            secureTextEntry={true}
            style={styles.input}
            placeholderTextColor="gray"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={Loggin}>Iniciar sesión</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  header: {
    marginBottom: 75,
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
  },
  input: {
    width: '80%',
    marginVertical: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fondo ligeramente transparente
    color: 'black',
  },
  button: {
    borderWidth: 2,
    borderRadius: 15,
    height: 50,
    width: '80%',
    backgroundColor: '#ffaf7a',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
  },
});
