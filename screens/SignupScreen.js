import { useState } from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    StatusBar,
} from 'react-native'

export default function SignupScreen({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [rememberMe, setRememberMe] = useState(false)
    const [errors, setErrors] = useState({})

    const validate = () => {
        const newErrors = {}
        if (!email.trim()) {
            newErrors.email = 'Email is required'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = 'Enter a valid email address'
        }
        if (!password.trim()) {
            newErrors.password = 'Password is required'
        } else if (password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters'
        }
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSignup = () => {
        if (validate()) {
            console.log('Signing up:', { email, password, rememberMe })
            // Navigate to next screen when ready
            // navigation.navigate('Home')
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#E8EAF0" />
            <ScrollView
                contentContainerStyle={styles.scroll}
                keyboardShouldPersistTaps="handled"
            >

                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity
                        style={styles.backBtn}
                        onPress={() => navigation?.goBack()}
                    >
                        <Text style={styles.backArrow}>←</Text>
                    </TouchableOpacity>
                    <Text style={styles.title}>Create Profile</Text>
                    <View style={styles.headerSpacer} />
                </View>

                {/* Form */}
                <View style={styles.form}>

                    {/* Email */}
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        style={[styles.input, errors.email && styles.inputError]}
                        placeholder="Email"
                        placeholderTextColor="#9DA3C8"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    {errors.email && (
                        <Text style={styles.errorText}>{errors.email}</Text>
                    )}

                    {/* Password */}
                    <Text style={[styles.label, { marginTop: 24 }]}>Password</Text>
                    <View style={styles.passwordWrapper}>
                        <TextInput
                            style={[styles.input, styles.passwordInput, errors.password && styles.inputError]}
                            placeholder="Create Password"
                            placeholderTextColor="#9DA3C8"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={!showPassword}
                            autoCapitalize="none"
                        />
                        <TouchableOpacity
                            style={styles.eyeBtn}
                            onPress={() => setShowPassword(!showPassword)}
                        >
                            <Text style={styles.eyeIcon}>{showPassword ? '👁️' : '🙈'}</Text>
                        </TouchableOpacity>
                    </View>
                    {errors.password && (
                        <Text style={styles.errorText}>{errors.password}</Text>
                    )}

                    {/* Remember Me */}
                    <TouchableOpacity
                        style={styles.rememberRow}
                        onPress={() => setRememberMe(!rememberMe)}
                    >
                        <View style={[styles.checkbox, rememberMe && styles.checkboxChecked]}>
                            {rememberMe && <Text style={styles.checkmark}>✓</Text>}
                        </View>
                        <Text style={styles.rememberText}>Remember me</Text>
                    </TouchableOpacity>

                    {/* Or Divider */}
                    <Text style={styles.orText}>Or</Text>

                    {/* Biometric Options */}
                    <View style={styles.biometricRow}>
                        <TouchableOpacity style={styles.biometricBtn}>
                            <Text style={styles.biometricIcon}>🫆</Text>
                            <Text style={styles.biometricLabel}>Fingerprint</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.biometricBtn}>
                            <Text style={styles.biometricIcon}>🤳</Text>
                            <Text style={styles.biometricLabel}>Face Scan</Text>
                        </TouchableOpacity>
                    </View>

                </View>

                {/* Bottom Actions */}
                <View style={styles.bottomActions}>

                    {/* Add Caregiver Button */}
                    <TouchableOpacity style={styles.caregiverBtn} onPress={handleSignup}>
                        <Text style={styles.caregiverBtnText}>Add caregiver/child</Text>
                    </TouchableOpacity>

                    {/* Skip for now */}
                    <TouchableOpacity style={styles.skipBtn}>
                        <Text style={styles.skipBtnText}>Skip for now</Text>
                    </TouchableOpacity>

                    {/* Log in link */}
                    <View style={styles.loginRow}>
                        <Text style={styles.loginText}>Have a profile? </Text>
                        <TouchableOpacity>
                            <Text style={styles.loginLink}>Log in</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8EAF0',
    },
    scroll: {
        flexGrow: 1,
        paddingHorizontal: 24,
        paddingBottom: 40,
    },

    // Header
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 20,
        marginBottom: 40,
    },
    backBtn: {
        width: 40,
        height: 40,
        justifyContent: 'center',
    },
    backArrow: {
        fontSize: 24,
        color: '#1a1a2e',
        fontWeight: 'bold',
    },
    title: {
        fontSize: 22,
        fontWeight: '700',
        color: '#1a1a2e',
        textAlign: 'center',
    },
    headerSpacer: {
        width: 40,
    },

    // Form
    form: {
        flex: 1,
    },
    label: {
        fontSize: 18,
        fontWeight: '700',
        color: '#1a1a2e',
        marginBottom: 10,
    },
    input: {
        backgroundColor: '#E8EAF0',
        borderWidth: 1.5,
        borderColor: '#5C6BC0',
        borderRadius: 10,
        paddingHorizontal: 16,
        paddingVertical: 14,
        fontSize: 16,
        color: '#1a1a2e',
    },
    inputError: {
        borderColor: '#ef4444',
    },
    errorText: {
        color: '#ef4444',
        fontSize: 12,
        marginTop: 4,
    },

    // Password
    passwordWrapper: {
        position: 'relative',
    },
    passwordInput: {
        paddingRight: 50,
    },
    eyeBtn: {
        position: 'absolute',
        right: 14,
        top: 12,
    },
    eyeIcon: {
        fontSize: 20,
    },

    // Remember Me
    rememberRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 16,
        gap: 8,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1.5,
        borderColor: '#5C6BC0',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E8EAF0',
    },
    checkboxChecked: {
        backgroundColor: '#5C6BC0',
    },
    checkmark: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    },
    rememberText: {
        fontSize: 15,
        color: '#1a1a2e',
    },

    // Or divider
    orText: {
        fontSize: 20,
        fontWeight: '700',
        color: '#1a1a2e',
        textAlign: 'center',
        marginVertical: 28,
    },

    // Biometrics
    biometricRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 40,
    },
    biometricBtn: {
        alignItems: 'center',
        gap: 8,
    },
    biometricIcon: {
        fontSize: 36,
    },
    biometricLabel: {
        fontSize: 15,
        color: '#3D4A9A',
        fontWeight: '500',
    },

    // Bottom Actions
    bottomActions: {
        marginTop: 48,
        gap: 16,
    },
    caregiverBtn: {
        backgroundColor: 'white',
        borderWidth: 1.5,
        borderColor: '#5C6BC0',
        borderRadius: 12,
        paddingVertical: 18,
        alignItems: 'center',
    },
    caregiverBtnText: {
        fontSize: 18,
        color: '#3D4A9A',
        fontWeight: '600',
    },
    skipBtn: {
        backgroundColor: 'transparent',
        borderWidth: 1.5,
        borderColor: '#5C6BC0',
        borderRadius: 50,
        paddingVertical: 12,
        alignItems: 'center',
        alignSelf: 'center',
        paddingHorizontal: 32,
    },
    skipBtnText: {
        fontSize: 15,
        color: '#3D4A9A',
        fontWeight: '600',
    },
    loginRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
    },
    loginText: {
        fontSize: 14,
        color: '#1a1a2e',
        fontWeight: '600',
    },
    loginLink: {
        fontSize: 14,
        color: '#3D4A9A',
        fontWeight: '600',
    },
})