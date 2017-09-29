import React, { Component } from 'React';
import { View, Text, Image, StyleSheet } from 'react-native';
import { LinkToExample } from '../components/LinkToExample';
import background from '../images/background.png';
import {AppLoading, Asset } from 'expo';

class MenuScreen extends Component {
  state = {appIsReady: false}

  goToStackNavigationExample = () => {
    this.props.navigation.navigate('StackExample');
  }

  goToTabNavigationExample = () => {
    this.props.navigation.navigate('TabExample');
  }

  render () {
    return (
      <Image source={require('../images/background.png')} style={styles.container}>
        <Text>hello</Text>

        <LinkToExample
          title={'Stack navigation example'}
          color={'#3498db'}
          onPress={this.goToStackNavigationExample}
        />

        <LinkToExample
          title={'Tab navigation example'}
          color={'#2ecc71'}
          onPress={this.goToTabNavigationExample}
        />
      </Image>
    )
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

export { MenuScreen }
