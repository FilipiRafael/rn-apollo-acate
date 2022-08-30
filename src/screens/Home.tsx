import { View, Text, FlatList } from 'react-native';
import Card from '../components/Card';
import { useQuery } from '@apollo/client';
import INFO_PERSON from '../queries/index';

const Home = () => {

    const { loading, error, data } = useQuery(INFO_PERSON);

    return (
        <View>
            {loading && <Text>loading...</Text>}
            {error && <Text>error...</Text>}
            {data && 
                <FlatList
                    data={data.results}
                    renderItem={({item}) => <Card card={item} />}
                />
            }
        </View>
    )
}

export default Home;