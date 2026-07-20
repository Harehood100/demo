import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    ScrollView,
} from 'react-native'

const appointments = [
    {
        id: '1',
        doctorName: 'Dr. John Adams',
        specialty: 'General Practitioner',
        date: 'Tuesday, July 30 . 10:00AM',
        status: 'Approved',
    },
]

export default function AppointmentsScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.screen}>
            <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>

                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
                        <Text style={styles.backArrow}>←</Text>
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Appointments</Text>
                    <View style={styles.backBtn} />
                </View>

                {/* Banner Card */}
                <View style={styles.banner}>
                    <Text style={styles.bannerText}>
                        Select a date and time for{'\n'}your appointment.
                    </Text>
                    <TouchableOpacity
                        style={styles.createBtn}
                        onPress={() => navigation.navigate('CreateAppointment')}
                        activeOpacity={0.85}
                    >
                        <Text style={styles.createBtnText}>Create New Appoinment</Text>
                    </TouchableOpacity>
                </View>

                {/* Appointments List */}
                <View style={styles.list}>
                    {appointments.map((appt) => (
                        <View key={appt.id} style={styles.apptCard}>
                            <View style={styles.badgeWrap}>
                                <View style={styles.badge}>
                                    <Text style={styles.badgeText}>{appt.status}</Text>
                                </View>
                            </View>
                            <View style={styles.apptRow}>
                                <View style={styles.avatarCircle}>
                                    <Text style={styles.avatarEmoji}>👨‍⚕️</Text>
                                </View>
                                <View style={styles.apptInfo}>
                                    <Text style={styles.doctorName}>{appt.doctorName}</Text>
                                    <Text style={styles.specialty}>{appt.specialty}</Text>
                                    <Text style={styles.dateText}>{appt.date}</Text>
                                </View>
                            </View>
                        </View>
                    ))}
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: { flex: 1, backgroundColor: '#FFFFFF' },
    scroll: { flexGrow: 1 },
    header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingTop: 20, paddingBottom: 10 },
    backBtn: { width: 44, height: 44, justifyContent: 'center' },
    backArrow: { fontSize: 24, fontWeight: 'bold', color: '#1A1A1A' },
    headerTitle: { fontSize: 22, fontWeight: 'bold', color: '#1A1A1A', flex: 1, textAlign: 'center' },
    banner: { backgroundColor: '#2D3178', borderRadius: 16, margin: 16, padding: 20 },
    bannerText: { color: '#FFFFFF', fontSize: 20, fontWeight: '600', marginBottom: 24, lineHeight: 30 },
    createBtn: { backgroundColor: '#FFFFFF', borderRadius: 30, paddingVertical: 14, alignItems: 'center' },
    createBtnText: { color: '#1A1A1A', fontSize: 16, fontWeight: 'bold' },
    list: { paddingHorizontal: 16, gap: 12 },
    apptCard: { backgroundColor: '#2D3178', borderRadius: 16, padding: 16, overflow: 'hidden' },
    badgeWrap: { alignItems: 'flex-end', marginBottom: 10 },
    badge: { backgroundColor: '#F5D547', paddingHorizontal: 14, paddingVertical: 4, borderRadius: 6 },
    badgeText: { color: '#1A1A1A', fontSize: 13, fontWeight: 'bold' },
    apptRow: { flexDirection: 'row', alignItems: 'center', gap: 14 },
    avatarCircle: { width: 72, height: 72, borderRadius: 36, backgroundColor: 'rgba(255,255,255,0.15)', justifyContent: 'center', alignItems: 'center' },
    avatarEmoji: { fontSize: 36 },
    apptInfo: { flex: 1, gap: 4 },
    doctorName: { color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' },
    specialty: { color: 'rgba(255,255,255,0.8)', fontSize: 14 },
    dateText: { color: 'rgba(255,255,255,0.9)', fontSize: 14, marginTop: 4 },
})
