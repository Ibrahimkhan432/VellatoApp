import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import UploadMedia from '../../components/UploadMedia';
import Sizes from '../../constants/Sizes';
import Fonts from '../../constants/Fonts';
import InputField from '../../components/InputField';
import {RadioButton} from 'react-native-paper';
import {useState} from 'react';
import Colors from '../../constants/Colors';
import Button from '../../components/Button';

const visitorFormData = {
  companyName: '',
  email: '',
  visitDate: '',
  brand: 'Urban Mart',
  location: '1901 Thornridge Cir. Shiloh, Ha',
  mainContactName: 'Jane Cooper',
  personName: '',
  mainPersonMobile: '',
  otherMobileNumbers: '',
};


const AddNewContact = () => {
  const navigation = useNavigation();
  const [value, setValue] = useState('person');
  return (
    <FlatList
      ListHeaderComponent={
        <View style={Sizes.mainContainer}>
          <Text style={[Fonts.title, {color: 'black'}]}>Add New Contact</Text>
          <Text style={[Fonts.plainText, {marginTop: 40}]}>
            Edit the following details to add new contact{' '}
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 30}}>
            <View style={styles.radioOption}>
              <RadioButton
                value="company"
                status={value === 'company' ? 'checked' : 'unchecked'}
                onPress={() => setValue('company')}
              />
              <Text>Company</Text>
            </View>

            <View style={styles.radioOption}>
              <RadioButton
                value="person"
                status={value === 'person' ? 'checked' : 'unchecked'}
                onPress={() => setValue('person')}
              />
              <Text>Person</Text>
            </View>
          </View>
        </View>
      }
      data={[visitorFormData]}
      keyExtractor={(_, index) => index.toString()}
      renderItem={() => (
        <View style={styles.formContainer}>
          {/* <Text style={styles.label}>Company Name:</Text>
          <InputField
            placeholder={visitorFormData.brand}
            placeholderTextColor="UrbanMart"
          /> */}
          {/* <View style={{flexDirection: 'row', gap: 10,}}>
          <View>
          <Text style={styles.label}>Location:</Text>
          <InputField
            placeholder={visitorFormData.location}
            placeholderTextColor="black"
          />
          </View>
          </View>
          <View>
            <Image
              source={require('../../assests/icons/location.png')}/>
          </View> */}

          <Text style={styles.label}>Main Contact Name:</Text>
          <InputField
            placeholder={visitorFormData.mainContactName}
            placeholderTextColor="black"
          />

          <Text style={styles.label}>Person Name:</Text>
          <InputField
            placeholder="Enter Person name"
            placeholderTextColor="black"
          />
          <Text style={styles.label}> Mobile Number:</Text>
          <InputField
            placeholder='Enter Main Person Number'
            placeholderTextColor="black"
          />
          <Text style={styles.label}>Other Mobile Numbers (optional):</Text>
          <InputField
            placeholder="Enter mobile number"
            placeholderTextColor="black"
          />
          <InputField
            placeholder="Enter mobile number"
            placeholderTextColor="black"
          />
          <View>
           <Text style={styles.label}>Photos:</Text>
           <Text>Upload company & business card photo</Text>
          </View>
          <View>
            <UploadMedia
             mediaText={'Upload Company Photo'}/>
          </View>
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

export default AddNewContact;

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
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
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
