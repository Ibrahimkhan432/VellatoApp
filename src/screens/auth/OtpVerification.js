import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Sizes from '../../constants/Sizes';
import Fonts from '../../constants/Fonts';
import Button from '../../components/Button';
import Colors from '../../constants/Colors';
import {useNavigation} from '@react-navigation/native';
import ConfirmationField from './ConfirmationField';

// const code = [
//     {digit1: '5', digit2: '1', digit3: '0', digit4: '3'},
// ];

const OtpVerification = () => {
  const navigation = useNavigation();
  return (
    <View style={Sizes.mainContainer}>
      <Text style={[Fonts.title, {color: 'black'}]}>OTP Verification</Text>
      <Text style={[Fonts.plainText, {top: 35}]}>
        Enter the verification code sent to your email address{' '}
      </Text>
{/* confirmation field */}
      <View
        style={{
          top: 100,
          width: '100%',
        }}>
        <ConfirmationField />
      </View>

      <View style={{top: 270}}>
        <Button
          title="Verify"
          onPress={() => navigation.navigate('ResetPassword')}
        />
      </View>
    </View>
  );
};

export default OtpVerification;

const styles = StyleSheet.create({
  digitContainer: {
    flexDirection: 'row',
    top: 140,
    gap: 25,
    textAlign: 'center',
  },
  digit: {
    borderWidth: 2,
    left: 40,
    width: 56,
    height: 64,
    borderRadius: 10,
    fontSize: 24,
    fontSize: 31,
    fontWeight: 600,
    borderColor: Colors.primary,
    textAlign: 'center',
  },
});
