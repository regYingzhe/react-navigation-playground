import React, { Component } from 'react';
import { View, Image, Text, StyleSheet, Button, ImageBackground } from 'react-native';
import { colors } from '../../config/Colors';
import BackToMenu from '../../components/BackToMenu';

class MainScreen extends React.Component {

  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Domains',

    headerTintColor: 'white',
    gesturesEnabled: false,
    headerStyle: { backgroundColor: colors.themeColor},
    headerRight: <BackToMenu />,

    // headerBackTitle: null,
    // headerTitleStyle: { color: 'black' }
  })
  componentWillMount() {
    this.image = require('../../images/background.png');
  }
  goToStack = () => {
    this.props.navigation.navigate('Stack2')
  }
  render() {
    return (
      <Image source={this.image} style={styles.container}>
        <Text>Hi MainScreen</Text>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this.goToStack}
            color={colors.themeColor}
            title='Add Stack'
          />
        </View>
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
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
});

export { MainScreen }
