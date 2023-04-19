import { useEffect, useState } from "react";
import { Image, View } from "react-native";
import { Button, Dialog, Portal, Provider, Text } from "react-native-paper";
import { styles } from "../utils/styles";

export default function RMGameScreen() {
  const [personagem, setPersonagem] = useState(null);
  const [personagens, setPersonagens] = useState([]);
  const [totalPersonagens, setTotalPersonagens] = useState(1);
  const [visible, setVisible] = useState(false);
  const [correto, setCorreto] = useState(true);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((json) => {
        setTotalPersonagens(json.info.count);
      });
  }, []);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/" + returnRandomNumber())
      .then((response) => response.json())
      .then((json) => {
        setPersonagem(json);
      });
  }, [totalPersonagens]);

  useEffect(() => {
    buscarPersonagem();
  }, [totalPersonagens]);

  function buscarPersonagem() {
    fetch("https://rickandmortyapi.com/api/character/" + returnRandomNumber())
      .then((response) => response.json())
      .then((json) => {
        setPersonagem(json);
      });
  }

  async function handlePersonagemVivoOuMorto(resposta) {
    const isAlive = personagem.status === "Alive";
    console.log("isAlive", isAlive);
    console.log("resposta", resposta);
    if (
      (resposta === "vivo" && isAlive) ||
      (resposta === "morto" && !isAlive)
    ) {
      setCorreto(true);
      showDialog();
      buscarPersonagem();
    } else {
      setCorreto(false);
      showDialog();
      buscarPersonagem();
    }
  }

  const returnRandomNumber = () => {
    let randomNumber = Math.floor(Math.random() * totalPersonagens) + 1;

    // canoot return 0
    if (randomNumber === 0) {
      return 1;
    }
    return randomNumber;
  };

  return (
    <Provider>
      <View style={styles.container}>
        <Text style={styles.title}>Rick and Morty Game</Text>
        <Text style={styles.subtitle}>
          Você sabe se o personagem está vivo?
        </Text>
        <Text>Resposta: {personagem?.status}</Text>
        {personagem && (
          <View>
            <Text
              style={{ fontSize: 32, textAlign: "center", marginVertical: 20 }}
            >
              Joguinho RickMorty!
            </Text>
            <Image
              source={{ uri: personagem.image }}
              style={{ width: 200, height: 200, alignSelf: "center" }}
            />
            <Text
              style={{ fontSize: 32, textAlign: "center", marginVertical: 20 }}
            >
              O/a personagem {personagem.name} está vivo/a/e?
            </Text>
            <View style={{ flexDirection: "row", gap: 20 }}>
              <Button
                style={{ align: "center" }}
                mode="contained"
                onPress={() => handlePersonagemVivoOuMorto("vivo")}
              >
                SIM
              </Button>
              <Button
                style={{ align: "center" }}
                mode="contained"
                onPress={() => handlePersonagemVivoOuMorto("morto")}
              >
                NÃO
              </Button>
            </View>
          </View>
        )}

        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Está Vivo ou Morto?</Dialog.Title>
            <Dialog.Content>
              {correto ? (
                <Text variant="bodyMedium">
                  Você acertou! O/a personagem {personagem?.name} está{" "}
                  {personagem?.status}
                </Text>
              ) : (
                <Text variant="bodyMedium">
                  Você errou! O/a personagem {personagem?.name} está{" "}
                  {personagem?.status}
                </Text>
              )}
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>Próximo. </Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </Provider>
  );
}
