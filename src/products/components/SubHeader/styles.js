import { StyleSheet } from 'react-native';
import { metrics, fonts, colors } from '../../styles/index';

const styles = StyleSheet.create({
    container: {
      padding: metrics.padding,
      backgroundColor: colors.white,
      borderBottomWidth: 1,
      borderColor: colors.lighter,
      flexDirection: 'row',
    },
    avatar:{
      width: 68,
      height: 68,
      borderRadius: 34,
      backgroundColor: colors.regular,
      marginRight: metrics.padding
    },
    profileInfoContainer:{
      flex: 1, // ocupar o resto do layout
      fontSize: fonts.big,
      color: colors.darker,
      marginTop: 5,
    },
    profileInfoName:{
      fontWeight: 'bold',
      fontSize: fonts.big,
      color: colors.darker,
      marginTop: 5
    },
    profileInfoDesc:{
      fontSize: fonts.regular,
      color: colors.dark,
      marginTop: 5
    },
    profileInfoButtonContainer:{
      flexDirection: 'row',
      marginTop: 10
    },
    firstButton: {
      marginRight: 10
    }
  });

  export default styles;