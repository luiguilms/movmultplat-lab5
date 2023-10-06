import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const seriesData = [
  {
    id: '1',
    serieTitle: 'Jujutsu Kaisen',
    books: [
      {
        id: '11',
        title: 'Volumen 1',
        author: 'Gege Akutami',
        coverImage: require('../assets/images/Volume_1.jpg'),
      },
      {
        id: '12',
        title: 'Volumen 4',
        author: 'Gege Akutami',
        coverImage: require('../assets/images/Volume_4.jpg'),
      },
      {
        id: '13',
        title: 'Volumen 8',
        author: 'Gege Akutami',
        coverImage: require('../assets/images/Volume_8.jpg'),
      },
      {
        id: '14',
        title: 'Volumen 11',
        author: 'Gege Akutami',
        coverImage: require('../assets/images/Volume_11.jpg'),
      },
    ],
  },
  {
    id: '2',
    serieTitle: 'Saga de Stephen King',
    books: [
      {
        id: '21',
        title: 'IT',
        author: 'Stephen King',
        coverImage: require('../assets/images/it.jpg'),
      },
      {
        id: '22',
        title: 'El resplandor',
        author: 'Stephen King',
        coverImage: require('../assets/images/resplandor.jpg'),
      },
      {
        id: '23',
        title: 'Cementerio de animales',
        author: 'Stephen King',
        coverImage: require('../assets/images/cementerio.jpg'),
      },
      {
        id: '24',
        title: 'Carrie',
        author: 'Stephen King',
        coverImage: require('../assets/images/carrie.jpg'),
      },
    ],
  },
  {
    id: '3',
    serieTitle: 'Comics de Marvel',
    books: [
      {
        id: '31',
        title: 'Age of Ultron #1',
        author: 'Brian Michael Bendis',
        coverImage: require('../assets/images/ultron1.jpg'),
      },
      {
        id: '32',
        title: 'Hulk Smash Avengers #1',
        author: 'Tom Defalco',
        coverImage: require('../assets/images/hulk.jpg'),
      },
      {
        id: '33',
        title: 'Age of Ultron #2',
        author: 'Brian Michael Bendis',
        coverImage: require('../assets/images/ultron2.jpg'),
      },
      {
        id: '34',
        title: 'The Marvels Project #4',
        author: 'Ed Brubaker',
        coverImage: require('../assets/images/marvels.jpg'),
      },
    ],
  },
  // Agrega más series y libros según sea necesario
];

const SettingsScreen = () => {
  const renderBookItem = ({ item }) => (
    <View style={styles.bookContainer}>
      <Image
        source={item.coverImage}
        style={styles.bookImage}
      />
      <Text style={styles.bookTitle}>{item.title}</Text>
      <Text style={styles.bookAuthor}>{item.author}</Text>
    </View>
  );

  const renderSerieItem = ({ item }) => (
    <View style={styles.serieContainer}>
      <Text style={styles.serieTitle}>{item.serieTitle}</Text>
      <FlatList
        data={item.books}
        renderItem={renderBookItem}
        keyExtractor={(book) => book.id}
        horizontal={true}
      />
    </View>
  );

  return (
    <View>
      <FlatList
        data={seriesData}
        renderItem={renderSerieItem}
        keyExtractor={(serie) => serie.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  serieContainer: {
    margin: 10,
  },
  serieTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bookContainer: {
    margin: 10,
    alignItems: 'center',
  },
  bookImage: {
    width: 150,
    height: 200,
    borderRadius: 10,
  },
  bookTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  },
  bookAuthor: {
    fontSize: 14,
    color: 'gray',
  },
});

export default SettingsScreen;
