import { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [ contato, setContato ] = useState('')
  const [ telefone, setTelefone ] = useState ('')
  const [ contatos, setContatos] = useState([])
  const [ contadorContatos, setContadorContatos ] = useState (0)

  const capturarContato = (contatoDigitado) =>{
    setContato(contatoDigitado)
  }
  const capturarTelefone = (telefoneDigitado) => {
    setTelefone(telefoneDigitado)
  }
  const adicionarContato = () => {
    setContatos(contatos => {
      setContadorContatos(contadorContatos + 1)
      return [{ key: contadorContatos.toString(), value: contato, telefone: telefone }, ...contatos]
    })
  }

  return (
    <View style={styles.container}>
      <View>
        <TextInput
          onChangeText={capturarContato}
          placeholder = 'Digite o nome do contato'
          style = {{borderBottomColor: 'black', borderBottomWidth: 1, marginBottom: 8, padding: 12}}
        />
        <TextInput
          onChangeText={capturarTelefone}
          placeholder = 'Digite o telefone do contato'
          style = {{borderBottomColor: 'black', borderBottomWidth: 1, marginBottom: 8, padding: 12}}
        />
        <Button
          title="Adicionar contato"
          onPress={adicionarContato}
        />
      </View>
      <FlatList
        data={contatos}
        renderItem={
          c => (
            <View>
              <Text>{c.item.value}</Text>
              <Text>{c.item.telefone}</Text>
            </View>
          )
        }
      />
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
