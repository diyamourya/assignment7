import { Component } from "react";
import {View, Text} from 'react-native';

class Department extends Component{
    constructor(props) {
        super(props)
    }
    render(){
        return (
            <View>
                <Text>Department: {this.props.department}</Text>
            </View>
        )
    }
}

export default Department;