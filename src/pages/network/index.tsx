import { ReactNode, useState } from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Button } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

import arrowRightLeft from '../../assets/icon/arrow-right-left.png';
import { NavigationProp } from '../../routes/define';

export default function Network(): ReactNode {
  const navigate = useNavigation<NavigationProp>();
  const [text, setText] = useState('');

  const handleLinkToList = () => {
    navigate.navigate('NetworkList');
  };

  const handlePressJoin = () => {
    if (!text) {
      console.log('please enter the code');
    } else {
      console.log('join network', text);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>加入企业网络</Text>
        <Text style={styles.subTitle}>请联系企业管理员获取专属邀请码</Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.input}
            placeholderTextColor="#88878E"
            onChangeText={setText}
            value={text}
            placeholder={'专属邀请码'}
          />
          {!text.includes('.') && (
            <Text style={styles.inputSuffix}>.angeek.com.cn</Text>
          )}
        </View>
        <Pressable
          onPress={handleLinkToList}
          hitSlop={8}
          style={({ pressed }) => [
            styles.switchContainer,
            { opacity: pressed ? 0.6 : 1 },
          ]}
          accessibilityRole="button"
          accessibilityLabel="Switch Network"
        >
          <View style={styles.switch}>
            <Image style={styles.switchIcon} source={arrowRightLeft} />
            <Text style={styles.switchText}>切换网络</Text>
          </View>
        </Pressable>
      </View>

      <Button
        // disabled={!text}
        title="确认加入"
        onPress={handlePressJoin}
        containerStyle={styles.joinBtnContainer}
        buttonStyle={[
          styles.joinBtn,
          { backgroundColor: text ? '#0077f6' : '#88878E' },
        ]}
        titleStyle={styles.joinBtnTitle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    boxSizing: 'border-box',
    paddingTop: 92,
    paddingHorizontal: 20,
    paddingBottom: 48,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 24,
    color: '#282731',
    lineHeight: 24,
    fontWeight: 500,
    marginBottom: 12,
  },
  subTitle: {
    fontSize: 14,
    color: '#88878E',
    lineHeight: 18,
    marginBottom: 20,
  },
  textInputContainer: {
    width: '100%',
    height: 48,
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E4E4E7',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 0,
    fontSize: 14,
    color: '#88878E',
    lineHeight: 48,
  },
  input: {
    flex: 1,
    outlineWidth: 0,
    borderWidth: 0,
    backgroundColor: 'transparent',
  },
  inputSuffix: {
    fontSize: 14,
    color: '#88878E',
    lineHeight: 16,
  },
  switchContainer: {
    marginVertical: 20,
    height: 14,
  },
  switch: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    textAlign: 'left',
    gap: 4,
  },
  switchIcon: {
    width: 14,
    height: 14,
    color: '#1890FF',
  },
  switchText: {
    fontSize: 14,
    color: '#1890FF',
    lineHeight: 16,
  },
  footer: {
    width: '100%',
  },
  joinBtnContainer: {
    width: '100%',
    height: 48,
  },
  joinBtn: {
    backgroundColor: '#0077f6',
    borderRadius: 8,
  },
  joinBtnTitle: {
    fontSize: 16,
    color: 'white',
    lineHeight: 30,
  },
});
