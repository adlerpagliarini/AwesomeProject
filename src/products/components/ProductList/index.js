import React, {Component} from 'react';
import { View } from 'react-native';
import styles from './styles';

import Product from './Product';
import { IMG_1, IMG_2, IMG_3 } from '../../images/index';


export default class index extends Component {
    state = {
        products:[
            {
                id: 1,
                image: IMG_1,
                title: 'Honda Civic',
                description: 'Gallery with React Native',
                price: 'R$100,00'
            },
            {
                id: 2,
                image: IMG_2,
                title: 'Honda Civic',
                description: 'Gallery with React Native',
                price: 'R$200,00'
            },
            {
                id: 3,
                image: IMG_3,
                title: 'Honda Civic',
                description: 'Gallery with React Native',
                price: 'R$300,00'
            },
            {
                id: 4,
                image: IMG_1,
                title: 'Honda Civic',
                description: 'Gallery with React Native',
                price: 'R$400,00'
            },
            {
                id: 5,
                image: IMG_2,
                title: 'Honda Civic',
                description: 'Gallery with React Native',
                price: 'R$500,00'
            },
            {
                id: 6,
                image: IMG_3,
                title: 'Honda Civic',
                description: 'Gallery with React Native',
                price: 'R$600,00'
            },
            {
                id: 7,
                image: IMG_1,
                title: 'Honda Civic',
                description: 'Gallery with React Native',
                price: 'R$700,00'
            },
            {
                id: 8,
                image: IMG_2,
                title: 'Honda Civic',
                description: 'Gallery with React Native',
                price: 'R$800,00'
            }
        ]

    };
    render(){
        return (
            <View style={styles.container}>
                {this.state.products.map(product => <Product key={product.id} product={product}/>)}
            </View>
        );
    }
}