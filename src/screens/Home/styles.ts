import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  padding: 24px;
  padding-top: ${getStatusBarHeight() + 24}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.heading};
  font-size: 34px;
  color: #FFF;

  font-weight: bold;
  margin: 24px 0;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 56px;
  border-color: ${({ theme }) => theme.COLORS.BACKGROUND};
  border-width:1px ;
  border-style: solid;
  border-radius: 5px;
  padding: 16px;
  background: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Form = styled.View`
  padding: 24px;
`;

export const FormTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.heading};
  font-size: 24px;
  color: ${({ theme }) => theme.COLORS.BACKGROUND};
  font-weight: bold;
  margin-bottom: 12px;
`;
