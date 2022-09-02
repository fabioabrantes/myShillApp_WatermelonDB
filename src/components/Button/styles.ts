import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    width: 100%;
    height: 56px;
    background-color:${({ theme }) => theme.COLORS.BTN};
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    margin-top: 16px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.FONTS.heading};
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 15px;
    font-weight: bold;
`;