import React from 'react'
import {Text, Image} from 'react-native';
import { Container } from './styles';
import Logo from '../../../assets/image/Logo.png';


export default function Header() {
    return (
        <Container>
            <Image source={Logo}/>
        </Container>
    )
}