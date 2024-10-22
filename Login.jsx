import React, {Component} from 'react';
import {View, Text, Image, TextInput, Button, StyleSheet} from 'react-native';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      codigo: '',
      nip: '',
    };
  }

  render() {
    const login = () => {
      console.log('entro');
      let _this = this;
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          // Typical action to be performed when the document is ready:
          console.log(xhttp.responseText);
          
          if (!xhttp.responseText === '0') {
            //error
          } else {
            _this.props.navigation.navigate('drawer',{codigo:_this.state.codigo,nip:_this.state.nip});
          }
        }
      };
      xhttp.open(
        'GET',
        'http://148.202.152.33/cucei/credenciales.php?codigo=' +
          this.state.codigo +
          '&nip=' +
          this.state.nip,
        true,
      );
      xhttp.send();
    };
    return (
      <View>
        
        <View style={styles.imageContainer}>
          
        </View>
        <View style={styles.inputsContainer}>
          <View
          style={{
            borderRadius: 15,
            borderColor: 'black',
            borderWidth: 3,
            width: '45%',
          }}>
          <TextInput
            style={{color:'black'}}
            placeholder="Codigo"
            placeholderTextColor="gray"
            onChangeText={codigo => this.setState({codigo})}
          />
          </View>
        </View>

        <View style={styles.inputsContainer}>
          <View
            style={{
              borderRadius: 15,
              borderColor: 'black ',
              borderWidth: 3,
              width: '45%',
            }}>
            <TextInput
              style={{color:'black'}}
              placeholder="nip"
              placeholderTextColor="gray"
              onChangeText={nip => this.setState({nip})}
              secureTextEntry={true}
            />
          </View>
        </View>
        

        <View style={{alignItems:'center'}}>
          <View
            style={{
              borderRadius: 9,
              borderColor: 'black',
              width: '45%',
              marginTop:'5%'
            }}>
            <Button title="entrar" onPress={login} />
          </View>
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageContainer:{
    alignItems: "center",
    top:15,
  },
  inputsContainer:{
    alignItems:'center',  
    marginTop:'10%'
  }
})