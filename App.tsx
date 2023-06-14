import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import FirstScreen from "./src/components/FirstScreen";
import SecondScreen from "./src/components/SecondScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { QueryClient,QueryClientProvider } from "@tanstack/react-query";
export default function App() {
  const queryClient = new QueryClient();
  const Stack = createNativeStackNavigator();
  return (
<QueryClientProvider client={new QueryClient()}>
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="FirstScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen component={FirstScreen} name="FirstScreen" />
        <Stack.Screen component={SecondScreen} name="SecondScreen" />
      </Stack.Navigator>
    </NavigationContainer>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: "#fff",
  },
});
