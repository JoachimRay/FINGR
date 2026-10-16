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

	function goToNext() {
		setIndex((currentIndex) => currentIndex + 1);
	}

	function handlePass() {
		goToNext();
	}

	function handleViolet() {
		goToNext();
	}

	function handleStartOver() {
		setIndex(0);
	}

	if (!item) {
		return (
			<View className="items-center gap-4">
				<Text>You're all caught up</Text>
				<Pressable onPress={handleStartOver}>
					<Text>Start over</Text>
				</Pressable>
			</View>
		);
	}
	return (
		<View className="w-full px-6 gap-6">
			<Card key={item.id} className="border-gray-200 bg-white">
				<CardHeader>
					<CardTitle className="text-xl text-gray-900">{item.name}</CardTitle>
				</CardHeader>
				<CardContent>
					<Text className="text-gray-700">{item.interests}</Text>
				</CardContent>
			</Card>
			<View className="flex-row justify-center gap-8">
				<Pressable onPress={handlePass}>
					<Text>Pass</Text>
				</Pressable>
				<Pressable onPress={handleViolet}>
					<Text>Violet</Text>
				</Pressable>
			</View>
		</View>
	);
}
