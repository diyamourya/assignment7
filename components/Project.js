import { Component } from "react";
import {View, Text, StyleSheet} from 'react-native';

class Project extends Component{
    constructor(props) {
        super(props)
    }
    render(){
        return (
            <View>
                
                <Text style={styles.name}>Project: {this.props.project}</Text>
                
            </View>
        )
    }
}
const styles = StyleSheet.create({
    name:{
        marginBottom: 10

    }
  });
export default Project;