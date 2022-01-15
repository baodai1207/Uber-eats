import React from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	ScrollView,
	SafeAreaView,
} from "react-native";
import { Divider } from "react-native-elements";

const foods = [
	{
		title: "Pho",
		description: "Pho is a Vietnamese Soup",
		price: "$10.95",
		image:
			"https://www.simplyrecipes.com/thmb/NOwXpq1nenarGiJnOTV7o5Oe_Aw=/1777x1333/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__04__Beef-Pho-LEAD-2-afc6b6a9144947fb9d72070d7ea8c95c.jpg",
	},
	{
		title: "Banh Mi",
		description: "Banh Mi is a bread with ham and meat",
		price: "$7.95",
		image:
			"https://omnivorescookbook.com/wp-content/uploads/2020/03/1912_Leftover-Ham-Banh-Mi_550.jpg",
	},
	{
		title: "Goi cuon",
		description: "Make with noodle and pork and shrimp",
		price: "$6.95",
		image:
			"https://www.manilaspoon.com/wp-content/uploads/2019/09/Rice-Noodles-Yum-GoiCuonImage-1.jpg",
	},
	{
		title: "Bun Bo Hue",
		description: "Spicy Soup with beef shank and import from Hue",
		price: "$13.95",
		image:
			"https://pupswithchopsticks.com/wp-content/uploads/bun-bo-hue-done2-500x375.jpg",
	},
	{
		title: "Ca Chien Xu",
		description: "Deep Fried Fish with fish sauces and vegetable",
		price: "$18.95",
		image:
			"https://d13jio720g7qcs.cloudfront.net/images/guides/origin/5d60b0da4746e.jpg",
	},
];

const styles = StyleSheet.create({
	menuItemStyle: {
		flexDirection: "row",
		justifyContent: "space-between",
		margin: 20,
	},
	titleStyle: {
		fontSize: 19,
		fontWeight: "600",
	},
});

export default function MenuItems() {
	return (
		<SafeAreaView>
			<ScrollView showsVerticalScrollIndicator={false}>
				{foods.map((food, index) => (
					<View key={index}>
						<View style={styles.menuItemStyle}>
							<FoodInfo food={food} />
							<FoodImage food={food} />
						</View>
						<Divider width={0.5} orientation='vertical' />
					</View>
				))}
				{/* Does the trick for ScrollView error in
				Android ⏬ */}
				<View style={{ height: 650 }} />
			</ScrollView>
		</SafeAreaView>
	);
}

const FoodInfo = props => (
	<View style={{ width: 240, justifyContent: "space-evenly" }}>
		<Text style={styles.titleStyle}>{props.food.title}</Text>
		<Text>{props.food.description}</Text>
		<Text>{props.food.price}</Text>
	</View>
);

const FoodImage = props => (
	<View>
		<Image
			source={{ uri: props.food.image }}
			style={{ width: 100, height: 100, borderRadius: 8 }}
		/>
	</View>
);
