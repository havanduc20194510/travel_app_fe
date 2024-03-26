import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";

const App = () => {
  return (
    <View className="flex-1 items-center justify-center  bg-white">
      <Text className="font-bold text-green-300">
        This is my code base for travel app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default App;