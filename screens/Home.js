import React, { useEffect, useState } from "react";
import { View, SafeAreaView, ScrollView } from "react-native";
import Categories from "../components/home/Categories";
import HeaderTabs from "../components/home/HeaderTabs";
import SearchBar from "../components/home/SearchBar";
import RestaurantItems, {
	localRestaurants,
} from "../components/home/RestaurantItems";
import { Divider } from "react-native-elements";
import BottomTabs from "../components/home/BottomTabs";

const YELP_API_KEY =
	"6QBOFEnGXnSeZDx1buF1aUY0enyKVHn7uS8A7uBJiJ-cW2LSSxHSK7Uh2Dm-rvj7ctaO6zhtah5PNkZyMT52vOo1zwYJ4PjYJHmVInwfayhPuXn0Vc9Pz3PzS2HfYXYx";

export default function Home({ navigation }) {
	const [restaurantData, setRestaurantData] = useState(localRestaurants);
	const [city, setCity] = useState("Chicago");
	const [activeTab, setActiveTab] = useState("Delivery");

	const getRestaurantFromYelp = () => {
		const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

		const apiOptions = {
			headers: {
				Authorization: `Bearer ${YELP_API_KEY}`,
			},
		};
		return fetch(yelpUrl, apiOptions)
			.then(res => res.json())
			.then(results =>
				setRestaurantData(
					results.businesses.filter(business =>
						business.transactions.includes(activeTab.toLowerCase())
					)
					// console.log(results.businesses[0])
					// results.businesses,
				)
			);
	};

	useEffect(() => {
		getRestaurantFromYelp();
	}, [city, activeTab]);

	return (
		<SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
			<View style={{ backgroundColor: "white", padding: 15, paddingTop: 40 }}>
				<HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
				<SearchBar cityHandler={setCity} />
			</View>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Categories />
				<RestaurantItems
					restaurantData={restaurantData}
					navigation={navigation}
				/>
			</ScrollView>
			<Divider width={1} />
			<BottomTabs />
		</SafeAreaView>
	);
}
