import React from "react";
import { StyleSheet } from "react-native";
import {
  BaseToast,
  BaseToastProps,
  ErrorToast,
} from "react-native-toast-message";

import { Colors } from "@/constants/Colors";
import fonts from "@/constants/fonts";

export const toastConfig = {
  success: (props: React.JSX.IntrinsicAttributes & BaseToastProps) => (
    <BaseToast
      {...props}
      style={{ borderLeftWidth: 0, borderRadius: 10, width: "90%" }}
      contentContainerStyle={{
        backgroundColor: Colors.success["500"],
        borderRadius: 10,
      }}
      text1Style={{
        fontSize: 16,
        fontFamily: fonts.Roboto.Medium,
        color: "white",
      }}
      text2NumberOfLines={5}
      text2Style={{
        fontSize: 14,
        fontFamily: fonts.Roboto.Medium,
        color: "white",
      }}
    />
  ),

  error: (props: React.JSX.IntrinsicAttributes & BaseToastProps) => (
    <ErrorToast
      {...props}
      style={{ borderLeftWidth: 0, borderRadius: 10, width: "90%" }}
      contentContainerStyle={{
        backgroundColor: Colors.error["700"],
        borderRadius: 10,
      }}
      text1Style={{
        fontSize: 16,
        fontFamily: fonts.Roboto.Medium,
        color: "white",
      }}
      text2NumberOfLines={5}
      text2Style={{
        fontSize: 14,
        fontFamily: fonts.Roboto.Medium,
        color: "white",
      }}
    />
  ),
};

const styles = StyleSheet.create({
  demoView: {
    width: "90%",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor: "rgba(158,158,158,0.96)",
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: "#0a3271",
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  text1: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 19,
    paddingTop: 10,
  },
  text2: {
    color: "#fff",
    paddingTop: 5,
    fontSize: 17,
    paddingBottom: 10,
  },
  buttonContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    fontSize: 15,
    paddingVertical: 15,
    borderTopWidth: 1,
    borderTopColor: "#0a3271",
  },
  ignore: {
    color: "#ff5e5e",
    fontSize: 17,
    textAlign: "center",
  },
  detail: {
    color: "#fff",
    fontSize: 17,
    textAlign: "center",
  },
});
