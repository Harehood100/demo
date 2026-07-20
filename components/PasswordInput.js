import { useState } from 'react'
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native'

/**
 * PasswordInput
 * Handles show/hide password toggle with eye / eye-off icons
 * matching the Figma eye component designs
 */
export default function PasswordInput({ placeholder = 'Create Password', value, onChangeText }) {
  const [show, setShow] = useState(false)

  return (
    <View style={styles.inputBox}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#9B9ECC"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={!show}
        autoCapitalize="none"
      />
      <TouchableOpacity
        onPress={() => setShow(!show)}
        style={styles.eyeBtn}
        accessibilityLabel={show ? 'Hide password' : 'Show password'}
      >
        {/* Eye open — password visible */}
        {show ? (
          <Text style={styles.eyeIcon}>👁️</Text>
        ) : (
          /* Eye off — password hidden */
          <Text style={styles.eyeIcon}>🙈</Text>
        )}
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#3D3F8F',
    borderRadius: 30,
    paddingHorizontal: 18,
    height: 56,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#1A1A1A',
  },
  eyeBtn: {
    padding: 4,
  },
  eyeIcon: {
    fontSize: 20,
    color: '#3D3F8F',
  },
})
