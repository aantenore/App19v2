import { AsyncStorage } from "react-native";
import constants from "./constants";

const shopNameKey = 'global.user-shopName'

export var storeShopName = async (shopName) => {
  try {
    await AsyncStorage.setItem(shopNameKey, shopName);
  } catch (e) {
      console.log('Preferences storing error');
  }
}

export var retrieveShopName = async () => {
  try {
    var shopName = await AsyncStorage.getItem(shopNameKey);
    if (shopName===null) {
        console.log('no shopName found, return testshop');
        shopName=constants.defaultUser;
    }
    return shopName;
   } catch (e) {
    console.log(e);
    console.log('Preferences loading error');
   }
}