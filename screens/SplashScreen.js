import { useEffect, useRef } from 'react'
import { View, Text, Animated, StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

export default function SplashScreen({ navigation }) {
    // Animated values
    const welcomeOpacity = useRef(new Animated.Value(0)).current
    const mOpacity = useRef(new Animated.Value(0)).current
    const eOpacity = useRef(new Animated.Value(0)).current
    const dOpacity = useRef(new Animated.Value(0)).current
    const pillScale = useRef(new Animated.Value(0.6)).current

    useEffect(() => {
        Animated.sequence([
            // Fade in "Welcome To"
            Animated.timing(welcomeOpacity, { toValue: 1, duration: 400, useNativeDriver: true }),

            // Pill bounces in
            Animated.spring(pillScale, { toValue: 1, friction: 5, useNativeDriver: true }),

            // Letters type in one by one
            Animated.timing(mOpacity, { toValue: 1, duration: 200, useNativeDriver: true }),
            Animated.timing(eOpacity, { toValue: 1, duration: 200, useNativeDriver: true }),
            Animated.timing(dOpacity, { toValue: 1, duration: 200, useNativeDriver: true }),

            // Hold for a moment
            Animated.delay(800),
        ]).start(() => {
            navigation.replace('CreateProfile')
        })
    }, [])

    return (
        <View style={styles.screen}>
            {/* Decorative circles */}
            <View style={styles.circleLargeTopLeft} />
            <View style={styles.circleSmallTopRight} />
            <View style={styles.circleLargeBottomLeft} />

            {/* Welcome To */}
            <Animated.Text style={[styles.welcome, { opacity: welcomeOpacity }]}>
                Welcome To
            </Animated.Text>

            {/* Logo row — pill icon + OMED letters */}
            <View style={styles.logoRow}>
                <Animated.View style={[styles.pillCircle, { transform: [{ scale: pillScale }] }]}>
                    {/* Pill icon — navy circle with white dividing line */}
                    <View style={styles.pillLine} />
                </Animated.View>

                <View style={styles.lettersRow}>
                    <Animated.Text style={[styles.letter, { opacity: mOpacity }]}>M</Animated.Text>
                    <Animated.Text style={[styles.letter, { opacity: eOpacity }]}>E</Animated.Text>
                    <Animated.Text style={[styles.letter, { opacity: dOpacity }]}>D</Animated.Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        position: 'relative',
    },

    // Decorative circles matching Figma
    circleLargeTopLeft: {
        position: 'absolute',
        top: -30,
        left: -30,
        width: 160,
        height: 160,
        borderRadius: 80,
        backgroundColor: '#9B9EC8',
        opacity: 0.7,
    },
    circleSmallTopRight: {
        position: 'absolute',
        top: 120,
        right: 60,
        width: 52,
        height: 52,
        borderRadius: 26,
        backgroundColor: '#6B6F9E',
        opacity: 0.7,
    },
    circleLargeBottomLeft: {
        position: 'absolute',
        bottom: -40,
        left: -40,
        width: 220,
        height: 220,
        borderRadius: 110,
        backgroundColor: '#9B9EC8',
        opacity: 0.4,
    },

    // Welcome To text
    welcome: {
        position: 'absolute',
        top: 140,
        left: 0,
        right: 0,
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1A1A1A',
    },

    // Logo row
    logoRow: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
    },

    // Pill icon circle
    pillCircle: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#4A4F8F',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
    },
    pillLine: {
        width: '80%',
        height: 3,
        backgroundColor: '#FFFFFF',
        borderRadius: 2,
    },

    // Letters
    lettersRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    letter: {
        fontSize: 56,
        fontWeight: 'bold',
        color: '#1A1A1A',
        letterSpacing: 2,
    },
})
