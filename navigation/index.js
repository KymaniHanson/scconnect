import React, {Component} from 'react';
import {KeyboardAvoidingView, StyleSheet} from 'react-native';


import {Block, Input, Text, Button} from '../components';

import {theme} from '../constants';
export default class SignUp extends Component{
state = {
email: null,
username: null,
password: null, 
errors: [],
loading: false,
}


handleSignUp(){


}


render(){

  return(
    <KeyboardAvoidingView style = {styles.signUp} behavior = "padding">
<Block padding = {[0, theme.sizes.base * 2]}>
<Text h1 bold>Sign Up</Text>
<Block middle>
<Input
label = "Username"

/>
</Block>
</Block>

    </KeyboardAvoidingView>
  )
}
}

const styles = StyleSheet.create({
signUp: {
flex: 1, 
justifyContent: 'center',
}

})