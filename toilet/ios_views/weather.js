import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
  } from 'react-native';

import TWebView from './webview';
//const url = 'http://localhost:4000/toilet/toilet/html/weather.html';
const url = 'http://123.57.39.116:3000/html/weather.html';

class Weather extends Component{
  render(){
    return(<TWebView url={url} isWeather={true}/>);
  }
}

const styles = StyleSheet.create({

});

module.exports = Weather;