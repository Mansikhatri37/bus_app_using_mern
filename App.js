import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { Provider as PaperProvider } from "react-native-paper";
import { LogBox } from "react-native";
// Add custom modules only after native modules are imported for better readability.
import StackNavigator from "./navigation/StackNavigator";
import store from "./store";

LogBox.ignoreAllLogs(true);
export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PaperProvider>
          <StackNavigator isLoggedIn={true} />
        </PaperProvider>
      </Provider>
    </NavigationContainer>
  );
}
