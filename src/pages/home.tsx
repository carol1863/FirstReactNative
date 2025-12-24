import { ReactNode } from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';

import launch from '../assets/img/launch.png';
import launchBg from '../assets/img/launch-bg.png';

function Home(): ReactNode {
  return (
    <View style={styles.container}>
      <ImageBackground source={launchBg} style={styles.background}>
        <Image source={launch} style={styles.image} />
        <Text style={styles.text}>智能合规，守护安全</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  background: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    position: 'relative',
  },
  content: {
    width: '100%',
    height: 'auto',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  image: {
    height: '30%',
    top: '20%',
  },
  text: {
    fontSize: 28,
    color: '#1890FF',
    lineHeight: 28,
    // fontFamily: 'BDZYJT--GB1-0',
    position: 'absolute',
    top: '54%',
  },
});

export default Home;
