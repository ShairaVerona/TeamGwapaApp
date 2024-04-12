import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Import Material Icons

const ContactScreen = () => {
  const [message, setMessage] = useState('');

  const handleMessageSubmit = () => {
    // Here you can handle the submission of the message, 
    // such as sending it to your backend server or processing it locally.
    console.log('Message submitted:', message);
    // Optionally, you can clear the message box after submission
    setMessage('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Contact Us</Text>
      <View style={styles.infoContainer}>
        <MaterialIcons name="email" size={24} color="black" style={styles.icon} />
        <Text style={styles.text}>teamgwapa@gmail.com</Text>
      </View>
      <View style={styles.infoContainer}>
        <MaterialIcons name="phone" size={24} color="black" style={styles.icon} />
        <Text style={styles.text}>09109724361</Text>
      </View>
      <View style={styles.infoContainer}>
        <MaterialIcons name="location-on" size={24} color="black" style={styles.icon} />

        <Text style={styles.text}>Manolo Fortich Bukidnon 8703</Text>
      </View>
      {/* Message box */}
      <View style={styles.messageContainer}>
        <TextInput
          style={styles.messageInput}
          multiline
          placeholder="Type your message here"
          value={message}
          onChangeText={setMessage}
        />
        <Button title="Send" onPress={handleMessageSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  text: {
    fontSize: 16,
  },
  messageContainer: {
    marginTop: 20,
  },
  messageInput: {
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  icon: {
    marginRight: 10,
  },
});

export default ContactScreen;
