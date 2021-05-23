interface ColorsForSection {
  color?: string;
  bgColor?: string;
}

export interface Colors {
  component: ColorsForSection;
  arrow: ColorsForSection;
  hook: ColorsForSection;
  extraInfo: ColorsForSection;
}

export const rawColorSchemes: { [key: string]: Colors } = {
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
  js: {
    component: { color: '#000', bgColor: '#efd81d' },
    arrow: { color: '#000', bgColor: '#efd81d' },
    hook: { color: '#000', bgColor: '#efd81d' },
    extraInfo: { color: '#000', bgColor: '#efd81d' },
  },
  ts: {
    component: { color: '#f7f7f7', bgColor: '#2f74c0' },
    arrow: { color: '#f7f7f7', bgColor: '#2f74c0' },
    hook: { color: '#f7f7f7', bgColor: '#2f74c0' },
    extraInfo: { color: '#f7f7f7', bgColor: '#2f74c0' },
  },
  c64: {
    component: { color: '#7c70da', bgColor: '#3e31a2' },
    arrow: { color: '#7c70da', bgColor: '#3e31a2' },
    hook: { color: '#7c70da', bgColor: '#3e31a2' },
    extraInfo: { color: '#7c70da', bgColor: '#3e31a2' },
  },
  neon: {
    component: { color: '#ccff00', bgColor: '#000' },
    arrow: { color: '#00fdff', bgColor: '#000' },
    hook: { color: '#21fc0d', bgColor: '#000' },
    extraInfo: { color: '#bc13fe', bgColor: '#000' },
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
  coffee: {
    component: { color: '#38220f', bgColor: '#dbc1ac' },
    arrow: { color: '#967259', bgColor: '#dbc1ac' },
    hook: { color: '#634832', bgColor: '#dbc1ac' },
    extraInfo: { color: '#967259', bgColor: '#dbc1ac' },
  },
  lemon: {
    component: { color: '#75a91b', bgColor: '#f7f069' },
    arrow: { color: '#48e239', bgColor: '#f7f069' },
    hook: { color: '#75a91b', bgColor: '#f7f069' },
    extraInfo: { color: '#b7bf0f', bgColor: '#f7f069' },
  },
};
