import React from "react";
import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabsLayout() {
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: "Home",
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="home" color={color} size={size} />
					),
				}}
			/>
			<Tabs.Screen
				name="about"
				options={{
					title: "About",
					tabBarIcon: ({ color, size }) => (
						<Ionicons
							name="information"
							color={color}
							size={size}
						/>

					),
				}}
			/>
		</Tabs>
	);
}
