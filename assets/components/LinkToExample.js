import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const LinkToExample = props => (
  <View style={styles.buttonContainer}>
    <Button
      title={props.title}
      color={props.color}
      onPress={props.onPress}
    />
  </View>
);

const styles = StyleSheet.create({
  buttonContainer: {
    marginHorizontal: 20,
  },
});

export { LinkToExample }
