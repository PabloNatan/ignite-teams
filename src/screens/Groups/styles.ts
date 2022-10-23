import { Text, View } from "react-native";
import styled from "styled-components/native";

export const Wrapper = styled(View)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 24px;
`;

export const CustomText = styled(Text)`
  font-size: 16px;
  color: #fff;
`;
