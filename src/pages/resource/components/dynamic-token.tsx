import { StyleSheet, Text, View } from 'react-native';
import StyledCard from './styled-card';

export default function DynamicToken() {
  return (
    <StyledCard
      title="动态令牌"
      titleIcon={<Text style={styles.tokenCount}>30</Text>}
    ></StyledCard>
  );
}

const styles = StyleSheet.create({
  tokenCount: {
    width: 16,
    height: 16,
    color: '#1890FF',
    borderWidth: 1,
    borderColor: '#1890FF',
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 10,
    lineHeight: 16,
    marginLeft: 6,
  },
});
