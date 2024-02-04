import Helper from '@ember/component/helper';

export function _percent(value, locale, options, notApplicable) {
  if (Number.isFinite(value)) {
    return new Intl.NumberFormat(locale, {
      style: 'percent',
      ...options,
    }).format(value);
  }

  return notApplicable;
}

export default class extends Helper {
  compute([value, locale = 'en-US', options = {}, notApplicable = 'N/A']) {
    return _percent(value, locale, options, notApplicable);
  }
}
