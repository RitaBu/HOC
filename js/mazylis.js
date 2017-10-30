// mazylis

Blockly.Blocks['list_includes'] = {
  init: function() {
    this.appendValueInput("list_name")
        .setCheck("String")
        .appendField("sąraše");
    this.appendValueInput("item_place")
        .setCheck(null)
        .appendField("rasti")
        .appendField(new Blockly.FieldDropdown([["pirmą","first"], ["paskutinį","last"]]), "item_placement")
        .appendField("įrašą su");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour(260);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['list_includes'] = function(block) {
  var value_list_name = Blockly.JavaScript.valueToCode(block, 'list_name', Blockly.JavaScript.ORDER_NONE);
  var dropdown_item_placement = block.getFieldValue('item_placement');
  var value_item_place = Blockly.JavaScript.valueToCode(block, 'item_place', Blockly.JavaScript.ORDER_NONE);
  // TODO: Assemble JavaScript into code variable.
  var code = 'contains('+value_list_name+','+ value_item_place+',"'+ dropdown_item_placement+'")';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.Blocks['spausdinti'] = {
  init: function() {
    this.appendValueInput("last_list_name")
        .setCheck("Array")
        .appendField("spausdinti sąrašą: ");
    this.setPreviousStatement(true, null);
    this.setColour(160);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.JavaScript['spausdinti'] = function(block) {
  var value_last_list_name = Blockly.JavaScript.valueToCode(block, 'last_list_name', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = ' ctx.clearRect(0, 0, canvas.width, canvas.height);\n spausdinti('+value_last_list_name+');';
  return code;
};
// var x, list, list_x;


// list = '18 aa;19bb;18 dd'.split(';');
// x = contains(list,18)
// window.alert(x);


function contains(a, obj, place) {

var list_x = [];
    for (var i = 0; i < a.length; i++) {
        if (a[i].includes(obj)) {
            list_x.push(i);
        }
    }
    
    if (place == "first") {return list_x[0]+1;}
    else {return list_x[list_x.length-1]+1;}
}
    

function spausdinti(list) {
    ctx.fillStyle = "black";
    ctx.font = "12px Verdana";

    for (var i = 0; i < list.length; i++) {
      
       ctx.strokeText("Dokumentai:"+list[i], 20, (i + 1) * 30);
    }
    
    
}