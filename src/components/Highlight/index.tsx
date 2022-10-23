import * as S from "./styles";

type Props = {
  title: string;
  subtitle: string;
};

export function Highlight({ title, subtitle }: Props) {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
    </S.Wrapper>
  );
}
