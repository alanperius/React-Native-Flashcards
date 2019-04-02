import React from 'react';
import { StyleSheet, Text, View, Platform, StatusBar} from 'react-native';
import {createAppContainer,
  createMaterialTopTabNavigator,
  createBottomTabNavigator,
  createStackNavigator} from 'react-navigation'
import {FontAwesome, Ionicons} from '@expo/vector-icons'
import IconWithBadge from "./components/utils/IconWithBadge";
import {Constants} from 'expo'
import {black, purple, red, white} from './utils/colors'
import {Tabs} from './components/utils/Tabs'
import {Provider} from 'react-redux'
import reducer from './redux/reducer'
import {createStore} from 'redux'
import middleware from './redux/middleware'
import DeckDetail from './components/deckDetail/DeckDetail'
import AddCard from './components/deckDetail/AddCard'

function FlashcardsStatusBar({ backgroundColor, ...props}) {
    return (
        <View style={{backgroundColor, height: Constants.statusBarHeight}}>
            <StatusBar translucent  backgroundColor={backgroundColor} {...props} />
        </View>
    )
}

const MainNavigator = createAppContainer(createStackNavigator({
    home: {
        screen: Tabs,
        navigationOptions: {
            header: null,
        },
        tintColor: {
            color: red
        }
    },
    DeckDetail: {
        screen: DeckDetail,
        navigationOptions: ({ navigation }) => ({
            headerTintColor: white,
            title: 'Deck Details',
            headerStyle: {
                backgroundColor: purple,
            },
        }),
    },
    AddCard: {
        screen: AddCard,
        navigationOptions: ({ navigation }) => ({
            headerTintColor: white,
            title: 'Add new Card',
            headerStyle: {
                backgroundColor: purple,
            },
        }),
    }
}));

export default class App extends React.Component {
  render() {
    return (
        <Provider store={createStore(reducer, middleware)}>
        <View style={{flex: 1}}>
            <FlashcardsStatusBar backgroundColor={purple} barStyle="default" />
            <MainNavigator />
        </View>
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
