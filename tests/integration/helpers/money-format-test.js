import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | money-format', function (hooks) {
  setupRenderingTest(hooks);

  test('various money values', async function (assert) {
    this.set('value', 3.5);

    await render(
      hbs`{{money-format this.value "en-US" (hash currency="USD")}}`
    );
    assert.dom(this.element).hasText('$3.50');

    await render(
      hbs`{{money-format this.value "en-US" (hash currency="EUR")}}`
    );
    assert.dom(this.element).hasText('€3.50');

    await render(
      hbs`{{money-format this.value "de-DE" (hash currency="EUR")}}`
    );
    assert.dom(this.element).hasText(`3,50${String.fromCharCode(160)}€`);

    this.set('value', 3500);

    await render(
      hbs`{{money-format this.value "en-US" (hash currency="USD")}}`
    );
    assert.dom(this.element).hasText('$3,500.00');

    await render(
      hbs`{{money-format this.value "en-US" (hash currency="EUR")}}`
    );
    assert.dom(this.element).hasText('€3,500.00');

    await render(
      hbs`{{money-format this.value "de-DE" (hash currency="EUR")}}`
    );
    assert.dom(this.element).hasText(`3.500,00${String.fromCharCode(160)}€`);

    this.set('value', 3);
    await render(
      hbs`{{money-format this.value "en-US" (hash currency="USD")}}`
    );
    assert.dom(this.element).hasText('$3.00');

    this.set('value', 0);
    await render(
      hbs`{{money-format this.value "en-US" (hash currency="USD")}}`
    );
    assert.dom(this.element).hasText('$0.00');

    this.set('value', null);
    await render(
      hbs`{{money-format this.value "en-US" (hash currency="USD")}}`
    );
    assert.dom(this.element).hasText('N/A');

    this.set('value', '3.5');
    await render(
      hbs`{{money-format this.value "en-US" (hash currency="USD")}}`
    );
    assert.dom(this.element).hasText('N/A');
  });
});
