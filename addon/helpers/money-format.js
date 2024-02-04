import Helper from '@ember/component/helper';

export function moneyFormat(value, locale, options, notApplicable) {
  if (Number.isFinite(value)) {
    return value.toLocaleString(locale, {
      style: 'currency',
      ...options,
    });
  }

  return notApplicable;
}

export default class extends Helper {
  compute([
    value,
    locale = 'en-US',
    options = { currency: 'USD' },
    notApplicable = 'N/A',
  ]) {
    return moneyFormat(value, locale, options, notApplicable);
  }
}
