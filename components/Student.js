import { Component } from "react";
import {View, Text, Button, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


class Student extends Component{
    constructor(props) {
        super(props)
        this.state = {name: 'Diya', email: 'abc@abc.com', rollno: '1234'}
    }

    changeDetails = ()=>{
        this.setState({name: 'New name'})
        this.setState({email: "kukkimourya@gmail.com"})
        this.setState({rollno: '18114021'})
    }
    render(){
        return (
            <View>
                <Text>Roll No:{this.state.rollno}</Text>
                <Text>Name: {this.state.name}</Text>
                <Text>Email: {this.state.email}</Text>
                <Button
                style={styles.button}
                title="Change Details"
                color="black"
                accessibilityLabel='Change Details'
                onPress={this.changeDetails}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button: {
      marginBottom: 12,
      padding: 8,
    }
  });

export default Student;