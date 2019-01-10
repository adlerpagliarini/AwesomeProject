import { StyleSheet } from 'react-native';
import { metrics, fonts, colors } from '../../styles/index';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        height: metrics.headerHeight,
        paddingTop: metrics.headerPadding,
        paddingHorizontal: metrics.padding,
        borderBottomWidth: 1,
        borderColor: colors.lighter,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    return:{
        fontSize: fonts.smaller,
        color: colors.primary
    },
    title:{
        fontWeight: 'bold',
        fontSize: fonts.big
    },
    more:{
        fontSize: fonts.big,
        color: colors.primary
    }
  });

  export default styles;