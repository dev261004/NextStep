import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";

// Get screen dimensions
const { width, height } = Dimensions.get("window");

export default function HomeScreen() {
  const [searchText, setSearchText] = useState("");
  const navigation = useNavigation();

  const leaders = [
    { id: "1", name: "PM Modi", image: require("../assets/pm.png") },
    { id: "2", name: "CM", image: require("../assets/cm.png") },
    { id: "3", name: "MLA 1", image: require("../assets/mla1.png") },
    { id: "4", name: "MLA 2", image: require("../assets/mla2.png") },
    { id: "5", name: "MLA 3", image: require("../assets/mla2.png") },
    { id: "6", name: "MLA 4", image: require("../assets/mla2.png") },
    { id: "7", name: "MLA 5", image: require("../assets/mla2.png") },
    { id: "8", name: "MLA 6", image: require("../assets/mla2.png") },
    { id: "9", name: "MLA 7", image: require("../assets/mla2.png") },
    { id: "10", name: "MLA 8", image: require("../assets/mla2.png") },
  ];

  const communities = [
    {
      id: "1",
      title: "Education Community",
      description: "We make sure you get the best Services as possible",
      image: require("../assets/female.png"),
    },
    {
      id: "2",
      title: "Park Development",
      description: "Tag line or slogan here",
      image: require("../assets/female.png"),
    },
    {
      id: "3",
      title: "Community ",
      description: "Tag line or slogan here",
      image: require("../assets/female.png"),
    },
    {
      id: "4",
      title: "Community ",
      description: "Tag line or slogan here",
      image: require("../assets/female.png"),
    },
    {
      id: "5",
      title: "Community ",
      description: "Tag line or slogan here",
      image: require("../assets/female.png"),
    },
    {
      id: "6",
      title: "Community ",
      description: "Tag line or slogan here",
      image: require("../assets/female.png"),
    },
    {
      id: "7",
      title: "Community ",
      description: "Tag line or slogan here",
      image: require("../assets/female.png"),
    },
    {
      id: "8",
      title: "Community ",
      description: "Tag line or slogan here",
      image: require("../assets/female.png"),
    },
    {
      id: "9",
      title: "Community ",
      description: "Tag line or slogan here",
      image: require("../assets/female.png"),
    },
    {
      id: "10",
      title: "Community ",
      description: "Tag line or slogan here",
      image: require("../assets/female.png"),
    },
  ];

  const renderLeaderItem = ({ item }) => (
    <TouchableOpacity style={styles.leaderItem}>
      <Image source={item.image} style={styles.leaderImage} />
      <Text style={styles.leaderName}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderCommunityItem = ({ item }) => (
    <TouchableOpacity style={styles.communityCard}>
      <Image source={item.image} style={styles.communityImage} />
      <View style={styles.communityDetails}>
        <Text style={styles.communityTitle}>{item.title}</Text>
        <Text style={styles.communityDescription}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={styles.menuCon}
        >
          <Icon name="menu" size={28} color="#000" />
        </TouchableOpacity>

        <View style={styles.headerTitleCon}>
          <Image
            source={require("../assets/icon.png")}
            style={styles.profileImage}
          />
          <View style={styles.divider}></View>
          <Text style={styles.headerTitle}>Next Step</Text>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("ProfileSetUp")}>
          <Image
            source={require("../assets/male.png")}
            style={styles.profileImage}
          />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Icon name="magnify" size={24} color="#888" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search anything"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      {/* Leader Section */}
      <FlatList
        data={leaders}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={renderLeaderItem}
        contentContainerStyle={styles.leaderList}
        showsHorizontalScrollIndicator={false}
        style={styles.leadersCon}
      />

      {/* Community List */}
      <FlatList
        data={communities}
        keyExtractor={(item) => item.id}
        renderItem={renderCommunityItem}
        contentContainerStyle={styles.communityList}
        showsVerticalScrollIndicator={false}
      />

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Icon name="home" size={28} color="#00A6F9" />
          <Text style={styles.navTextActive}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="map-marker" size={28} color="#888" />
          <Text style={styles.navText}>Near by</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="camera" size={28} color="#888" />
          <Text style={styles.navText}>Tracking</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="file-document" size={28} color="#888" />
          <Text style={styles.navText}>Surveys</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 15,
  },
  menuCon: {
    backgroundColor: "#f0f0f0",
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    marginTop: 20,
  },
  headerTitleCon: {
    width: 150,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  divider: {
    height: 35,
    width: 1,
    backgroundColor: "#999999",
  },
  headerTitle: {
    fontSize: 18, // Adjusted for responsiveness
    fontWeight: "bold",
    color: "#000",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: "#000",
  },
  leadersCon: {
    paddingVertical: 5,
    height: 100,
  },
  leaderList: {},
  leaderItem: {
    alignItems: "center",
    marginRight: 15,
  },
  leaderImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 5,
  },
  leaderName: {
    fontSize: 12,
    color: "#000",
  },
  communityList: {
    marginTop: 10,
    paddingBottom: 70,
  },
  communityCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
  },
  communityImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  communityDetails: {
    flex: 1,
  },
  communityTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  communityDescription: {
    fontSize: 14,
    color: "#888",
  },
  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  navText: {
    fontSize: 12,
    color: "#888",
  },
  navTextActive: {
    fontSize: 12,
    color: "#00A6F9",
  },
});
