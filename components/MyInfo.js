import { SafeAreaView, StyleSheet, Text, TextInput, View, Button} from 'react-native';

const MyInfo= (props) =>{
    return(
        <View style={{justifyContent:'center', backgroundColor: '#FFC0CB', height: '100%', width: '100%', alignItems:'center'}}>
            <Text style={{fontSize:20}}>Hi, I am Diya Mourya</Text>
            <Text>My hobbies are travelling to various places.</Text>
        </View>
    )
};

export default MyInfo;