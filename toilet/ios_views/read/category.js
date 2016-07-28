import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity
  } from 'react-native';

import Util from './../util';
import List from './list';

class Category extends Component{
  constructor(props){
    super(props);
    this.state = {
      data: this.props.data
    };
  }

  render(){
    let data = this.props.data;
    var first = [];
    let second = [];
    for(var i in data){
      let Item = (
        <TouchableOpacity style={[styles.categoryTopic]} key={i} onPress={this._showList.bind(this, data[i].text)}>
          <Text style={[styles.title, styles.fontFFF]}>{data[i].text}</Text>
        </TouchableOpacity>
      );
      if(i < 2){
        first.push(Item);
      }else{
        second.push(Item);
      }
    }
    return(
      <View style={{marginRight:10}}>
        <View>
          <Text style={[styles.bigText, {marginLeft:10}]}>分类</Text>
        </View>
        <View style={[styles.row, {marginTop:10}]}>
          {first}
        </View>
        <View style={[styles.row, {marginTop:10}]}>
          {second}
        </View>
      </View>
    );
  }

  _showList(keywords){
    var type = 'it';
    switch (keywords){
      case '互联网':
        type = 'it';
        break;
      case '散文':
        type = 'sanwen';
        break;
      case '笑话':
        type = 'cookies';
        break;
      case '管理':
        type = 'manager';
        break;
      default :
        type = 'it';
        break;
    }
    this.props.navigator.push({
      component: List,
      barTintColor: '#fff',
      title: keywords,
      passProps:{
        type: type
      }
    });
  }
}

const styles = StyleSheet.create({
  bigText:{
    fontSize:17,
    fontWeight: '300',
    marginBottom: 5
  },
  row:{
    flexDirection: 'row'
  },
  categoryTopic:{
    height: 70,
    borderWidth: Util.pixel,
    borderColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    flex:1,
    borderRadius: 3,
    marginLeft:10
  },
  title:{
    fontSize:17,
    fontWeight:'300'
  },
  fontFFF:{
    //color:'#fff'
  }
});


module.exports = Category;