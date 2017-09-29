import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, ImageBackground } from 'react-native';
import { colors } from '../../config/Colors';
import BackToMenu from '../../components/BackToMenu';

class OtherScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    // title: 'Rules',
    headerTitle: 'Light Rules',
    headerTintColor: 'white',
    // headerBackTitle: null,
    headerStyle: { backgroundColor: colors.themeColor},
    // headerTitleStyle: { color: 'black' }
    headerRight: <BackToMenu />
  })
  componentWillMount() {
    this.image = require('../../images/background.png');
  }
  render() {
    return (
      <Image source={this.image} style={styles.container}>
        <Text>Hi OtherScreen</Text>
      </Image>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: null,
    height: null,
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
});

export { OtherScreen }
