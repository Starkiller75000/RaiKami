import React, {Component} from 'react';
import {View, Text, Alert} from 'react-native';
import {Avatar} from 'react-native-elements';
import axios from 'axios';

export default class ProfileScene extends Component {
  state = {
    loading: false,
    profile: {},
  };

  async componentDidMount(): void {
    this.fetchProfile();
  }

  async fetchProfile() {
    try {
      this.setState({loading: true});
      const result = await axios.get(
        'https://jp1.api.riotgames.com/lol/summoner/v4/summoners/by-name/' +
          this.props.route.params.summonerName,
        {
          headers: {
            'X-Riot-Token': 'RGAPI-564e755b-9b7e-4a88-86f6-0382a9d84b37',
          },
        },
      );

      console.log(result);
      this.setState({loading: false, profile: result.data});
    } catch (e) {
      if (e.response.status === 404) {
        this.setState({loading: false});
        Alert.alert(
          'Alert',
          "The summoner you have entered doesn't exist in this region.",
          [{text: 'Confirm', onPress: () => this.props.navigation.goBack()}],
        );
      }
      console.log(e.response);
    }
  }

  render() {
    return (
      <View>
        {this.state.loading ? (
          <Text>Loading...</Text>
        ) : (
          <>
            <Text>{this.state.profile.name}</Text>
            <Avatar
              rounded
              source={{
                uri: `https://ddragon.leagueoflegends.com/cdn/10.3.1/img/profileicon/${
                  this.state.profile.profileIconId
                }.png`,
              }}
              size={'large'}
            />
          </>
        )}
      </View>
    );
  }
}
