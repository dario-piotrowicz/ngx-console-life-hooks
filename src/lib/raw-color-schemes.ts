interface ColorsForSection {
  color?: string;
  bgColor?: string;
}

export interface ColorsForScheme {
  component: ColorsForSection;
  arrow: ColorsForSection;
  hook: ColorsForSection;
  extraInfo: ColorsForSection;
}

export const rawColorSchemes: { [key: string]: ColorsForScheme } = {
  none: {
    component: {},
    arrow: {},
    hook: {},
    extraInfo: {},
  },
  default: {
    component: { color: '#0e78e3' },
    arrow: { color: 'inherit' },
    hook: { color: '#1fd91c' },
    extraInfo: { color: '#777' },
  },
  terminal: {
    component: { color: '#33FF33', bgColor: '#000' },
    arrow: { color: '#33FF33', bgColor: '#000' },
    hook: { color: '#33FF33', bgColor: '#000' },
    extraInfo: { color: '#1c771c', bgColor: '#000' },
  },
  angular: {
    component: { color: '#FFF', bgColor: '#DD0031' },
    arrow: { color: '#53A7EB' },
    hook: { color: '#FFF', bgColor: '#C3002F' },
    extraInfo: { color: '#0A559B' },
  },
  react: {
    component: { color: '#5FD9FB', bgColor: '#1A1C22' },
    arrow: { color: '#fff', bgColor: '#1A1C22' },
    hook: { color: '#5FD9FB', bgColor: '#1A1C22' },
    extraInfo: { color: '#047291', bgColor: '#1A1C22' },
  },
  vue: {
    component: { color: '#FFF', bgColor: '#338F70' },
    arrow: { color: '#338F70', bgColor: '#35495E' },
    hook: { color: '#FFF', bgColor: '#338F70' },
    extraInfo: { color: '#35495E' },
  },
  neon: {
    component: { color: '#ccff00', bgColor: '#000' },
    arrow: { color: '#00fdff', bgColor: '#000' },
    hook: { color: '#21fc0d', bgColor: '#000' },
    extraInfo: { color: '#bc13fe', bgColor: '#000' },
  },
  c64: {
    component: { color: '#7c70da', bgColor: '#3e31a2' },
    arrow: { color: '#7c70da', bgColor: '#3e31a2' },
    hook: { color: '#7c70da', bgColor: '#3e31a2' },
    extraInfo: { color: '#7c70da', bgColor: '#3e31a2' },
  },
  aqua: {
    component: { color: '#05696b' },
    arrow: { color: '#00ffff' },
    hook: { color: '#30949d' },
    extraInfo: { color: '#71d9e2' },
  },
  rgb: {
    component: { color: 'red' },
    arrow: { color: 'green' },
    hook: { color: 'blue' },
    extraInfo: { color: '#777' },
  },
};
