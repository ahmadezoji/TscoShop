/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';


const App: () => Node = () => {
  return (
    <View style={styles.Container}>
      <View style={styles.productCover}>
        <Image style={styles.productCover} source={require('./src/assets/images/p1.jpg')}></Image>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={styles.description}>
          <View style={{ backgroundColor: 'red', width: 150, height: 50 }}>
          </View>
        </View>
        <View style={styles.description}>
          <Text style={{ textAlign: 'right', margin: 20, fontSize: 18 }}>ترکیبی دوگانه از Android TV و پروژه کدباز اندروید (AOSP) نسخه 10 با امکان نصب تمامی اپلیکیشن های اکوسیستم اندروید، شامل اپلیکیشن های اندروید تی وی + اپلیکیشن های نسخه موبایل اندروید به صورت همزمان</Text>
          <Text style={{ textAlign: 'right', margin: 20, fontSize: 25, fontWeight: 'bold' }}>تسکو باکس Tab 100</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  productCover: {
    justifyContent: 'center',
    margin: 5,
    alignItems: 'center',
    height: 500,
    width: '80%'
  },
  description: {
    flexDirection: 'column-reverse',
    width: 500,
    marginRight: 5,
    marginLeft: 5,
    height: 170
  }
});

export default App;