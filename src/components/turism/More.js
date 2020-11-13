import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';

const More = (props) => {

    const { route } = props

    const { item } = route.params


return(

<View>

    <Text>
        { item.name }
    </Text>

    <Text>
        { item.image }
    </Text>

    <Text>
        { item.description }
    </Text>

    <Text>
        { item.createAt }
    </Text>

    <Text>
        { item.url }
    </Text>

</View>

)};


export default More;