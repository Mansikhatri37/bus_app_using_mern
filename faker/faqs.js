import { View, Text, StyleSheet } from 'react-native';
import { styles } from '../utils/styles';  // Ensure you have styles defined in this file

export const faqs = [
    {
        id: "1",
        title: "New bus booking help",
        description: "Bus availability/Child fare...",
        icon: "bus",
        component: () => (
            <View style={styles.accordionContent}>
                <Text style={styles.title}>New Bus Booking Help</Text>
                <Text>Here's how you can book a bus:</Text>
                <Text>1. Open the app and go to the 'Bus Booking' section.</Text>
                <Text>2. Enter your pick-up and drop-off locations.</Text>
                <Text>3. Choose your preferred bus and time slot.</Text>
                <Text>4. Proceed with the payment to confirm your booking.</Text>
                <Text>5. You will receive a confirmation with your booking details.</Text>
            </View>
        )
    },
    {
        id: "2",
        title: "Technical Issues",
        description: "Need some technical help?",
        icon: "exclamation-thick",
        component: () => (
            <View style={styles.accordionContent}>
                <Text style={styles.title}>Technical Issues</Text>
                <Text>Follow these steps for common technical issues:</Text>
                <Text>1. Restart your app and try again.</Text>
                <Text>2. Ensure your device is connected to the internet.</Text>
                <Text>3. Check for app updates in the app store.</Text>
                <Text>4. If the problem persists, contact support.</Text>
            </View>
        )
    },
    {
        id: "3",
        title: "Offers",
        description: "Need help with offers?",
        icon: "offer",
        component: () => (
            <View style={styles.accordionContent}>
                <Text style={styles.title}>Offers and Discounts</Text>
                <Text>Here's how to find and use offers:</Text>
                <Text>1. Go to the 'Offers' section in the app.</Text>
                <Text>2. Browse through available offers and discounts.</Text>
                <Text>3. Apply the offer code during checkout to avail the discount.</Text>
                <Text>4. Check the terms and conditions for each offer.</Text>
            </View>
        )
    },
    {
        id: "4",
        title: "Ghumantoo Referral Help",
        description: "Need help with Ghumantoo referral...",
        icon: "share-variant-outline",
        component: () => (
            <View style={styles.accordionContent}>
                <Text style={styles.title}>Ghumantoo Referral Program</Text>
                <Text>Here's how to use the referral program:</Text>
                <Text>1. Share your referral code with friends and family.</Text>
                <Text>2. When someone signs up using your code, you both earn rewards.</Text>
                <Text>3. Track your referrals and rewards in the 'Referral' section.</Text>
                <Text>4. Ensure the referred person meets all referral criteria.</Text>
            </View>
        )
    },
    {
        id: "5",
        title: "Ghumantoo Wallet Help",
        description: "Need any help with Ghumantoo wallet...",
        icon: "wallet",
        component: () => (
            <View style={styles.accordionContent}>
                <Text style={styles.title}>Using the Ghumantoo Wallet</Text>
                <Text>Here's how to manage your wallet:</Text>
                <Text>1. Access your wallet from the app's main menu.</Text>
                <Text>2. Add funds to your wallet using your preferred payment method.</Text>
                <Text>3. Use your wallet balance to pay for bookings and services.</Text>
                <Text>4. Check your transaction history and balance in the wallet section.</Text>
            </View>
        )
    }
];


