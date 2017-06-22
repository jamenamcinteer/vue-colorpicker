# vue-colorpicker
Color picker Vue.js component.

## Demo
demo: [https://codepen.io/nmcinteer/pen/WOjwKX](https://codepen.io/nmcinteer/pen/WOjwKX)

## Installation
### Via npm:
`npm install vue-colorpicker`

## Usage
### Javascript:
```
new Vue({
	el: '#color-picker',
	data: {
		colors: colors,
		selectedColorHex: ''
	},
	components: {
		'color-picker': ColorPicker
	}
});
```
### HTML:
```
<color-picker :color-options="colors" empty-option="None" input-id="color" v-model="selectedColorHex" default="#DC143C"></color-picker>
```

## Options
- **color-options** - an array of objects of the form: 
```
var colors = [
	{
		"hex": "#FFA07A",
	  "name": "Light Salmon"
  },
	{
		"hex": "#CD5C5C",
	  "name": "Indian Red"
  },
	{
		"hex": "#DC143C",
	  "name": "Crimson"
  },
	{
		"hex": "#20B2AA",
	  "name": "Light Sea Green"
  },
	{
		"hex": "#008B8B",
		"name": "Dark Cyan"
	},
	{
		"hex": "#4682B4",
	  "name": "Steel Blue"
  }
];
```
- **empty-option** - Leave empty for no empty option, enter true for an empty option without a label, enter any other string for an empty option with a label
- **input-id** - An ID for the hidden input field
- **default** - The default hex code
