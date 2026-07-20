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

export default function CreateAppointmentScreen({ navigation }) {
    const [date, setDate] = useState('June 30, 2026')
    const [time, setTime] = useState('10:30AM')
    const [notes, setNotes] = useState('')

    return (
        <SafeAreaView style={styles.screen}>
            <ScrollView contentContainerStyle={styles.scroll} keyboardShouldPersistTaps="handled">

                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
                        <Text style={styles.backArrow}>←</Text>
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Create Appointment</Text>
                    <View style={styles.backBtn} />
                </View>

                <View style={styles.form}>

                    <Text style={styles.fieldLabel}>Select Date</Text>
                    <TouchableOpacity style={styles.inputRow} activeOpacity={0.8}>
                        <Text style={styles.inputText}>{date}</Text>
                        <Text style={styles.inputIcon}>📅</Text>
                    </TouchableOpacity>

                    <Text style={styles.fieldLabel}>Select Time</Text>
                    <TouchableOpacity style={styles.inputRow} activeOpacity={0.8}>
                        <Text style={styles.inputText}>{time}</Text>
                        <Text style={styles.inputIcon}>🕐</Text>
                    </TouchableOpacity>

                    <Text style={styles.fieldLabel}>Notes</Text>
                    <View style={[styles.inputRow, styles.notesBox]}>
                        <TextInput
                            style={styles.notesInput}
                            placeholder="Enter appointment details...."
                            placeholderTextColor="#9B9ECC"
                            value={notes}
                            onChangeText={setNotes}
                            multiline
                            numberOfLines={6}
                            textAlignVertical="top"
                        />
                    </View>

                </View>

                <View style={styles.bottom}>
                    <TouchableOpacity
                        style={styles.continueBtn}
                        onPress={() => navigation.navigate('SetReminder', { date, time, notes })}
                    >
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
    fieldLabel: { fontSize: 16, fontWeight: 'bold', color: '#3D3F8F', marginBottom: 10 },
    inputRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderWidth: 1.5, borderColor: '#3D3F8F', borderRadius: 30, paddingHorizontal: 18, height: 56, marginBottom: 24 },
    inputText: { fontSize: 16, color: '#1A1A1A' },
    inputIcon: { fontSize: 20 },
    notesBox: { height: 160, alignItems: 'flex-start', paddingTop: 14, borderRadius: 14 },
    notesInput: { flex: 1, fontSize: 16, color: '#1A1A1A', width: '100%' },
    bottom: { paddingHorizontal: 24, paddingBottom: 32 },
    continueBtn: { width: '100%', height: 56, borderWidth: 1.5, borderColor: '#3D3F8F', borderRadius: 30, justifyContent: 'center', alignItems: 'center' },
    continueBtnText: { fontSize: 18, color: '#3D3F8F', fontWeight: '600' },
})
