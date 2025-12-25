import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StyledCard from './styled-card';
import { Image } from '@rneui/base';

import defaultApp from '../../../assets/img/app.png';

const mock = [
  { title: '名称1', code: '1', image: defaultApp },
  { title: '名称2', code: '2', image: defaultApp },
  { title: '名称3', code: '3', image: defaultApp },
  { title: '名称4', code: '4', image: defaultApp },
  { title: '名称5', code: '5', image: defaultApp },
  { title: '名称6', code: '6', image: defaultApp },
  { title: '名称7', code: '7', image: defaultApp },
  { title: '名称8', code: '8', image: defaultApp },
  { title: '名称9', code: '9', image: defaultApp },
  { title: '名称10', code: '10', image: defaultApp },
  { title: '名称11', code: '11', image: defaultApp },
  { title: '名称12', code: '12', image: defaultApp },
  { title: '名称13', code: '13', image: defaultApp },
  { title: '名称14', code: '14', image: defaultApp },
  { title: '名称15', code: '15', image: defaultApp },
  { title: '名称16', code: '16', image: defaultApp },
  { title: '名称17', code: '17', image: defaultApp },
  { title: '名称18', code: '18', image: defaultApp },
  { title: '名称19', code: '19', image: defaultApp },
  { title: '名称20', code: '20', image: defaultApp },
  { title: '名称21', code: '21', image: defaultApp },
  { title: '名称22', code: '22', image: defaultApp },
  { title: '名称23', code: '23', image: defaultApp },
  { title: '名称24', code: '24', image: defaultApp },
  { title: '名称25', code: '25', image: defaultApp },
  { title: '名称26', code: '26', image: defaultApp },
  { title: '名称27', code: '27', image: defaultApp },
  { title: '名称28', code: '28', image: defaultApp },
  { title: '名称29', code: '29', image: defaultApp },
  { title: '名称30', code: '30', image: defaultApp },
];
export default function ResourceGroup() {
  const [list, setList] = useState(mock);
  return (
    <StyledCard title="资源组">
      <View style={styles.groupList}>
        {list.map(item => (
          <View style={styles.item} key={item.code}>
            <Image source={item.image} style={styles.itemImage} />
            <Text style={styles.itemTitle}>{item.title}</Text>
          </View>
        ))}
      </View>
    </StyledCard>
  );
}
const styles = StyleSheet.create({
  groupList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  item: {
    width: 70,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  itemImage: {
    width: 56,
    height: 56,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#4589FF',
  },
  itemTitle: {
    fontSize: 14,
    lineHeight: 16,
    color: '#282731',
  },
});
