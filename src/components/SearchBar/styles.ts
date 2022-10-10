import styled from 'styled-components/native';
import {TextInput} from 'react-native'

export const Container = styled.View`
flex-direction: row;
width: 100%;
`;

export const Input = styled(TextInput)`
height: 54px;
width: 271px;
color: #262626;
border-radius: 6px;
`;