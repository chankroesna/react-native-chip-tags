import React, { Fragment } from "react";
import { TextInput } from "react-native";

import styles from "./chipStyle";

const Chip = (
  {
    autoFocus,
    chipStyle,
    handleOnBlur,
    handleOnChange,
    isPin,
    placeholder,
    placeholderTextColor,
    value,
  },
  props
) => (
  <Fragment>
    <TextInput
      allowFontScaling
      autoFocus={autoFocus}
      style={[styles.textInput, chipStyle, isPin && styles.isPin]}
      onChangeText={text => handleOnChange && handleOnChange(text)}
      onBlur={() => handleOnBlur && handleOnBlur()}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      //value={value}
      {...props}
    />
  </Fragment>
);

export default Chip;
