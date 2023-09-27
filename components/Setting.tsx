import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet } from 'react-native';

function Next() {
    const [isFlipped, setIsFlipped] = useState(false);
    const flipAnimation = useRef(new Animated.Value(0)).current;



    const flipDegree = flipAnimation.interpolate({
        inputRange: [0, 180],
        outputRange: ['0deg', '180deg'],
    });

    return (
        <View style={styles.container}>
                <Animated.View style={{ transform: [{ rotateY: flipDegree }] }}>
                    <View style={styles.card}>
                        <Text>
                            {isFlipped ? 'ĐI' : 'Chổ này không có thông tin'}
                        </Text>
                    </View>
                </Animated.View>
        </View>
    );
}


const styles = StyleSheet.create({

    container: {

    },
    card: {
        marginTop: 10,
        left:30,
        marginBottom: 60,
        height: 350,
        paddingTop: 160,
        alignItems:"center",
        width: 300,
        padding: 40,
        backgroundColor: '#FF3D00',
        borderRadius: 20,
    },

   
});

export default Next;
