import { useEffect, useState } from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { ScrollView } from "react-native-web";
import { styles } from "../utils/styles";

export default function FetchNews() {
  const [data, setData] = useState([]); //useState é um hook, ele é usado para armazenar dados

  function fetchNewsData() {
    fetch("https://jsonplaceholder.typicode.com/posts") //fetch faz uma requisição
      .then((response) => response.json()) //transforma em json
      .then((json) => setData(json)) //mostra na tela
      .catch((error) => console.error(error)); //mostra o erro
  }
  useEffect(() => {
    //useEffect é um hook, ele é executado quando o componente é montado
    fetchNewsData();
  }, []); //array vazio, ele só executa uma vez

  return (
    <View style={styles.container}>
    <ScrollView>
      <View>
      <Text>Fetch News</Text>
      {data.map(
        (
          item //map percorre o array
        ) => (
          <View key={item.id}>
            <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
            <Text>{item.body}</Text>
          </View>
        )
      )}
      </View>
    </ScrollView>
    </View>
  );
}
