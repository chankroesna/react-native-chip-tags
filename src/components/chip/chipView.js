import React, { Fragment } from "react";
import { TextInput } from "react-native";

import styles from "./chipStyle";

const Chip = ({ handleOnBlur, handleOnChange, isPin }, props) => (
  <Fragment>
    <TextInput
      allowFontScaling
      style={[styles.textInput, isPin && styles.isPin]}
      onChangeText={text => handleOnChange && handleOnChange(text)}
      onBlur={() => handleOnBlur && handleOnBlur()}
      {...props}
    />
  </Fragment>
);

export default Chip;
