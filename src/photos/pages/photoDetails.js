import React from 'react';
import { WebView } from 'react-native';

const PhotoDetails = ({ navigation }) => (
    <WebView source={{uri: navigation.state.params.photo.thumbnailUrl}}/>
)

//navigation vai receber os parametros informados na rota
PhotoDetails.navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.photo.title
});

export default PhotoDetails;