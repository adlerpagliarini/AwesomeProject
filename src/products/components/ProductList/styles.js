import { StyleSheet } from 'react-native';
import { metrics, fonts, colors } from '../../styles/index';

const styles = StyleSheet.create({
    container: {
      paddingVertical: metrics.padding,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around'
    },
  });

  export default styles;