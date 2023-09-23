import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import thư viện định tuyến

const Flashcard = ({onNext}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const characters = ['コ', 'モ', 'あ', 'い', 'う']; // Thêm các chữ cái bạn muốn chuyển đổi
    const navigation = useNavigation(); // Sử dụng hook định tuyến
  
  const handleFlip = () => {
    setCurrentIndex((prevIndex) => (prevIndex === characters.length - 1 ? 0 : prevIndex + 1));
  };

  const handleNext = () => {
    onNext(); // Gọi hàm onNext để chuyển màn hình
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleFlip}>
        <View style={styles.card}>
          <Text style={styles.text}>
          {characters[currentIndex]}
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleNext}>
        <Text style={styles.rightbtn}>Next</Text>
      </TouchableOpacity>
      <Text style={styles.leftbtn}>Previous</Text>
      <Text style={styles.middlebtn}>Previous</Text>
      <Text style={styles.middle2btn}>Previous</Text>
    </View>
  );
};

export default Flashcard;

const styles = StyleSheet.create({

    container: {
        
    },
    card: {
        marginTop:-80,
        marginBottom:60,
        height: 350,
        paddingTop:160,
        width:300,
        padding:40,
        backgroundColor: '#FF3D00',
        borderRadius:20,
    },

    text: {
        textAlign:'center',
        color:'#fff',
        fontSize: 40,
    },
    rightbtn: {
        right:0,
        bottom:0,
        position:'absolute',
        padding: 10,
        borderWidth: 1,
        width: 120,
        borderRadius: 5,
        color: "#FF3D00",
        borderColor: '#FF3D00', 
        textAlign:'center'
    },

    leftbtn: {
        left: 0,
        bottom: 0,
        position: 'absolute',
        padding: 10,
        borderWidth: 1,
        width: 120,
        borderRadius: 5,
        color: "#FF3D00",
        borderColor: '#FF3D00',
        textAlign: 'center'
    },

    middlebtn: {
        backgroundColor:'#fff',
        left: 0,
        top: 360,
        position: 'absolute',
        padding: 10,
        borderWidth: 1,
        width: 300,
        borderRadius: 5,
        color:"#FF3D00",
        borderColor: '#FF3D00',
        textAlign: 'center'
    },

    middle2btn: {
        backgroundColor: '#fff',
        left: 0,
        top: 420,
        position: 'absolute',
        padding: 10,
        borderWidth: 1,
        width: 300,
        borderRadius: 5,
        color: "#FF3D00",
        borderColor: '#FF3D00',
        textAlign: 'center' 
    }

});

export default Flashcard
