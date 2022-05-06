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
    console.log(contatos);
  }

  return (
    <View style={styles.telaPrincipalView}>
      <Text style={styles.textoTitulo}>Lista de contatos</Text>
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
          color='#363636'
        />
      </View>
      <FlatList
        data={contatos}
        renderItem={
          c => (
            <View style={styles.itemNaLista}>
              <Text>Nome: {c.item.value}</Text>
              <Text>Telefone: {c.item.telefone}</Text>
            </View>
          )
        }
      />
    </View>
  );
} 

const styles = StyleSheet.create({
  telaPrincipalView: {
    padding: 40,
    backgroundColor: '#F0E68C',
  },
  itemNaLista: {
    padding: 12,
    backgroundColor: '#C0C0C0',
    borderColor: '#808080',
    borderWidth: 1,
    borderRadius: 8,
    marginTop:8
  },
  textoTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 12
  }
});
