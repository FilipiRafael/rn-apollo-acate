import { View, Text, Image } from 'react-native';
import styles from './style';

const Card = ({card}: any) => {
    return (
        <View style={styles.card}>
            <Image
                source={{ uri: card.image }}
            />
            <View>
                <Text>
                    {`${card.name}, ${card.gender}`}
                </Text>
            </View>
        </View>
    )
}

export default Card;