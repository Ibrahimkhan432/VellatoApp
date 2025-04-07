import { StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Sizes from '../../../constants/Sizes';
import Fonts from '../../../constants/Fonts';
import InputField from '../../../components/InputField';
import Button from '../../../components/Button';

const editName = [
  {
    id: '1',
    name: 'John Doe',
    newName: '',
  },
];

const ChangeName = () => {
  return (
    <View style={Sizes.mainContainer}>
      <Text style={[Fonts.title, {color: 'black'}]}>Edit Personal Info</Text>
      <Text style={[Fonts.plainText, {top: 35}]}>Update your name </Text>
      <View style={{top: 50}}>
      {editName.map(item => (
        <View key={item.id} style={{gap: 10}}>
        <Text style={styles.name}>Current Name</Text>
        <InputField placeholder={item.name} placeholderTextColor="black" />
        <Text style={styles.name}>New Name</Text>
        <InputField placeholder="Enter Your New Name" />
      </View>
      ))}
      </View>

<View 
style={{ top: 200}}
>
<Button
title="Save" 
/>      </View>
    </View>
  );
};

export default ChangeName;

const styles = StyleSheet.create({
  name:{
    fontSize: 16,
    fontWeight: 600

  }
});
