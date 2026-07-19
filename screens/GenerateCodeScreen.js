import { useState } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Clipboard,
    Alert,
} from 'react-native'

export default function GenerateCodeScreen({ navigation }) {
    const [code, setCode] = useState('1234')

    const handleGenerate = () => {
        const newCode = Math.floor(1000 + Math.random() * 9000).toString()
        setCode(newCode)
    }

    const handleCopy = () => {
        Clipboard.setString(code)
        Alert.alert('Copied!', 'Code copied to clipboard')
    }

    return (
        <SafeAreaView style={styles.screen}>
            <ScrollView contentContainerStyle={styles.scroll}>

                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
                        <Text style={styles.backArrow}>←</Text>
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Generate Code</Text>
                    <View style={styles.backBtn} />
                </View>

                <View style={styles.content}>
                    <Text style={styles.description}>
                        Tap the button below to create your caregiver's connection code
                    </Text>

                    <View style={styles.codeBox}>
                        <Text style={styles.codeText}>{code}</Text>
                    </View>

                    <View style={styles.btnRow}>
                        <TouchableOpacity style={styles.actionBtn} onPress={handleGenerate}>
                            <Text style={styles.actionBtnText}>Generate Code</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.actionBtn} onPress={handleCopy}>
                            <Text style={styles.actionBtnText}>Copy Code</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={styles.hint}>Copy and paste this code</Text>
                </View>

                <View style={styles.bottom}>
                    <TouchableOpacity style={styles.continueBtn} onPress={() => navigation.navigate('EnterAccessCode')}>
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
    content: { paddingHorizontal: 24, paddingTop: 8, alignItems: 'center' },
    description: { fontSize: 16, color: '#1A1A1A', textAlign: 'center', marginBottom: 28, lineHeight: 24 },
    codeBox: { width: '100%', height: 100, borderWidth: 1.5, borderColor: '#3D3F8F', borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginBottom: 20 },
    codeText: { fontSize: 44, fontWeight: 'bold', color: '#1A1A1A', letterSpacing: 8 },
    btnRow: { flexDirection: 'row', gap: 14, marginBottom: 20, width: '100%' },
    actionBtn: { flex: 1, backgroundColor: '#2D3178', borderRadius: 30, paddingVertical: 14, alignItems: 'center' },
    actionBtnText: { color: '#FFFFFF', fontSize: 14, fontWeight: 'bold' },
    hint: { fontSize: 16, color: '#1A1A1A', textAlign: 'center' },
    bottom: { paddingHorizontal: 24, paddingBottom: 32 },
    continueBtn: { width: '100%', height: 56, borderWidth: 1.5, borderColor: '#3D3F8F', borderRadius: 30, justifyContent: 'center', alignItems: 'center' },
    continueBtnText: { fontSize: 18, color: '#3D3F8F', fontWeight: '600' },
})
