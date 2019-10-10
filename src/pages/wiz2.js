import React, { Component } from 'react';
import { StyleSheet, TextInput, View, SafeAreaView, Image } from 'react-native';
import {
  Container,
  Header,
  Content,
  Button,
  Text,
  Form,
  Item,
  Input,
  DatePicker,
} from 'native-base';

 
export default class Wiz2 extends React.Component {
  static navigationOptions = { header: null }

  render() {
    return (
      <SafeAreaView style={styles.container}>
          
    

<View style={styles.output}>
      <Text>
          Agora preciso saber a sua data de nascimento você pode me dizer?
      </Text>


</View>

        <Image
          style={{ height: 200, width: 150, marginTop: -20,}}
          source={require('../../assets/chat.png')}
          resizeMode="contain"
        />

        <Item>
        <DatePicker
           full
            defaultDate={new Date(2000, 4,22)}
            minimumDate={new Date(1933, 1, 1)}
            maximumDate={new Date(2014, 12, 31)}
            locale={"pt-Br"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={true}
            animationType={"slide"}
            androidMode={"default"}
            placeHolderText="Data de nascimento"
            textStyle={{ color: "write" }}
            placeHolderTextStyle={{ color: "#FFF" }}
            onDateChange={this.setDate}
            disabled={false}
            />
        </Item>
        <Button
          full
          success
          onPress={() => this.props.navigation.navigate('Wiz3')}
          style={styles.buttonLogin}>
          <Text>Proseguir</Text>
        </Button>


      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF69B4',
  },
  textInput: {
    height: 40,
    color: '#FFF',
    width: '90%',
    borderColor: '#333',
    borderWidth: 1,
    marginTop: 20,
    backgroundColor: '#FFF',
  },



  buttonLogin: {
    marginTop: 40,
  },

  output:{ 
  backgroundColor: "white",
  padding:20,
  borderRadius:100,
  marginBottom:2,
  width:"100%",
  marginTop: 20,
  position:"relative",
  alignItems: 'center',
},

output_before:{
width:300,
height:0,
position:"absolute",
bottom:-25,

},

avatar_img:{
  width:170,
  borderRadius:100,
  marginBottom:20,
}









});
