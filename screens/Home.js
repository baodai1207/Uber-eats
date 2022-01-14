import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, ScrollView } from 'react-native';
import Categories from '../components/Categories';
import HeaderTabs from '../components/HeaderTabs';
import SearchBar from '../components/SearchBar';
import RestaurantItems, {
  localRestaurants,
} from '../components/RestaurantItems';

const YELP_API_KEY =
  '6QBOFEnGXnSeZDx1buF1aUY0enyKVHn7uS8A7uBJiJ-cW2LSSxHSK7Uh2Dm-rvj7ctaO6zhtah5PNkZyMT52vOo1zwYJ4PjYJHmVInwfayhPuXn0Vc9Pz3PzS2HfYXYx';

export default function Home() {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState('Denver');

  const getRestaurantFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };
    return fetch(yelpUrl, apiOptions)
      .then(res => res.json())
      .then(results => setRestaurantData(results.businesses));
  };

  useEffect(() => {
    getRestaurantFromYelp();
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: '#eee', flex: 1 }}>
      <View style={{ backgroundColor: 'white', padding: 15, paddingTop: 50 }}>
        <HeaderTabs />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData} />
      </ScrollView>
    </SafeAreaView>
  );
}
