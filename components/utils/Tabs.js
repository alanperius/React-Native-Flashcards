import React from 'react';
import {createAppContainer, createBottomTabNavigator} from "react-navigation";
import Cards from '../Cards'
import AddCard from '../AddCard'
import {Platform} from 'react-native'
import {MaterialCommunityIcons, Ionicons} from '@expo/vector-icons'
import {purple, red, white} from '../../utils/colors'

export const Tabs = createAppContainer(createBottomTabNavigator(
            {
                Cards: Cards,
                AddCard: AddCard,
            },
            {
                defaultNavigationOptions: ({ navigation }) => ({
                    tabBarIcon: ({ focused, horizontal, tintColor }) => {
                        const { routeName } = navigation.state;
                        let iconName;
                        let os = Platform.OS === 'ios' ? 'ios' : 'md';
                        // You can return any component that you like here! We usually use an
                        // icon component from react-native-vector-icons
                        if (routeName === 'Cards') {
                            iconName =   `cards${focused ? '' : '-outline'}`;
                            // Sometimes we want to add badges to some icons.
                            // You can check the implementation below.
                            //IconComponent = HomeIconWithBadge;
                            return <MaterialCommunityIcons name={iconName} size={25} color={tintColor} />;
                        } else if (routeName === 'AddCard') {
                            iconName =   `${os}-add-circle${focused ? '' : '-outline'}`;
                            return <Ionicons name={iconName} size={25} color={tintColor} />;
                        }

                        // You can return any component that you like here!

                    },
                }),
                tabBarOptions: {
                    showIcon: true,
                    activeTintColor: Platform.OS === 'ios' ? purple : white,
                    style: {
                        height: 77,
                        backgroundColor: Platform.OS === 'ios' ? white : purple,
                        shadowColor: 'rgba(0, 0, 0, 0.24)',
                        shadowOffset: {
                            width: 0,
                            height: 3,
                        },
                        shadowRadius: 6,
                        shadowOpacity: 1,
                    },
                },
            }
));