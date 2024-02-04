import Helper from '@ember/component/helper';

const labels = ['b', 'Kb', 'Mb', 'Gb', 'Tb'];

export function _filesize(value, notApplicable) {
  if (Number.isFinite(value) && value >= 0) {
    return labels.reduce((size, label, power) => {
      let pow = Math.pow(1024, power);
      return value >= pow - 1 ? `${Math.round(value / pow)} ${label}` : size;
    }, '');
  }

  return notApplicable;
}

export default class extends Helper {
  compute([value, notApplicable = 'N/A']) {
    return _filesize(value, notApplicable);
  }
}
