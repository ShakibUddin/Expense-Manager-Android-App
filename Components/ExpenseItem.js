import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Title } from 'react-native-paper';
import COLORS from '../Constants/Colors';

export default function ExpenseItem(props) {
    const { title, category, month, day, year, amount } = props.data;
    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <Title style={styles.title}>{title}</Title>
                <Title style={styles.subtitle}>{category}</Title>
                <Title style={styles.subtitle}>{month}/{day}/{year}</Title>
            </View>
            <View style={styles.right}>
                <Text style={styles.highlight}>{amount} Taka</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 10,
        margin: 10,
        padding: 10,
        backgroundColor: COLORS.expenseItemBackground,
        borderRadius: 10,
        shadowColor: COLORS.expenseItemShadowColor,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 8.84,

        elevation: 5,
    },
    left: { width: "75%" },
    title: {
        color: COLORS.expenseItemTitleColor,
        fontWeight: "bold",
        fontSize: 20,
    },
    subtitle: {
        color: COLORS.expenseItemTextColor,
        fontSize: 16,
    },
    right: {
        display: "flex",
        width: "20%",
    },
    highlight: {
        color: COLORS.expenseItemHighlightColor,
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center"
    }
})