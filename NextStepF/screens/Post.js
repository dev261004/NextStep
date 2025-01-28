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

  const posts = [
    {
      id: "1",
      user: "Rosedale Development Association",
      image: require("../assets/splash-icon.png"), // Replace with your image
      likes: 1200,
      comments: 532,
      description: "Join us for a Trail Workday! March 25th, 9AM-11AM at Fisher Park.  #community #trailcleanup",
      timeAgo: "2 days ago"
    },
    // Add more post objects here
    {
        id: "2",
        user: "Another User",
        image: require("../assets/cm.png"), // Replace with your image
        likes: 1234,
        comments: 567,
        description: "Sample Post 2",
        timeAgo: "3 days ago"
      },
      {
        id: "3",
        user: "A Third User",
        image: require("../assets/mla1.png"), // Replace with your image
        likes: 987,
        comments: 321,
        description: "Sample Post 3",
        timeAgo: "1 week ago"
      },
  ];

  const handleLeaderPress = (leader) => {
    console.log(`Pressed on leader: ${leader.name}`);
    // You can navigate to a different screen or perform other actions here
  };

  const renderLeaderItem = ({ item }) => (
    <TouchableOpacity style={styles.leaderItem} onPress={() => handleLeaderPress(item)}>
      <Image source={item.image} style={styles.leaderImage} />
      <Text style={styles.leaderName}>{item.name}</Text>
    </TouchableOpacity>
  );

  const renderPostItem = ({ item }) => (
    <View style={styles.postCard}>
      <View style={styles.postHeader}>
        <Text style={styles.postUser}>{item.user}</Text>
      </View>
      <Image source={item.image} style={styles.postImage} />
      <View style={styles.postActions}>
        <TouchableOpacity>
          <Icon name="heart-outline" size={28} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="comment-outline" size={28} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="share-variant-outline" size={28} color="#000" />
        </TouchableOpacity>
      </View>
      <View style={styles.postDetails}>
        <Text style={styles.postLikes}>{item.likes} Likes</Text>
        <Text style={styles.postDescription}>{item.description}</Text>
        <Text style={styles.postTime}>{item.timeAgo}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* ... (Header and Search Bar remain the same) */}

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

      {/* Instagram-like Post Section */}
       <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={renderPostItem}
        contentContainerStyle={styles.postList}
        showsVerticalScrollIndicator={false} // Hide vertical scrollbar
      />

      {/* ... (Bottom Navigation remains the same) */}
    </View>
  );
}

const styles = StyleSheet.create({
  // ... (Other styles remain the same)

  postCard: {
    backgroundColor: "#fff",
    marginBottom: 15,
    borderRadius: 8,
    borderWidth: 1, // Add border width
    borderColor: "#ddd", // Add border color
    paddingBottom: 10, // Add padding to the bottom
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  postUser: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#000",
  },
  postImage: {
    width: "100%",
    height: 300, // You might want to adjust this
    resizeMode: "cover",
  },
  postActions: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-around", // Distribute actions evenly
  },
  postDetails: {
    paddingHorizontal: 10,
  },
  postLikes: {
    fontWeight: "bold",
    marginBottom: 5,
    color: "#000",
  },
  postDescription: {
    marginBottom: 5,
    color: "#000",
  },
  postTime: {
    fontSize: 12,
    color: "#888",
  },
  postList: {
    paddingBottom: 70, // Adjust padding as needed
  },
});