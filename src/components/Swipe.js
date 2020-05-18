import {
    StyleSheet,
    Text,
    View,
    Button,
  } from 'react-native';
  import React from 'react';
  import SwipeableViews from 'react-swipeable-views-native';
import { color, styles } from './../assets/style';
import GoToButton from './GoToButton';
  
  // There is another version using the scroll component instead of animated.
  // I'm unsure which one give the best UX. Please give us some feedback.
  // import SwipeableViews from 'react-swipeable-views-native/lib/SwipeableViews.scroll';
  
  const internalstyle = StyleSheet.create({
    slideContainer: {
      height: 'auto',
      width: 'auto',
      flex: 1
    },
    slide: {
      //padding: 15,
      height: 100,
    },
    slide1: {
      backgroundColor: color.whitedark,
    },
    slide2: {
      backgroundColor: color.whitedark,
    },
    slide3: {
      backgroundColor: color.whitedark,
    },
    text: {
      color: '#fff',
      fontSize: 16,
    },
  });
  
  const Swipe = () => (
    <SwipeableViews style={styles.slideContainer}>
      {/* <View style={[styles.slide, styles.slide1]}>
        <Button title='1'></Button>
      </View>
      <View style={[styles.slide, styles.slide2]}>
      <Button title='2'></Button>
      </View>
      <View style={[styles.slide, styles.slide3]}>
        <GoToButton title='home'></GoToButton>
      </View> */}
      
    </SwipeableViews>
  );
  
  export default Swipe;
  