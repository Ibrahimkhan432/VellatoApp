import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Fonts from '../../../constants/Fonts';
import Sizes from '../../../constants/Sizes';
import Colors from '../../../constants/Colors';
import InputField from '../../../components/InputField';
import Button from '../../../components/Button';
import { useNavigation } from '@react-navigation/native';

const PersonalUserData = [
  {
    id: '1',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    name: 'John Doe',
    email: 'john_123@gmail.com',
  },
];
const Settings = () => {
  const navigation = useNavigation();
  return (
    <View style={Sizes.mainContainer}>
      <Text style={[Fonts.title, {color: 'black'}]}>Settings</Text>
      <View style={{top: 40}}>
        {PersonalUserData.map(item => (
          <View
            key={item.id}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              style={{width: 70, height: 70, borderRadius: 40}}
              source={{uri: item.avatar}}
            />
            <View style={{marginLeft: 10}}>
              <Text
                style={[
                  Fonts.plainText,
                  {
                    fontSize: 18,
                    fontWeight: 800,
                    color: Colors.primary,
                  },
                ]}>
                {item.name}
              </Text>
              <Text style={[Fonts.plainText, {fontSize: 12}]}>
                {item.email}
              </Text>
            </View>
          </View>
        ))}
      </View>
      <Text
        style={[Fonts.plainText, {top: 55, color: 'black', fontWeight: 700}]}>
        What is You Name ?
      </Text>
     <View style={{flexDirection: 'row',top: 60,gap: 10}}>
                <View style={{flex: 1}}>
                  <InputField
                    placeholder="John Doe"
                    placeholderTextColor="black"
                  />
                </View>
                <View style={{width: '40%', alignItems: 'flex-end'}}>
              <Button title="Change"
              onPress={() => navigation.navigate('ChangeName')}
              />
            </View>
              </View>

{/* passwordBtn */}
      <View style={{top: 70, flexDirection: 'column', gap: 10}}>
        <TouchableOpacity 
        onPress={()=>navigation.navigate('ChangePswd')}
        style={styles.pswdBtn}>
          <View style={{flexDirection: 'row',gap: 15,}}>
            <Image source={require('../../../assests/icons/Lock.png')} />
            <Text>Change Password</Text>
          </View>
          <View>
            <Text>{'>'}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.pswdBtn}>
          <View style={{flexDirection: 'row',gap: 15,}}>
            <Image
            style={{width: 25, height: 25}}
            source={require('../../../assests/images/logout.jpg')} />
            <Text style={{color: Colors.primary, fontWeight: 600}}>Log out</Text>
          </View>
          <View>
            <Text>{'>'}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  pswdBtn: {
    width: '100%',
    borderRadius: 25,
    padding: 15,
    borderWidth: 1,
    borderColor: Colors.placeholder,
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-between',
  },
});
