import { FlatList, Pressable, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import movies from "../data/movies";
import Header from './Header';
import { useNavigation } from '@react-navigation/native';

const MovieCards = () => {
    const data = movies;
    const navigation = useNavigation();

    return (
        <View>
            <FlatList showsVerticalScrollIndicator={false}
                numColumns={2} ListHeaderComponent={Header} data={data} renderItem={({ item }) => (
                    <Pressable style={{ margin: 10, marginHorizontal: 20 }}>
                        <Image style={{
                            aspectRatio: 2 / 3,
                            height: 240,
                            borderRadius: 6,
                        }} source={{ uri: item.image }} />
                        <Text
                            style={{
                                fontSize: 16,
                                fontWeight: "600",
                                width: 170,
                                marginTop: 10,
                            }}
                        >
                            {item.name.substr(0.16)}
                        </Text>

                        <Text style={{ marginTop: 4, fontSize: 15, color: "gray" }}>
                            U/A • {item.language}
                        </Text>

                        <Text style={{ marginTop: 4, fontSize: 14, fontWeight: "500" }}>
                            {item.genre}
                        </Text>

                        <Pressable
                            onPress={() => navigation.navigate("Movies", {
                                name: item.name,
                                image: item.image,
                            })}
                            style={{
                                backgroundColor: "#ffc40c",
                                padding: 10,
                                borderRadius: 6,
                                marginRight: 10,
                                width: 100,
                                marginTop: 10,
                            }}
                        >
                            <Text
                                style={{ fontSize: 14, fontWeight: "500", textAlign: "center" }}
                            >
                                BOOK
                            </Text>
                        </Pressable>

                    </Pressable>

                )} />
        </View>
    )
}

export default MovieCards

const styles = StyleSheet.create({})