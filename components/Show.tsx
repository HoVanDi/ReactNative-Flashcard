import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Setting from "./Setting";
import Play from "./Play";
import Icon from 'react-native-vector-icons/FontAwesome';
// import {Text } from 'react-native';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Play"
                component={Play}
                options={{
                    tabBarIcon: ({  size }) => (
                        <Icon name="play-circle" size={size} color={'#FF3D00'} />
                    ),
                }}
            />
            <Tab.Screen
                name="Settings"
                component={Setting}
                options={{
                    tabBarIcon: ({ size }) => (
                        <Icon name="gear" size={size} color={'#FF3D00'} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};
export default TabNavigation;