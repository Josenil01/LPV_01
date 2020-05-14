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
 * @fileoverview Gerador de Código do DB4K para o carrinho.
 * @author Rubens Queiroz
 */
'use strict';

goog.provide('Blockly.Arduino.carrinho');
goog.require('Blockly.Arduino');

//--------------------------------------------
//Generators included by RLQ - DB4K
//--------------------------------------------


//*******************************************************
//Inicializa Pinos etc.
//*******************************************************

// Carrega os valores dos pinos, e de outras variáveis, do arquivo DB4K_setup.ini
//para as variáveis globais DB4k_pino_xxxxxx

//Define os pinos utilizados pelos motores do carrinho


var pino_motor_esquerdo_11 = DB4K_pino_motor_esquerdo_IN3;
var pino_motor_esquerdo_6 = DB4K_pino_motor_esquerdo_IN4;

var pino_motor_direito_10 = DB4K_pino_motor_direito_IN1;
var pino_motor_direito_5 = DB4K_pino_motor_direito_IN2;

var velocidade_motor_esquerdo = DB4K_velocidade_motor_esquerdo;
var velocidade_motor_direito = DB4K_velocidade_motor_direito;


//*************************************************************************
//Código de uso comum para a geração de código wiring dos cinco movimentos
//*************************************************************************
function reserva_pinos_carrinho(block){

  Blockly.Arduino.reservePin(
      block, pino_motor_esquerdo_11, Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');
  Blockly.Arduino.reservePin(
      block, pino_motor_esquerdo_6 , Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');
  Blockly.Arduino.reservePin(
      block, pino_motor_direito_10, Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');
  Blockly.Arduino.reservePin(
      block, pino_motor_direito_5, Blockly.Arduino.PinTypes.OUTPUT, 'Digital Write');

};

function declara_variaveis_pinos_carrinho() {

  Blockly.Arduino.definitions_['pino_motor_esquerdo_11'] ='int pino_motor_esquerdo_11= '+ pino_motor_esquerdo_11 +';'
  Blockly.Arduino.definitions_['pino_motor_esquerdo_6'] ='int pino_motor_esquerdo_6= '+ pino_motor_esquerdo_6 +';'
  Blockly.Arduino.definitions_['pino_motor_direito_10'] ='int pino_motor_direito_10= '+ pino_motor_direito_10 +';'
  Blockly.Arduino.definitions_['pino_motor_direito_5'] ='int pino_motor_direito_5= '+ pino_motor_direito_5 +';'
  Blockly.Arduino.definitions_['velocidade_motor_esquerdo'] ='int velocidade_motor_esquerdo= '+ velocidade_motor_esquerdo +';'
  Blockly.Arduino.definitions_['velocidade_motor_direito'] ='int velocidade_motor_direito= '+ velocidade_motor_direito +';'
}

function define_codigo_funcao_setup_carrinho(){

  var setupCode1 = 'pinMode(' + "pino_motor_esquerdo_11" + ', OUTPUT);';
  var setupCode2 = 'pinMode(' + "pino_motor_esquerdo_6" + ', OUTPUT);';
  var setupCode3 = 'pinMode(' + "pino_motor_direito_10" + ', OUTPUT);';
  var setupCode4 = 'pinMode(' + "pino_motor_direito_5" + ', OUTPUT);';



  //Habilita os motores (pino enable) colocando os mesmos em HIGH na seção setup
  //Uma vez que o estado desses pinos não mudará durante toda a programação do carrinho

  var setupCode7 = '//habilita e definie a velocidade dos dois motores do carrinho \n'
				  +'  analogWrite(' + "pino_enable_motor_esquerdo" + ',' + velocidade_motor_esquerdo + ');\n'
                  +'  analogWrite(' + "pino_enable_motor_direito" + ',' + velocidade_motor_direito + ');\n'
				  +'  //-----------------';
  // ----

  Blockly.Arduino.addSetup('io_' + "pino_motor_esquerdo_11", setupCode1, false);
  Blockly.Arduino.addSetup('io_' + "pino_motor_esquerdo_6", setupCode2, false);
  Blockly.Arduino.addSetup('io_' + "pino_motor_direito_10", setupCode3, false);
  Blockly.Arduino.addSetup('io_' + "pino_motor_direito_5", setupCode4, false);

};

//**************************************************************************************


//*************************************************************************
//Faz o carrinho andar para a frente
//*******************************************************

Blockly.Arduino['mover_carrinho_para_frente'] = function(block) {

  reserva_pinos_carrinho(block);
  declara_variaveis_pinos_carrinho();
  define_codigo_funcao_setup_carrinho();

  var code = 'digitalWrite(' + "pino_motor_esquerdo_11"+ ',' + 'HIGH' + ');\n'
            + 'digitalWrite(' + "pino_motor_esquerdo_6" + ',' + ' velocidade_motor_esquerdo' + ');\n'
            + 'digitalWrite(' + "pino_motor_direito_10" + ',' + 'HIGH' + ');\n'
            + 'digitalWrite(' + "pino_motor_direito_5" + ',' + ' velocidade_motor_direito' + ');\n';
  return code;
};


//*******************************************************
//Faz o carrinho andar para a trás
//*******************************************************

Blockly.Arduino['mover_carrinho_para_tras'] = function(block) {

// TODO: Assemble Arduino into code variable.

  reserva_pinos_carrinho(block);
  declara_variaveis_pinos_carrinho();
  define_codigo_funcao_setup_carrinho();

  var code = 'digitalWrite(' + "pino_motor_esquerdo_11"+ ',' + 'LOW' + ');\n'
            + 'digitalWrite(' + "pino_motor_esquerdo_6" + ',' + ' velocidade_motor_esquerdo' + ');\n'
            + 'digitalWrite(' + "pino_motor_direito_10" + ',' + 'LOW' + ');\n'
            + 'digitalWrite(' + "pino_motor_direito_5" + ',' + ' velocidade_motor_direito' + ');\n';
  return code;
};

//*******************************************************
//Faz o carrinho virar para a esquerda
//*******************************************************

Blockly.Arduino['virar_carrinho_para_esquerda'] = function(block) {

// TODO: Assemble Arduino into code variable.

  reserva_pinos_carrinho(block);
  declara_variaveis_pinos_carrinho();
  define_codigo_funcao_setup_carrinho();

  var code = '// Virar carrinho para a esquerda \n'
			+ 'digitalWrite(' + "pino_motor_esquerdo_11"+ ',' + 'LOW' + ');\n'
            + 'digitalWrite(' + "pino_motor_esquerdo_6" + ',' + ' velocidade_motor_esquerdo' + ');\n'
            + 'digitalWrite(' + "pino_motor_direito_10" + ',' + 'HIGH' + ');\n'
            + 'digitalWrite(' + "pino_motor_direito_5" + ',' + ' velocidade_motor_direito' + ');\n';

  return code;
};


//*******************************************************
//Faz o carrinho virar para a direita
//*******************************************************

Blockly.Arduino['virar_carrinho_para_direita'] = function(block) {

// TODO: Assemble Arduino into code variable.

  reserva_pinos_carrinho(block);
  declara_variaveis_pinos_carrinho();
  define_codigo_funcao_setup_carrinho();

  var code = '// Virar carrinho para a direita \n'
			+ 'digitalWrite(' + "pino_motor_esquerdo_11"+ ',' + 'HIGH' + ');\n'
            + 'digitalWrite(' + "pino_motor_esquerdo_6" + ',' + ' velocidade_motor_esquerdo' + ');\n'
            + 'digitalWrite(' + "pino_motor_direito_10" + ',' + 'LOW' + ');\n'
            + 'digitalWrite(' + "pino_motor_direito_5" + ',' + ' velocidade_motor_direito' + ');\n';
  return code;
};


//*******************************************************
//Faz o carrinho virar para a direita ou esquerda aleatóreamente
//*******************************************************

Blockly.Arduino['virar_carrinho_para_esquerda_ou_direita'] = function(block) {

// TODO: Assemble Arduino into code variable.

  reserva_pinos_carrinho(block);
  declara_variaveis_pinos_carrinho();
  define_codigo_funcao_setup_carrinho();
  Blockly.Arduino.definitions_['rand_number'] ='int rand_number;'


  //Direita
  var code_dir = '  // Virar carrinho para a direita \n'
			+ '    digitalWrite(' + "pino_motor_esquerdo_11"+ ',' + 'HIGH' + ');\n'
            + '    digitalWrite(' + "pino_motor_esquerdo_6" + ',' + 'velocidade_motor_esquerdo' + ');\n'
            + '    digitalWrite(' + "pino_motor_direito_10" + ',' + 'LOW' + ');\n'
            + '    digitalWrite(' + "pino_motor_direito_5" + ',' + 'velocidade_motor_direito' + ');\n';
  //Esquerda
  var code_esq = '  // Virar carrinho para a esquerda \n'
			+ '    digitalWrite(' + "pino_motor_esquerdo_11"+ ',' + 'LOW' + ');\n'
            + '    digitalWrite(' + "pino_motor_esquerdo_6" + ',' + 'HIGH' + ');\n'
            + '    digitalWrite(' + "pino_motor_direito_10" + ',' + 'HIGH' + ');\n'
            + '    digitalWrite(' + "pino_motor_direito_5" + ',' + 'LOW' + ');\n';

 var code =  ' rand_number = random(1,2); \n '
           + 'if (rand_number == 1) { \n'
		   + code_esq
		   + '} \n'
		   + 'else \n'
		   + '{ \n'
           + code_dir
		   + '} \n';

  return code;
};

//*******************************************************
//Faz o carrinho parar durante o tempo previsto no bloco delay
//*******************************************************

Blockly.Arduino['parar_carrinho'] = function(block) {

  reserva_pinos_carrinho(block);
  declara_variaveis_pinos_carrinho();
  define_codigo_funcao_setup_carrinho();

  var code = 'digitalWrite(' + "pino_motor_esquerdo_11"+ ',' + 'HIGH' + ');\n'
            + 'digitalWrite(' + "pino_motor_esquerdo_6" + ',' + '0' + ');\n'
            + 'digitalWrite(' + "pino_motor_direito_10" + ',' + 'HIGH' + ');\n'
            + 'digitalWrite(' + "pino_motor_direito_5" + ',' + '0' + ');\n';
  return code;
};


  //*******************************************************
//Faz o carrinho parar de vez (termina o loop do program entrando numa espera infinita)
//*******************************************************

Blockly.Arduino['finalizar_circuito'] = function(block) {

  reserva_pinos_carrinho(block);
  declara_variaveis_pinos_carrinho();
  define_codigo_funcao_setup_carrinho();

  var code = 'digitalWrite(' + "pino_motor_esquerdo_11"+ ',' + 'HIGH' + ');\n'
            + 'digitalWrite(' + "pino_motor_esquerdo_6" + ',' + '0' + ');\n'
            + 'digitalWrite(' + "pino_motor_direito_10" + ',' + 'HIGH' + ');\n'
            + 'digitalWrite(' + "pino_motor_direito_5" + ',' + '0' + ');\n'
			+ 'while (true);\n';
  return code;
};
