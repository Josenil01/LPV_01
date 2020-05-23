/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 *
 * @fileoverview XML toolbox embedded into a JavaScript text string.
 */
'use strict';

/** Create a namespace for the application. */
var Ardublockly = Ardublockly || {};
//*************************************************************
//Original Ardublockly blocks where replaced by DB4K blocks ( Modified by RLQ DB4K)

Ardublockly.TOOLBOX_XML =
'<xml>'+
'<sep></sep>' +
'<category name="Controle">' +
'   <block type="sempre"></block>' +
'   <block type="delay"></block>' +
'   <block type="condicional_simples"></block>' +
'</category>' +
'<category name="LED">' +
'   <block type="acender_led"></block>' +
'   <block type="apagar_led"></block>' +
//'   <block type="piscar_led"></block>' +
//'<block type="led_rgb"></block>' +
'</category>' +
'<category name="Matematica">' +
// '   <block type="soma"></block>' +
 '   <block type="subtracao"></block>' +
// '   <block type="divisao"></block>' +
// '   <block type="multiplicao"></block>' +
// '   <block type="n0"></block>' +
// '   <block type="n1"></block>' +
// '   <block type="n2"></block>' +
// '   <block type="n3"></block>' +
// '   <block type="n4"></block>' +
// '   <block type="n5"></block>' +
// '   <block type="n6"></block>' +
// '   <block type="n7"></block>' +
// '   <block type="n8"></block>' +
// '   <block type="n9"></block>' +//*/
'</category>' +
'<category name="Motores">' +
 '   <block type="mover_servomotor"></block>' +
// '   <block type="girar_motor"></block>' +
// '   <block type="parar_motor"></block>' +
'</category>' +
/*'<category name="Display">' +
'<block type="escrever_lcd"></block>' +
'<block type="limpar_lcd"></block>' +
'<block type="escrever_display_7s"></block>' +
'<block type="limpar_display_7s"></block>' +
'</category>' +
'<sep></sep>' +*/
'<category name="Som">' +
// '   <block type="tocar_nota_buzzer"></block>' +
// '   <block type="parar_som_buzzer"></block>' +
// '   <block type="tocar_sirene_buzzer"></block>' +
'</category>' +
'<category name="Sensores">' +
// '   <block type="sensor_temperatura"></block>' +
 '   <block type="sensor_distancia"></block>' +
// '   <block type="sensor_luz"></block>' +
// '   <block type="sensor_linha"></block>' +
// '   <block type="potenciometro"></block>'+
// '   <block type="sensor_toque"></block>' +
// '   <block type="sensor_magnetico"></block>' +
//'<block type="sensor_cor"></block>' +
'</category>' +
'<category name="Carrinho">' +
// '   <block type="mover_carrinho_para_frente"></block>' +
// '   <block type="mover_carrinho_para_tras"></block>' +
// '   <block type="virar_carrinho_para_direita"></block>' +
// '   <block type="virar_carrinho_para_esquerda"></block>' +
// '   <block type="virar_carrinho_para_esquerda_ou_direita"></block>' +
// '   <block type="parar_carrinho"></block>' +
// '   <block type="finalizar_circuito"></block>' +
'</category>' +
'<category name="Braço">' +
// '   <block type="inicializar_braco"></block>' +
// '   <block type="girar_braco_robotico_direita"></block>' +
// '   <block type="girar_braco_robotico_esquerda"></block>' +
// '   <block type="centralizar_braco_robotico"></block>' +
// '   <block type="pegar_objeto"></block>' +
// '   <block type="soltar_objeto"></block>' +
// '   <block type="finalizar_braco"></block>' +
'</category>' +
'</xml>';
//-----------------------------------------------------------------------------
