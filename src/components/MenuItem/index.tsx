import React from 'react';
import {useTheme} from 'styled-components/native';
import { TouchableOpacityProps } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import { Container, Title } from './styles';

type Props = TouchableOpacityProps & {
  title: string;
  isActive?: boolean;
}

export function MenuItem({ title, isActive = false, ...rest }: Props) {
  const theme =useTheme();

  return (
    <Container
      isActive={isActive}
      {...rest}
    >
      <Entypo
        name={title === "Soft Skills" ? "user" : "tools"}
        color={theme.COLORS.WHITE}
        size={24}
      />

      <Title>{title}</Title>
    </Container>
  );
}