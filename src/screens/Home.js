import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import { TouchableOpacity } from "react-native-gesture-handler";

const Home = (props) => {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });
  return (
    <View style={styles.container}>
      <Image source={require("../img/1.png")} style={styles.img} />
      <Text style={styles.title}>Maxx Scooter</Text>
      <Text style={styles.detail}>
        With an updated motor, and integrated anti-theft tech the maxx scooters
        are custom-tuned for the ultimate riding experience.
      </Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => props.navigation.navigate("Detail")}
      >
        <Text style={styles.text}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1, // 使容器使用所有可用空間
    alignItems: "center", // 水平居中對齊子組件
    justifyContent: "center", // 垂直居中對齊子組件
    backgroundColor: "#121212", // 設置容器的背景顏色
  },
  img: {
    height: "50%", // 將圖片高度設置為其容器的50%
    width: "120%", // 將圖片寬度設置為其容器的120%
    resizeMode: "contain", // 確保圖片按比例縮放並適應框架內
  },
  title: {
    color: "#FFF", // 文字顏色設為白色
    fontFamily: "Montserrat_700Bold", // 設置文字的字體家族和粗細
    fontSize: 30, // 設置字體大小
    marginTop: 20, // 文字上方增加邊距
  },
  detail: {
    color: "#FFF", // 文字顏色設為白色
    fontFamily: "Montserrat_400Regular", // 設置文字的字體家族和粗細
    fontSize: 18, // 設置字體大小
    textAlign: "center", // 水平居中對齊文字
    paddingHorizontal: 20, // 文字框內側水平方向添加填充
    lineHeight: 30, // 設置文字的行高
    marginTop: 30, // 文字上方增加邊距
  },
  btn: {
    marginTop: 80, // 按鈕上方增加邊距
    backgroundColor: "#E2443B", // 設置按鈕的背景顏色
    paddingHorizontal: 140, // 按鈕內側水平方向添加填充
    paddingVertical: 10, // 按鈕內側垂直方向添加填充
    borderRadius: 30, // 按鈕邊緣圓角化
  },
  text: {
    fontFamily: "Montserrat_600SemiBold", // 設置按鈕文字的字體家族和粗細
    fontSize: 30, // 設置按鈕文字的字體大小
    color: "#FFF", // 文字顏色設為白色
  },
});

