import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Play = () => {
    const initialCharacterPairs = [
        { front: 'コ', back: 'Cảm ơn' },
        { front: 'モ', back: 'Xin chào' },
        { front: 'あ', back: 'Đẹp Trai' },
        { front: 'い', back: 'Tốt bụng' },
        { front: 'う', back: 'Trung thực' },
    ];

    const [characterPairs, setCharacterPairs] = useState([...initialCharacterPairs]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    const handleNext = () => {
        setIsFlipped(false);
        setCurrentIndex((prevIndex) => (prevIndex === characterPairs.length - 1 ? 0 : prevIndex + 1));
    };

    const handlePrevious = () => {
        setIsFlipped(false);
        setCurrentIndex((prevIndex) => (prevIndex === characterPairs.length - 1 ? 0 : prevIndex - 1));
    };

    const handleRemoveFromDeck = () => {
        // Xóa thẻ hiện tại khỏi mảng characterPairs
        const updatedPairs = [...characterPairs];
        updatedPairs.splice(currentIndex, 1);
        setCharacterPairs(updatedPairs);
        // Nếu currentIndex vượt quá độ dài của mảng, đặt lại currentIndex
        if (currentIndex >= updatedPairs.length) {
            setCurrentIndex(0);
        }
    };

    const handleResetDeck = () => {
        // Đặt lại mảng characterPairs thành mảng ban đầu
        setCharacterPairs([...initialCharacterPairs]);
        setCurrentIndex(0);
    };

    const currentCharacter = isFlipped ? characterPairs[currentIndex].back : characterPairs[currentIndex].front;
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={handleFlip}>
                <View style={styles.card}>
                    <Text style={styles.text}>
                        {currentCharacter}
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleNext}>
                <Text style={styles.rightbtn}>Next</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePrevious}>
                <Text style={styles.leftbtn}>Previous</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.middlebtn} onPress={handleRemoveFromDeck}>
                <Text style={styles.remove} >Remove From Deck</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.middle2btn} onPress={handleResetDeck}>
                <Text style={styles.Reset} >Reset Deck</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Play;


const styles = StyleSheet.create({
    container: {
    },
    card: {
        marginTop: 10,
        marginBottom: 60,
        height: 350,
        paddingTop: 140,
        width: 300,
        padding: 40,
        backgroundColor: '#FF3D00',
        borderRadius: 20,
        marginLeft: 28,
    },

    text: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 40,
    },
    rightbtn: {
        right: 30,
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

    leftbtn: {
        left: 30,
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

    remove: {
        color: "#FF3D00",
        textAlign: 'center',
    },

    middlebtn: {
        backgroundColor: '#fff',
        left: 30,
        top: 450,
        position: 'absolute',
        padding: 10,
        borderWidth: 1,
        width: 300,
        borderRadius: 5,
        borderColor: '#FF3D00',
    },

    Reset: {
        color: "#FF3D00",
        textAlign: 'center',
    },

    middle2btn: {
        backgroundColor: '#fff',
        left: 30,
        top: 520,
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


