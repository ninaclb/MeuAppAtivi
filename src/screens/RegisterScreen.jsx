import { useState } from "react";
import { View } from "react-native";
import { Button, Paragraph, TextInput } from "react-native-paper";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { styles } from "../utils/styles";
export default function RegisterScreen({ navigation }) {
  const [nome, setNome] = useState("Tralala"); //variavel string "" [] array {} objeto
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  //função  lidar com o registro do usuário
  function handleLogin() {
    createUserWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        console.log("Usuário cadastrado com sucesso!");
        navigation.navigate("LoginScreen"); //aqui ele manda para a tela de login
      })
      .catch((error) => {
        console.log("Erro ao cadastrar usuário", error);

        //código de erro
        const errorCode = error.code; // auth/invalid-email
        //mensagem de erro
        if (errorCode === "auth/weak-password") {
          console.log("Senha muito fraca");
        }
        if (errorCode === "auth/email-already-in-use") {
          console.log("E-mail já cadastrado");
        }
        if (errorCode === "auth/invalid-email") {
          console.log("E-mail inválido");
        }
        if (errorCode === "auth/operation-not-allowed") {
          console.log("Operação não permitida");
        }
        if (errorCode === "auth/internal-error") {
          console.log("Erro interno");
        }
        if (errorCode === "auth/invalid-credential") {
          console.log("Credencial inválida");
        }
      });
  }

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Paragraph>Realize o seu cadastro {nome}</Paragraph>
        <TextInput
          label={"E-mail"}
          placeholder="Digite seu e-mail"
          value={email}
          onChangeText={setEmail}
          mode="outlined"
        />
        <TextInput
          placeholder="Digite sua senha"
          secureTextEntry={true} //texto parece senha
          value={senha}
          onChangeText={setSenha}
          mode="flat"
          style={{
            backgroundColor: "white",
            marginTop: 10,
            borderRadius: 5,
            borderColor: "black",
          }}
        />
        <Button onPress={handleLogin}>Registre-se</Button>
      </View>
    </View>
  );
}
