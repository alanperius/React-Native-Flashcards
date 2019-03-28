import React from 'react';
import { StyleSheet, Text, View, Platform, StatusBar} from 'react-native';
import {createAppContainer,
  createMaterialTopTabNavigator,
  createBottomTabNavigator,
  createStackNavigator} from 'react-navigation'
import {FontAwesome, Ionicons} from '@expo/vector-icons'
import IconWithBadge from "./components/utils/IconWithBadge";
import {Constants} from 'expo'
import {purple, red, white} from './utils/colors'
import {Tabs} from './components/utils/Tabs'

function UddaciStatusBar({ backgroundColor, ...props}) {
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
    /*EntryDetail: {
        screen: EntryDetail,
        navigationOptions: ({ navigation }) => ({
            headerTintColor: white,
            headerStyle: {
                backgroundColor: purple,
            },
        }),
    }*/
}));

export default class App extends React.Component {
  render() {
    return (
        <View style={{flex: 1}}>
            <UddaciStatusBar backgroundColor={purple} barStyle="default" />
            <MainNavigator />
        </View>
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
