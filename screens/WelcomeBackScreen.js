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

export default function WelcomeBackScreen({ navigation }) {
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [rememberMe, setRememberMe] = useState(false)

    const userName = 'John'
    const userEmail = 'johndoe@email.com'

    return (
        <SafeAreaView style={styles.screen}>
            <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">

                {/* Decorative circles */}
                <View style={styles.circleTopRight} />
                <View style={styles.circleMidLeft} />
                <View style={styles.circleBottomRight} />

                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
                        <Text style={styles.backArrow}>←</Text>
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Welcome Back</Text>
                    <View style={styles.backBtn} />
                </View>

                {/* Form */}
                <View style={styles.form}>

                    {/* Email - prefilled */}
                    <Text style={styles.label}>Email</Text>
                    <View style={styles.inputBox}>
                        <TextInput
                            style={styles.input}
                            value={userEmail}
                            editable={false}
                            placeholderTextColor="#9B9ECC"
                        />
                    </View>

                    {/* Password */}
                    <Text style={styles.label}>Password</Text>
                    <View style={styles.inputBox}>
                        <TextInput
                            style={styles.input}
                            placeholder="••••••••••"
                            placeholderTextColor="#9B9ECC"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={!showPassword}
                        />
                        <TouchableOpacity
                            onPress={() => setShowPassword(!showPassword)}
                            style={styles.eyeBtn}
                        >
                            <Text style={styles.eyeIcon}>{showPassword ? '🙈' : '👁️'}</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Remember Me */}
                    <TouchableOpacity
                        style={styles.checkRow}
                        onPress={() => setRememberMe(!rememberMe)}
                        activeOpacity={0.7}
                    >
                        <View style={[styles.checkbox, rememberMe && styles.checkboxChecked]}>
                            {rememberMe && <Text style={styles.checkmark}>✓</Text>}
                        </View>
                        <Text style={styles.checkLabel}>Remember me</Text>
                    </TouchableOpacity>

                    {/* Or */}
                    <Text style={styles.orText}>Or</Text>

                    {/* Biometrics */}
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

                {/* Bottom Buttons */}
                <View style={styles.bottom}>
                    <TouchableOpacity
                        style={styles.continueBtn}
                        onPress={() => navigation.navigate('Home')}
                    >
                        <Text style={styles.continueBtnText}>Continue as {userName}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.switchBtn}
                        onPress={() => navigation.navigate('Signup')}
                    >
                        <Text style={styles.switchBtnText}>Switch Account</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    scroll: {
        flexGrow: 1,
    },

    // Decorative circles
    circleTopRight: {
        position: 'absolute',
        top: -60,
        right: -60,
        width: 220,
        height: 220,
        borderRadius: 110,
        backgroundColor: '#E8EAF0',
        zIndex: 0,
    },
    circleMidLeft: {
        position: 'absolute',
        top: 200,
        left: -80,
        width: 260,
        height: 260,
        borderRadius: 130,
        backgroundColor: '#E8EAF0',
        zIndex: 0,
    },
    circleBottomRight: {
        position: 'absolute',
        bottom: 100,
        right: -80,
        width: 220,
        height: 220,
        borderRadius: 110,
        backgroundColor: '#E8EAF0',
        zIndex: 0,
    },

    // Header
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 10,
        zIndex: 1,
    },
    backBtn: {
        width: 44,
        height: 44,
        justifyContent: 'center',
    },
    backArrow: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1A1A1A',
    },
    headerTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#1A1A1A',
        flex: 1,
        textAlign: 'center',
    },

    // Form
    form: {
        paddingHorizontal: 24,
        paddingTop: 20,
        zIndex: 1,
    },
    label: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#1A1A1A',
        marginBottom: 10,
    },
    inputBox: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1.5,
        borderColor: '#3D3F8F',
        borderRadius: 30,
        paddingHorizontal: 18,
        height: 56,
        marginBottom: 28,
        backgroundColor: '#FFFFFF',
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
        fontSize: 18,
    },
    checkRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginBottom: 32,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 2,
        borderColor: '#3D3F8F',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkboxChecked: {
        backgroundColor: '#3D3F8F',
    },
    checkmark: {
        color: '#FFFFFF',
        fontSize: 12,
        fontWeight: 'bold',
    },
    checkLabel: {
        fontSize: 16,
        color: '#1A1A1A',
    },
    orText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#1A1A1A',
        marginBottom: 24,
    },
    biometricRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 60,
        marginBottom: 40,
    },
    biometricBtn: {
        alignItems: 'center',
        gap: 8,
    },
    biometricIcon: {
        fontSize: 36,
        color: '#3D3F8F',
    },
    biometricLabel: {
        fontSize: 16,
        color: '#3D3F8F',
        fontWeight: '600',
    },

    // Bottom
    bottom: {
        paddingHorizontal: 24,
        paddingBottom: 40,
        gap: 14,
        zIndex: 1,
    },
    continueBtn: {
        width: '100%',
        height: 56,
        borderWidth: 1.5,
        borderColor: '#3D3F8F',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    continueBtnText: {
        fontSize: 18,
        color: '#3D3F8F',
        fontWeight: '600',
    },
    switchBtn: {
        width: '100%',
        height: 56,
        borderWidth: 1.5,
        borderColor: '#3D3F8F',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    switchBtnText: {
        fontSize: 18,
        color: '#3D3F8F',
        fontWeight: '600',
    },
})
