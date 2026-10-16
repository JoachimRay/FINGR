import {VioletIcon} from "@/components/icons/VioletIcon";
import {XIcon} from "@/components/icons/XIcon";
import {Text} from "@/components/ui/text";

import {LinearGradient} from "expo-linear-gradient";
import {useState} from "react";
import {Pressable, StyleSheet, View} from "react-native";

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
			<View
				key={item.id}
				className="relative w-full aspect-[350/461] rounded-3xl overflow-hidden">
				<View className="absolute inset-0 bg-blush justify-center items-center">
					<Text className="text-6xl text-wine">{item.name[0]}</Text>
				</View>
				<LinearGradient
					colors={["rgba(255,255,255,0)", "rgba(49,0,13,0.81)"]}
					locations={[0.35, 1]}
					style={StyleSheet.absoluteFill}
				/>
				<View className="absolute bottom-6 left-[22px] right-[22px] gap-2">
					<Text className="font-serif text-[34px] text-white">
						{item.name}, {item.age}
					</Text>
					<Text className="text-[13px] text-white">
						{item.interests.join(" · ")}
					</Text>
					<Text className="text-sm text-white">{item.bio}</Text>
				</View>
			</View>
			<View className="flex-row justify-center gap-[38px]">
				<Pressable
					onPress={handlePass}
					accessibilityRole="button"
					accessibilityLabel={`Pass on ${item.name}`}
					className="items-center gap-[5px] active:opacity-70">
					<View className="w-[60px] h-[60px] rounded-full bg-white border border-[#EAD3C8] justify-center items-center">
						<XIcon />
					</View>
					<Text className="text-xs text-ink">Pass</Text>
				</Pressable>
				<Pressable
					onPress={handleViolet}
					accessibilityRole="button"
					accessibilityLabel={`Send a violet to ${item.name}`}
					className="items-center gap-[5px] active:opacity-70">
					<View className="w-[60px] h-[60px] rounded-full bg-violet justify-center items-center">
						<VioletIcon />
					</View>
					<Text className="text-xs text-ink">Violet</Text>
				</Pressable>
			</View>
		</View>
	);
}
