// import pt_br from '../blockly/msg/js/pt-br.js';
// import en from '../msg/en.js';
// import jQuery from '../js_libs/jquery-2.1.3.min.js';
// import materialize from '../materialize/materialize.js';
// import fs from '../js_libs/FileSaver.min.js';
// import diff from '../js_libs/diff.js';
// import prettify from "../prettify/prettify.js";

import Ardublockly from '../ardublockly';
import ArdublocklyBlockly from '../ardublockly_blockly';
import ArdublocklyDesign from '../ardublockly_design';
import ArdublocklyDesktop from '../ardublockly_desktop';
import lang from '../ardublockly_lang';
import ArdublocklyToolbox from '../ardublockly_toolbox';
import ArdublocklyServer from '../ardublocklyserver_ajax';

// import bootstrap from "../../blockly/blockly_uncompressed.js";
// import blockly_uncompressed from "../../blockly/blockly_uncompressed.js";
import logic from "../../blockly/blocks/logic.js";
import loops from "../../blockly/blocks/loops.js";
import math from "../../blockly/blocks/math.js";
import text from "../../blockly/blocks/text.js";
import lists from "../../blockly/blocks/lists.js";
import colour from "../../blockly/blocks/colour.js";
import variables from "../../blockly/blocks/variables.js";
import procedures from "../../blockly/blocks/procedures.js";
import io from "../../blockly/blocks/arduino/io.js";
import map from "../../blockly/blocks/arduino/map.js";
import arduino_procedures from "../../blockly/blocks/arduino/procedures.js";
import serial from "../../blockly/blocks/arduino/serial.js";
import servo from "../../blockly/blocks/arduino/servo.js";
import spi from "../../blockly/blocks/arduino/spi.js";
import stepper from "../../blockly/blocks/arduino/stepper.js";
import time from "../../blockly/blocks/arduino/time.js";
import tone from "../../blockly/blocks/arduino/tone.js";
import arduino_variables from "../../blockly/blocks/arduino/variables.js";

import atuadores from "../../blockly/blocks/db4k/atuadores.js";
import sensores from "../../blockly/blocks/db4k/sensores.js";
import controles from "../../blockly/blocks/db4k/controles.js";
import carrinho from "../../blockly/blocks/db4k/carrinho.js";
import braco from "../../blockly/blocks/db4k/braco.js";
import numero from "../../blockly/blocks/db4k/numero.js";


import arduino from "../../blockly/generators/arduino.js";
import boards from "../../blockly/generators/arduino/boards.js";
import arduino_io from "../../blockly/generators/arduino/io.js";
import arduino_lists from "../../blockly/generators/arduino/lists.js";
import arduino_logic from "../../blockly/generators/arduino/logic.js";
import arduino_loops from "../../blockly/generators/arduino/loops.js";
import arduino_map from "../../blockly/generators/arduino/map.js";
import arduino_math from "../../blockly/generators/arduino/math.js";
import arduino_generators_procedures from "../../blockly/generators/arduino/procedures.js";
import arduino_serial from "../../blockly/generators/arduino/serial.js";
import arduino_servo from "../../blockly/generators/arduino/servo.js";
import arduino_spi from "../../blockly/generators/arduino/spi.js";
import arduino_stepper from "../../blockly/generators/arduino/stepper.js";
import arduino_text from "../../blockly/generators/arduino/text.js";
import arduino_time from "../../blockly/generators/arduino/time.js";
import arduino_tone from "../../blockly/generators/arduino/tone.js";
import arduino_generators_variables from "../../blockly/generators/arduino/variables.js";

import arduino_atuadores from "../../blockly/generators/arduino/atuadores.js";
import arduino_sensores from "../../blockly/generators/arduino/sensores.js";
import arduino_controles from "../../blockly/generators/arduino/controles.js";
import arduino_carrinho from "../../blockly/generators/arduino/carrinho.js";
import arduino_braco from "../../blockly/generators/arduino/braco.js";
import arduino_numero from "../../blockly/generators/arduino/numero.js";

import includeHTML from "../js_libs/include";

Ardublockly.init();