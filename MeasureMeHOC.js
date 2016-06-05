'use strict';

/**
* @providesModule MeasureMeHOC
**/
import React, {Component} from 'react';
import {View} from 'react-native';

module.exports = function measureMeHOC(ComposedComponent) {
  return class extends Component {
    constructor(props){
      super(props);
      this.state = {width:0, height:0, initialRender:false};
      this.measure = this.measure.bind(this);
    }

    measure({nativeEvent : {layout : {width = 0, height = 0} = {}} = {}}){
      this.setState({width, height, initialRender:true});
    }

    render(){
      return (
        this.state.initialRender ?
          <ComposedComponent {...this.props} {...this.state} onLayout={this.measure}/> :
          <View style={this.props.style} onLayout={this.measure} />
      );
    }
  }
}
