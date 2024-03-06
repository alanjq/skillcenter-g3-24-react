import { StatusBar } from 'expo-status-bar';
import { Platform, PlatformColor, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Saludo from './Saludo';
import Welcome from './Welcome';


export default function App() {
  {/* text-align: center */ }
  const ESTILO = {
    textAlign: 'center'
  }

  const COMMON_STYLE = {
    padding: 3,
    color: 'green',
    innerText: {
      color: 'black',
    },
  }

  // Devuelve un color de fondo
  const customBackground = (colorname) => ({
    ...Platform.select({
      ios: {
        color: PlatformColor('label'),
        backgroundColor: PlatformColor(colorname),
      },
      android: {
        color: PlatformColor('?android:attr/textColor'),
        backgroundColor: PlatformColor('@android:color/holo_blue_bright'),
      },
      default: { color: 'black' },
    }),
  })

  const STYLE_1 = StyleSheet.create({
    ...customBackground('systemTealColor'),
    ...COMMON_STYLE
  })

  const STYLE_2 = StyleSheet.create({
    ...customBackground('systemPink'),
    ...COMMON_STYLE,
    innerText: {
      color: 'yellow',
    },
  })

  const STYLE_3 = StyleSheet.create({
    ...customBackground('systemOrange'),
    ...COMMON_STYLE,
    innerText: {
      color: 'white',
    },
  })

  return (
    <SafeAreaView>
      <View>
        <Text style={ESTILO}>Este es el primer componente</Text>
        <StatusBar style="auto" />
      </View>
      <View>
        <Welcome>
          <Text>A todos</Text>
          <Saludo style={STYLE_1} name="Victor" clase="Sesión 1" grupo={3} />
          <Saludo style={STYLE_2} name="Eduardo" clase="Sesión 8" grupo={5} />
          <Saludo style={STYLE_3} name="Ana Karen" clase="Sesión 9" grupo={1} />
        </Welcome>
        <Welcome>
          <Text>A toos</Text>
          <Saludo style={STYLE_1} name="Victor" clase="Sesión 1" grupo={3} />
          <Saludo style={STYLE_2} name="Eduardo" clase="Sesión 8" grupo={5} />
          <Saludo style={STYLE_3} name="Ana Karen" clase="Sesión 9" grupo={1} />
        </Welcome>
        <Welcome>
          <Text>A todos</Text>
          <Saludo style={STYLE_1} name="Victor" clase="Sesión 1" grupo={3} />
          <Saludo style={STYLE_2} name="Eduardo" clase="Sesión 8" grupo={5} />
          <Saludo style={STYLE_3} name="Ana Karen" clase="Sesión 9" grupo={1} />
        </Welcome>
        <Welcome>
          <Text>A todos</Text>
          <Saludo style={STYLE_1} name="Victor" clase="Sesión 1" grupo={3} />
          <Saludo style={STYLE_2} name="Eduardo" clase="Sesión 8" grupo={5} />
          <Saludo style={STYLE_3} name="Ana Karen" clase="Sesión 9" grupo={1} />
        </Welcome>
        <Welcome>
          <Text>A todos</Text>
          <Saludo style={STYLE_1} name="Victor" clase="Sesión 1" grupo={3} />
          <Saludo style={STYLE_2} name="Eduardo" clase="Sesión 8" grupo={5} />
          <Saludo style={STYLE_3} name="Ana Karen" clase="Sesión 9" grupo={1} />
        </Welcome>
        <Welcome>
          <Text>A todos</Text>
          <Saludo style={STYLE_1} name="Victor" clase="Sesión 1" grupo={3} />
          <Saludo style={STYLE_2} name="Eduardo" clase="Sesión 8" grupo={5} />
          <Saludo style={STYLE_3} name="Ana Karen" clase="Sesión 9" grupo={1} />
        </Welcome>
        <Welcome>
          <Text>A todos</Text>
          <Saludo style={STYLE_1} name="Victor" clase="Sesión 1" grupo={3} />
          <Saludo style={STYLE_2} name="Eduardo" clase="Sesión 8" grupo={5} />
          <Saludo style={STYLE_3} name="Ana Karen" clase="Sesión 9" grupo={1} />
        </Welcome>
      </View>
    </SafeAreaView>
  );
}
