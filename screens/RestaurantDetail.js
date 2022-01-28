import React from "react";
import { View, Text } from "react-native";
import { Divider } from "react-native-elements";
import About from "../components/restaurantDetail/About";
import MenuItems from "../components/restaurantDetail/MenuItems";
import ViewCart from "../components/restaurantDetail/ViewCart";

const foods = [
	{
		title: "Pho",
		description: "Pho is a Vietnamese Soup",
		price: "$10.50",
		image:
			"https://www.simplyrecipes.com/thmb/NOwXpq1nenarGiJnOTV7o5Oe_Aw=/1777x1333/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__04__Beef-Pho-LEAD-2-afc6b6a9144947fb9d72070d7ea8c95c.jpg",
	},
	{
		title: "Banh Mi",
		description: "Banh Mi is a bread with ham and meat",
		price: "$7.20",
		image:
			"https://omnivorescookbook.com/wp-content/uploads/2020/03/1912_Leftover-Ham-Banh-Mi_550.jpg",
	},
	{
		title: "Goi cuon",
		description: "Make with noodle and pork and shrimp",
		price: "$6.50",
		image:
			"https://www.manilaspoon.com/wp-content/uploads/2019/09/Rice-Noodles-Yum-GoiCuonImage-1.jpg",
	},
	{
		title: "Bun Bo Hue",
		description: "Spicy Soup with beef shank and import from Hue",
		price: "$13.50",
		image:
			"https://pupswithchopsticks.com/wp-content/uploads/bun-bo-hue-done2-500x375.jpg",
	},
	{
		title: "Ca Chien Xu",
		description: "Deep Fried Fish with fish sauces and vegetable",
		price: "$18.20",
		image:
			"https://d13jio720g7qcs.cloudfront.net/images/guides/origin/5d60b0da4746e.jpg",
	},
];

export default function RestaurantDetail({ route, navigation }) {
	return (
		<View>
			<About route={route} />
			<Divider width={1.8} style={{ marginVertical: 20 }} />
			<MenuItems restaurantName={route.params.name} foods={foods} />
			<ViewCart navigation={navigation} />
		</View>
	);
}
