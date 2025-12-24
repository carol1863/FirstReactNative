import { ReactNode } from 'react';
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { Button } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '../../routes/define';
import NetworkItem from './components/networkItem';
import returnIcon from '../../assets/icon/return.png';
// import Example from './components/swipeable';

interface NetWorkItemProps {
  title: string;
  key: string;
  time: string;
}

function NetworkList(): ReactNode {
  const navigate = useNavigation<NavigationProp>();
  const networkList: NetWorkItemProps[] = [
    { title: '上海安几科技有限公司', key: 'item1', time: '2023-01-01' },
    { title: '上海安几科技有限公司2', key: 'item2', time: '2023-01-01' },
    { title: '上海安几科技有限公司3', key: 'item3', time: '2023-01-01' },
    { title: '上海安几科技有限公司4', key: 'item4', time: '2023-01-01' },
    { title: '上海安几科技有限公司5', key: 'item5', time: '2023-01-01' },
    { title: '上海安几科技有限公司6', key: 'item6', time: '2023-01-01' },
    { title: '上海安几科技有限公司7', key: 'item7', time: '2023-01-01' },
    { title: '上海安几科技有限公司8', key: 'item8', time: '2023-01-01' },
    { title: '上海安几科技有限公司9', key: 'item9', time: '2023-01-01' },
    { title: '上海安几科技有限公司10', key: 'item10', time: '2023-01-01' },
  ];

  const handlePressAdd = () => {
    navigate.navigate('Network');
  };

  const handleReturn = () => {
    navigate.goBack();
  };

  return (
    <View style={styles.container}>
      <Pressable
        onPress={handleReturn}
        hitSlop={8}
        style={({ pressed }) => ({
          opacity: pressed ? 0.6 : 1,
          marginBottom: 50,
        })}
        accessibilityRole="button"
        accessibilityLabel="Settings"
      >
        <Image source={returnIcon} style={{ width: 24, height: 24 }} />
      </Pressable>

      <View>
        <Text style={styles.title}>已加入的企业网络</Text>
        <Text style={styles.subTitle}>
          当前已连接{networkList.length}个企业网络
        </Text>
      </View>

      <FlatList
        style={styles.scrollView}
        data={networkList}
        renderItem={({ item }) => <NetworkItem {...item} swipple={true} />}
        // renderItem={({ item }) => <Example />}
        keyExtractor={item => item.title}
      />

      <Button
        title="添加企业网络"
        onPress={handlePressAdd}
        containerStyle={styles.joinBtnContainer}
        buttonStyle={styles.joinBtn}
        titleStyle={styles.joinBtnTitle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    boxSizing: 'border-box',
    paddingTop: 56,
    paddingHorizontal: 20,
    paddingBottom: 48,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  returnIcon: {
    width: 24,
    height: 24,
    marginBottom: 50,
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
  },
  scrollView: {
    flex: 1,
    width: '100%',
    marginVertical: 20,
  },
  listItem: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#E4E4E7',
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  listItemTitle: {
    fontSize: 14,
    color: '#282731',
    lineHeight: 14,
    fontWeight: 500,
    marginBottom: 8,
  },
  listItemTime: {
    fontSize: 12,
    color: '#88878E',
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

export default NetworkList;
