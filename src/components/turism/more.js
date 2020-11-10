import React from 'react';

import { Text } from 'react-native';

const More = () => {
    <Text>Mais informações</Text>
};

More.navigationOptions = ({ navigation }) => ({
    title.navigation.state.params.title
});

export default More;