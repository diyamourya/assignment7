import { Component } from "react";
import {View, Text} from 'react-native';
import Department from "./Department";
import Project from "./Project";

class Employee extends Component{
    
    render(){
        return (
            <View>
            <Department department="Rakuten Symphony"/>
            <Project project="Ecare"/>
            </View>
        )
    }
}

export default Employee;