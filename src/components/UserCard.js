import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';

const UserCard = ({ avatar, name, brand, visitDate, time }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: avatar }} style={styles.avatar} />
      <View style={styles.info}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.brand}>{brand}</Text>
      </View>
      <View>
        <Text style={styles.visitTime}>Visit Time: </Text>
        <Text style={styles.visitDate}>{visitDate} {time}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width:180,
    flexDirection: 'row',
    flexWrap:"wrap",
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 15,
    marginVertical: 5,
    borderWidth:1,
    borderColor:"lightgray",
},
avatar: {
      marginRight:8,
      marginBottom:8,
    width: 45,
    height: 45,
    borderRadius: 25,
    backgroundColor:"lightgray",
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  brand: {
    fontSize: 14,
    color: '#555',
  },
  visitDate: {
    fontSize: 12,
    color: '#777',
  },
  visitTime: {
    fontSize: 12,
    color: 'black',
    fontWeight:700,

  },
});

export default UserCard;
