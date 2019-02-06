import React, { Component } from "react";
import { View, ScrollView } from "react-native";

// Components
import { Chip } from "../chip/chipView";

export default class TagAreaView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentText: "",
      chips: props.draftChips || [" "],
      chipsCount: props.chipsCount || 5,
      activeChip: 0
    };
  }

  // Component Life Cycles
  componentWillReceiveProps(nextProps) {
    const { draftChips } = this.props;

    if (nextProps.draftChips && nextProps.draftChips !== draftChips) {
      const _chips = [...nextProps.draftChips, " "];
      this.setState({
        chips: _chips
      });
    }
  }

  // Component Functions
  _handleOnChange = (text, i) => {
    this.setState({ currentText: text.replace(/\s/g, "") });
    if (text.indexOf(" ") > 0 && text) {
      this._handleTagAdded();
    }
    if (!text) {
      this._handleTagRemove(i);
    }
  };

  _handleOnBlur = i => {
    this._handleTagAdded(i);
  };

  _handleTagAdded = (i = null, text = null) => {
    const { currentText, chips, chipsCount } = this.state;
    const { handleTagChanged } = this.props;
    const _currentText = (currentText && currentText.trim()) || text;
    const _chips = chips.filter(chip => chip && chip !== " ");

    if (_currentText && chips && chips.length < chipsCount) {
      this.setState({
        chips: [...chips, _currentText],
        currentText: ""
      });
    }

    if (handleTagChanged && _chips.length < chipsCount + 1) {
      handleTagChanged([..._chips, _currentText]);
    }
  };

  _handleTagRemove = i => {
    const { chips } = this.state;
    const { handleTagChanged } = this.props;

    this.setState({
      chips: chips.filter((_, _i) => _i !== i)
    });

    if (handleTagChanged) {
      handleTagChanged(chips.filter((_, _i) => _i !== i));
    }

    // Restart chips
    if (chips && chips.length === 1 && i === 0) {
      this.setState({ chips: [" "] });
    }
  };

  render() {
    const {
      autoCapitalize,
      chipStyle,
      editable,
      maxLength,
      multiline,
      pinChipIndex,
      placeholder,
      placeholderColor,
      tagWrapper,
      wrapperStyle
    } = this.props;
    const { activeChip, chips, chipsCount, currentText } = this.state;

    return (
      <View style={wrapperStyle}>
        <ScrollView horizontal style={tagWrapper}>
          {chips.map(
            (chip, i) =>
              i < chipsCount && (
                <Chip
                  key={i}
                  refs={input => {
                    this.inputs[i] = input;
                  }}
                  isPin={i === pinChipIndex && chips[pinChipIndex + 1]}
                  placeholderTextColor={placeholderColor || "#fff"}
                  editable={editable}
                  maxLength={maxLength || 50}
                  placeholder={placeholder || "tags"}
                  autoFocus={i !== 0 && chips.length - 1 === i}
                  multiline={multiline || false}
                  handleOnChange={text => this._handleOnChange(text, i)}
                  handleOnBlur={() => this._handleOnBlur(i)}
                  blurOnSubmit
                  style={chipStyle}
                  value={
                    activeChip === i
                      ? currentText || chip.replace(/\s/g, "")
                      : chip.replace(/\s/g, "")
                  }
                  autoCapitalize={autoCapitalize || "none"}
                  onFocus={() => this.setState({ activeChip: i })}
                  {...this.props}
                />
              )
          )}
        </ScrollView>
      </View>
    );
  }
}
