import { styles } from './styles'
import { View, Text } from "react-native";
import strings from '@/constants/Strings';
import testIds from '@/constants/AppTestIds';

interface Props {
  total: string;
}

export default function SummaryPayment({ total }: Props) {

  return (
    <View style={styles.summary} testID={testIds.summary}>
      <View style={styles.itemView}>
        <Text style={styles.descriprion}> {strings.items} </Text>
        <Text style={styles.price}>{total} </Text>
      </View>
      <View style={styles.itemView}>
        <Text style={styles.descriprion}> {strings.shipping} </Text>
        <Text style={styles.price}> GRÁTIS </Text>
      </View>
      <View style={styles.dashLine} />
      <View style={styles.itemView}>
        <Text style={styles.totalPriceDescription}> {strings.totalPrice} </Text>
        <Text style={styles.totalPrice}> {total} </Text>
      </View>
    </View>
  );
}
