import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Browse" }} />
      <Tabs.Screen name="Matches" options={{ title: "Matches" }} />
    </Tabs>
  );
}
