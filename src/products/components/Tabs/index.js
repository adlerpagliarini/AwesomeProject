import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const index = () => (
    <View style={styles.container}>
        <Text style={styles.icon}>1</Text>
        <Text style={styles.icon}>2</Text>
        <View style={[styles.icon, styles.more]}>
            <Text style={styles.moreText}>+</Text>
        </View>
        <Text style={styles.icon}>4</Text>
        <Text style={styles.icon}>5</Text>
    </View>
);

export default index;