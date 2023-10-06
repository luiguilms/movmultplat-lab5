import react from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "./Screens/HomeScreen";
import SettingsScreen from "./Screens/SettingsScreen";
import StackScreen from "./Screens/StackScreen";
import { Ionicons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();
const HomeStackNavigator = createNativeStackNavigator();
function HomeStack() {
    return (
        <HomeStackNavigator.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{
                headerShown: false,
            }}>
            <HomeStackNavigator.Screen
                name="HomeScreen"
                component={HomeScreen}
            />
            <HomeStackNavigator.Screen
                name="Stack"
                component={StackScreen}
            />
        </HomeStackNavigator.Navigator>
    );
}
function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Inicio') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Libros') {
                        iconName = focused ? 'book' : 'book-outline';
                    }

                    
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'purple',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="Inicio" component={HomeStack} />
            <Tab.Screen name="Libros" component={SettingsScreen} />
        </Tab.Navigator>
    );
}
export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}