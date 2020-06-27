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
 * @fileoverview Dropdown input field.  Used for editable titles and variables.
 * In the interests of a consistent UI, the toolbox shares some functions and
 * properties with the context menu.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.FieldDropdown');

goog.require('Blockly.Field');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.style');
goog.require('goog.ui.Menu');
goog.require('goog.ui.MenuItem');
goog.require('goog.userAgent');


/**
 * Class for an editable dropdown field.
 * @param {(!Array.<!Array.<string>>|!Function)} menuGenerator An array of
 *     options for a dropdown list, or a function which generates these options.
 * @param {Function=} opt_validator A function that is executed when a new
 *     option is selected, with the newly selected value as its sole argument.
 *     If it returns a value, that value (which must be one of the options) will
 *     become selected in place of the newly selected option, unless the return
 *     value is null, in which case the change is aborted.
 * @extends {Blockly.Field}
 * @constructor
 */
Blockly.FieldDropdown = function (menuGenerator, opt_validator, imgNew = '') {
  var options_x = menuGenerator;
  console.log(options_x);
  let options = [];
  for (var i = 0; i < options_x.length; i++) {
    options.push([]);
    if (!options_x[i][0].alt) {
      console.log('aqui');
      options[i][0] = options_x[i][0];
      options[i][1] = (options_x[i][1]);
    }
    else {

      options[i][0] = (options_x[i][0].alt);
      options[i][1] = (options_x[i][1]);
    }
  }
  console.log(options);
  console.log(options_x);
  this.menuGenerator_ = options;
  this.trimOptions_();
  var firstTuple = this.getOptions_()[0];
  this.imgNew_ = imgNew;

  // Call parent's constructor.
  Blockly.FieldDropdown.superClass_.constructor.call(this, firstTuple[1],
    opt_validator);
};
goog.inherits(Blockly.FieldDropdown, Blockly.Field);

//adiconando as variaveis de imagens 

/**
 * The y offset from the top of the field to the top of the image, if an image
 * is selected.
 * @type {number}
 * @const
 * @private
 */
Blockly.FieldDropdown.IMAGE_Y_OFFSET = 5;

/**
 * The total vertical padding above and below an image.
 * @type {number}
 * @const
 * @private
 */
Blockly.FieldDropdown.IMAGE_Y_PADDING =
  Blockly.FieldDropdown.IMAGE_Y_OFFSET * 2;







/**
 * Horizontal distance that a checkmark ovehangs the dropdown.
 */
Blockly.FieldDropdown.CHECKMARK_OVERHANG = 25;





/**
 * Android can't (in 2014) display "▾", so use "▼" instead.
 */
Blockly.FieldDropdown.ARROW_CHAR = goog.userAgent.ANDROID ? '\u25BC' : '\u25BE';

/**
 * Mouse cursor style when over the hotspot that initiates the editor.
 */
Blockly.FieldDropdown.prototype.CURSOR = 'default';

/**
 * Install this dropdown on a block.
 */
Blockly.FieldDropdown.prototype.init = function () {
  if (this.fieldGroup_) {
    // Dropdown has already been initialized once.
    return;
  }
  // Add dropdown arrow: "option ▾" (LTR) or "▾ אופציה" (RTL)
  this.arrow_ = Blockly.createSvgElement('tspan', {}, null);
  this.arrow_.appendChild(document.createTextNode(
    this.sourceBlock_.RTL ? Blockly.FieldDropdown.ARROW_CHAR + ' ' :
      ' ' + Blockly.FieldDropdown.ARROW_CHAR));

  Blockly.FieldDropdown.superClass_.init.call(this);
  // Force a reset of the text to add the arrow.
  var text = this.text_;
  this.text_ = null;
  this.setText(text);
};
/**
 * Dropdown image properties.
 * @typedef {{
  *            src:string,
  *            alt:string,
  *            width:number,
  *            height:number
  *          }}
  */

Blockly.FieldDropdown.ImageProperties;
//https://github.com/google/blockly/blob/master/core/field_dropdown.js
/**
 * Construct a FieldDropdown from a JSON arg object.
 * @param {!Object} options A JSON object with options (options).
 * @return {!Blockly.FieldDropdown} The new field instance.
 * @package
 * @nocollapse
 */
