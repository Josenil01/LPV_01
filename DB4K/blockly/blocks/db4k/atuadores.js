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

goog.provide('Blockly.Blocks.atuadores');
goog.require('Blockly.Blocks');

/** Com o LED BRANCO
*Blockly.FieldColour.COLOURS = ['#0f0','#ff0','#f00','#fff'];
*Blockly.FieldColour.COLUMNS = 4;
*/

Blockly.FieldColour.COLOURS = ['#0f0', '#ff0', '#f00'];
Blockly.FieldColour.COLUMNS = 3;

var cor_led = '#0d98e2';
var cor_apagar_led = 140;
var cor_piscar_led = 167;
var cor_ledRGB = 95;
var cor_motor = 196;
var cor_servo = 184;
var cor_lcd = 328;
var cor_7Seg = 315;
var cor_buzzer = '#17bebb';



Blockly.Blocks['acender_led'] = {
  init: function () {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_led);
    this.appendDummyInput("acender_led")
      .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/led_on.svg", 40, 40, "*"))
      .appendField(new Blockly.FieldColour("#ff0000"), "cor_led");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Acende o LED na porta indicada.');
  }
};

Blockly.Blocks['apagar_led'] = {
  init: function () {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_led);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/led_off.svg", 40, 40, "*"))
      .appendField(new Blockly.FieldColour("#ff0000"), "cor_led");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Apaga o LED na porta indicada.');
  }
};

Blockly.Blocks['piscar_led'] = {
  init: function () {
    var val_1 = '\u25CF' + "  " + "Devagar";
    var val_2 = '\u25CE' + "  " + "Velocidade Média";
    var val_3 = '\u25CB' + "  " + "Rápido";
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_piscar_led);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/led_blink.png", 40, 40, "*"))
      .appendField(new Blockly.FieldColour("#ff0000"), "cor_led");
    //.appendField(new Blockly.FieldDropdown([['D13', "13"],["D12", "12"],["D8", "8"],["D7", "7"],["D6", "6"],["D5", "5"],["D4", "4"],["D3", "3"]]), "cor_led")
    //.appendField(new Blockly.FieldDropdown([[val_3, "high"],[val_2, "middle"],[val_1, "low"]]), "velocidade_blink");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Pisca o LED da cor indicada.');
  }
};


Blockly.Blocks['girar_motor'] = {
  init: function () {
    var val_1 = '\u25CB' + "  " + "Devagar";
    var val_2 = '\u25CE' + "  " + "Velocidade Média";
    var val_3 = '\u25CF' + "  " + "Rápido";
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_motor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/motor_move_2.png", 40, 40, "*"))
      .appendField("Girar Motor DC")
      .appendField(new Blockly.FieldDropdown([[val_3, "high"], [val_2, "middle"], [val_1, "low"]]), "velocidade_motor")
      .appendField("Porta Motor")
      .appendField(new Blockly.FieldDropdown([['5 10', "1"], ['6 11', "2"]]), "porta_motor");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Faz o motor DC girar na velocidade indicada.');
  }
};

Blockly.Blocks['parar_motor'] = {
  init: function () {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_motor);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/helice.png", 40, 40, "*"))
      .appendField("Parar Motor DC")
      .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/invisible.png", 63, 40, "*"))
      .appendField("Porta Motor")
      .appendField(new Blockly.FieldDropdown([['5 10', "1"], ['6 11', "2"]]), "porta_motor");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Faz o Motor DC  parar');
  }
};

/**Blockly.Blocks['mover_servomotor'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_servo);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/servo_move.png", 40, 40, "*"))
        .appendField("Mover Servo Motor para")
        .appendField(new Blockly.FieldDropdown([["Direita", "0"],["Frente", "80"], ["Esquerda","180"]]), "posicao_ponteiro_servo")
		.appendField("graus");
	this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Faz o ponteiro do Servo Motor mover-se para a posição indicada');
  }
}; */

/**Blockly.Blocks['mover_servomotor'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_servo);
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/servo_move.png", 40, 40, "*"))
        .appendField("Mover Servo Motor para")
        .appendField(new Blockly.FieldDropdown([["0", "0"], ["30", "30"],["60", "60"],["90", "90"], ["120", "120"], ["150", "150"],["180", "180"]]), "posicao_ponteiro_servo")
		.appendField("graus");
	this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Faz o ponteiro do Servo Motor mover-se para a posição indicada');
  }
}; **/

Blockly.Blocks['mover_servomotor'] = {
  init: function () {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_servo);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/servo_move.png", 40, 40, "*"))
      .appendField("Mover Servo Motor para")
      .appendField(new Blockly.FieldAngle(90), "posicao_ponteiro_servo")
      .appendField("graus")
      .appendField("Porta")
      .appendField(new Blockly.FieldDropdown([['D3', "3"], ['D2', "2"], ['D1', "1"], ['D0', "0"]]), "porta_digital");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Faz o ponteiro do Servo Motor mover-se para a posição indicada');
  }
};

Blockly.Blocks['escrever_lcd'] = {
  init: function () {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_lcd);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/lcd4.png", 40, 40, "*"))
      .appendField("Escrever")
      .appendField(new Blockly.FieldTextInput("Oi"), "texto")
      .appendField("na")
      .appendField(new Blockly.FieldDropdown([["linha 1", "1"], ["linha 2", "2"]]), "numero_linha");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Escreve um texto no display de LCD na linha indicada (Máximo de 16 letras e espaços em cada linha)');
  }
};

