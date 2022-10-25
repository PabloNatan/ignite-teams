import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";
import * as S from "./styles";

export function NewGroup() {
  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate("players", { group: "Time A" });
  }
  return (
    <S.Wrapper>
      <Header showBackButton />
      <S.Content>
        <S.Icon />

        <Highlight
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
        />

        <Input placeholder="Nome da turma" />

        <Button
          title="Criar"
          style={{ marginTop: 20 }}
          onPress={handleNewGroup}
        />
      </S.Content>
    </S.Wrapper>
  );
}
