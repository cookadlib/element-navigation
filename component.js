Polymer('element-navigation', {
    created: function() {
        console.log('element-navigation created');
    },
    enteredView: function() {
        console.log('element-navigation enteredView');
    },
    leftView: function() {
        console.log('element-navigation leftView');
    },
    attributeChanged: function(attrName, oldVal, newVal) {
        console.log('element-navigation attributeChanged');
    }
});
