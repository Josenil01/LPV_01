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

goog.provide('Blockly.Arduino.controles');
goog.require('Blockly.Arduino');

//--------------------------------------------
//Generators included by RLQ - DB4K
//--------------------------------------------

Blockly.Arduino['sempre'] = function(block) {
  var repita_sempre = Blockly.Arduino.statementToCode(block, 'repita_sempre',
      Blockly.Arduino.ORDER_NONE) || '//Coloque os blocos \n';
  // TODO: Assemble Arduino into code variable.
  var code = '// vai repetir o código adiconado para sempre);\n'+"delay(50);\n"+repita_sempre;
  return code;
};

Blockly.Arduino['delay'] = function(block) {
  var dropdown_milisegundos = Blockly.Arduino.valueToCode(block, 'milisegundos',
      Blockly.Arduino.ORDER_NONE) || '1';

  // TODO: Assemble Arduino into code variable.
  var code = ' delay (1000*' + dropdown_milisegundos + ');\n';
  return code;
};


Blockly.Arduino['repetir'] = function(block) {
  var branch= Blockly.Arduino.statementToCode(block, 'blocos_dbk');
  var repeats = block.getFieldValue('numero_repeticoes');
  // TODO: Assemble Arduino into code variable.
  branch = Blockly.Arduino.addLoopTrap(branch, block.id);
  var loopVar = Blockly.Arduino.variableDB_.getDistinctName(
      'count', Blockly.Variables.NAME_TYPE);
  var code = 'for (int ' + loopVar + ' = 0; ' +
      loopVar + ' < ' + repeats + '; ' +
      loopVar + '++) {\n' +
      branch + '}\n';
  return code;
};

Blockly.Arduino['parar_repeticao_do_programa'] = function(block) {

  var code = 'while (true);\n';

  return code;
};

//teste - discutir isso com o Paulo
function codigo_verifica_luminosidade(){

  var codigo =
      'int luminosidade = 0;\n' +
       'for (int i = 0; i<10;++i){\n' +
    'luminosidade = analogRead('+ "pino_analogico_LDR_luz" +') + luminosidade;\n' +
    '}\n' +
    'luminosidade = luminosidade/10;\n' +
    'return luminosidade;\n';
  return codigo;
  
  }
  

Blockly.Arduino['condicional_simples'] = function(block) { 
  console.log('verdade',block);
  if( !goog.isArray(block.getFieldValue("tipo_sensor")))
  {
    let aux=block.getFieldValue("tipo_sensor");
    var sensor_tipo = aux[0].value;
  }
  if( !goog.isArray(block.getFieldValue("valor")))
  {
    let aux=block.getFieldValue("valor");
    var sensor_valor = aux[0].value;
  }
  if(sensor_tipo==4)
  {
      var porta_analogica='13';
      var dropdown_luz = sensor_valor;
       //Declara a função que verifica a luminosidade
       var nome_funcao = 'verifica_luminosidade' ;
       var func = ['\n'+'int ' + Blockly.Arduino.DEF_FUNC_NAME + '()\n{\n' +
       codigo_verifica_luminosidade() + '}\n'];
       var funcName = Blockly.Arduino.addFunction(nome_funcao, func.join('\n'));
     
     
       //Setup Calibrar
       Blockly.Arduino.addSetup('io_' + "referencia_luz_alta", 'referencia_luz_alta = '+ funcName + '() + '  +  valor_margem_luz_alta + ';', false);
       Blockly.Arduino.addSetup('io_' + "referencia_luz_baixa", 'referencia_luz_baixa = '+ funcName + '() - '  +  valor_margem_luz_baixa +';', false);
     
       //Definitions
       Blockly.Arduino.definitions_['pino_analogico_LDR_luz'] ='int pino_analogico_LDR_luz = '+ porta_analogica +';'
       Blockly.Arduino.definitions_['referencia_luz_alta'] ='int referencia_luz_alta;';
       Blockly.Arduino.definitions_['referencia_luz_baixa'] ='int referencia_luz_baixa;';
      //ReservaPinos
      Blockly.Arduino.reservePin(
      block, porta_analogica, Blockly.Arduino.PinTypes.INPUT, 'Analogue Read');
      if (dropdown_luz == "3"){
        var code =  '('+ funcName + '() >= referencia_luz_alta )' ;
      }
      if (dropdown_luz == "4"){
        var code =  '((referencia_luz_baixa <'+ funcName + '())' + '&&(' + funcName + '()' + ' < referencia_luz_alta ))' ;
      }
      if (dropdown_luz == "5"){
        var code =  '('+ funcName + '() <= referencia_luz_baixa )' ;
      }
  }
  //console.log(code);
  var value_condicao =  code;
  

  var statements_codigo_condicional = Blockly.Arduino.statementToCode(block, 'codigo_condicional');

  var code = 'if (' + value_condicao + ') {\n ' + statements_codigo_condicional + '}';
  return code + '\n';

};


Blockly.Arduino['condicional_completo'] = function(block) {
  var value_condicao =  Blockly.Arduino.valueToCode(block, 'condicao',
      Blockly.Arduino.ORDER_NONE) || 'false';
  var statements_codigo_condicional = Blockly.Arduino.statementToCode(block, 'codigo_condicional');
  var statements_codigo_execcao = Blockly.Arduino.statementToCode(block, 'codigo_execcao');

  var code = 'if (' + value_condicao + ') {\n' + statements_codigo_condicional + '}';

  code = code + ' else {\n' + statements_codigo_execcao + '}';

  return code + '\n';

};


Blockly.Arduino['enquanto'] = function(block) {
  var value_condicao = Blockly.Arduino.valueToCode(block, 'condicao',
      Blockly.Arduino.ORDER_NONE) || 'false';
  var statements_codigo_enquanto = Blockly.Arduino.statementToCode(block, 'codigo_enquanto');


  var code = 'while(' + value_condicao + ') {\n' + statements_codigo_enquanto + '}';
  return code + '\n';
};
