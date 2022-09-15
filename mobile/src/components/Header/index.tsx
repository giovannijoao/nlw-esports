import { Text, View, ViewProps } from 'react-native';

import { styles } from './styles';

interface Props extends ViewProps {
  title: string;
  subtitle: string;
}

export function Header({
  title,
  subtitle,
  ...viewProps
}: Props) {
  return (
    <View style={styles.container} {...viewProps}>
      <Text style={styles.title}>
        {title}
      </Text>
      <Text style={styles.subtitle}>
        {subtitle}
      </Text>
    </View>
  );
}