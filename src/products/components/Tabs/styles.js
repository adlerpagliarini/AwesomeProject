import { StyleSheet } from 'react-native';
import { metrics, fonts, colors } from '../../styles/index';

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      height: metrics.tabBarHeight,
      borderTopWidth: 1,
      borderColor: colors.lighter,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      height: 40,
    },
    icon:{
      color: colors.primary,
      width: 40,
    },
    more:{
      width: 40,
      height: 40,
      marginTop: -2,
      borderRadius: 20,
      backgroundColor: colors.primary,
      justifyContent: 'center',
      alignItems: 'center'
    },
    moreText:{
      color: colors.white,
      fontSize: fonts.bigger,
    }
  });

  export default styles;