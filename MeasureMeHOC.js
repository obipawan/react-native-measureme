/**
* @providesModule MeasureMeHOC
**/
import React, { Component } from 'react'
import { View } from 'react-native'

export default ComposedComponent =>
    class extends Component {
        constructor(props) {
            super(props)
            this.state = {}
            this.measure = ({
                nativeEvent: {
                    layout: {
                        width = 0,
                        height = 0,
                    } = {}
                } = {}
            }) => this.setState({ width, height, initialRender: true })
        }

        render() {
            return (
              this.state.initialRender
                ? <ComposedComponent
                    { ...this.props }
                    { ...this.state }
                    onLayout={ this.measure }
                />
                : <View style={this.props.style} onLayout={this.measure} />
            );
        }
    }