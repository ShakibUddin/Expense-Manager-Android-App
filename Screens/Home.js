import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ExpenseItem from '../Components/ExpenseItem';
import expensesData from '../ExpensesData';

export default function Home() {
    let [expenses, setExpenses] = useState(expensesData);
    return (
        <View style={styles.container}>
            <FlatList
                data={expenses}
                renderItem={({ item }) => {
                    return <ExpenseItem data={item}></ExpenseItem>
                }}
                keyExtractor={item => item.id}
            />
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20
    },
});
