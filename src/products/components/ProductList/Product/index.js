import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import Button from '../../Button/';

const index = ({product: {image, title, description, price}}) => (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Button style={styles.selectButton}/>
            <Image style={styles.image} source={image }/>
        </View>
        <View style={styles.infoContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.price}>{price}</Text>
        </View>
    </View>
);

export default index;