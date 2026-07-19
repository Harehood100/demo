import { useState } from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    ScrollView,
} from 'react-native'

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [rememberMe, setRememberMe] = useState(false)

    return (
        <SafeAreaView style={styles.screen}>
            <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">

                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
                        <Text style={styles.backArrow}>←</Text>
                    </TouchableOpacity>
                    <View style={styles.headerTextWrap}>
                        <Text style={styles.headerTitle}>Log in</Text>
                        <Text style={styles.headerSubtitle}>
                            Remember to save your details so{'\n'}you dont have to input them again
                        </Text>
                    </View>
                    <View style={styles.backBtn} />
                </View>

                <View style={styles.form}>

                    <Text style={styles.label}>Email</Text>
                    <View style={styles.inputBox}>
                        <TextInput
                            style={styles.input}
                            placeholder="Email"
                            placeholderTextColor="#9B9ECC"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>

                    <Text style={styles.label}>Password</Text>
                    <View style={styles.inputBox}>
                        <TextInput
                            style={styles.input}
                            placeholder="Create Password"
                            placeholderTextColor="#9B9ECC"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={!showPassword}
                        />
                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeBtn}>
                            <Text style={styles.eyeIcon}>{showPassword ? '🙈' : '👁️'}</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.checkRow} onPress={() => setRememberMe(!rememberMe)} activeOpacity={0.7}>
                        <View style={[styles.checkbox, rememberMe && styles.checkboxChecked]}>
                            {rememberMe && <Text style={styles.checkmark}>✓</Text>}
                        </View>
                        <Text style={styles.checkLabel}>Remember me</Text>
                    </TouchableOpacity>

                    <Text style={styles.orText}>Or</Text>

                    <View style={styles.biometricRow}>
                        <TouchableOpacity style={styles.biometricBtn}>
                            <Text style={styles.biometricIcon}>𝍖</Text>
                            <Text style={styles.biometricLabel}>Fingerprint</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.biometricBtn}>
                            <Text style={styles.biometricIcon}>⊡</Text>
                            <Text style={styles.biometricLabel}>Face Scan</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.bottom}>
                    <TouchableOpacity style={styles.continueBtn} onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.continueBtnText}>Continue</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: { flex: 1, backgroundColor: '#FFFFFF' },
    scroll: { flexGrow: 1, justifyContent: 'space-between' },
    header: { flexDirection: 'row', alignItems: 'flex-start', paddingHorizontal: 20, paddingTop: 20, paddingBottom: 10 },
    backBtn: { width: 44, paddingTop: 4 },
    backArrow: { fontSize: 24, fontWeight: 'bold', color: '#1A1A1A' },
    headerTextWrap: { flex: 1, alignItems: 'center' },
    headerTitle: { fontSize: 22, fontWeight: 'bold', color: '#1A1A1A', marginBottom: 6 },
    headerSubtitle: { fontSize: 13, color: '#1A1A1A', textAlign: 'center', lineHeight: 20, fontWeight: '600' },
    form: { paddingHorizontal: 24, paddingTop: 24 },
    label: { fontSize: 18, fontWeight: 'bold', color: '#1A1A1A', marginBottom: 10 },
    inputBox: { flexDirection: 'row', alignItems: 'center', borderWidth: 1.5, borderColor: '#3D3F8F', borderRadius: 30, paddingHorizontal: 18, height: 56, marginBottom: 28 },
    input: { flex: 1, fontSize: 16, color: '#1A1A1A' },
    eyeBtn: { padding: 4 },
    eyeIcon: { fontSize: 18 },
    checkRow: { flexDirection: 'row', alignItems: 'center', gap: 10, marginBottom: 32 },
    checkbox: { width: 20, height: 20, borderWidth: 2, borderColor: '#3D3F8F', borderRadius: 4, justifyContent: 'center', alignItems: 'center' },
    checkboxChecked: { backgroundColor: '#3D3F8F' },
    checkmark: { color: '#FFFFFF', fontSize: 12, fontWeight: 'bold' },
    checkLabel: { fontSize: 16, color: '#1A1A1A' },
    orText: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: '#1A1A1A', marginBottom: 24 },
    biometricRow: { flexDirection: 'row', justifyContent: 'center', gap: 60, marginBottom: 40 },
    biometricBtn: { alignItems: 'center', gap: 8 },
    biometricIcon: { fontSize: 36, color: '#3D3F8F' },
    biometricLabel: { fontSize: 16, color: '#3D3F8F', fontWeight: '600' },
    bottom: { paddingHorizontal: 24, paddingBottom: 32 },
    continueBtn: { width: '100%', height: 56, borderWidth: 1.5, borderColor: '#3D3F8F', borderRadius: 30, justifyContent: 'center', alignItems: 'center' },
    continueBtnText: { fontSize: 18, color: '#3D3F8F', fontWeight: '600' },
})
