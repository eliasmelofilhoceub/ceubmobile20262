import { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

class App extends Component {
  render() {
    return(
      <View>
      <Text style={{color: '#D93514', fontSize: 20}}>Introdução de Aplicação com imagem</Text>
      <Text>Aplicação</Text>
      <Image source={{uri: 'https://inovaveterinaria.com.br/wp-content/uploads/2015/04/gato-sem-raca-INOVA-scaled.jpg'}} 
      style={{width: 300, height: 200, alignItems: 'center'}}
      >
      </Image>

      <Imagem1 largura={200} altura={300}> </Imagem1>
      </View>
    );
  }
}

class Imagem1 extends Component {
  render() {
    let img = 'https://chemitec.com.br/wp-content/uploads/2025/04/como-cuidar-de-gatos-filhotes.jpg';

    return(
      <View>
        <Image source={{uri: img}} 
        style={{width: this.props.largura, height: this.props.altura}}>
        </Image>
      </View>
    );
  }
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2fdb1f',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
