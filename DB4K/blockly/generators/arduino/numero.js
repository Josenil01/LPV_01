/**
 * @license
 * Visual Blocks Language
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
 * @fileoverview Generating Code for DBK special Blocks.
 * @author Rubens Queiroz
 */
'use strict';

goog.provide('Blockly.Arduino.numero');
goog.require('Blockly.Arduino');

//--------------------------------------------
//Generators included by RLQ - DB4K
//--------------------------------------------
//bloco de soma
Blockly.Arduino['soma'] = function(block) {
  var num1 =Blockly.Arduino.valueToCode(block,'num1',
      Blockly.Arduino.ORDER_NONE) || '0.001';
  var num2 =Blockly.Arduino.valueToCode(block,'num2',
      Blockly.Arduino.ORDER_NONE) || '0.001';
  var code =  '('+num1+'+'+ num2+')';
  return [code, Blockly.Arduino.ORDER_CONDITIONAL];
};


//bloco de multiplicao
Blockly.Arduino['multiplicao'] = function(block) {
  var num1 =Blockly.Arduino.valueToCode(block,'num1',
      Blockly.Arduino.ORDER_NONE) || '0.001';
  var num2 =Blockly.Arduino.valueToCode(block,'num2',
      Blockly.Arduino.ORDER_NONE) || '0.001';
  var code =  num1+'*'+ num2;
  return [code, Blockly.Arduino.ORDER_CONDITIONAL];
};
//bloco de subtracao
Blockly.Arduino['subtracao'] = function(block) {
  var num1 =Blockly.Arduino.valueToCode(block,'num1',
      Blockly.Arduino.ORDER_NONE) || '0.001';
  var num2 =Blockly.Arduino.valueToCode(block,'num2',
      Blockly.Arduino.ORDER_NONE) || '0.001';
  var code =  '('+num1+'-'+ num2+')';
  return [code, Blockly.Arduino.ORDER_CONDITIONAL];
};
//bloco de divisão
Blockly.Arduino['divisao'] = function(block) {
  var num1 =Blockly.Arduino.valueToCode(block,'num1',
      Blockly.Arduino.ORDER_NONE) || '0.001';
  var num2 =Blockly.Arduino.valueToCode(block,'num2',
      Blockly.Arduino.ORDER_NONE) || '0.001';
  var code =  num1+'/'+ num2;
  return [code, Blockly.Arduino.ORDER_CONDITIONAL];
};





Blockly.Arduino['n0'] = function(block) {
  var code =  '0' ;
  return [code, Blockly.Arduino.ORDER_CONDITIONAL];
};

Blockly.Arduino['n1'] = function(block) {
 	  var code =  '1' ;
  return [code, Blockly.Arduino.ORDER_CONDITIONAL];
};
Blockly.Arduino['n2'] = function(block) {
 	  var code =  '2' ;
  return [code, Blockly.Arduino.ORDER_CONDITIONAL];
};
Blockly.Arduino['n3'] = function(block) {
 	  var code =  '3' ;
  return [code, Blockly.Arduino.ORDER_CONDITIONAL];
};
Blockly.Arduino['n4'] = function(block) {
 	  var code =  '4' ;
  return [code, Blockly.Arduino.ORDER_CONDITIONAL];
};
Blockly.Arduino['n5'] = function(block) {
 	  var code =  '5' ;
  return [code, Blockly.Arduino.ORDER_CONDITIONAL];
};
Blockly.Arduino['n6'] = function(block) {
 	  var code =  '6' ;
  return [code, Blockly.Arduino.ORDER_CONDITIONAL];
};
Blockly.Arduino['n7'] = function(block) {
 	  var code =  '7' ;
  return [code, Blockly.Arduino.ORDER_CONDITIONAL];
};
Blockly.Arduino['n8'] = function(block) {
 	  var code =  '8' ;
  return [code, Blockly.Arduino.ORDER_CONDITIONAL];
};
Blockly.Arduino['n9'] = function(block) {
 	  var code =  '9' ;
  return [code, Blockly.Arduino.ORDER_CONDITIONAL];
};//*/
