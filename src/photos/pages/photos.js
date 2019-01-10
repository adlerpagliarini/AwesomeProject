import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import photoService from '../services/photoService';
import PageInfo from '../model/pageInfo';
import PhotoList from '../model/PhotoList';
import ButtonLink from './shared/buttonLink';

export default class Photos extends Component {
    static navigationOptions = {
        title: 'Get Started - Photo List'
    };

    state = {
        counter: 0,
        photosOnMemory: new PhotoList(),
        photos: new Array(),
        currentPage: 1,
        pagesInfo : new PageInfo()
    };

    async componentDidMount(){
        console.log('Photos DidMount', this.state, this.props);
        const { photos: photosOnMemory, pagesInfo } = await this.loadPhotosFromApi();        
        this.setState({photosOnMemory, pagesInfo});
        this.loadPhotosOnStateAndRender();
        console.log('Photos DidMount', this.state, this.props);
    }

    loadPhotosFromApi = async () => {
        return await photoService.GetPhotosOffline();
    };

    loadPhotosOnStateAndRender = (page = 1) => {
        const from = this.state.counter;
        const amount = page * this.state.pagesInfo.limitPerPage;
        const items = this.state.photosOnMemory.photoList.slice(from, amount);
        const counter = this.state.photos.length + items.length;
        this.setState({photos: [...this.state.photos, ...items], counter});
    };

    renderMoreItem = () => {
        const { currentPage, pagesInfo } = this.state;

        if(currentPage === pagesInfo.totalPages) return;

        const pageNumber = currentPage + 1;

        this.loadPhotosOnStateAndRender(pageNumber);
        this.setState({currentPage: pageNumber})
    };


    renderItem = ({item}) => {
        return (
            <View style={styles.photoContainer}>
                <Text style={styles.photoTitle}>
                    {item.id} - {item.title}
                </Text>
                <ButtonLink props={{linkTo: 'PhotoDetails', linkToParams: { photo: item }, linkText: 'Load Component', navigation: this.props.navigation}} />
                <TouchableOpacity style={styles.photoButton} onPress={() => {
                        this.props.navigation.navigate("PhotoDetails", { photo: item })
                    }}>
                    <Text style={styles.photoButtonText}>
                        Load Image
                    </Text>
                </TouchableOpacity>
            </View>
        )
    };
    
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.counter}>Photos: {this.state.counter}</Text>
                <FlatList 
                    contentContainerStyle={styles.photoList}
                    data={this.state.photos}
                    keyExtractor={item => item.id.toString()}
                    renderItem={this.renderItem}
                    onEndReached={this.renderMoreItem}
                    onEndReachedThreshold={0.1}
                />
                {/*this.state.photos.map(p => (
                    <Text key={p.id}>{p.title}</Text>
                ))*/}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fafafa',
      alignItems:'center', /* | */
      marginTop: 10,
      color: '#141823'
    },
    counter:{
        justifyContent: "center",
        fontWeight: "bold"
    },
    photoList:{ padding:20, backgroundColor: '#ccc', borderRadius: 5 },
    photoContainer:{
        backgroundColor:'#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        padding: 20,
        marginBottom: 20,
        width: 300
    },
    photoTitle:{
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333'
    },
    photoButton:{
        height: 42,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#DA552F",
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center",
        marginTop:10,
        padding:10
    },
    photoButtonText:{
        fontSize: 16,
        color:"#DA552F",
        fontWeight: "bold"
    }
  });