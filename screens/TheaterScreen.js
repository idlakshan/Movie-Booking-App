import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MoviesCards } from "../Context";
import { FontAwesome } from "@expo/vector-icons";

const TheaterScreen = () => {
    const route = useRoute();
    console.log(route.params);
    const navigation = useNavigation();
    return (
        <SafeAreaView>

            <View style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
            }}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Ionicons
                        onPress={() => navigation.goBack()}
                        style={{ marginLeft: 5 }}
                        name="arrow-back"
                        size={24}
                        color="black"
                    />
                    <View>
                        <Text style={{ fontSize: 16, fontWeight: "600" }}>{route.params.name}</Text>
                        <Text style={{
                            marginTop: 2,
                            color: "gray",
                            fontSize: 15,
                            fontWeight: "500",
                        }}
                        >{route.params.mall}</Text>

                    </View>
                </View>
                <AntDesign
                    style={{ marginRight: 12 }}
                    name="sharealt"
                    size={24}
                    color="black"
                />

            </View>

            <Text
                style={{
                    textAlign: "center",
                    fontSize: 16,
                    fontWeight: "bold",
                    marginTop: 10,
                }}
            >
                {route.params.timeSelected}
            </Text>

            <Text
                style={{
                    textAlign: "center",
                    fontSize: 13,
                    marginTop: 10,
                    color: "gray",
                }}
            >
                CLASSIC (240)
            </Text>

            <View style={{ marginTop: 20 }} />

            <FlatList
                numColumns={7}
                data={route.params.tableSeats}
                renderItem={({ item }) => (
                    <Pressable
                        onPress={() => onSeatSelect(item)}
                        style={{
                            margin: 10,

                            borderColor: "gray",
                            borderWidth: 0.5,
                            padding: 8,
                            borderRadius: 5,
                        }}
                    >

                        <Text style={{}}>{item}</Text>

                    </Pressable>
                )}
            />

            <View style={{
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: 100,
                marginTop: 20,
                backgroundColor: "#D8D8D8",
                padding: 10,
            }}>
                <View>
                    <FontAwesome
                        style={{ textAlign: "center", marginBottom: 4 }}
                        name="square"
                        size={24}
                        color="#ffc40c"
                    />
                    <Text>selected</Text></View>

                <View style={{ marginHorizontal: 20 }}>
                    <FontAwesome
                        style={{ textAlign: "center", marginBottom: 4 }}
                        name="square"
                        size={24}
                        color="white"
                    />
                    <Text>Vacant</Text>
                </View>

                <View>
                    <FontAwesome
                        style={{ textAlign: "center", marginBottom: 4 }}
                        name="square"
                        size={24}
                        color="#989898"
                    />
                    <Text>Occupied</Text>
                </View>
            </View>

            <View style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 14,
            }}>

                <View style={{ padding: 10 }}>
                    <Text style={{ marginBottom: 4, fontSize: 15, fontWeight: "500" }}>
                        show end time approx 6:51Pm
                    </Text>
                    <Text style={{ fontSize: 18 }}>No seats selected</Text>
                </View>

                <View style={{
                    backgroundColor: "#E0E0E0",
                    padding: 10,
                    borderTopLeftRadius: 6,
                    borderBottomLeftRadius: 6,
                    marginTop: 10,
                }}>
                    <Text style={{ width: 100 }}>Now with ticket cancellation</Text>
                </View>

            </View>

            <Pressable style={{
                backgroundColor: "#ffc40c",
                padding: 20,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginVertical: 20,
            }}>

                <Text></Text>

                <Pressable>
                    <Text style={{ fontSize: 17, fontWeight: "600" }}>PAY</Text>
                </Pressable>

            </Pressable>


        </SafeAreaView>
    )
}

export default TheaterScreen

const styles = StyleSheet.create({})