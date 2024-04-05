import { Children } from 'react'
import { StyleSheet, View } from 'react-native'

export const FilaBoton = (props) => {
    return <View style={styles.fila}>
            
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
