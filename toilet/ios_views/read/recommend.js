import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity
  } from 'react-native';


import Util from './../util';
import List from './list';
import TWebView from './../webview';

class Recommend extends Component{
  constructor(props){
    super(props);
    this.state = {
      data: this.props.data,
      type: this.props.type
    };
  }
  render(){
    let first = [];
    let second = [];
    let data = this.state.data;
    for(var i in data){
      var Item = (
        <View style={styles.topic} key={i}>
          <TouchableOpacity onPress={this._showDetail.bind(this, data[i].title, data[i].url)}>
            <View style={styles.shadow}>
              <Image style={styles.topicImg} source={{uri: data[i].img}} resizeMode="cover"/>
            </View>
            <View style={{marginTop:10}}>
              <Text style={styles.title} numberOfLines={2}>{data[i].title}</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
      if(i < 4){
        first.push(Item);
      }else{
        second.push(Item);
      }

    }
    return(
      <View style={styles.remen}>
        <View>
          <Text style={styles.bigText}>{this.props.title}</Text>
        </View>
        <View style={[styles.row, {marginTop:10}]}>
          {first}
        </View>
        <View style={[styles.row, {marginTop:10}]}>
          {second}
        </View>
        <TouchableOpacity style={styles.tjTQ} onPress={this._showList.bind(this)}>
          <Text style={styles.tjTQText}>查看全部 &gt; </Text>
        </TouchableOpacity>
      </View>
    );
  }

  _showList(){
    this.props.navigator.push({
      component: List,
      barTintColor: '#fff',
      title: this.props.title,
      passProps:{
        type: this.state.type
      }
    });
  }

  _showDetail(title, url){
    this.props.navigator.push({
      component: TWebView,
      title: title,
      barTintColor: '#fff',
      passProps:{
        url: url,
        isMargin:1
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
  tjTQ:{
    marginTop:10
  },
  tjTQText:{
    fontWeight: '300',
    fontSize:15,
    color: '#7D7D81'
  },
  remen:{
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10
  },
  topic:{
    flex:1,
    alignItems:'center',
    marginLeft:7
  },
  topicImg:{
    height:100,
    marginRight:5
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
  shadow:{
    shadowOpacity: 1,
    shadowColor: '#ccc',
    shadowOffset:{width: 1*Util.pixel, height: Util.pixel}
  },
  title:{
    fontSize:13,
    color: '#4C4C4C'
  }
});


module.exports = Recommend;