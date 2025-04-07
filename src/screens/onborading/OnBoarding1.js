import {Image, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Button from '../../components/Button';
import Fonts from '../../constants/Fonts';
import { useNavigation} from '@react-navigation/native';
import Sizes from '../../constants/Sizes';

const OnBoarding1 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.imageContainer}>
      <Image
        style={styles.image}
        source={require('../../assests/images/onboard1banner.jpg')}
      />
      <View style={Sizes.mainContainer}>
        <View style={styles.icons}>
          <Image source={require('../../assests/icons/Rectangle.png')} />
          <Image source={require('../../assests/icons/Ellipse.png')} />
        </View>
        <Text
          style={[
            Fonts.title,
            {color: 'white', top: 570, width: 300,fontSize:35},
          ]}>
          Get Started with Vellato
        </Text>
        <Text style={styles.content}>
          Easily track your daily sales visits and stay organized. Quickly log
          your client interactions with just a few taps.
        </Text>
        <View
          style={{ top: 575}}>
          <Button
            title="Next"
            onPress={() => navigation.navigate('OnBoarding2')}
          />
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            top: 578,
            flexDirection: 'row',
          }}>
          <Text style={[Fonts.plainText,{color:"white"}]}>Already have an account? </Text>
          <TouchableOpacity
          onPress={() => navigation.navigate('Login')}>
            <Text style={[Fonts.plainText,{color: 'white', fontWeight: 'bold'}]}>Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default OnBoarding1;

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
  },
  image: {
    width: 712,
    height: 917,
    resizeMode: 'cover',
    position: 'absolute',
  },
  content: {
    width: 340,
    height: 60,
    top: 570,
    fontFamily: 'Montserrat',
    color: '#FFFFFF',
    lineHeight: 20,
    fontWeight: 400,
    fontSize: 15,
  },
  icons: {
    flexDirection: 'row',
    top: 570,
    gap: 10,
  },
});
