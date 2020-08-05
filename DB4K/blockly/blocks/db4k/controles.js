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

goog.provide('Blockly.Blocks.controles');
goog.require('Blockly.Blocks');



var cor_controles = '#f77b01';
var cor_repeticao = 25;
var cor_selecao = 10;
///var cor_numero = 95;


Blockly.Blocks['sempre'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_controles);
    this.appendValueInput("repita_sempre")
      .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/play.svg", 40, 40, "*"))
      .appendField(" ");
    this.setNextStatement(true, null);
    this.setTooltip('REPITA PARA SEMPRE');
  }
};

Blockly.Blocks['delay'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_controles);     
    this.appendDummyInput("milisegundos")
        .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/delay.svg", 40, 40, "*"))
        .appendField(new Blockly.FieldTextInput("N"), "texto");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    //this.setOutput(true, null);
    this.setTooltip('Faz o programa esperar alguns segundos antes de executar o próximo comando');
  }
};



Blockly.Blocks['repetir'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_repeticao);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/loop.png", 40, 40, "*"))
        .appendField("Repetir")
        .appendField(new Blockly.FieldDropdown([["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"]]), "numero_repeticoes")
        .appendField("vezes")
		.appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/invisible.png", 17, 40, "*"));
	this.setInputsInline(true);
    this.appendStatementInput("blocos_dbk");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Faz o programa repetir algumas vezes os comandos colocados dendro desse bloco');
  }
};

Blockly.Blocks['parar_repeticao_do_programa'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_delay_parar);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/parar_programa.png", 40, 40, "*"))
        .appendField("Parar Programa")
		.appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/invisible.png", 27, 40, "*"));
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Força a parada do repetição do programa definitivamente');
  }
};

Blockly.Blocks['condicional_simples'] = {
  init: function() {

    var options = [
      [
        "1",
        "4",
        '../blockly/blocks/db4k/icons/button.svg'],
      [
        "2",
        "3",
        '../blockly/blocks/db4k/icons/buzzer.svg'],
      [
        "3",
        "5",
        'data:image/jpeg;base64,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']
    ];
  
    this.setHelpUrl('http://www.example.com/');
    this.setColour('#ff77cf');
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(options),"tipo_sensor")
        .appendField(new Blockly.FieldDropdown(options),"valor");
    this.appendStatementInput("codigo_condicional");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Executa os comandos internos se a condição especificada for atendida');
  }
};

Blockly.Blocks['condicional_completo'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_selecao );
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/interrogacao_se.png", 40, 40, "*"));
    this.appendValueInput("condicao")
        .appendField("Se");
    this.appendDummyInput()
        .appendField("então")
		.appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/invisible.png", 0, 40, "*"));
    this.appendStatementInput("codigo_condicional");
	this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/seta_senao.png", 40, 17, "*"))
        .appendField("Senão")
		//.appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/invisible.png", 42, 17, "*"))
    this.appendStatementInput("codigo_execcao");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};


Blockly.Blocks['enquanto'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_repeticao);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/enquanto.png", 40, 40, "*"))
        .appendField("Enquanto");
    this.appendValueInput("condicao");
    this.appendDummyInput()
        .appendField("faça")
		.appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/invisible.png", 11, 40, "*"));
    this.appendStatementInput("codigo_enquanto");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Executa os comandos internos enquanto a condição especificada for atendida');
  }
};
