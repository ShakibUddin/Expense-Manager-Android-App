import React from 'react';
import { AppRegistry, StyleSheet } from 'react-native';
import { BottomNavigation } from 'react-native-paper';
import { name as appName } from './app.json';
import ExpenseForm from './Screens/ExpenseForm';
import Home from './Screens/Home';
import Statistics from './Screens/Statistics';


export default function App() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', icon: 'home' },
    { key: 'expenseForm', title: 'Add', icon: 'plus-box' },
    { key: 'statistics', title: 'Statistics', icon: 'chart-bar' },
  ]);
  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    expenseForm: ExpenseForm,
    statistics: Statistics,
  });
  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
}

AppRegistry.registerComponent(appName, () => Main);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20
  },
});
