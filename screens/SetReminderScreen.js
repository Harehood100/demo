import { useState } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    Switch,
    StyleSheet,
    SafeAreaView,
    ScrollView,
} from 'react-native'

export default function SetReminderScreen({ navigation, route }) {
    const { date, time, notes } = route?.params || {}
    const [reminderDate, setReminderDate] = useState('June 30, 2026')
    const [soundAlert, setSoundAlert] = useState(false)

    return (
        <SafeAreaView style={styles.screen}>
            <ScrollView contentContainerStyle={styles.scroll}>

                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
                        <Text style={styles.backArrow}>←</Text>
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Set Reminder</Text>
                    <View style={styles.backBtn} />
                </View>

                <View style={styles.form}>

                    <Text style={styles.fieldLabel}>Remind Me Before</Text>
                    <TouchableOpacity style={styles.inputRow} activeOpacity={0.8}>
                        <Text style={styles.inputText}>{reminderDate}</Text>
                        <Text style={styles.chevron}>›</Text>
                    </TouchableOpacity>

                    <Text style={styles.fieldLabel}>Sound Alert</Text>
                    <View style={styles.toggleRow}>
                        <Text style={styles.toggleLabel}>Sound Reminder</Text>
                        <Switch
                            value={soundAlert}
                            onValueChange={setSoundAlert}
                            trackColor={{ false: '#C4C4C4', true: '#2D3178' }}
                            thumbColor="#FFFFFF"
                        />
                    </View>

                </View>

                <View style={styles.bottom}>
                    <TouchableOpacity
                        style={styles.continueBtn}
                        onPress={() => navigation.navigate('ConfirmAppointment', { date, time, notes, reminder: '1 Hour Before' })}
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
    inputText: { fontSize: 16, color: '#9B9ECC' },
    chevron: { fontSize: 24, color: '#3D3F8F', fontWeight: 'bold' },
    toggleRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderWidth: 1.5, borderColor: '#3D3F8F', borderRadius: 30, paddingHorizontal: 18, height: 56 },
    toggleLabel: { fontSize: 16, color: '#9B9ECC' },
    bottom: { paddingHorizontal: 24, paddingBottom: 32 },
    continueBtn: { width: '100%', height: 56, borderWidth: 1.5, borderColor: '#3D3F8F', borderRadius: 30, justifyContent: 'center', alignItems: 'center' },
    continueBtnText: { fontSize: 18, color: '#3D3F8F', fontWeight: '600' },
})
