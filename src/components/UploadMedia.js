import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'

const uploadData =[
    {
        id:1,
        icon:require("../assests/icons/uploadicon.png"),
    },
    {
        id:2,
        icon:require("../assests/icons/uploadicon.png"),

    },
    {
        id:3,
        icon:require("../assests/icons/uploadicon.png"),

    },
    {
        id:4,
        icon:require("../assests/icons/uploadicon.png"),

    },
    {
        id:5,
        icon:require("../assests/icons/uploadicon.png"),

    },
    {
        id:6,
        icon:require("../assests/icons/uploadicon.png"),

    },
]
const UploadMedia = ({mediaText}) => {
  return (
    <View style={styles.container}>
{uploadData.map((item) => (
<View style={styles.mediaBox}>
    <View key={item.id} style={styles.mediaText}>
        <Image source={item.icon} />
        <Text style={styles.mediaText}>{mediaText}</Text> 
</View>
    </View>
))}

</View>
  )
}

export default UploadMedia;

const styles = StyleSheet.create({

    container: {
        width:"100%",
        // height:600,
        display:"flex",
        flexDirection:"row",
        flexWrap:"wrap",
        alignItems:"center",
        justifyContent:"center",
        gap:6
    },
    mediaBox: {
        textAlign:"center",
        alignItems:"center",
        justifyContent:"center",
        width:"48%",
        height:130,
        backgroundColor:Colors.placeholder,
        borderRadius:15
    },
    mediaText: {
        textAlign:"center",
        alignItems:"center",
        justifyContent:"center",
        fontSize:10,
    }
})