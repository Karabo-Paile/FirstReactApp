import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
let sign = ">";
export default function App() {
  return (
    <View style={styles.container}>
      {alert("Hello User!")}
      <Text style={{color: 'rgb(255,255,255)'}}>
        C:\Users\Users{sign} Please enter item: 
      
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(0,0,0)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
