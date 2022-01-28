import { Text, SafeAreaView, View, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LottieView from "lottie-react-native";
import firebase from "../firebase";
import MenuItems from "../components/restaurantDetail/MenuItems";

export default function OrderCompleted() {
	const [lastOrder, setLastOrder] = useState({
		items: [
			{
				title: "Bologna",
				description: "With butter lettuce, tomato and sauce bechamel",
				price: "$13.50",
				image:
					"https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
			},
		],
	});

	const { items, restaurantName } = useSelector(
		state => state.cartReducer.selectedItems
	);

	const total = items
		.map(item => Number(item.price.replace("$", "")))
		.reduce((prev, curr) => prev + curr, 0);

	const totalUSD = `$${total}0`;

	useEffect(() => {
		const db = firebase.firestore();
		const unsubscribe = db
			.collection("orders")
			.orderBy("createdAt", "desc")
			.limit(1)
			.onSnapshot(snapshot => {
				snapshot.docs.map(doc => {
					setLastOrder(doc.data());
				});
			});
		return () => unsubscribe();
	}, []);

	return (
		<SafeAreaView style={{ marginTop: 40, flex: 1, backgroundColor: "white" }}>
			<View style={{ margin: 15, alignItems: "center", height: "100%" }}>
				<LottieView
					style={{ height: 100, alignSelf: "center", marginBottom: 25 }}
					source={require("../assets/animations/782-check-mark-success.json")}
					autoPlay
					speed={0.5}
					loop={false}
				/>
				<Text style={{ fontSize: 20, fontWeight: "bold" }}>
					Your order at {restaurantName} has been places for {totalUSD}
				</Text>
				<ScrollView>
					<MenuItems foods={lastOrder.items} hideCheckbox={true} />
					<LottieView
						style={{ height: 200, alignSelf: "center", marginBottom: 25 }}
						source={require("../assets/animations/cooking.json")}
						autoPlay
						speed={0.5}
					/>
				</ScrollView>
			</View>
		</SafeAreaView>
	);
}
