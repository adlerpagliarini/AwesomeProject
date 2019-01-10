import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const Button = ({children, type, style}) => (
    <TouchableOpacity style={[styles.container,
        type ? styles[`button-${type}`] : {},
        style
    ]}>
        <Text style={[styles.text,
            type ? styles[`text-${type}`] : {}
        ]}>{children}</Text>
    </TouchableOpacity>
);

export default Button;