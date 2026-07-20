import { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

/**
 * HomeCarousel
 * The 3-slide carousel card from the Home screen
 * Slides from Image 1:
 *   1. "We Help You Keep Track Of Your Medication" + pill emoji
 *   2. "Remind You About Your Appointments" + calendar emoji
 *   3. "Connect With Your Care Circle" + people emoji
 */
const slides = [
    {
        text: 'We Help You Keep Track Of Your Medication',
        emoji: '💊',
    },
    {
        text: 'Remind You About Your Appointments',
        emoji: '📅',
    },
    {
        text: 'Connect With Your Care Circle',
        emoji: '👩‍👧',
    },
]

export default function HomeCarousel() {
    const [index, setIndex] = useState(0)

    return (
        <View style={styles.card}>
            <View style={styles.inner}>
                <Text style={styles.text}>{slides[index].text}</Text>
                <Text style={styles.emoji}>{slides[index].emoji}</Text>
            </View>
            <View style={styles.dotRow}>
                {slides.map((_, i) => (
                    <TouchableOpacity
                        key={i}
                        onPress={() => setIndex(i)}
                        style={[styles.dot, i === index && styles.dotActive]}
                        accessibilityLabel={`Slide ${i + 1}`}
                    />
                ))}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderWidth: 1.5,
        borderColor: '#2D3178',
        borderRadius: 16,
        padding: 16,
        backgroundColor: '#FFFFFF',
    },
    inner: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2D3178',
        flex: 1,
        paddingRight: 10,
    },
    emoji: {
        fontSize: 40,
    },
    dotRow: {
        flexDirection: 'row',
        gap: 8,
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#C4C4C4',
    },
    dotActive: {
        backgroundColor: '#2D3178',
    },
})
