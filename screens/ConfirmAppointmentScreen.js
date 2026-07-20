import { useState } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Modal,
    StyleSheet,
    SafeAreaView,
    ScrollView,
} from 'react-native'

export default function ConfirmAppointmentScreen({ navigation, route }) {
    const {
        date = 'July 30, 2026',
        time = '10:30AM',
        notes = "Doctor's Visit",
        reminder = '1 Hour Before',
    } = route?.params || {}

    const [showSuccess, setShowSuccess] = useState(false)

    const rows = [
        { label: 'Date:', value: date },
        { label: 'Time:', value: time },
        { label: 'Notes:', value: notes },
        { label: 'Reminder:', value: reminder },
    ]

    return (
        <SafeAreaView style={styles.screen}>
            <ScrollView contentContainerStyle={styles.scroll}>

                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
                        <Text style={styles.backArrow}>←</Text>
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Confirm Appointment</Text>
                    <View style={styles.backBtn} />
                </View>

                <View style={styles.content}>
                    {rows.map((row) => (
                        <View key={row.label} style={styles.row}>
                            <Text style={styles.rowLabel}>{row.label}</Text>
                            <Text style={styles.rowValue}>{row.value}</Text>
                        </View>
                    ))}
                </View>

                <View style={styles.bottom}>
                    <TouchableOpacity style={styles.saveBtn} onPress={() => setShowSuccess(true)}>
                        <Text style={styles.saveBtnText}>Save Appointment</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>

            {/* Success Modal */}
            <Modal visible={showSuccess} transparent animationType="slide">
                <View style={styles.modalOverlay}>
                    <View style={styles.modalCard}>
                        <Text style={styles.modalTitle}>Appointment Saved Successfully!</Text>

                        <View style={styles.checkCircle}>
                            <Text style={styles.checkMark}>✓</Text>
                        </View>

                        <Text style={styles.modalSubtitle}>Your Appointment has been Added.</Text>

                        <TouchableOpacity style={styles.shareBtn}>
                            <Text style={styles.shareBtnText}>Share with Caregiver</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { setShowSuccess(false); navigation.navigate('Appointments') }}>
                            <Text style={styles.doneText}>Done</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: { flex: 1, backgroundColor: '#FFFFFF' },
    scroll: { flexGrow: 1, justifyContent: 'space-between' },
    header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingTop: 20, paddingBottom: 10 },
    backBtn: { width: 44, height: 44, justifyContent: 'center' },
    backArrow: { fontSize: 24, fontWeight: 'bold', color: '#1A1A1A' },
    headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#1A1A1A', flex: 1, textAlign: 'center' },
    content: { paddingHorizontal: 24, paddingTop: 24, gap: 20 },
    row: { flexDirection: 'row', gap: 32 },
    rowLabel: { fontSize: 16, fontWeight: 'bold', color: '#1A1A1A', width: 90 },
    rowValue: { fontSize: 16, color: '#3D3F8F', flex: 1 },
    bottom: { paddingHorizontal: 24, paddingBottom: 32 },
    saveBtn: { width: '100%', height: 56, backgroundColor: '#2D3178', borderRadius: 30, justifyContent: 'center', alignItems: 'center' },
    saveBtnText: { color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' },
    modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.35)', justifyContent: 'flex-end' },
    modalCard: { backgroundColor: '#2D3178', borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 28, alignItems: 'center', gap: 16 },
    modalTitle: { color: '#FFFFFF', fontSize: 16, fontWeight: 'bold', textAlign: 'center' },
    checkCircle: { width: 88, height: 88, borderRadius: 44, backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center', shadowColor: '#2D3178', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.5, shadowRadius: 12, elevation: 8 },
    checkMark: { fontSize: 40, color: '#2D3178', fontWeight: 'bold' },
    modalSubtitle: { color: '#FFFFFF', fontSize: 16, textAlign: 'center' },
    shareBtn: { backgroundColor: '#FFFFFF', borderRadius: 30, paddingVertical: 14, paddingHorizontal: 40, width: '100%', alignItems: 'center' },
    shareBtnText: { color: '#1A1A1A', fontSize: 16, fontWeight: '600' },
    doneText: { color: '#FFFFFF', fontSize: 16, fontWeight: '600', paddingVertical: 8 },
})
