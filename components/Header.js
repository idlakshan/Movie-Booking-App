import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Header = () => {
    return (
        <View>
            <ImageBackground style={{ aspectRatio: 5 / 2, height: 170 }}
                source={{
                    uri: "https://imageio.forbes.com/specials-images/imageserve/65bf738d76ae76563adf151c/0x0.jpg?format=jpg&crop=1502,844,x183,y33,safe&height=900&width=1600&fit=bounds",
                }}>
            </ImageBackground>
           
        </View>
    )
}

export default Header

const styles = StyleSheet.create({})