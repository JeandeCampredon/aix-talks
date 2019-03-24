import React, { Component } from 'react';

import { Animated, PanResponder, View } from 'react-native';

import throttle from 'lodash/throttle';

class Bubble extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pan: new Animated.ValueXY(),
      trail: Array(50)
        .fill(0)
        .map(() => new Animated.ValueXY()),
    };
  }

  componentDidMount() {
    this.createPanResponder();

    const { pan, trail } = this.state;

    // trail.reduce((prev, next) => {
    //   prev.addListener(value => Animated.spring(next, { toValue: value }).start());
    //   return next;
    // }, pan);

    this._staggeredValues = [];
    const makeTrail = value => {
      if (value) {
        this._staggeredValues.unshift(value);
      }
      this._staggeredValues.slice(0, 100);
      clearTimeout(this._timer);
      this._timer = setTimeout(removeLast, 100);
      Animated.parallel(
        trail.map((elt, index) =>
          Animated.spring(elt, {
            toValue: this._staggeredValues[Math.min(index, this._staggeredValues.length - 1)],
            useNativeDriver: true,
          }),
        ),
      ).start();
    };
    const removeLast = () => {
      if (this._staggeredValues.length < 2) return;
      this._staggeredValues = [this._staggeredValues[0], ...this._staggeredValues].slice(0, -2);
      makeTrail();
    };
    pan.addListener(
      throttle(value => {
        makeTrail(value);
        this._lastValue = value;
      }, 100),
    );
  }

  componentWillUnmount() {
    const { trail, pan } = this.state;

    pan.x.removeAllListeners();
    pan.y.removeAllListeners();
    pan.removeAllListeners();
    trail.forEach(elt => elt.removeAllListeners());

    clearInterval(this._interval);
  }

  createPanResponder() {
    this._animatedValueX = 0;
    this._animatedValueY = 0;
    const { pan } = this.state;
    pan.x.addListener(value => {
      this._animatedValueX = value.value;
    });
    pan.y.addListener(value => {
      this._animatedValueY = value.value;
    });
    this._panResponder = PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true,

      onPanResponderGrant: () => {
        // const { pan } = this.state;
        pan.setOffset({ x: this._animatedValueX, y: this._animatedValueY });
        pan.setValue({ x: 0, y: 0 });
      },
      onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }]),
      onPanResponderRelease: () => {
        pan.flattenOffset();
      },
    });

    this.forceUpdate();
  }

  render() {
    const { trail, pan } = this.state;
    if (!this._panResponder) return <View style={{ flex: 1 }} />;
    return (
      <View style={{ flex: 1 }}>
        {trail.map((elt, index) => (
          <Animated.View
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            pointerEvents="none"
            style={{
              backgroundColor: `rgb(${(index * 133) % 256}, ${(index * 189) % 256} ,${(index * 53) %
                256})`,
              width: 50,
              height: 50,
              borderRadius: 25,
              borderWidth: 4,
              borderColor: 'white',
              position: 'absolute',
              left: '50%',
              top: '50%',
              alignItems: 'center',
              justifyContent: 'center',
              transform: elt.getTranslateTransform(),
            }}
          />
        ))}
        <Animated.View
          {...this._panResponder.panHandlers}
          style={{
            backgroundColor: 'red',
            width: 50,
            height: 50,
            borderRadius: 25,
            borderWidth: 4,
            borderColor: 'white',
            position: 'absolute',
            left: '50%',
            top: '50%',
            alignItems: 'center',
            justifyContent: 'center',
            transform: pan.getTranslateTransform(),
          }}
        />
      </View>
    );
  }
}

Bubble.propTypes = {};

export default Bubble;
