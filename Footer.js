import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  filters: {
    flexDirection: "row"
  },
  selected: {
    borderColor: "rgba(175, 47, 47, .2)"
  },
  filter: {
    padding: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "transparent"
  }
});

const Footer = ({ count, onFilter, onClearComplete }) => {
  const { filter } = { count, onFilter, onClearComplete };
  return (
    <View style={styles.container}>
      <Text>{count} count</Text>
      <View style={styles.filters}>
        <TouchableOpacity
          style={[styles.filter, filter === "ALL" && styles.selected]}
          onPress={() => onFilter("ALL")}
        >
          <Text>All</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.filter, filter === "ACTIE" && styles.selected]}
          onPress={() => onFilter("ACTIVE")}
        >
          <Text>Active</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.filter, filter === "COMPLETED" && styles.selected]}
          onPress={() => onFilter("COMPLETED")}
        >
          <Text>Completed</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => onClearComplete()}>
        <Text>Clear Completed</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;