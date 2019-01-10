import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';
import Button from '../Button';

import { IMG_PROFILE } from '../../images/index';

const index = () => (
    <View style={styles.container}>
        <Image style={styles.avatar} source={IMG_PROFILE} />
        <View style={styles.profileInfoContainer}>
            <Text style={styles.profileInfoName}>Adler Pagliarini</Text>    
            <Text style={styles.profileInfoDesc}>Learning react native with some examples</Text>
            <View style={styles.profileInfoButtonContainer}>
                <Button style={styles.firstButton}>Mensagem</Button>
                <Button type="outline">Seguir</Button>
            </View>
        </View>
    </View>
);

export default index;