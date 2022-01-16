import React from "react";
import { View, Text, Image } from "react-native";

const yelpRestaurantInfo = {
	name: "Vietnamese Cuisine",
	image:
		"https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
	price: "$$",
	reviews: "1500",
	rating: 4.5,
	categories: [
		{ title: "Vietnamese" },
		{ title: "Best Food" },
		{ title: "coffee" },
	],
};

export default function About(props) {
	const { name, image, price, reviews, rating, categories } =
		props.route.params;

	const formattedCategories = categories.map(cat => cat.title).join(" • ");

	const description = `${formattedCategories} ${
		price ? " • " + price : ""
	} • 🎫 • ${rating} 🌟(${reviews}+)`;

	return (
		<View>
			<RestaurantImage image={image} />
			<RestaurantName name={name} />
			<RestaurantDescription description={description} />
		</View>
	);
}

const RestaurantImage = props => (
	<Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
);

const RestaurantName = props => (
	<Text
		style={{
			fontSize: 29,
			fontWeight: "bold",
			marginTop: 10,
			marginHorizontal: 15,
		}}
	>
		{props.name}
	</Text>
);

const RestaurantDescription = props => (
	<Text
		style={{
			marginTop: 10,
			marginHorizontal: 15,
			fontWeight: "400",
			fontSize: 15.5,
		}}
	>
		{props.description}
	</Text>
);
