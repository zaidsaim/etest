

import React from 'react';
import { View, Text, TextInput as RNTextInput, StyleSheet } from 'react-native';

const TextInput = ({ label, type, value, onChangeText, placeholder, error }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.labelText}>{label}</Text>
      <RNTextInput
        style={styles.input}
        keyboardType={type === "email" ? "email-address" : "default"}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    marginHorizontal:30,
  },
  input: {
    height: 40,
    borderColor: '#e6e4df',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 5,
    borderRadius:20,
    color:'grey',
    backgroundColor:'white'
  },
  labelText:{
    marginVertical:5
  },
  error: {
    color: 'red',
  },
});

export default TextInput;

