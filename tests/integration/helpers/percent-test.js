import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | percent', function (hooks) {
  setupRenderingTest(hooks);

  test('various percent values', async function (assert) {
    await render(hbs`{{percent this.value}}`);

    this.set('value', 0.125);
    assert.dom(this.element).hasText('13%');

    this.set('value', -0.125);
    assert.dom(this.element).hasText('-13%');

    this.set('value', 0);
    assert.dom(this.element).hasText('0%');

    this.set('value', 3600);
    assert.dom(this.element).hasText('360,000%');

    await render(
      hbs`{{percent this.value 'en-US' (hash minimumFractionDigits=2 maximumFractionDigits=2)}}`
    );

    this.set('value', 0.125);
    assert.dom(this.element).hasText('12.50%');

    this.set('value', -0.125);
    assert.dom(this.element).hasText('-12.50%');

    this.set('value', 0);
    assert.dom(this.element).hasText('0.00%');

    this.set('value', 3600);
    assert.dom(this.element).hasText('360,000.00%');
  });

  test('non-number values', async function (assert) {
    await render(hbs`{{percent this.value}}`);

    this.set('value', '0.125');
    assert.dom(this.element).hasText('N/A');

    this.set('value', '');
    assert.dom(this.element).hasText('N/A');

    this.set('value', false);
    assert.dom(this.element).hasText('N/A');

    this.set('value', null);
    assert.dom(this.element).hasText('N/A');

    this.set('value', NaN);
    assert.dom(this.element).hasText('N/A');

    this.set('value', undefined);
    assert.dom(this.element).hasText('N/A');

    await render(hbs`{{percent this.value 'en-US' (hash) 'Not set'}}`);
    assert.dom(this.element).hasText('Not set');
  });

  test('various options', async function (assert) {
    this.setProperties({
      locale: 'en-US',
      options: {},
    });

    await render(hbs`{{percent this.value this.locale this.options}}`);

    this.set('value', 3600);
    assert.dom(this.element).hasText('360,000%', 'default options');

    this.set('locale', 'de-DE');
    assert
      .dom(this.element)
      .hasText(
        `360.000${String.fromCharCode(160)}%`,
        'de-DE locale, default options'
      );

    this.set('options', {
      minimumFractionDigits: 4,
      maximumFractionDigits: 4,
    });
    assert
      .dom(this.element)
      .hasText(
        `360.000,0000${String.fromCharCode(160)}%`,
        'de-DE locale, custom options'
      );
  });
});
