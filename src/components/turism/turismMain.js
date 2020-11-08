import React, { Component } from "react";
import api from '../turism/api';

import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";

export default class turismMain extends Component {
    static navigationOptions = {
        title: "Melhores lugares para conhecer"
    };

    state = {
        docs: []
    };

    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const response = await api.get('/products')

        const { data } = response.data;

        console.log(docs);

        this.setState({ docs });
    };

    renderItem = ({ item }) => (
        <View style={styles.productContainer}>
            <Text style={styles.productTitle}>{item.title}</Text>
            <Text style={styles.productDescription}>{item.descrition}</Text>

    <TouchableOpacity style={styles.productButton}>
        <Text style={styles.productButtonText}>Acessar</Text>
        
    </TouchableOpacity>

        </View>
    )

    

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                contentContainerStyle={styles.list}
                data = { this.state.docs }
                keyExtractor = { item => item._id }
                renderItem = { this.renderItem }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa'
    },

    list: {
        padding: 20,
    },

    productContainer: {
        backgoundColor: '#fff',
        borderWidth: 1,
        borderColor: 1,
        borderRadius: 5,
        padding: 20,
        marginBottom: 20,
    },

    productTitle: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#333"
    },

    productDescription: {
        fontSize: 16,
        color: "#999",
        marginTop: 5,
        lineHeight: 24
    },

    productButton: {
        height:42,
        borderRadius: 5,
        borderWigth: 2,
        borderColor: "#DA552F",
        backgroundColor: "transparent",
        jutifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
});