Blockly.FieldDropdown.fromJson = function (options) {
  return new Blockly.FieldDropdown(options['options'], undefined, options);
};

/**
 * Create a dropdown menu under the text.
 * @private
 */
Blockly.FieldDropdown.prototype.showEditor_ = function () {
  Blockly.WidgetDiv.show(this, this.sourceBlock_.RTL, null);
  var thisField = this;

  function callback(e) {
    var menuItem = e.target;
    if (menuItem) {
      var value = menuItem.getValue();
      console.log(value);
      if (thisField.sourceBlock_ && thisField.validator_) {
        // Call any validation function, and allow it to override.
        var override = value;
        if (override !== undefined) {
          value = override;
        }
      }
      if (value !== null) {
        thisField.setValue(value);
      }
    }
    Blockly.WidgetDiv.hideIfOwner(thisField);
  }


  var menu = new goog.ui.Menu();
  menu.setRightToLeft(this.sourceBlock_.RTL);
  var options = this.getOptions_();
  console.log("h ====================================");

  console.log(this.getOptions_());

  for (var x = 0; x < options.length; x++) {

    var text = options[x][0];  // Human-readable text.
    var value = options[x][1]; // Language-neutral value
    var menuItem = new goog.ui.MenuItem(text);

    this.setValue(this.src_);

    console.log(menuItem);
    menuItem.setRightToLeft(this.sourceBlock_.RTL);
    menuItem.setValue(value);
    menuItem.setCheckable(true);
    var imagem = $("<img src='data:image/jpeg;base64,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'/>")
    menuItem.content_ = imagem;
    menu.addChild(menuItem, true);
    menuItem.setChecked(value == this.value_);
  }
  // Listen for mouse/keyboard events.
  goog.events.listen(menu, goog.ui.Component.EventType.ACTION, callback);
  // Listen for touch events (why doesn't Closure handle this already?).
  function callbackTouchStart(e) {
    var control = this.getOwnerControl(/** @type {Node} */(e.target));
    // Highlight the menu item.
    control.handleMouseDown(e);
  }
  function callbackTouchEnd(e) {
    var control = this.getOwnerControl(/** @type {Node} */(e.target));
    // Activate the menu item.
    control.performActionInternal(e);
  }
  menu.getHandler().listen(menu.getElement(), goog.events.EventType.TOUCHSTART,
    callbackTouchStart);
  menu.getHandler().listen(menu.getElement(), goog.events.EventType.TOUCHEND,
    callbackTouchEnd);

  // Record windowSize and scrollOffset before adding menu.
  var windowSize = goog.dom.getViewportSize();
  var scrollOffset = goog.style.getViewportPageOffset(document);
  var xy = this.getAbsoluteXY_();
  var borderBBox = this.getScaledBBox_();
  var div = Blockly.WidgetDiv.DIV;
  menu.render(div);
  var menuDom = menu.getElement();
  Blockly.addClass_(menuDom, 'blocklyDropdownMenu');
  // Record menuSize after adding menu.
  var menuSize = goog.style.getSize(menuDom);
  // Recalculate height for the total content, not only box height.
  menuSize.height = menuDom.scrollHeight;

  // Position the menu.
  // Flip menu vertically if off the bottom.
  if (xy.y + menuSize.height + borderBBox.height >=
    windowSize.height + scrollOffset.y) {
    xy.y -= menuSize.height + 2;
  } else {
    xy.y += borderBBox.height;
  }
  if (this.sourceBlock_.RTL) {
    xy.x += borderBBox.width;
    xy.x += Blockly.FieldDropdown.CHECKMARK_OVERHANG;
    // Don't go offscreen left.
    if (xy.x < scrollOffset.x + menuSize.width) {
      xy.x = scrollOffset.x + menuSize.width;
    }
  } else {
    xy.x -= Blockly.FieldDropdown.CHECKMARK_OVERHANG;
    // Don't go offscreen right.
    if (xy.x > windowSize.width + scrollOffset.x - menuSize.width) {
      xy.x = windowSize.width + scrollOffset.x - menuSize.width;
    }
  }
  Blockly.WidgetDiv.position(xy.x, xy.y, windowSize, scrollOffset,
    this.sourceBlock_.RTL);
  menu.setAllowAutoFocus(true);
  menuDom.focus();
};

