import { StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Sizes from '../../../constants/Sizes';
import Fonts from '../../../constants/Fonts';
import InputField from '../../../components/InputField';
import Button from '../../../components/Button';
import { useNavigation } from '@react-navigation/native';

const editPassword = [
  {
    id: '1',
    currentPassword: 'John Doe',
    NewPasword: '',
    confirmPassword:''
  },
];

const ChangePswd = () => {
    const Navigation=useNavigation();
  return (
    <View style={Sizes.mainContainer}>
      <Text style={[Fonts.title, {color: 'black'}]}>Change Password</Text>
      <Text style={[Fonts.plainText, {top: 35}]}>Create new password for your account </Text>
      <View style={{top: 50}}>
      {editPassword.map(item => (
        <View key={item.id} style={{gap: 10}}>
        <Text style={styles.pswd}>Current Password:</Text>
        <InputField placeholder="Enter Current Password" />
        <Text style={styles.pswd}>New Password:</Text>
        <InputField placeholder="Enter New Password" />
        <Text style={styles.pswd}>Confirm Password:</Text>
        <InputField placeholder="Confirm New Password" />
      </View>
      ))}
      </View>

<View 
style={{ top: 200}}
>
<Button
onPress={()=>Navigation.navigate('Dashboard')}
title="Save Changes" 
/>      </View>
    </View>
  );
};

export default ChangePswd;

const styles = StyleSheet.create({
  pswd:{
    fontSize: 16,
    fontWeight: 600

  }
});
