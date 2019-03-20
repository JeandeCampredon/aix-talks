import React, { Component } from 'react';

import { Button, LayoutAnimation, Platform, Text, UIManager, View } from 'react-native';

const IS_ANDROID = Platform.OS === 'android';
if (IS_ANDROID && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const generateDot = () => {
  const x = 10 + Math.round(Math.random() * 80);
  const y = 10 + Math.round(Math.random() * 80);
  const size = 1 + Math.round(Math.random() * 5);
  const r = Math.round(Math.random() * 256);
  const g = Math.round(Math.random() * 256);
  const b = Math.round(Math.random() * 256);
  const a = 50 + Math.round(Math.random() * 50);

  return { x, y, size, color: `rgba(${r},${g},${b},${a})` };
};

const generateMultipleDots = () => {
  const nb = 1 + Math.floor(Math.random() * 20);

  return Array(nb)
    .fill(0)
    .map(generateDot);
};

class AutoTransition extends Component {
  state = {
    dots: generateMultipleDots(),
  };

  change = () => {
    this.setState({ dots: generateMultipleDots() });
    LayoutAnimation.easeInEaseOut();
  };

  move = () => {
    this.setState(state => ({
      dots: state.dots.map(dot => ({ ...generateDot(), color: dot.color, size: dot.size })),
    }));
    LayoutAnimation.easeInEaseOut();
  };

  add = () => {
    this.setState(state => ({ dots: [...state.dots, ...generateMultipleDots()] }));
    LayoutAnimation.easeInEaseOut();
  };

  remove = () => {
    this.setState(state => ({ dots: state.dots.slice(0, -1) }));
    LayoutAnimation.easeInEaseOut();
  };

  renderDot = (dot, index) => {
    return (
      <View
        key={index}
        style={{
          backgroundColor: dot.color,
          width: 16,
          height: 16,
          borderRadius: 8,
          transform: [{ scale: dot.size / 2 }],
          position: 'absolute',
          left: `${dot.x}%`,
          top: `${dot.y}%`,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text style={{ color: 'white', textAlign: 'center', fontSize: 8 }}>{index}</Text>
      </View>
    );
  };

  render() {
    const { dots } = this.state;
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            marginVertical: 50,
            alignItems: 'center',
            justifyContent: 'space-around',
          }}
        >
          <View>
            <Button title="change" onPress={this.change} />
          </View>
          <View>
            <Button title="move" onPress={this.move} />
          </View>
          <View>
            <Button title="add" onPress={this.add} />
          </View>
          <View>
            <Button title="remove" onPress={this.remove} />
          </View>
        </View>
        <Text style={{ textAlign: 'center' }}>{dots.length} points</Text>
        <View style={{ flex: 1 }}>{dots.map(this.renderDot)}</View>
      </View>
    );
  }
}

AutoTransition.propTypes = {};

export default AutoTransition;
