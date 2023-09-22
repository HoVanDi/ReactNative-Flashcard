import React, { Component } from 'react';
import { View, Text, Animated, TouchableOpacity, StyleSheet } from 'react-native';

class Flashcard extends Component {
    state = {
        isFlipped: false,
        flipAnimation: new Animated.Value(0),
        backgroundColor: '#FF3D00',
    };

    handleFlip = () => {
        const { isFlipped, flipAnimation } = this.state;
        Animated.timing(flipAnimation, {
            toValue: isFlipped ? 0 : 180,
            duration: 500,
            useNativeDriver: false, // Sử dụng native driver tùy thuộc vào phiên bản
        }).start(() => {
            this.setState({ isFlipped: !isFlipped });
        });
    };

    render() {
        const { isFlipped, flipAnimation } = this.state;
        const flipDegree = flipAnimation.interpolate({
            inputRange: [0, 0],
            outputRange: ['0deg', '0deg'],
        });

        return (
            <View style={styles.container} >
                <TouchableOpacity onPress={this.handleFlip}>
                    <Animated.View
                        
                    >
                        <View style={styles.card}>
                            <Text style={styles.text}>
                                {isFlipped ? 'コ' : 'モ'}
                            </Text>
                        </View>
                    </Animated.View>
                </TouchableOpacity>
                <Text style={styles.rightbtn}>
                   Next
                </Text>
                <Text style={styles.leftbtn}>
                    Pervisouns
                </Text>

                <Text style={styles.middlebtn}>
                    Pervisouns
                </Text>
                <Text style={styles.middle2btn}>
                    Pervisouns
                </Text>
            </View>
        );
    }
}

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
