import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { HeaderButton, HeaderButtons } from "react-navigation-header-buttons";

const AntDesignHeaderButton = (props) => (
  <HeaderButton IconComponent={AntDesign} iconSize={23} {...props} />
);

export const AntDesignHeaderButtons = (props) => (
  <HeaderButtons HeaderButtonComponent={AntDesignHeaderButton} {...props} />
);
