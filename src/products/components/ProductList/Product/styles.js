import { StyleSheet, Dimensions } from 'react-native';
import { metrics, fonts, colors } from '../../../styles/index';

const { windowWidth } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.white,
      borderRadius: 3,
      marginBottom: metrics.padding,
      shadowColor: colors.light,
      shadowRadius: 2,
      shadowOpacity: 0.1,
      shadowOffset: { x: 0, y: 0},
      width: (windowWidth - 45)/2, //padding Left Right + Space between
    },
    imageContainer:{
      padding: metrics.padding,
    },
    image:{
      width: '100%',
      height: 100,
      resizeMode: 'contain',
    },
    infoContainer:{
      padding:metrics.padding,
      borderTopWidth: 1,
      borderColor:colors.light
    },
    title:{
      textAlign: 'center',
      fontWeight:'bold',
      fontSize: fonts.regular,
      color:colors.darker
    },
    description:{
      textAlign: 'center',
      fontSize: fonts.small,
      color:colors.darker
    },
    price:{
      textAlign: 'left',
      color: colors.light,
      fontSize: fonts.regular,
      color:colors.darker
    },
    selectButton:{
      position:'absolute',
      zIndex: 1,
      right: metrics.padding + 2,
      top: metrics.padding + 2,
      height: 24,
      width: 24,
      borderRadius: 360,
      borderWidth: 2,
      borderColor: colors.primary,
      backgroundColor: 'rgba(255, 255, 255, 0.7)',
      paddingHorizontal: 0
    }
  });

  export default styles;