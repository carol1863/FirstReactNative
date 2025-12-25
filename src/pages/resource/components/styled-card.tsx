import { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function StyledCard(props: {
  children?: ReactNode;
  title?: string;
  extraAction?: ReactNode;
  titleIcon?: ReactNode;
}) {
  const { title, titleIcon, children, extraAction } = props;
  return (
    <View style={styles.card}>
      <View
        style={[
          styles.cardHeader,
          titleIcon ? { justifyContent: 'flex-start' } : {},
        ]}
      >
        <Text style={styles.cardTitle}>{title}</Text>
        {titleIcon}
        {extraAction}
      </View>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 6,
    padding: 16,
    boxSizing: 'border-box',
  },
  cardHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 14,
    color: '#282731',
    lineHeight: 16,
    fontWeight: 500,
  },
});
