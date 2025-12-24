import { useRef, useState } from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, ListItem } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '../../../routes/define';

import chevronRight from '../../../assets/icon/chevron-right.png';

interface NetworkItemProps {
  title: string;
  time: string;
  swipple?: boolean;
}

export default function NetworkItem(props: NetworkItemProps) {
  const { title, time, swipple = false } = props;
  const [isDelete, setIsDelete] = useState(false);
  const navigate = useNavigation<NavigationProp>();

  const swipeRef = useRef<any>(null);
  const handleDelete = (reset: () => void) => {
    console.log('删除');
    if (swipple && swipeRef.current) {
      reset();
    } else {
      setIsDelete(false);
    }
  };

  const handlePressDetail = () => {
    console.log('press network detail', props);
    if (swipple && swipeRef.current) {
      navigate.navigate('Login');
      // swipeRef.current?.reset();
    } else {
      setIsDelete(false);
    }
  };

  return swipple ? (
    <ListItem.Swipeable
      ref={swipeRef}
      key={props.title}
      rightWidth={56}
      rightStyle={{
        backgroundColor: '#DC2626',
        height: 64,
        top: 5,
        overflow: 'hidden',
        borderRadius: 8,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
      }}
      rightContent={reset => (
        <Button
          containerStyle={{
            flex: 1,
            justifyContent: 'center',
          }}
          titleStyle={{
            color: 'white',
          }}
          type="clear"
          title="删除"
          onPress={() => handleDelete(reset)}
        />
      )}
      containerStyle={styles.listItem}
    >
      <ListItem.Content>
        <TouchableOpacity onPress={handlePressDetail}>
          <ListItem.Title style={styles.listItemTitle}>
            {props.title}
          </ListItem.Title>
          <ListItem.Subtitle style={styles.listItemTime}>
            {props.time}
          </ListItem.Subtitle>
        </TouchableOpacity>
      </ListItem.Content>
      <Image source={chevronRight} style={{ width: 20, height: 20 }} />
    </ListItem.Swipeable>
  ) : (
    <ListItem containerStyle={styles.listItem} key={props.title}>
      <TouchableOpacity onPress={handlePressDetail}>
        <ListItem.Content>
          <ListItem.Title style={styles.listItemTitle}>{title}</ListItem.Title>
          <ListItem.Subtitle style={styles.listItemTime}>
            {time}
          </ListItem.Subtitle>
        </ListItem.Content>
      </TouchableOpacity>
      {!isDelete ? (
        <TouchableOpacity onPress={() => setIsDelete(true)}>
          <Image source={chevronRight} style={{ width: 20, height: 20 }} />
        </TouchableOpacity>
      ) : (
        <Button
          containerStyle={{
            position: 'absolute',
            top: 0,
            right: 0,
            justifyContent: 'center',
            backgroundColor: '#DC2626',
            height: 64,
            overflow: 'hidden',
            borderRadius: 8,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          }}
          titleStyle={{
            color: 'white',
          }}
          type="clear"
          title="删除"
          onPress={() => handleDelete(() => setIsDelete(false))}
        />
      )}
    </ListItem>
  );
}

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#E4E4E7',
    padding: 12,
    borderRadius: 8,
  },
  listItemTitle: {
    fontSize: 14,
    color: '#282731',
    lineHeight: 16,
    fontWeight: 500,
    marginBottom: 6,
  },
  listItemTime: {
    fontSize: 12,
    color: '#88878E',
    lineHeight: 16,
  },
});
