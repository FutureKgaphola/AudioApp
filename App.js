import { StyleSheet } from "react-native";
import HomeRecorder from "./screen/HomeRecorder";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();
const options={title:'',headerShown: false};
export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName="HomeRecorder">
        <Stack.Screen name="HomeRecorder" component={HomeRecorder} options={options}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
    alignItems: "center",
    justifyContent: "center",
  },
});
