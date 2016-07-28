import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  AlertIOS,
  TouchableOpacity,
  NavigatorIOS,
  ScrollView
  } from 'react-native';

import TWebView from './webview';

import Util from './util';
import Help from './setting/help';
import Detail from './setting/detail';
import Tips from './setting/tips';
//import About from './setting/about';

class SettingView extends Component{
  render(){
    return(
      <ScrollView style={styles.container}>
        <View style={styles.bg}>
          <Text style={{fontSize:18,color:'#fff',marginTop:10,fontWeight:'bold'}}>
            设置
          </Text>
        </View>
        <View style={styles.container}>
          <View style={{justifyContent:'center', alignItems: 'center',marginTop:10,marginBottom:20}}>
            <Image style={styles.icon} source={require('image!logo')} resizeMode="contain"/>
            <Text style={[styles.text, {fontSize:13}]}>v1.0.0</Text>
          </View>
          <TouchableOpacity onPress={this._showDetail.bind(this)}>
            <View style={[styles.item, {borderTopWidth:Util.pixel}]}>
              <Text style={styles.text}>功能介绍</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._showHelp.bind(this)}>
            <View style={styles.item}>
              <Text style={styles.text}>帮助中心</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._showTips.bind(this)}>
            <View style={styles.item}>
              <Text style={styles.text}>服务条款</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._showAbout.bind(this)}>
            <View style={styles.item}>
              <Text style={styles.text}>关于</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }

  _showHelp(){
    this.props.navigator.push({
      component: Help,
      title: '帮助中心',
      barTintColor: '#fff'
    });
  }

  _showTips(){
    this.props.navigator.push({
      component: Tips,
      title: '服务条款',
      barTintColor: '#fff'
    });
  }

  _showAbout(){
    AlertIOS.alert('如有问题,联系', 'wlhmyit@126.com', [{text: '确认'}]);
    //this.props.navigator.push({
    //  component: About,
    //  title: '关于',
    //  barTintColor: '#fff'
    //});
  }

  _showDetail(){
    this.props.navigator.push({
      component: Detail,
      title: '功能介绍',
      barTintColor: '#fff'
    });

  }
}

class Setting extends Component{
  render(){
    return(
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          component: SettingView,
          title: '设置',
          navigationBarHidden: true
      }}/>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  item:{
    height:50,
    backgroundColor:'#fff',
    borderBottomWidth: Util.pixel,
    borderColor:'#ccc',
    justifyContent: 'center'
  },
  bg:{
    backgroundColor: '#FFF',
    height:40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text:{
    fontSize:15,
    marginLeft:10,
    color: '#7E7F7E'
  },
  icon:{
    width:88,
    height:100
  }
});

module.exports = Setting;