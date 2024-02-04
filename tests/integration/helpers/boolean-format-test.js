import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | boolean-format', function (hooks) {
  setupRenderingTest(hooks);

  test('render default labels', async function (assert) {
    await render(hbs`{{boolean-format this.value}}`);

    this.set('value', true);
    assert.dom(this.element).hasText('Yes');

    this.set('value', false);
    assert.dom(this.element).hasText('No');
  });

  test('render custom labels', async function (assert) {
    await render(hbs`{{boolean-format this.value (array 'On' 'Off')}}`);

    this.set('value', true);
    assert.dom(this.element).hasText('On');

    this.set('value', false);
    assert.dom(this.element).hasText('Off');
  });

  test('check non-boolean values', async function (assert) {
    await render(hbs`{{boolean-format this.value}}`);

    this.set('value', 1);
    assert.dom(this.element).hasText('Yes', '1');

    this.set('value', 0);
    assert.dom(this.element).hasText('No', '0');

    this.set('value', 't');
    assert.dom(this.element).hasText('Yes', 'string');

    this.set('value', '');
    assert.dom(this.element).hasText('No', 'empty string');

    this.set('value', NaN);
    assert.dom(this.element).hasText('No', 'NaN');

    this.set('value', null);
    assert.dom(this.element).hasText('No', 'null');

    this.set('value', undefined);
    assert.dom(this.element).hasText('No', 'undefined');
  });
});
