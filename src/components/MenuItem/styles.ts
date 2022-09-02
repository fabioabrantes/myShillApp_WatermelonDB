import styled from 'styled-components/native';

type Props = {
    isActive: boolean;
}

export const Container = styled.TouchableOpacity<Props>`
    align-items: center;
    background-color: ${({ isActive,theme }) => isActive ? theme.COLORS.PRIMARY : theme.COLORS.SECONDARY};
    padding: 24px 10px;
    border-radius: 8px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.heading};
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-weight: bold;
    margin: 7px 24px 0;
`;
