import { module, test } from 'qunit';
import { setupRenderingTest } from 'dummy/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | filesize', function (hooks) {
  setupRenderingTest(hooks);

  test('various file sizes', async function (assert) {
    await render(hbs`{{filesize this.size}}`);

    this.set('size', 0);
    assert.dom(this.element).hasText('0 b');

    this.set('size', 12);
    assert.dom(this.element).hasText('12 b');

    this.set('size', 12.4);
    assert.dom(this.element).hasText('12 b');

    this.set('size', 12.5);
    assert.dom(this.element).hasText('13 b');

    this.set('size', 1024);
    assert.dom(this.element).hasText('1 Kb');

    this.set('size', 1800);
    assert.dom(this.element).hasText('2 Kb');

    this.set('size', 26000);
    assert.dom(this.element).hasText('25 Kb');

    this.set('size', 512000);
    assert.dom(this.element).hasText('500 Kb');

    this.set('size', 8388608);
    assert.dom(this.element).hasText('8 Mb');

    this.set('size', 26843545600);
    assert.dom(this.element).hasText('25 Gb');

    this.set('size', 1099511627776);
    assert.dom(this.element).hasText('1 Tb');
  });

  test('incorrect file size', async function (assert) {
    await render(hbs`{{filesize this.size}}`);

    this.set('size', undefined);
    assert.dom(this.element).hasText('N/A');

    this.set('size', null);
    assert.dom(this.element).hasText('N/A');

    this.set('size', NaN);
    assert.dom(this.element).hasText('N/A');

    this.set('size', -1);
    assert.dom(this.element).hasText('N/A');

    this.set('size', '0016');
    assert.dom(this.element).hasText('N/A');

    this.set('label', 'NaN');

    await render(hbs`{{filesize this.size this.label}}`);

    this.set('size', undefined);
    assert.dom(this.element).hasText('NaN');

    this.set('size', null);
    assert.dom(this.element).hasText('NaN');

    this.set('size', NaN);
    assert.dom(this.element).hasText('NaN');

    this.set('size', -1);
    assert.dom(this.element).hasText('NaN');

    this.set('size', '0016');
    assert.dom(this.element).hasText('NaN');
  });
});
