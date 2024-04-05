import { Button } from '@rneui/themed'
import { StyleSheet } from 'react-native'
import { View } from 'react-native'

export const Fila = ({ col1, col1Color, col2, col2Color, col3, col3Color, col4 }) => {

    return <View style={styles.fila}>
        <View style={styles.columna}>
            <Button titleStyle={styles.boton} color={col1Color}>{col1}</Button>
        </View>
        <View style={styles.columna}>
            <Button titleStyle={styles.boton} color={col2Color}>{col2}</Button>
        </View>
        <View style={styles.columna}>
            <Button titleStyle={styles.boton} color={col3Color}>{col3}</Button>
        </View>
        <View style={styles.columna}>
            <Button titleStyle={styles.boton} color="warning">{col4}</Button>
        </View>
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
