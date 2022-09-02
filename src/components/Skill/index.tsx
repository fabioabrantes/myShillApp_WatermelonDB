import React from 'react';
import {useTheme} from 'styled-components/native';
import { Entypo } from '@expo/vector-icons';

import { Container, Icon, Name, Options, Option } from './styles';

export type SkillProps = {
  id: string;
  name: string;
  type: string;
}

type Props = {
  data: SkillProps;
  onRemove: () => void;
  onEdit: () => void;
}

export function Skill({ data, onRemove, onEdit }: Props) {
  const theme =useTheme();
  
  return (
    <Container>
      <Icon type={data.type}>
        <Entypo
          name={data.type === "soft" ? "user" : "tools"}
          color={theme.COLORS.WHITE}
          size={20}
        />
      </Icon>

      <Name>{data.name}</Name>

      <Options>
        <Option onPress={onEdit}>
          <Entypo
            name="edit"
            color={theme.COLORS.ICON_EDIT}
            size={20}
          />
        </Option>

        <Option onPress={onRemove}>
          <Entypo
            name="trash"
            color={theme.COLORS.ICON_TRASH}
            size={20}
          />
        </Option>
      </Options>
    </Container>
  );
}