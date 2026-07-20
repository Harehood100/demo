import { TouchableOpacity, View, Text, StyleSheet } from 'react-native'

/**
 * AppCheckbox
 * checked — true shows filled navy square with white checkmark
 *           false shows empty white square with navy border
 */
export default function AppCheckbox({ checked, onPress, label }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={styles.row}
      accessibilityRole="checkbox"
      accessibilityState={{ checked }}
    >
      <View style={[styles.box, checked ? styles.boxChecked : styles.boxUnchecked]}>
        {checked && <Text style={styles.checkmark}>✓</Text>}
      </View>
      {label ? <Text style={styles.label}>{label}</Text> : null}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  box: {
    width: 22,
    height: 22,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxUnchecked: {
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#3D3F8F',
  },
  boxChecked: {
    backgroundColor: '#3D3F8F',
    borderWidth: 2,
    borderColor: '#3D3F8F',
  },
  checkmark: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 16,
    color: '#1A1A1A',
  },
})
