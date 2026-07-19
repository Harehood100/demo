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

export default function AddCaregiverScreen({ navigation }) {
    const [name, setName] = useState('')
    const [contact, setContact] = useState('')
    const [role, setRole] = useState('')

    return (
        <SafeAreaView style={styles.screen}>
            <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">

                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
                        <Text style={styles.backArrow}>←</Text>
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Add Caregiver</Text>
                    <View style={styles.backBtn} />
                </View>

                <View style={styles.form}>
                    <Text style={styles.subtitle}>Enter caregiver's details</Text>

                    <Text style={styles.label}>Name</Text>
                    <View style={styles.inputBox}>
                        <TextInput
                            style={styles.input}
                            placeholder="Name"
                            placeholderTextColor="#9B9ECC"
                            value={name}
                            onChangeText={setName}
                        />
                    </View>

                    <Text style={styles.label}>Phone Number or Email</Text>
                    <View style={styles.inputBox}>
                        <TextInput
                            style={styles.input}
                            placeholder="Phone Number or Email"
                            placeholderTextColor="#9B9ECC"
                            value={contact}
                            onChangeText={setContact}
                            keyboardType="email-address"
                        />
                    </View>

                    <Text style={styles.label}>Role (Caregiver/Child)</Text>
                    <View style={styles.inputBox}>
                        <TextInput
                            style={styles.input}
                            placeholder="Role"
                            placeholderTextColor="#9B9ECC"
                            value={role}
                            onChangeText={setRole}
                        />
                    </View>
                </View>

                <View style={styles.bottom}>
                    <TouchableOpacity style={styles.continueBtn} onPress={() => navigation.navigate('GenerateCode')}>
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
    header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingTop: 20, paddingBottom: 10 },
    backBtn: { width: 44, height: 44, justifyContent: 'center' },
    backArrow: { fontSize: 24, fontWeight: 'bold', color: '#1A1A1A' },
    headerTitle: { fontSize: 22, fontWeight: 'bold', color: '#1A1A1A', flex: 1, textAlign: 'center' },
    form: { paddingHorizontal: 24, paddingTop: 16 },
    subtitle: { fontSize: 22, fontWeight: 'bold', color: '#1A1A1A', marginBottom: 24 },
    label: { fontSize: 15, fontWeight: 'bold', color: '#1A1A1A', marginBottom: 8, marginLeft: 4 },
    inputBox: { borderWidth: 1.5, borderColor: '#3D3F8F', borderRadius: 30, paddingHorizontal: 18, height: 56, marginBottom: 20, justifyContent: 'center' },
    input: { fontSize: 16, color: '#1A1A1A' },
    bottom: { paddingHorizontal: 24, paddingBottom: 32 },
    continueBtn: { width: '100%', height: 56, borderWidth: 1.5, borderColor: '#3D3F8F', borderRadius: 30, justifyContent: 'center', alignItems: 'center' },
    continueBtnText: { fontSize: 18, color: '#3D3F8F', fontWeight: '600' },
})
