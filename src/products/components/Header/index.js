import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const index = () => (
    <View style={styles.container}>
        <Text style={styles.return}>Back</Text>
        <Text style={styles.title}>Profile</Text>
        <Text style={styles.more}>...</Text>
    </View>
);

export default index;