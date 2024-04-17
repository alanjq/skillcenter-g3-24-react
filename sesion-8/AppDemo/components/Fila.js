import { Button } from '@rneui/themed'
import { StyleSheet } from 'react-native'
import { View } from 'react-native'

export const ejemplo = [
    {label: 'A', styles: {
        color: 'red',
    }},
    {label: 'B', styles: 'green'},
    {label: 'C', styles: 'blue'},
]

export const Fila = ({ columns }) => {

    return <View style={styles.fila}>
        {
            columns.map((col, key)=>
                <View key={key} style={col.styles}>
                    <Button> {col.label} </Button>
                </View>)
        }
    </View>
}

// Usamos una cuadrícula de 3 columnas por fila
const styles = StyleSheet.create({
    // Estilos para la fila
    fila: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        width: '100%'
    },
    // Estilos para la columna
    columna: {
        flexDirection: 'column',
        width: '15%',
    },
    boton: {
        fontSize: 25,
        fontWeight: 'bold'
    }
})
