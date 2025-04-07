import {Image, StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Button from '../../components/Button';
import Fonts from '../../constants/Fonts';
import Sizes from '../../constants/Sizes';
import { useNavigation } from '@react-navigation/native';

const OnBoarding2 = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../../assests/images/onboard2banner.jpg')}
        />
      <View style={Sizes.mainContainer}>
        <View style={styles.icons}>
          <Image source={require('../../assests/icons/Ellipse.png')} />
          <Image source={require('../../assests/icons/Rectangle.png')} />
        </View>
        <Text style={[Fonts.title, {color:"white",top: 580, width: 300,fontSize:35}]}>
          Powerful Features at Your Fingertips
        </Text>
        <Text style={styles.content}>
          Manage your client list, view reports, and capture photos or videos of
          your visits — all within one app.
        </Text>
        <View
          style={{top: 580}}>
          <Button title="Let's Get Started" />
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'center', top: 580, flexDirection: "row" }}>
         <Text style={[Fonts.plainText,{color:"white"}]}>Already have an account? </Text>
         <TouchableOpacity onPress={() => navigation.navigate('Login')}>
           <Text style={{ color: "white", fontWeight: "bold" }}>Log In</Text>
         </TouchableOpacity>
       </View>
      </View>
    </View>
  );
};

export default OnBoarding2;

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
  },
  image: {
    width: 440,
    height: 917,
    resizeMode: 'cover',
    position: 'absolute',
  },
  content: {
    width: 340,
    height: 60,
    top: 580,
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
