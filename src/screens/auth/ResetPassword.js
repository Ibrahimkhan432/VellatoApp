import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Sizes from '../../constants/Sizes';
import Fonts from '../../constants/Fonts';
import InputField from '../../components/InputField';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

const ResetPassword = () => {
    const navigation=useNavigation();
  return (
    <View style={Sizes.mainContainer}>
      <Text style={[Fonts.title, {color: 'black'}]}>Reset Password</Text>
      <Text style={[Fonts.plainText, {top: 35}]}>
      Create new password for your account
      </Text>
      <View style={{top: 50, gap:10}}>
        <InputField
          leftIcon={require('../../assests/icons/Lock.png')} 
          placeholder="New Password" 
         rightIcon={require('../../assests/icons/Eye.png')} />
        <Text style={[Fonts.plainText,{fontSize:14,left:30}]}>
        Password must be 8 characters long
            </Text>
        <InputField
          leftIcon={require('../../assests/icons/Lock.png')} 
          placeholder="Confirm Password"
          rightIcon={require('../../assests/icons/Eye.png')} 
          />
      </View>
      <View style={{top: 270}}>
        <Button title="Send Code" 
  onPress={() => navigation.navigate('Dashboard')}/>
      </View>
    </View>
  );
};

export default ResetPassword;

const styles = StyleSheet.create({});