Blockly.Blocks['limpar_lcd'] = {
  init: function () {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_lcd);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/limpar_lcd4.png", 40, 40, "*"))
      .appendField("Limpar Display")
      .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/invisible.png", 70, 40, "*"));
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Limpa o texto das duas linhas do discplay de LCD');
  }

};

Blockly.Blocks['escrever_display_7s'] = {
  init: function () {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_7Seg);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/display7SegOn.png", 40, 40, "*"))
      .appendField("Escrever ")
      .appendField(new Blockly.FieldDropdown([["0", "0"], ["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"]]), "numerosD7S")
      .appendField("no Display de 7 Segmentos");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};


Blockly.Blocks['limpar_display_7s'] = {
  init: function () {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_7Seg);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/display7SegOff.png", 40, 40, "*"))
      .appendField("Limpar Display de 7 Segmentos")
      .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/invisible.png", 63, 40, "*"));
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};


Blockly.Blocks['led_rgb'] = {
  init: function () {
    var colourRed = new Blockly.FieldColour('#ffffff');
    colourRed.setColours(['#f00', '#fff']).setColumns(2);
    var colourGreen = new Blockly.FieldColour('#ffffff');
    colourGreen.setColours(['#0f0', '#fff']).setColumns(2);
    var colourBlue = new Blockly.FieldColour('#ffffff');
    colourBlue.setColours(['#00f', '#fff']).setColumns(2);
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_ledRGB);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/led_RGB.png", 40, 40, "*"))
      .appendField("Acender Luz  ")
      .appendField(colourRed, "luzVermelha")
      .appendField(colourGreen, "luzVerde")
      .appendField(colourBlue, "luzAzul")
      .appendField(" do LED RGB");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};


Blockly.Blocks['tocar_nota_buzzer'] = {
  init: function () {

    var grave = '\u25CF' + "  " + "Grave";
    var medio = '\u25CE' + "  " + "Médio";
    var agudo = '\u25CB' + "  " + "Agudo";

    var natural = '  ' + '\u0020' + '  Natural';
    var bemol = '  ' + '\u266D' + '  Bemol';
    var sustenido = '  ' + '\u266F' + '  Sustenido';
    // var options = [[medio, "4"],[grave, "3"], [agudo, "5"]];
    var options = [['none', 'NONE'],
    [{ 'src': 'canada.png', 'width': 50, 'height': 25, 'alt': 'Canada' }, 'CANADA'],
    [{ 'src': 'usa.png', 'width': 50, 'height': 25, 'alt': 'USA' }, 'USA'],
    [{ 'src': 'mexico.png', 'width': 50, 'height': 25, 'alt': 'Mexico' }, 'MEXICO']];

    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_buzzer);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/buzzer_notas.png", 40, 40, "*"))
      .appendField("Tocar nota")
      .appendField(new Blockly.FieldDropdown(options, "nota_musical"));
    // .appendField(new Blockly.FieldDropdown([[medio, "4"],[grave, "3"], [agudo, "5"]]), "altura")
    // .appendField(new Blockly.FieldDropdown([[natural, "n"],[bemol, "b"], [sustenido, "s"]]), "acidente")
    // .appendField("no Buzzer")
    // .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/invisible.png", 26, 40, "*"))
    // .appendField("Porta")
    // .appendField(new Blockly.FieldDropdown([['D11',"11"],['D10',"10"],['D9',"9"],['D6',"6"],['D5',"5"],['D3',"3"]]), "porta_digital");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Faz o buzzer tocar a nota especificada');
  }
};
//bloco de teste para modificações
Blockly.Blocks['teste_bandeiras'] = {
  init: function () {

    var grave = '\u25CF' + "  " + "Grave";
    var medio = '\u25CE' + "  " + "Médio";
    var agudo = '\u25CB' + "  " + "Agudo";

   
    var options = [
      [
        grave,
        "4",
        'data:image/jpeg;base64,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'],
      [
        medio,
        "3",
        'data:image/jpeg;base64,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'],
      [
        agudo,
        "5",
        'data:image/jpeg;base64,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']
    ];

    // var options = [['none', 'NONE'],
    // [{ 'src': 'canada.png', 'width': 50, 'height': 25, 'alt': 'Canada' }, 'CANADA'],
    // [{ 'src': 'usa.png', 'width': 50, 'height': 25, 'alt': 'USA' }, 'USA'],
    // [{ 'src': 'mexico.png', 'width': 50, 'height': 25, 'alt': 'Mexico' }, 'MEXICO']];

    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_buzzer);
    this.appendDummyInput()
      //.appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/buzzer_notas.png", 40, 40, "*"))
      .appendField(new Blockly.FieldDropdown(options, "nota_musical"))
      .appendField(new Blockly.FieldDropdown(options, "nota_musical"));
      //.appendField("    adasdada");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Faz o buzzer tocar a nota especificada');
  }
};

Blockly.Blocks['parar_som_buzzer'] = {
  init: function () {


    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_buzzer);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/buzzer_notone.png", 40, 40, "*"))
      .appendField("Silenciar Buzzer")
      .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/invisible.png", 28, 40, "*"))
      .appendField("Porta")
      .appendField(new Blockly.FieldDropdown([['D11', "11"], ['D10', "10"], ['D9', "9"], ['D6', "6"], ['D5', "5"], ['D3', "3"]]), "porta_digital");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Faz o buzzer tocar a nota especificada');
  }
};

Blockly.Blocks['tocar_sirene_buzzer'] = {
  init: function () {
    
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_buzzer);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/buzzer.svg", 40, 40, "*"))
      .appendField(new Blockly.FieldDropdown([['1' , "0"], ['1', "1"]]), "velocidade");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Faz o buzzer tocar sirene na velocidade especificada');
  }
};
