import { Image, View } from "react-native";
import { Text, TextInput } from "react-native-paper";
import { styles } from "../utils/styles";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image
          source={{ uri: "https://picsum.photos/200/3000" }}
          style={{ width: 200, height: 200 }}
        />
        <Text></Text>
        <TextInput label="Email" placeholder="Digite seu email" />
        <TextInput
          label="Senha"
          placeholder="Digite sua Senha"
          secureTextEntry={true} // faz com que o texto pareça uma senha
        />
      </View>
    </View>
  );
}
