// import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
} from "react-native";
import { Icon } from "@rneui/themed";
import { FAB } from "@rneui/themed";

export default function App() {
  const [isPlayed, setIsPlayed] = useState(false);
  return (
    <React.Fragment>
      <StatusBar backgroundColor="#111827" />
      <SafeAreaView style={styles.container}>
        <View style={styles.appBar}>
          <Text style={styles.appBarText}>Music Player</Text>
        </View>
        <View style={styles.musicPlayer}>
          <View style={styles.musicPlayerBox}>
            <Image
              style={styles.cover}
              source={{
                uri: "http://static1.squarespace.com/static/56454c01e4b0177ad4141742/56f3eeaa6e06f2df013dd6cd/56f3ef166e06f2df013de90c/1458827030375/Covers-Vol.-1-Cover.jpg?format=original",
              }}
            />
          </View>
          <View>
            <Text style={styles.songDetail}>Song Name</Text>
            <Text style={styles.songDetail}>Artist Name</Text>
          </View>
          <View style={styles.buttons}>
            <Icon name="chevron-left" color="#059669" size={60} />
            {isPlayed ? (
              <Icon
                name="play-arrow"
                tyep="material"
                color="#059669"
                size={60}
                onPress={() => setIsPlayed(!isPlayed)}
              />
            ) : (
              <Icon
                name="pause"
                tyep="material"
                color="#059669"
                size={60}
                onPress={() => setIsPlayed(!isPlayed)}
              />
            )}
            <Icon name="chevron-right" color="#059669" size={60} />
          </View>
          
        </View>
      </SafeAreaView>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111827",
  },
  appBar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "10%",
    width: "100%",
    textAlign: "center",
    backgroundColor: "#d4d4d8",
    borderRadius: 2,
  },
  appBarText: {
    fontSize: 20,
    fontStyle: "italic",
  },
  musicPlayer: {
    height: "90%",
    display: "flex",
    alignItems: "center",
    paddingTop: 80,
  },
  musicPlayerBox: {
    width: 150,
    height: 150,
  },
  cover: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
  songDetail: {
    fontSize: 25,
    marginTop: 8,
    marginBottom: 4,
    color: "white",
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 40,
  },
});
