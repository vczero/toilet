import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
  } from 'react-native';

import TWebView from './webview';

const nearByURL = 'http://123.57.39.116:3000/html/nearby.html';
//const nearByURL = './../html/nearby.html';

class ToiletPage extends Component{
  render(){
    return(<TWebView url={nearByURL} isNearBy={true}/>);
  }
}

module.exports = ToiletPage;