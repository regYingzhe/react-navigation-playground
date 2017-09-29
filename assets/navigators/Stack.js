import { StackNavigator } from 'react-navigation';
import { MainScreen } from '../screens/stack/MainScreen';
import { OtherScreen } from '../screens/stack/OtherScreen';

const Stack = StackNavigator(
  {
    Stack1: {
      screen: MainScreen,
    },
    Stack2: {
      screen: OtherScreen,
    },
  },
  {
    initialRouteName: 'Stack1',
    mode: 'card', // 'card' or 'modal'
    cardStyle: {
      backgroundColor: 'rgba(0,0,0,0.5)',
    }
  },
);

export { Stack }
