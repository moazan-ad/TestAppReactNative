import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import axios from 'axios';
import ImageItem from './ImageItem';


export default function App() {
  const [images, setImages] = useState([]);
  

  // Infinite Scroll

  // const [page, setPage] = useState(1);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   fetchImages();
  // }, []);

  // const fetchImages = async () => {
  //   try {
  //     setLoading(true);
  //     const response = await axios.get(
  //       `https://pixabay.com/api/?key=37635459-ceb14046b1122910ff1c4b56e&q=nature&orientation=vertical&per_page=20&page=${page}`
  //     );
  //     const newImages = response.data.hits;
  //     setImages((prevImages) => [...prevImages, ...newImages]);
  //     setPage((prevPage) => prevPage + 1);
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // Infinite Scroll

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://pixabay.com/api/?key=37635459-ceb14046b1122910ff1c4b56e&q=nature&orientation=vertical&&min_height=450&max_height=500&per_page=20`
        );
        setImages(response.data.hits);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Image Gallery</Text>
    </View>
  );

  // const renderFooter = () => {
  //   if (!loading) return null;

  //   return (
  //     <View style={styles.footerContainer}>
  //       <ActivityIndicator size="medium" color="#999" />
  //     </View>
  //   );
  // };

  return (
    <SafeAreaView style={styles.container}>
      {renderHeader()}
      <FlatList
        data={images}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ImageItem item={item} />}
        // onEndReached={fetchImages}
        // onEndReachedThreshold={0.5}
        // ListFooterComponent={renderFooter}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    marginTop: 26,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  headerText: {
    fontFamily:'serif',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
