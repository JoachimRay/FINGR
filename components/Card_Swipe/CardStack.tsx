import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Text } from "@/components/ui/text";
import dummy from "@/data/dummy.json";
import { useState } from "react";
import { Pressable, SafeAreaView, View } from "react-native";

export default function CardStack() {
  const [index, setIndex] = useState(0);
  const item = dummy[index];

  function SwipeNext() {
    setIndex((currentIndex) => (currentIndex + 1) % dummy.length);
  }

  return (
    <div>
      <SafeAreaView className="flex-1 bg-gray-50">
        <View className="flex-1 justify-center items-center px-6">
          <Pressable onPress={SwipeNext}>
            <Card key={item.id} className="border-gray-200 bg-white">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">
                  {item.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Text className="text-gray-700">{item.interests}</Text>
              </CardContent>
            </Card>
          </Pressable>
        </View>
      </SafeAreaView>
    </div>
  );
}
