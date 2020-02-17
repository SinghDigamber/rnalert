// import React, { Component } from 'react';

// import { Alert, Button, View, StyleSheet } from 'react-native';


// export default class App extends Component {
  
//   openAlert=()=>{
//     alert('Alert with one button');
//   }
  
//   openTwoButtonAlert=()=>{
//     Alert.alert(
//       'Hey There!',
//       'Two button alert dialog',
//       [
//         {text: 'Yes', onPress: () => console.log('Yes button clicked')},
//         {text: 'No', onPress: () => console.log('No button clicked'), style: 'cancel'},
//       ],
//       { 
//         cancelable: true 
//       }
//     );
//   }
  
//   openThreeButtonAlert=()=>{
//     Alert.alert(
//       'Hey There!', 'Three button alert dialog',
//       [
//         {text: 'Ask me later', onPress: () => console.log('Later button clicked')},
//         {text: 'Yes', onPress: () => console.log('Yes button is clicked')},
//         {text: 'OK', onPress: () => console.log('OK button clicked')},
//       ],
//       { 
//         cancelable: false 
//       }
//     );
//   }

//   render() {
//     return (
//       <View style={styles.mainWrapper}>
//         <Button title='1 button alert' onPress={this.openAlert}/>

//         <Button title='2 buttons alert' onPress={this.openTwoButtonAlert}/>

//         <Button title='3 buttons alert' onPress={this.openThreeButtonAlert}/>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   mainWrapper: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     flexDirection:'row',
//   }
// });






import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
 

export default class App extends Component {
 
  constructor(props) {
    super(props);
    this.state = { showAlert: false };
  };
 
  showAlert = () => {
    this.setState({
      showAlert: true
    });
  };
 
  hideAlert = () => {
    this.setState({
      showAlert: false
    });
  };
 
  render() {
    const {showAlert} = this.state;
 
    return (
      <View style={styles.container}>
 
        <Text>Super Cool Alert</Text>
        <TouchableOpacity onPress={() => {
          this.showAlert();
        }}>
          <View style={styles.button}>
            <Text style={styles.text}>Click Please!</Text>
          </View>
        </TouchableOpacity>
 
        <AwesomeAlert
          show={showAlert}
          showProgress={false}
          title="Cool Alert"
          message="I Got a message!"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={true}
          cancelText="No, cancel"
          confirmText="Yes, delete it"
          confirmButtonColor="#008080"
          onCancelPressed={() => {
            this.hideAlert();
          }}
          onConfirmPressed={() => {
            this.hideAlert();
          }}
        />
      </View>
    );
  };
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  button: {
    padding: 15,
    margin: 15,
    borderRadius: 4,
    backgroundColor: "#3740ff",
  },
  text: {
    color: '#fff',
    fontSize: 16
  }
});
 