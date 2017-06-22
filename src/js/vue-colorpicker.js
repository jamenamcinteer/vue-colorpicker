module.exports = {
	template: '<div><ul class="color-list"><li v-if="emptyOption"><a class="noColor" v-if="emptyOption !== \'true\'" href="" @click.prevent="setColor();" :title="emptyOption === \'true\' ? \'\' : emptyOption" :class="{selected: !selectedColor && !noSelection}"></a></li><li v-for="color in colors"><a href="" :style="{background: color.hex}" :title="color.name" @click.prevent="setColor(color.hex, color.name)" :class="{selected: selectedColor === color.hex}"></a></li></ul><input type="hidden" :name="inputId" :id="inputId" v-model="selectedColor"></div>',
	props: ['color-options', 'empty-option', 'input-id', 'default'],//must use kebab-case in html, camel case in JS
	data: function() {
		return {
			selectedColor: this.default,
			selectedColorName: '',
			colors: this.colorOptions,
			noSelection: true
			}
	},
	mounted: function() {
		if(this.default) {
			for(i=0;i<this.colors.length;i++) {
				if(this.colors[i].hex === this.default) {
					this.selectedColorName = this.colors[i].name;
					this.noSelection = false;
					this.$emit('input', this.selectedColor);
				}
			}
		}
	},
	methods: {
		setColor: function(color, colorName) {
			this.selectedColor = color;
			this.selectedColorName = colorName;
			this.noSelection = false;
			this.$emit('input', this.selectedColor);
		}
	}
}