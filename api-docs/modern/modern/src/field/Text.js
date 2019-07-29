/**
 * @class Ext.field.Text
 * @extend Ext.field.Field
 * @xtype textfield
 *
 * The text field is the basis for most of the input fields. It provides a baseline of shared
 * functionality such as input validation, standard events, state management and look
 * and feel. Typically we create text fields inside a form, like this:
 *
 *```HTML
 *@example({tab: 1})
 *<ext-container layout="center">
 *    <ext-formpanel shadow="true">
 *        <ext-fieldset title="Separate Label and Placeholder" margin="0 0 20 0">
 *            <ext-textfield placeHolder="Enter Name..." label="Name" required="true"></ext-textfield>
 *        </ext-fieldset>
 *        <ext-fieldset title="Label as Placeholder" margin="0 0 20 0">
 *            <ext-textfield labelAlign="placeholder" label="Name" required="true"></ext-textfield>
 *        </ext-fieldset>
 *        <ext-fieldset title="With Error Message">
 *            <ext-textfield
 *                labelAlign="placeholder"
 *                label="Label"
 *                value="invalid value"
 *                errorTarget="under"
 *                errorMessage="The value you entered is invalid."
 *            >
 *            </ext-textfield>
 *        </ext-fieldset>
 *    </ext-formpanel>
 *</ext-container>
 *```
 *```javascript
 *@example({tab: 2, packages: ['ext-web-components']})
 *import '@sencha/ext-web-components/dist/ext-container.component';
 *import '@sencha/ext-web-components/dist/ext-formpanel.component';
 *import '@sencha/ext-web-components/dist/ext-textfield.component';
 *import '@sencha/ext-web-components/dist/ext-fieldset.component';
 *
 *export default class TextFieldComponent {}
 *```
 */

/**
 * @event focus
 * Fires when this field receives input focus
 * @param {Ext.field.Text} this This field
 * @param {Ext.event.Event} e
 */

/**
 * @event keyup
 * @preventable
 * Fires when a key is released on the input element
 * @param {Ext.field.Text} this This field
 * @param {Ext.event.Event} e
 */

/**
 * @event blur
 * Fires when this field loses input focus
 * @param {Ext.field.Text} this This field
 * @param {Ext.event.Event} e
 */

/**
 * @event paste
 * Fires when this field is pasted.
 * @param {Ext.field.Text} this This field
 * @param {Ext.event.Event} e
 */

/**
 * @event mousedown
 * Fires when this field receives a mousedown
 * @param {Ext.field.Text} this This field
 * @param {Ext.event.Event} e
 */

/**
 * @event keyup
 * @preventable
 * Fires when a key is released on the input element
 * @param {Ext.field.Text} this This field
 * @param {Ext.event.Event} e
 */

/**
 * @event clearicontap
 * @preventable
 * Fires when the clear icon is tapped
 * @param {Ext.field.Text} this This field
 * @param {Ext.field.Input} input The field's input component.
 * @param {Ext.event.Event} e
 */

/**
 * @event change
 * Fires when the value has changed.
 * @param {Ext.field.Text} this This field
 * @param {String} newValue The new value
 * @param {String} oldValue The original value
 */

/**
 * @event action
 * @preventable
 * Fires whenever the return key or go is pressed. FormPanel listeners
 * for this event, and submits itself whenever it fires. Also note
 * that this event bubbles up to parent containers.
 * @param {Ext.field.Text} this This field
 * @param {Mixed} e The key event object
 */

/**
 * @cfg {Boolean} [clearIcon=true]
 * `true` to use a clear icon in this field.
 * @accessor
 */

/**
 * @cfg {RegExp} stripCharsRe
 * A JavaScript RegExp object used to strip unwanted content from the value
 * during input. If `stripCharsRe` is specified,
 * every *character sequence* matching `stripCharsRe` will be removed.
 */

/**
 * @cfg labelAlign
 * When value is `'placeholder'`, the label text will be rendered as placeholder
 * text inside the empty input and will animated to "top" alignment when the input
 * is focused or contains text.
 * @inheritdoc
 * @accessor
 */

/**
 * @cfg {String} [placeholder=null]
 * A string value displayed in the input when the control is empty.
 *
 * @accessor
 */

/**
 * @cfg {Number} [maxLength=null]
 * The maximum number of permitted input characters.
 * @accessor
 */

/**
 * @cfg {Boolean} [autoComplete=null]
 * True to set the field's DOM element autocomplete attribute to "on", false to set to "off".
 *
 * @accessor
 */

/**
 * @cfg {Boolean} [autoCapitalize=null]
 * True to set the field's DOM element auto=capitalize attribute to "on", false to set to "off".
 * @accessor
 */

/**
 * @cfg {Boolean} [autoCorrect=null]
 * True to set the field DOM element auto-correct attribute to "on", false to set to "off".
 * @accessor
 */

/**
 * @cfg {Boolean} [readOnly=null]
 * True to set the field DOM element readonly attribute to true.
 * @accessor
 */

/**
 * @cfg {String} [pattern=null]
 * The value for the HTML5 `pattern` attribute.
 * You can use this to change which keyboard layout will be used.
 *
 * Even though it extends {@link Ext.field.Text}, it will display the number keyboard.
 *
 * @accessor
 */

/**
 * @cfg {Object} triggers
 * {@link Ext.field.trigger.Trigger Triggers} to use in this field.  The keys in
 * this object are unique identifiers for the triggers. The values in this object
 * are {@link Ext.field.trigger.Trigger Trigger} configuration objects.
 *
 * The weight value may be a negative value in order to position custom triggers
 * ahead of default triggers like that of a DatePicker field.
 *
 * @accessor
 */

/**
 * @cfg {Boolean} [editable=true]
 * Configure as `false` to prevent the user from typing text directly into the field;
 * the field can only have its value set programmatically or via an action invoked by a trigger.
 *
 * Contrast with {@link #cfg!readOnly} which disables all mutation via the UI.
 *
 * @accessor
 */

/**
 * @cfg {'left'/'center'/'right'} [textAlign=null]
 * The text alignment of this field.
 *
 * @accessor
 */

/**
 * @property doKeyDown
 * Called when a key has been pressed in the `<input>`
 * @protected
 */

/**
 * @property defaultBindProperty
 * @inheritdoc
 */

/**
 * @property classCls
 * @inheritdoc
 */

/**
 * @method doKeyUp
 * Called when a key has been pressed in the `<input>`
 * @private
 */

/**
 * @method processRawValue
 * Performs any necessary manipulation of a raw String value to prepare
 * it for conversion and/or
 * {@link #validate validation}. For text fields this applies the configured
 * {@link #stripCharsRe} to the raw value.
 * @param {String} value The unprocessed string value
 * @return {String} The processed string value
 * @since 7.0
 */
