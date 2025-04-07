import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width:"100%",
    height:55,
    backgroundColor: '#6B1514',
    borderRadius: 45,
    gap:10, 
    alignItems:"center",
    justifyContent:"center",
},
text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 700,
    alignItems:"center",
  },
});

export default Button;
