# react-native-chip-tags

A react native component for editable chips tag

[![License MIT](http://img.shields.io/badge/license-MIT-orange.svg?style=flat)](https://raw.githubusercontent.com/ue/react-native-chip-tags/master/LICENSE)
[ ![NPM version](http://img.shields.io/npm/v/react-native-chip-tags.svg?style=flat)](https://www.npmjs.com/package/react-native-chip-tags)

## Installation

- 1.Run `npm i react-native-chip-tags --save` or `yarn add react-native-chip-tags`
- 2.`import { TagArea } from 'react-native-chip-tags'`

![Screenshots](https://media.giphy.com/media/oNTOdjSUej8dCFCTsh/giphy.gif)

## Getting started

Add `react-native-chip-tags` to your js file.

`import { TagArea, Chip } from 'react-native-chip-tags'`

Inside your component's render method, use TagArea:

```javascript
 render() {
         return (
             <TagArea handleTagChanged={this._handleOnTagAdded} />
         );
 }

```

## API

| Props            | Type     | Optional | Default              | Description                                    |
| ---------------- | -------- | -------- | -------------------- | ---------------------------------------------- |
| chipStyle        | object   | true     | Gray background etc. | Custom chip style                              |
| tagWrapper       | object   | true     | nothing              | Custom wrapper position                        |
| editable         | boolean  | true     | false                | For editable data                              |
| pinChipIndex     | boolean  | true     | false                | For first chip change color to blue as default |
| handleOnChange   | function | true     | null                 | Handle on change                               |
| handleOnBlur     | function | true     | null                 | Handle on blur                                 |
| chipsCount       | number   | true     | 5                    | Chip count                                     |
| draftChips       | array    | true     | []                   | For render already filled tags                 |
| handleTagChanged | function | true     | null                 | For hande tag change                           |
| maxLength        | number   | true     | 50                   | Max text lenght                                |
| multiline        | number   | true     | false                | For multi line                                 |

**MIT Licensed by UE**
