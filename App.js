import { Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button} from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      input: ''
    };
    this.entradaNome = this.entradaNome.bind(this);
  }

  entradaNome(texto) {
    if(texto.length > 0) {
      this.setState({nome: 'Obrigado por acessar e inserir seus dados : ' + texto});
    } else {
      this.setState({nome: ''})
    }
  }

  render() {
    return(
      <View style={styles.container}>
        <TextInput
        style={styles.input}
        placeholder="Digite seu nome:"
        underlineColorAndroid="transparent"
        onChangeText={this.entradaNome}
        />

        <Text style={styles.texto}>{this.state.nome}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c6d6c5',
  },
  input: {
    borderWidth: 1,
    borderColor: 'red',
    margin: 14,
    fontSize: 15,
    padding: 8,
  },
  texto: {
    fontSize: 15,
    textAlign: 'center',
  },
});

export default App;