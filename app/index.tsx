import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View
      className="flex-1 items-center justify-center bg-sky-500"
    >
      <Text className="font-semibold text-2xl text-sky-950 mb-4">Edit app/index.tsx to edit this screen.</Text>

      <TouchableOpacity onPress={() => alert("Sup!")} className="px-12 py-6 bg-sky-950 rounded-full" activeOpacity={0.8}>
        <Text className="text-white text-xl">Get started</Text>
      </TouchableOpacity>
    </View>
  );
}
