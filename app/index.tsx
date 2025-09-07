import { useState } from "react";
import { View, StyleSheet } from "react-native";
import IntroScreen from '../Views/IntroScreen';
import MainScreen from '../Views/MainScreen';

export default function Index() {
  const [isloaded, setIsloaded] = useState(false)

  setTimeout(()=>{
    setIsloaded(true)
  }, 2000);
  return (
    <View
      style={styles.container}
    >
      {isloaded ? <MainScreen/> : <IntroScreen/>}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});