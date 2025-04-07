import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Sizes from '../../constants/Sizes';
import Fonts from '../../constants/Fonts';
import Colors from '../../constants/Colors';
import InputField from '../../components/InputField';
import { useNavigation } from '@react-navigation/native';
const priceList = [
  {
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    id: '1',
    name: 'John Doe',
    brand: 'Toyota',
    contact: '+1 (800) 342-4952',
  },
  {
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    id: '2',
    name: 'kale Doe',
    brand: 'Suzuki',
    contact: '+1 (800) 342-4752',
  },
  {
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    id: '3',
    name: 'pixel Doe',
    brand: 'Corolla',
    contact: '+1 (800) 342-4322',
  },
];

const Contacts = () => {
  const navigation = useNavigation();
  return (
    <View style={Sizes.mainContainer}>
      <Text style={[Fonts.title, {color: 'black'}]}>Contacts</Text>
      <View style={{top: 35}}>
        <InputField placeholder="Search Contacts" />
      </View>
      <View
        style={{
          position: 'absolute',
          top: 73,
          right: 3,
          alignSelf: 'flex-end',
        }}>
        <TouchableOpacity>
          <Image
            source={require('../../assests/icons/SearchBtn.png')}
            style={{width: 40, height: 40}}
          />
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <Text style={{top: 60, fontWeight: 700, fontSize: 18}}>
            Available Contacts
          </Text>
        </View>
        <View style={{top: 60, right: 10}}>
          <Image source={require('../../assests/icons/filterIcon.png')} />
        </View>
      </View>
      {/* userCard */}
      <View style={styles.cardConainer}>
        <FlatList
          data={priceList}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={styles.cardWrapper}>
              <View style={{flexDirection: 'row', gap: 10}}>
              <View>
              <Image source={item.avatar} style={styles.avatar} />
              </View>
              <View>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.brand}>{item.brand}</Text>
              <Text style={styles.contact}>{item.contact}</Text>
              </View>
              </View>
              <View style={{flexDirection: 'row',gap: 20}}>
                <TouchableOpacity
                onPress={() => navigation.navigate('EditContact')}>
                <Image source={require('../../assests/icons/editIcon.png')} />
                </TouchableOpacity>
                <Image source={require('../../assests/icons/deleteIcon.png')} />
              </View>
            </View>
          )}
        />
      </View>
      {/* addUserBtn */}
      <View style={styles.addUserBtn}>
        <TouchableOpacity onPress={() => navigation.navigate('AddNewContact')}>
          <Image source={require('../../assests/icons/addUserBtn.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Contacts;

const styles = StyleSheet.create({
  cardConainer: {
    top: 60,
  },
  cardWrapper: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.placeholder,
    marginVertical: 6,
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardName: {
    fontSize: 18,
    fontWeight: 700,
    color: Colors.primary,
  },
  cardCode: {
    fontSize: 14,
    color: '#555',
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'lightgray',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.primary,
  },
  brand: {
    fontSize: 10,
    color: '#555',
  },
  contact: {
    fontSize: 10,
    color: 'black',
    fontWeight: 600,
  },
  addUserBtn: {
    top: 690,
    position: 'absolute',
    left: 300,
  },
});
