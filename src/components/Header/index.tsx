import * as S from "./styles";

import logoImage from "@assets/logo.png";

type Props = {
  showBackButton?: boolean;
};
export function Header({ showBackButton = false }: Props) {
  return (
    <S.Wrapper>
      {showBackButton && (
        <S.BackButton>
          <S.BackIcon />
        </S.BackButton>
      )}
      <S.Logo source={logoImage} />
    </S.Wrapper>
  );
}