/**
 * Factor out common words in statically defined options.
 * Create prefix and/or suffix labels.
 * @private
 */
Blockly.FieldDropdown.prototype.trimOptions_ = function () {
  this.prefixField = null;
  this.suffixField = null;
  var options = this.menuGenerator_;
  if (!goog.isArray(options) || options.length < 2) {
    return;
  }
  var strings = options.map(function (t) { return t[0]; });
  var shortest = Blockly.shortestStringLength(strings);
  var prefixLength = Blockly.commonWordPrefix(strings, shortest);
  var suffixLength = Blockly.commonWordSuffix(strings, shortest);
  if (!prefixLength && !suffixLength) {
    return;
  }
  if (shortest <= prefixLength + suffixLength) {
    // One or more strings will entirely vanish if we proceed.  Abort.
    return;
  }
  if (prefixLength) {
    this.prefixField = strings[0].substring(0, prefixLength - 1);
  }
  if (suffixLength) {
    this.suffixField = strings[0].substr(1 - suffixLength);
  }
  // Remove the prefix and suffix from the options.
  var newOptions = [];
  for (var x = 0; x < options.length; x++) {
    var text = options[x][0];
    var value = options[x][1];
    text = text.substring(prefixLength, text.length - suffixLength);
    newOptions[x] = [text, value];
  }
  this.menuGenerator_ = newOptions;
};

/**
 * Return a list of the options for this dropdown.
 * @return {!Array.<!Array.<string>>} Array of option tuples:
 *     (human-readable text, language-neutral name).
 * @private
 */
Blockly.FieldDropdown.prototype.getOptions_ = function () {
  if (goog.isFunction(this.menuGenerator_)) {
    return this.menuGenerator_.call(this);
  }
  return /** @type {!Array.<!Array.<string>>} */ (this.menuGenerator_);
};

/**
 * Get the language-neutral value from this dropdown menu.
 * @return {string} Current text.
 */
Blockly.FieldDropdown.prototype.getValue = function () {
  return this.value_;
};

/**
 * Set the language-neutral value for this dropdown menu.
 * @param {string} newValue New value to set.
 */
Blockly.FieldDropdown.prototype.setValue = function (newValue) {
  if (newValue === null || newValue === this.value_) {
    return;  // No change if null.
  }
  if (this.sourceBlock_ && Blockly.Events.isEnabled()) {
    Blockly.Events.fire(new Blockly.Events.Change(
      this.sourceBlock_, 'field', this.name, this.value_, newValue));
  }
  this.value_ = newValue;
  // Look up and display the human-readable text.
  var options = this.getOptions_();
  for (var x = 0; x < options.length; x++) {
    // Options are tuples of human-readable text and language-neutral values.
    if (options[x][1] == newValue) {
      this.setText(options[x][0]);
      return;
    }
  }
  // Value not found.  Add it, maybe it will become valid once set
  // (like variable names).
  this.setText(newValue);
};

/**
 * Set the text in this field.  Trigger a rerender of the source block.
 * @param {?string} text New text.
 */
Blockly.FieldDropdown.prototype.setText = function (text) {
  if (this.sourceBlock_ && this.arrow_) {
    // Update arrow's colour.
    this.arrow_.style.fill = this.sourceBlock_.getColour();
  }
  if (text === null || text === this.text_) {
    // No change if null.
    return;
  }
  this.text_ = text;
  this.updateTextNode_();

  if (this.textElement_) {
    // Insert dropdown arrow.
    if (this.sourceBlock_.RTL) {
      this.textElement_.insertBefore(this.arrow_, this.textElement_.firstChild);
    } else {
      this.textElement_.appendChild(this.arrow_);
    }
  }

  if (this.sourceBlock_ && this.sourceBlock_.rendered) {
    this.sourceBlock_.render();
    this.sourceBlock_.bumpNeighbours_();
  }
};

/**
 * Close the dropdown menu if this input is being deleted.
 */
Blockly.FieldDropdown.prototype.dispose = function () {
  Blockly.WidgetDiv.hideIfOwner(this);
  Blockly.FieldDropdown.superClass_.dispose.call(this);
};
