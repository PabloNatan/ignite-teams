import * as S from "./styles";

type Props = {
  message: string;
};

export function ListEmpty({ message }: Props) {
  return (
    <S.Wrapper>
      <S.Message>{message}</S.Message>
    </S.Wrapper>
  );
}
