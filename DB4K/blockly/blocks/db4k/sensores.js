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

goog.provide('Blockly.Blocks.sensores');
goog.require('Blockly.Blocks');

var cor_sensores = 65;

Blockly.Blocks['sensor_luz'] = {
  init: function() {
	var val_1 = '\u25CB' + "  " + "Fraca";
	var val_2 = '\u25CE' + "  " + "Ambiente";
	var val_3 = '\u25CF' + "  " + "Forte";
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_sensores);
    this.appendDummyInput()
	    .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/sensor_luz.png", 40, 40, "*"))
      .appendField("Luz")
	    .appendField(new Blockly.FieldDropdown([[val_3, "forte"],[val_2,"ambiente"],[val_1, "fraca"]]), "luminosidade")
		  .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/invisible.png", 8, 40, "*"))
      .appendField("Porta")
      .appendField(new Blockly.FieldDropdown([['A0',"A0"],['A1',"A1"],['A2',"A2"],['A3',"A3"],['A4',"A4"],['A5',"A5"]]), "porta_analogica");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};


Blockly.Blocks['sensor_temperatura'] = {
  init: function() {
	var val_1 = '\u25CB' + "  " + "Baixa";
	var val_2 = '\u25CE' + "  " + "Ambiente";
	var val_3 = '\u25CF' + "  " + "Alta";
	var graus_centigrados = 'C';
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_sensores);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/sensor_temperatura.png", 40, 40, "*"))
        .appendField("Temperatura")
        .appendField(new Blockly.FieldDropdown([[val_3,"alta"],[val_2,"ambiente"],[val_1,"baixa"]]), "temperatura")
        .appendField("Porta")
        .appendField(new Blockly.FieldDropdown([['A0',"A0"],['A1',"A1"],['A2',"A2"],['A3',"A3"],['A4',"A4"],['A5',"A5"]]), "porta_analogica");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['sensor_distancia'] = {
  init: function() {
    //var Trigger=[13,12,11,10,9,8,7,6,5,4,3,2,1];
    //var Echo = [Trigger.length-1];
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_sensores);
    this.appendDummyInput()
	    .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/sensor_distancia.png", 40, 40, "*"))
        .appendField("Distância")
        .appendField(new Blockly.FieldDropdown([["> maior que", "maior"],["< menor que", "menor"]]), "operador")
        .appendField(new Blockly.FieldTextInput("10", Blockly.FieldTextInput.numberValidator), "distancia")
        .appendField("cm");
        //.appendField("Porta Trigger")
        //.appendField(new Blockly.FieldDropdown([['D'+Trigger[0],""+Trigger[0]+""],['D'+Trigger[1],""+Trigger[1]+""]]), "porta_trigger")
        //.appendField("Porta Echo")
        //.appendField(new Blockly.FieldDropdown([['D'+Echo[0],""+Echo[0]+""],['D'+Echo[1],""+Echo[1]+""]]), "porta_echo");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};

Blockly.Blocks['sensor_linha'] = {
  init: function() {
	var val_pouco = '\u25CB' + "  " + "Pouco";
    var val_muito = '\u25CF' +  "  " +  "Muito";
    var val_direito = "Direito " + '\u25BA';
    var val_esquerdo = '\u25C4' + " Esquerdo";
	this.setColour(cor_sensores);
    this.appendDummyInput()
	    .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/sensor_refletancia.png", 40, 40, "*"))
      .appendField(new Blockly.FieldDropdown([[val_pouco, "POUCO"],[val_muito, "MUITO"]]), "REFLEXO")
		  .appendField("Reflexo no lado")
      .appendField(new Blockly.FieldDropdown([[val_direito, "DIREITA"], [val_esquerdo, "ESQUERDA"]]), "DIRECAO")
      .appendField("Porta")
      .appendField(new Blockly.FieldDropdown([['A0',"A0"],['A1',"A1"],['A2',"A2"],['A3',"A3"],['A4',"A4"],['A5',"A5"]]), "porta_analogica");
    this.setOutput(true, null);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Blocks['potenciometro'] = {
  init: function() {
	var val_1 = '\u25CF' + "  " + "Alto";
	var val_2 = '\u25CE' + "  " + "Médio";
    var val_3 = '\u25CB' + "  " + "Baixo";
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/potenciometro.png", 40, 40, "*"))
        .appendField("Potenciômetro")
        .appendField(new Blockly.FieldDropdown([[val_1,"ALTO"], [val_2,"MEDIO"], [val_3 ,"BAIXO"]]), "potenciometro")
        .appendField("Porta")
        .appendField(new Blockly.FieldDropdown([['A0',"A0"],['A1',"A1"],['A2',"A2"],['A3',"A3"],['A4',"A4"],['A5',"A5"]]), "porta_analogica");
    this.setOutput(true, null);
    this.setColour(cor_sensores);
    this.setNextStatement(false);

 }
};

Blockly.Blocks['sensor_toque'] = {
  init: function() {
	var val_1 = '\u25CF' + "  " + "Pressionado";
    var val_2 = '\u25CB' + "  " + "Solto";
    this.appendDummyInput()
		.appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/botao.png", 40, 40, "*"))
        .appendField("Botão")
        .appendField(new Blockly.FieldDropdown([[val_1,"1"], [val_2,"0"]]), "BOTAO")
        .appendField("Porta")
        .appendField(new Blockly.FieldDropdown([['D8',"8"],['D7',"7"],['D6',"6"],['D5',"5"],['D4',"4"],['D3',"3"]]), "porta_digital");
    this.setOutput(true, null);
    this.setColour(cor_sensores);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['sensor_magnetico'] = {
  init: function() {
	var val_1 = '\u25CF' + "  " + "Imã Próximo";
    var val_2 = '\u25CB' + "  " + "Imã Longe";
    this.appendDummyInput()
		    .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/ima.png", 40, 40, "*"))
        .appendField("Sensor Magnético")
        .appendField(new Blockly.FieldDropdown([[val_1,"1"], [val_2,"0"]]), "SENSOR")
        .appendField("Porta")
        .appendField(new Blockly.FieldDropdown([['D11',"11"],['D10',"10"],['D9',"9"],['D8',"8"],['D7',"7"],['D6',"6"],['D5',"5"],['D4',"4"],['D3',"3"]]), "porta_digital");
    this.setOutput(true, null);
    this.setColour(cor_sensores);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
//Código do sensor de cor deletador por Ezequiel
