import React from "react";
import { StyleSheet, Image, Text, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
import { TouchableOpacity } from "react-native-gesture-handler";


const Detail = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>props.navigation.goBack()}>
          <Feather name="chevron-left" color="#FFF" size={25} />
        </TouchableOpacity>
        <Feather name="shopping-cart" color="#FFF" size={25} />
      </View>
      <Image source={require("../img/2.png")} style={styles.img} />
      <View style={styles.cont3}>
        <Text style={styles.title}>Maxx Scooter</Text>
        <Text style={styles.subtitle}>Model S1</Text>
        <View style={styles.cont2}>
          <Text style={{ ...styles.title, flex: 2, marginTop: 0 }}>Colors</Text>
          <View style={styles.selected}>
            <View style={styles.c1} />
          </View>
          <View style={styles.c2} />
          <View style={styles.c3} />
        </View>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectutur adipsing elit, sed do eiusmod
          tempor inciduent ut labore et dolore magna
        </Text>
        <View style={styles.cont1}>
          <FontAwesome name="heart-o" color="#000" size={25} />
          <TouchableOpacity
            style={styles.btn}
            onPress={() => props.navigation.navigate("Home")}
          >
            <Text style={styles.btnText}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1, // 使用所有可用空間，填滿父容器
    alignItems: "center", // 子組件水平居中對齊
    justifyContent: "center", // 子組件垂直居中對齊
    backgroundColor: "#121212", // 設定背景顏色為深灰色
  },
  header: {
    flexDirection: "row", // 內容橫向排列
    alignItems: "center", // 子組件在交叉軸上居中對齊（這裡是垂直居中）
    justifyContent: "space-between", // 子組件在主軸上平均分布
    width: "100%", // 寬度填滿父容器
    paddingHorizontal: 20, // 水平內邊距
    paddingTop: 50, // 上邊距
  },
  img: {
    height: "45%", // 圖片高度占父容器的45%
    width: "50%", // 圖片寬度占父容器的50%
  },
  cont3: {
    flex: 1, // 使用剩餘空間，填滿父容器
    backgroundColor: "#FFF", // 背景顏色設為白色
    width: "100%", // 寬度填滿父容器
    borderRadius: 50, // 圓角半徑
    paddingHorizontal: 20, // 水平內邊距
  },
  title: {
    fontSize: 25, // 字體大小
    fontFamily: "Montserrat_700Bold", // 字體類型為Montserrat加粗
    marginTop: 30, // 上邊距
  },
  subtitle: {
    fontSize: 20, // 字體大小
    color: "#474747", // 字體顏色
    marginTop: 10, // 上邊距
    fontFamily: "Montserrat_400Regular", // 字體類型為Montserrat常規
  },
  text: {
    fontFamily: "Montserrat_400Regular", // 字體類型為Montserrat常規
    fontSize: 18, // 字體大小
    paddingRight: 80, // 右邊內邊距
    lineHeight: 25, // 行高
  },
  btn: {
    backgroundColor: "#E2443B", // 背景顏色為紅色
    paddingHorizontal: 60, // 水平內邊距
    paddingVertical: 12, // 垂直內邊距
    borderRadius: 30, // 圓角半徑
  },
  btnText: {
    fontFamily: "Montserrat_600SemiBold", // 字體類型為Montserrat半加粗
    fontSize: 20, // 字體大小
    color: "#FFF", // 字體顏色為白色
  },
  cont1: {
    flexDirection: "row", // 內容橫向排列
    alignItems: "center", // 子組件在交叉軸上居中對齊
    width: "100%", // 寬度填滿父容器
    justifyContent: "space-between", // 子組件在主軸上平均分布
    marginTop: 40, // 上邊距
  },
  c3: {
    height: 20, // 高度
    width: 20, // 寬度
    borderRadius: 15, // 圓角半徑
    backgroundColor: "#529CC0", // 背景顏色
  },
  c2: {
    height: 20, // 高度
    width: 20, // 寬度
    borderRadius: 15, // 圓角半徑
    backgroundColor: "#529C47", // 背景顏色
    marginHorizontal: 10, // 水平外邊距
  },
  c1: {
    height: 20, // 高度
    width: 20, // 寬度
    borderRadius: 15, // 圓角半徑
    backgroundColor: "#E2443B", // 背景顏色
  },
  selected: {
    borderColor: "#E2443B", // 邊框顏色
    height: 30, // 高度
    width: 30, // 寬度
    borderRadius: 30, // 圓角半徑
    borderWidth: 2, // 邊框寬度
    alignItems: "center", // 水平居中對齊
    justifyContent: "center", // 垂直居中對齊
  },
  cont2: {
    flexDirection: "row", // 內容橫向排列
    alignItems: "center", // 子組件在交叉軸上居中對齊
    width: "100%", // 寬度填滿父容器
    marginVertical: 25, // 垂直外邊距
  },
});
