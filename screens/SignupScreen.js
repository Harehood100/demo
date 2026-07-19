import { useState } from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Modal,
    StyleSheet,
    SafeAreaView,
    ScrollView,
} from 'react-native'

export default function SignupScreen({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [rememberMe, setRememberMe] = useState(false)
    const [showModal, setShowModal] = useState(false)

    const handleContinue = () => {
        if (!rememberMe) {
            setShowModal(true)
        } else {
            navigation.navigate('Home')
        }
    }

    const handleModalContinue = () => {
        setShowModal(false)
        navigation.navigate('Home')
    }

    const handleGoBack = () => {
        setShowModal(false)
    }

    return (
        <SafeAreaView style={styles.screen}>
            <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">

                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
                        <Text style={styles.backArrow}>←</Text>
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Create Profile</Text>
                    <View style={styles.backBtn} />
                </View>

                {/* Form */}
                <View style={styles.form}>

                    {/* Email */}
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

                    {/* Password */}
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

                {/* Bottom */}
                <View style={styles.bottom}>
                    <TouchableOpacity style={styles.continueBtn} onPress={handleContinue}>
                        <Text style={styles.continueBtnText}>Continue</Text>
                    </TouchableOpacity>

                    <Text style={styles.loginText}>
                        Have a profile?{' '}
                        <Text
                            style={styles.loginLink}
                            onPress={() => navigation.navigate('Login')}
                        >
                            Log in
                        </Text>
                    </Text>
                </View>

            </ScrollView>

            {/* Remember Me Modal */}
            <Modal visible={showModal} transparent animationType="fade">
                <View style={styles.modalOverlay}>
                    <View style={styles.modalCard}>
                        <Text style={styles.modalText}>
                            Hello! You didn't click{' '}
                            <Text style={styles.modalBold}>"Remember me"</Text>
                            {' '}If you choose to continue with this off you will have to input your details again. Would you still like to continue into the app?
                        </Text>

                        <TouchableOpacity
                            style={styles.modalContinueBtn}
                            onPress={handleModalContinue}
                        >
                            <Text style={styles.modalContinueText}>Continue</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.modalGoBackBtn}
                            onPress={handleGoBack}
                        >
                            <Text style={styles.modalGoBackText}>
                                Go back and click "Remember me"
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

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
        justifyContent: 'space-between',
    },

    // Header
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 10,
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

    // Remember Me
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

    // Or
    orText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#1A1A1A',
        marginBottom: 24,
    },

    // Biometrics
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
        paddingBottom: 32,
        alignItems: 'center',
        gap: 16,
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
    loginText: {
        fontSize: 14,
        color: '#1A1A1A',
    },
    loginLink: {
        color: '#3D3F8F',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
    },

    // Modal
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.35)',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 32,
    },
    modalCard: {
        backgroundColor: '#2D3178',
        borderRadius: 16,
        padding: 28,
        alignItems: 'center',
        gap: 16,
    },
    modalText: {
        color: '#FFFFFF',
        fontSize: 16,
        textAlign: 'center',
        lineHeight: 26,
    },
    modalBold: {
        fontWeight: 'bold',
    },
    modalContinueBtn: {
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        paddingVertical: 12,
        paddingHorizontal: 40,
        width: '100%',
        alignItems: 'center',
    },
    modalContinueText: {
        color: '#1A1A1A',
        fontSize: 16,
        fontWeight: '600',
    },
    modalGoBackBtn: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: 30,
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: '100%',
        alignItems: 'center',
    },
    modalGoBackText: {
        color: '#FFFFFF',
        fontSize: 13,
        textAlign: 'center',
    },
})
