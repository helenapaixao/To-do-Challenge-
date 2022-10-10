import React from 'react'
import { Container, Text} from './styles'
import RadioButton from '../RadioButton'

export default function Card() {
    return (
        <Container>
            <RadioButton hasSelect={true}/>
            <Text>
            Integer urna interdum massa 
            libero auctor neque turpis turpis 
            semper.</Text>
        </Container>
    )
}