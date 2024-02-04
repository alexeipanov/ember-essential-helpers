import Helper from '@ember/component/helper';

export function booleanFormat(value, labels) {
  let [t, f] = labels;
  return value ? t : f;
}

export default class extends Helper {
  compute([value, labels = ['Yes', 'No']]) {
    return booleanFormat(value, labels);
  }
}
