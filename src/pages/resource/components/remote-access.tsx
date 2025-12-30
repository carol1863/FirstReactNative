import { useState } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';

import StyledCard from './styled-card';

export default function RemoteAccess() {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <StyledCard
      title="远程访问"
      extraAction={
        <Switch
          trackColor={{ false: '#767577', true: '#4589FF' }}
          thumbColor="white"
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={{ transform: [{ scale: 0.8 }] }}
        />
      }
    >
      <View style={styles.cardContent} />
      <View style={styles.cardFooter}>
        <View style={styles.cardFooterItem}>
          <Text style={styles.itemTitle}>安全状态</Text>
          <Text
            style={{
              color: 'white',
              fontSize: 10,
              lineHeight: 20,
              fontWeight: 500,
              backgroundColor: '#1890FF',
              borderRadius: 4,
              boxSizing: 'border-box',
              paddingHorizontal: 8,
            }}
          >
            安全
          </Text>
        </View>
        <View style={styles.cardFooterItem}>
          <Text style={styles.itemTitle}>网络传输</Text>
          <Text style={styles.itemSubtitle}>50MB/s</Text>
        </View>
        <View style={styles.cardFooterItem}>
          <Text style={styles.itemTitle}>运行时常</Text>
          <Text style={styles.itemSubtitle}>30 分钟</Text>
        </View>
      </View>
    </StyledCard>
  );
}

const styles = StyleSheet.create({
  cardContent: {
    height: 43,
    backgroundColor:
      'linear-gradient(180.00deg, rgba(173, 183, 249, 1),rgba(177, 185, 248, 0) 100%)',
    opacity: 0.4,
    marginBottom: 14,
  },
  cardFooter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardFooterItem: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
  itemTitle: {
    fontSize: 12,
    color: '#282731',
  },
  itemSubtitle: {
    fontSize: 10,
    color: '#282731',
  },
});
