// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
//
// export default class Main extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import React, { Component } from 'react';
import { Menu } from './navigators/Menu';

export default class Main extends Component {
  render() {
    return (
      <Menu
        onNavigationStateChange={() => {
          }
        }
      />
    );
  }
}
