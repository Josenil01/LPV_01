/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview dbkBlocks On Blockly.
 * @author Rubens Queiroz
 */
'use strict';

goog.provide('Blockly.Blocks.numero');
goog.require('Blockly.Blocks');

var cor_numero = 95;
var cor_operador = 65;

Blockly.Blocks['soma'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_operador);
	  this.appendValueInput("num1")
        .setCheck(null)
    this.appendDummyInput()
        .appendField("+")
    this.appendValueInput("num2")
        .setCheck(null)
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['subtracao'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_operador);
	  this.appendValueInput("num1")
        .setCheck(null)
    this.appendDummyInput()
        .appendField("-")
    this.appendValueInput("num2")
        .setCheck(null)
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};
Blockly.Blocks['multiplicao'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_operador);
	  this.appendValueInput("num1")
        .setCheck(null)
    this.appendDummyInput()
        .appendField("X")
    this.appendValueInput("num2")
        .setCheck(null)
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['divisao'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_operador);
	  this.appendValueInput("num1")
        .setCheck(null)
    this.appendDummyInput()
        .appendField("/")
    this.appendValueInput("num2")
        .setCheck(null)
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};



Blockly.Blocks['n0'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_numero);
    this.appendDummyInput()
	    .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/n0.png", 30, 30, "*"));
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['n9'] = {
  init: function() {

    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_numero);
    this.appendDummyInput()
	    .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/n9.png", 30, 30, "*"));
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};
Blockly.Blocks['n8'] = {
  init: function() {

    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_numero);
    this.appendDummyInput()
	    .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/n8.png", 30, 30, "*"));
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};
Blockly.Blocks['n7'] = {
  init: function() {

    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_numero);
    this.appendDummyInput()
	    .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/n7.png", 30, 30, "*"));
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};
Blockly.Blocks['n6'] = {
  init: function() {

    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_numero);
    this.appendDummyInput()
	    .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/n6.png", 30, 30, "*"));
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};
Blockly.Blocks['n5'] = {
  init: function() {

    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_numero);
    this.appendDummyInput()
	    .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/n5.png", 30, 30, "*"));
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['n4'] = {
  init: function() {

    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_numero);
    this.appendDummyInput()
	    .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/n4.png", 30, 30, "*"));
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['n3'] = {
  init: function() {

    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_numero);
    this.appendDummyInput()
	    .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/n3.png", 30, 30, "*"));
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};
Blockly.Blocks['n2'] = {
  init: function() {

    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_numero);
    this.appendDummyInput()
	    .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/n2.png", 30, 30, "*"));
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['n1'] = {
  init: function() {

    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_numero);
    this.appendDummyInput()
	    .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/n1.png", 30, 30, "*"));
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};
