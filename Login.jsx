import React, { Component } from 'react';
import { View, Text , TextInput , ImageBackground, StyleSheet, Dimensions, ScrollView, Button, Alert} from 'react-native';

const { height } = Dimensions.get('window');

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usuario:"",
            contra: "",
        };
    }

    render() {
        const log = () =>{
            
            if (this.state.usuario === "" || this.state.contra === "") {
                Alert.alert("Error al iniciar sesion","Asegurese que las credenciales sean correctas o esten llenos los campos")
                
            }
            else{
                //Falta validacion de existencia del usuario
                Alert.alert("Inicio correcto",`Bienvenido ${this.state.usuario}`, )
            }


            this.setState({
                usuario: "",
                contra: ""
            });
        }
        return (
        <View style={style.container}>
            <ScrollView >
                <ImageBackground  source={require('./images/fondo.jpg')} resizeMode="cover" style={style.image} >
                <View style={style.inputView}>
                    <View style={style.viewLabel}>
                        <Text style={style.label}>
                            Usuario 
                        </Text>
                    </View>
                    <TextInput style={style.input} placeholderTextColor={"gray"}  placeholder='Ingresa tu usuario' value={this.state.usuario} onChangeText={usuario => this.setState({usuario})}/>
                    <View style={style.viewLabel}>
                        <Text style={style.label}>
                            Contraseña 
                        </Text>
                    </View>
                    <TextInput style={style.input} placeholderTextColor={"gray"} placeholder='Ingresa tu contraseña' secureTextEntry={true} value={this.state.contra} onChangeText={contra => this.setState({contra})}/>
                    <View style={style.viewButton}>
                        <Button title='Ingresar' onPress={log} color={"black"} />
                    </View>
                    
                </View>
            </ImageBackground>
            </ScrollView>
            
        </View>
        );
    }
}

const style = StyleSheet.create({
    container:{
        flex:1,
    },
    image:{
        flex:1,
        alignItems:"center",
        width:"100%",
        height:height,
    },
    inputView:{
        backgroundColor:"rgba(255, 255, 255, 0.9)",
        width: "85%",
        height:400,
        marginTop:"35%",
        borderRadius:10,
        alignItems:"center"
    }, 
    input: {
        height: 50,
        width:"80%",
        margin:"1%",
        borderWidth: 1,
        padding: 10,
        fontSize:18,
        borderRadius:5,
        color:"black"
    },
    viewLabel:{
        width:"100%"
    },
    label:{
        padding:"3%",
        fontSize:30,
        textAlign:"left",
        fontStyle:"italic",
        color:"black"
    },
    viewButton:{
        marginTop:"7%",
        width:"80%",
    },
})