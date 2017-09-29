import React, { Component } from 'react';
import { Text, TouchableHighlight, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

class BackToMenu extends Component {
  goToMenu = () => {
    this.props.navigation.navigate('Menu');
  }
  render() {
    console.log(this.props.navigation);
    return (
      <TouchableHighlight onPress={this.goToMenu}>
        <Text style={styles.link}>
          Menu
        </Text>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  link: {
    color: '#3498db',
    fontSize: 16,
    fontWeight: '500',
    padding: 15,
  }
});

export default withNavigation(BackToMenu);
