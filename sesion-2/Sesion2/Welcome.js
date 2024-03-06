import { Text, View } from "react-native"

export const Welcome = (props) => <View>
        <Text>Welcome to React Native. {props.children}</Text>
    </View>

export default Welcome
