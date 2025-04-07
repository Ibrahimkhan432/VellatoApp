import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Sizes from '../../constants/Sizes';
import Fonts from '../../constants/Fonts';
import InputField from '../../components/InputField';
import Button from '../../components/Button';
import Colors from '../../constants/Colors';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  return (
    <View style={Sizes.mainContainer}>
      <Text style={[Fonts.title, {color: 'black'}]}>Login</Text>
      <Text style={[Fonts.plainText, {top: 35}]}>Login to your account? </Text>
      <View style={{top: 50, gap: 20}}>
        <InputField
        leftIcon={require('../../assests/icons/userprofile.png')} 
        placeholder="Enter your username"
        />
        <InputField
          leftIcon={require('../../assests/icons/Lock.png')} 
          placeholder="Enter your Password"
          rightIcon={require('../../assests/icons/Eye.png')} 

        />
        <TouchableOpacity
          onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={{left: 240, fontWeight: 600}}>Forgot Password ?</Text>
        </TouchableOpacity>
      </View>
      <View style={{top: 90}}>
        <Button title="Log In" />
      </View>
      <View
        style={{
          flexDirection: 'row',
          top: 520,
          alignItems: 'center',
          left: 20,
        }}>
        <Text>For new accounts, Kindly </Text>
        <TouchableOpacity>
          <Text style={{color: Colors.primary}}> Contact Your Management </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
