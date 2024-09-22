import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function AboutUs() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>About Us</Text>
      <Text style={styles.paragraph}>
        Welcome to <Text style={styles.highlight}>Ghumantoo</Text>, your ultimate travel companion designed to make your journey effortless and enjoyable. At Ghumantoo, we believe that every travel experience should be seamless, affordable, and memorable.
      </Text>
      <Text style={styles.subtitle}>Who We Are</Text>
      <Text style={styles.paragraph}>
        Ghumantoo is a forward-thinking bus booking platform that connects travelers with a network of reliable and comfortable bus services. Our mission is to provide a user-friendly, efficient, and innovative solution to simplify your travel needs.
      </Text>
      <Text style={styles.subtitle}>What We Offer</Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>• Comprehensive Bus Network:</Text> Access a wide range of bus routes across the country, ensuring that you find the best connections for your travel plans.
      </Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>• Easy Booking:</Text> Enjoy a hassle-free booking experience with our intuitive app, where you can search, compare, and book your bus tickets with just a few taps.
      </Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>• Exclusive Deals and Discounts:</Text> Save more on your travels with our special offers, promotions, and seasonal discounts designed to make your journey budget-friendly.
      </Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>• Real-Time Tracking:</Text> Stay informed with real-time updates on your bus's location and schedule, giving you peace of mind and allowing you to plan your journey effectively.
      </Text>
      <Text style={styles.paragraph}>
        <Text style={styles.bold}>• Customer-Centric Support:</Text> Our dedicated support team is here to assist you with any queries or issues, ensuring that your experience with Ghumantoo is smooth and enjoyable.
      </Text>
      <Text style={styles.subtitle}>Our Vision</Text>
      <Text style={styles.paragraph}>
        We aim to redefine travel by offering a reliable, cost-effective, and convenient bus booking experience. At Ghumantoo, we’re committed to transforming your travel plans into a pleasant adventure with our top-notch services and customer-focused approach.
      </Text>
      <Text style={styles.subtitle}>Connect With Us</Text>
      <Text style={styles.paragraph}>
        For more information, updates, and support, feel free to reach out to us at <Text style={styles.link}>contact@gHumantoo.com</Text> or follow us on our social media channels.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: 'lightgrey',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  paragraph: {
    fontSize: 16,
    marginBottom: 8,
    lineHeight: 24,
  },
  bold: {
    fontWeight: 'bold',
  },
  highlight: {
    color: 'dodgerblue',
  },
  link: {
    color: 'dodgerblue',
    textDecorationLine: 'underline',
  },
});
