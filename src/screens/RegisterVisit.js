import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Sizes from '../constants/Sizes';
import Fonts from '../constants/Fonts';
import InputField from '../components/InputField';
import Button from '../components/Button';
import {useNavigation} from '@react-navigation/native';
import DropdownComponent from '../components/Dropdown';
import Colors from '../constants/Colors';
import UploadMedia from '../components/UploadMedia';

const visitorFormData = {
  name: '',
  email: '',
  visitDate: '',
  location: '3517 W. Gray St. Utica, Pennsylvania',
};

const RegisterVisit = () => {
  const navigation = useNavigation();
  return (
    <FlatList
      ListHeaderComponent={
        <View style={Sizes.mainContainer}>
          <View style={{flexDirection: 'row', gap: 10}}>
            <TouchableOpacity onPress={() => navigation.navigate('Dashboard')}>
              <Image
                style={{top: 38}}
                source={require('../assests/icons/backIcon.png')}
              />
            </TouchableOpacity>
            <Text style={[Fonts.title, {color: 'black'}]}>Register Visit</Text>
          </View>
          <Text style={[Fonts.plainText, {marginTop: 40}]}>
            Enter the following details to register visit
          </Text>
        </View>
      }
      data={[visitorFormData]}
      keyExtractor={(_, index) => index.toString()}
      renderItem={() => (
        <View style={styles.formContainer}>
          <Text style={styles.label}>Location:</Text>
          <InputField
            placeholder={visitorFormData.location}
            placeholderTextColor="black"
            onChangeText={text => handleChange('location', text)}
          />
          <Text style={styles.label}>Client:</Text>
          <DropdownComponent placeholder="Choose Client" />

          <Text style={styles.label}>Visit Activities:</Text>
          <TextInput
            style={{
              height: 150,
              backgroundColor: Colors.placeholder,
              color: 'black',
              borderRadius: 20,
              textAlignVertical: 'top',
            }}
            placeholder="Describe visit activities here"
          />

          <Text style={styles.label}>Time Spent:</Text>
          <DropdownComponent placeholder="Time Spent" />

          <Text style={styles.label}>Upload Media:</Text>
          <Text style={[Fonts.plainText, {fontSize: 14}]}>
            You can upload up to 6 photos or videos
          </Text>
          {/* uploadMedia container */}
          <View>
            <UploadMedia 
            mediaText="Upload photo / video"
            />
          </View>
          {/* button container */}
          <View
            style={{
              flexDirection: 'row',
              gap: 6,
              width: '100%',
            }}>
            <View
              style={{
                width: '40%',
                backgroundColor: Colors.placeholder,
                borderRadius: 45,
              }}>
              <TouchableOpacity style={styles.cancelBtn}>
                <Text
                  style={{
                    fontWeight: 700,
                    fontSize: 18,
                  }}>
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{width: '56%'}}>
              <Button title="Submit" />
            </View>
          </View>
        </View>
      )}
    />
  );
};

export default RegisterVisit;

const styles = StyleSheet.create({
  formContainer: {
    padding: 20,
    gap: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  cancelBtn: {
    flex: 1,
    width: '100%',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontweight: 900,
  },
});
