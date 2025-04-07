import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Sizes from '../../constants/Sizes';
import Fonts from '../../constants/Fonts';
import InputField from '../../components/InputField';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

const ForgotPassword = () => {
    const navigation=useNavigation();
  return (
    <View style={Sizes.mainContainer}>
      <Text style={[Fonts.title, {color: 'black'}]}>Forgot Password</Text>
      <Text style={[Fonts.plainText, {top: 35}]}>
        Enter the email address to get verification code reset password
      </Text>
      <View style={{top: 110, gap: 20}}>
        <InputField
          leftIcon={require('../../assests/icons/mail.png')} 
          placeholder="Email address" />
      </View>
      <View style={{top: 270}}>
        <Button title="Send Code" 
  onPress={() => navigation.navigate('OtpVerification')}/>
      </View>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({});
