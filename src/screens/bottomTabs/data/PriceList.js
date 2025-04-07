// first page of Data TabNavigator
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Sizes from '../../../constants/Sizes';
import Fonts from '../../../constants/Fonts';
import InputField from '../../../components/InputField';
import Colors from '../../../constants/Colors';
import StockLevel from './StockLevel';
const priceList = [
  {
    id: '1',
    name: 'EcoSmart Wireless Earbuds',
    code: 'Esc-343 ',
    price: '10 March 2025',
  },
  {
    id: '2',
    name: 'John GreenLeaf Organic Shampoo',
    code: 'Esc-343 ',
    price: '10 March 2025',
  },
  {
    id: '3',
    name: 'RecycLED Solar Garden Lights (Set of 6)',
    code: 'Esc-343 ',
    price: '10 March 2025',
  },
];

const PriceList = () => {
  const [activeTab, setActiveTab] = useState('PriceList');
  const rednderData = activeTab === 'PriceList' ? priceList : StockLevel;

  return (
    <View style={Sizes.mainContainer}>
      <Text style={[Fonts.title, {color: 'black'}]}>Data</Text>
      <View style={{top: 35}}>
        <InputField placeholder="Enter your Search product by name" />
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
            source={require('../../../assests/icons/SearchBtn.png')}
            style={{width: 40, height: 40}}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          gap: 6,
          top: 45,
          width: '100%',
height: 50,
}}>
          <TouchableOpacity
             onPress={() => setActiveTab('PriceList')}
           style={[
            styles.priceBtn,
            {
              backgroundColor:
                activeTab === 'PriceList'
                  ? Colors.primary
                  : Colors.placeholder,
            },
          ]}
          >
         <Text
              style={[
                Fonts.plainText,
                {
                  color:
                    activeTab === 'PriceList'
                      ? Colors.white
                      : Colors.gray,
                },
              ]}>
Price List            </Text></TouchableOpacity>


          <TouchableOpacity
            onPress={() => setActiveTab('StockLevel')}
            style={[
              styles.stockBtn,
              {
                backgroundColor:
                  activeTab === 'StockLevel'
                    ? Colors.primary
                    : Colors.placeholder,
              },
            ]}
            >
            <Text
              style={[
                Fonts.plainText,
                {
                  color:
                    activeTab === 'StockLevel'
                      ? Colors.white
                      : Colors.gray,
                },
              ]}>
              Stock Level
            </Text>
          </TouchableOpacity>
        {/* </View> */}
      </View>
      <Text style={{top: 60, fontWeight: 700, fontSize: 18}}>products</Text>
      {/* product card */}
      <View style={styles.cardConainer}>
        <FlatList
          data={rednderData}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={styles.cardWrapper}>
              <Text style={styles.cardName}>{item.name}</Text>
              <Text style={styles.cardCode}>
                Code: {item.code} Price:{item.price}
              </Text>
            </View>
          )}
        />
      </View>
      <View
        style={styles.downloadBtn}>
        <TouchableOpacity>
          <Image source={require('../../../assests/icons/downloadBtn.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PriceList;

const styles = StyleSheet.create({
  priceBtn: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    borderRadius: 45,
   
  },
  stockBtn: {
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    borderRadius: 45,
  },
  cardConainer: {
    top: 60,
    borderRadius: 15,
  },
  cardWrapper: {
    width: '100%',
    borderRadius: 10,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.placeholder,
    marginVertical: 6,
    gap: 8,
    padding: 10,
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
  downloadBtn: {
    top: 690,
    position: 'absolute',
    left: 300,
  },
});
