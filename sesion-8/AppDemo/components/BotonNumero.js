import { StyleSheet } from "react-native"

export function BotonNumero({ label, props }) {
    return (
        <View style={styles.columna}>
            <Button titleStyle={styles.boton} {...props}>{label}</Button>
        </View>
    )
}


const styles = StyleSheet.create({
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
