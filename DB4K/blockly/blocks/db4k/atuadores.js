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

var cor_acender_led = 160;
var cor_apagar_led = 140;
var cor_piscar_led = 167;
var cor_ledRGB = 95;
var cor_motor = 196;
var cor_servo = 184;
var cor_lcd = 328;
var cor_7Seg = 315;
var cor_buzzer = 240;



Blockly.Blocks['acender_led'] = {
  init: function () {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_acender_led);
    this.appendDummyInput("acender_led")
      .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/led_on.png", 40, 40, "*"))
      .appendField(new Blockly.FieldColour("#ff0000"), "cor_led");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Acende o LED na porta indicada.');
  }
};

Blockly.Blocks['apagar_led'] = {
  init: function () {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_apagar_led);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/led_off_long.png", 40, 40, "*"))
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
      .appendField(new Blockly.FieldDropdown(options, "nota_musical", true));
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

Blockly.Blocks['teste_bandeiras'] = {
  init: function () {

    var grave = '\u25CF' + "  " + "Grave";
    var medio = '\u25CE' + "  " + "Médio";
    var agudo = '\u25CB' + "  " + "Agudo";

    var natural = '  ' + '\u0020' + '  Natural';
    var bemol = '  ' + '\u266D' + ' <span></span> Bemol';
    var sustenido = '  ' + '\u266F' + '  Sustenido';
    var options = [
      [
        medio,
        "4",
        'data:image/jpeg;base64,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'],
      [
        grave,
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
      .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/buzzer_notas.png", 40, 40, "*"))
      .appendField("Tocar nota")
      .appendField(new Blockly.FieldDropdown(options, "nota_musical"))
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
    var val_1 = '\u25CF' + "  " + "Lento";
    var val_2 = '\u25CB' + "  " + "Rápido";
    this.setHelpUrl('http://www.example.com/');
    this.setColour(cor_buzzer);
    this.appendDummyInput()
      .appendField(new Blockly.FieldImage("../blockly/blocks/db4k/icons/buzzer_sirente.png", 40, 40, "*"))
      .appendField("Tocar Sirene")
      .appendField(new Blockly.FieldDropdown([[val_2, "0"], [val_1, "1"]]), "velocidade")
      .appendField("no Buzzer")
      .appendField("Porta")
      .appendField(new Blockly.FieldDropdown([['D11', "11"], ['D10', "10"], ['D9', "9"], ['D6', "6"], ['D5', "5"], ['D3', "3"]]), "porta_digital");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('Faz o buzzer tocar sirene na velocidade especificada');
  }
};
