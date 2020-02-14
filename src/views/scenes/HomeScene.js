import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import StyleSheet from '../style/StyleSheet';
import {Input} from 'react-native-elements';
import axios from 'axios';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInputStyle: {
    backgroundColor: '#778899',
    height: '40@vs',
  },
});

export default class HomeScene extends Component {
  state = {
    summonerName: '',
  };

  render() {
    return (
      <View style={styles.container}>
        <Input
          placeholder={'Search a summoner'}
          value={this.state.summonerName}
          rightIcon={{type: 'entypo', name: 'magnifying-glass'}}
          onChangeText={text => this.setState({summonerName: text})}
        />
        <Text>{this.state.summonerName}</Text>
        <Button
          title={'Search'}
          onPress={() =>
            this.props.navigation.navigate('Profile', {
              summonerName: this.state.summonerName,
            })
          }
        />
      </View>
    );
  }
}
