# react-native-measureme
[![NPM version](https://badge.fury.io/js/react-native-measureme.svg)](http://badge.fury.io/js/react-native-measureme)

A HOC to make your React-Native components aware of their `width` and `height`

## Installation
```sh
npm i --save react-native-measureme
```

## Usage
```javascript
import React from 'react';
import {View} from 'react-native';

const SizeAwareComponent = React.createClass({
    render(){
        //this component knows its render width and height through
        //this.props.width & this.props.height
        <View style={{width:this.props.width, height:this.props.height}} />
    }
});

module.exports = require('react-native-measureme')(SizeAwareComponent);
```

## Development
PRs highly appreciated

License
----
MIT License
