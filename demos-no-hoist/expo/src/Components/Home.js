import React from 'react';
import PropTypes from 'prop-types';

import { Button, ImageBackground, View } from 'react-native';

import atSrc from '../../resources/images/aix-talks.png';

class HomeScreen extends React.Component {
  state = {
    time: 0,
  };

  componentDidMount() {
    this._interval = setInterval(() => {
      this.setState(({ time }) => ({
        time: time + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this._interval);
  }

  render() {
    const { time } = this.state;
    const { navigation } = this.props;
    return (
      <ImageBackground
        source={atSrc}
        resizeMode="contain"
        style={{
          width: '100%',
          height: '100%',
          backgroundColor: '#681F4B',
          justifyContent: 'flex-end',
        }}
      >
        <View
          style={{
            marginBottom: 30,
            alignSelf: 'center',
            padding: 10,
            paddingVertical: 5,
            backgroundColor: '#F6E0D5',
            borderRadius: 10,
          }}
        >
          <Button
            color="#681F4B"
            title={`Aller au Contenu ${time}`}
            onPress={() => navigation.navigate('Content')}
          />
        </View>
      </ImageBackground>
    );
  }
}

HomeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default HomeScreen;
