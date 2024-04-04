import React, { useState } from 'react';
import { View, Text,StyleSheet } from 'react-native';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isLoginDisabled, setIsLoginDisabled] = useState(true);

  const validateEmail = () => {
    const isValid = /\S+@\S+\.\S+/.test(email);
    setEmailError(isValid ? '' : 'Please enter a valid email address');
    return isValid;
  };

  const validatePassword = () => {
    const isValid = password.length >= 6;
    setPasswordError(isValid ? '' : 'Password must be at least 6 characters long');
    return isValid;
  };

  const handleSubmit = () => {
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isEmailValid && isPasswordValid) {
      console.log('Email:', email);
      console.log('Password:', password);
    }
  };

  
  React.useEffect(() => {
    setIsLoginDisabled(!validateEmail() || !validatePassword());
  }, [email, password]);

  return (
    <View style={styles.container}>
    <View style={styles.textContainer}>
      <Text style={styles.text1}>Welcome to Rize</Text>
      <Text style={styles.text2}>Login to your account</Text>
      </View>
      <View style={styles.inputContainer}>
      <TextInput
        label="Email"
        type="email"
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        error={emailError}
      />
      <TextInput
        label="Password"
        type="password"
        value={password}
        onChangeText={setPassword}
        placeholder="*******"
        error={passwordError}
      />
      </View>
      <View style={styles.btnLogin}>
      <Button
      title="Login"
      onPress={handleSubmit}
      disabled={isLoginDisabled} // Disable the button if either email or password is not valid
    />
    </View>
    </View>
  );
};

export default LoginForm;

const styles= StyleSheet.create({
    container:{
       flex:1,
        backgroundColor:'#f7f5f0'
    },
    btnLogin:{
    marginVertical:40
    },
    textContainer:{
     justifyContent:'center',
     alignItems:'center',
     marginVertical:'30%'
    },
    buttonLogin:{
        color:'#d6af42'
    },
    text1:{
        fontSize:22,
        fontWeight:'bold',
        color:'black',
    },
    text2:{
        fontSize:14,
        color:'black'
    },
    
})
