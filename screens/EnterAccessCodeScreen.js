import { useState, useRef } from 'react'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    ScrollView,
} from 'react-native'

export default function EnterAccessCodeScreen({ navigation }) {
    const [codes, setCodes] = useState(['', '', '', ''])
    const inputs = useRef([])

    const handleChange = (text, index) => {
        const newCodes = [...codes]
        newCodes[index] = text
        setCodes(newCodes)
        if (text && index < 3) {
            inputs.current[index + 1]?.focus()
        }
    }

    return (
        <SafeAreaView style={styles.screen}>
            <ScrollView contentContainerStyle={styles.scroll}>

                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
                        <Text style={styles.backArrow}>←</Text>
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Enter Access Code</Text>
                    <View style={styles.backBtn} />
                </View>

                <View style={styles.content}>
                    <Text style={styles.description}>
                        Tap the button below to create your caregiver's connection code
                    </Text>

                    <View style={styles.codeRow}>
                        {codes.map((c, i) => (
                            <TextInput
                                key={i}
                                ref={el => inputs.current[i] = el}
                                style={styles.codeBox}
                                value={c}
                                onChangeText={text => handleChange(text.slice(-1), i)}
                                keyboardType="number-pad"
                                maxLength={1}
                                textAlign="center"
                            />
                        ))}
                    </View>

                    <TouchableOpacity style={styles.confirmBtn} onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.confirmBtnText}>Confirm Code</Text>
                    </TouchableOpacity>
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
    header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingTop: 20, paddingBottom: 10 },
    backBtn: { width: 44, height: 44, justifyContent: 'center' },
    backArrow: { fontSize: 24, fontWeight: 'bold', color: '#1A1A1A' },
    headerTitle: { fontSize: 22, fontWeight: 'bold', color: '#1A1A1A', flex: 1, textAlign: 'center' },
    content: { paddingHorizontal: 24, paddingTop: 8 },
    description: { fontSize: 16, color: '#1A1A1A', textAlign: 'center', marginBottom: 32, lineHeight: 24 },
    codeRow: { flexDirection: 'row', justifyContent: 'flex-start', gap: 16, marginBottom: 32 },
    codeBox: { width: 72, height: 72, borderWidth: 1.5, borderColor: '#3D3F8F', borderRadius: 8, fontSize: 24, fontWeight: 'bold', color: '#1A1A1A' },
    confirmBtn: { width: '100%', height: 56, backgroundColor: '#2D3178', borderRadius: 30, justifyContent: 'center', alignItems: 'center' },
    confirmBtnText: { color: '#FFFFFF', fontSize: 18, fontWeight: 'bold' },
    bottom: { paddingHorizontal: 24, paddingBottom: 32 },
    continueBtn: { width: '100%', height: 56, borderWidth: 1.5, borderColor: '#3D3F8F', borderRadius: 30, justifyContent: 'center', alignItems: 'center' },
    continueBtnText: { fontSize: 18, color: '#3D3F8F', fontWeight: '600' },
})
