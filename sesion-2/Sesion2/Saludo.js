import { Text, View } from 'react-native';

export default function Saludo(props) {
    console.log('PROPS de Saludo', props);

    return <View style={props.style}>
        <Text style={props.style.innerText}> Hola: {props.name}</Text>
        <Text style={props.style.innerText}> Esta es la clase: {props.clase}</Text>
        <Text style={props.style.innerText}> Grupo: {props.grupo}</Text>
    </View>
}
