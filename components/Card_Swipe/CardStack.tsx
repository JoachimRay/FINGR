import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Text} from "@/components/ui/text";

import {useState} from "react";
import {Pressable, View} from "react-native";

import dummy from "@/data/dummy.json";
import type {Profile} from "@/types/profile";

const profiles: Profile[] = dummy;

export default function CardStack() {
	const [index, setIndex] = useState(0);
	const item = profiles[index];

	function SwipeNext() {
		setIndex((currentIndex) => (currentIndex + 1) % profiles.length);
	}

	return (
		<View className="w-full px-6">
			<Pressable onPress={SwipeNext}>
				<Card key={item.id} className="border-gray-200 bg-white">
					<CardHeader>
						<CardTitle className="text-xl text-gray-900">{item.name}</CardTitle>
					</CardHeader>
					<CardContent>
						<Text className="text-gray-700">{item.interests}</Text>
					</CardContent>
				</Card>
			</Pressable>
		</View>
	);
}
