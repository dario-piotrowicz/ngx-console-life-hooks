import { ColorsData } from '../colors-data.model';

export const examples: {
  code: string;
  colorsData: ColorsData;
}[] = [
  {
    code: `{
  component: {
    color: 'red',
    bgColor: 'pink'
  },
  arrow: {
    bgColor: 'lightblue'
  },
  hook: {
    color: 'navy',
    bgColor: 'pink'
  },
  extra: {
    color: 'green'
  }
}`,
    colorsData: {
      colors: {
        component: { color: 'red', bgColor: 'pink' },
        arrow: { bgColor: 'lightblue' },
        hook: { color: 'navy', bgColor: 'pink' },
        extra: { color: 'green' },
      },
    },
  },
  {
    code: `{
  component: {
    color: '#dcf2ff',
    bgColor: '#263f97'
  },
  arrow: {
    color: '#dcf2ff69',
    bgColor: '#263f97'
  },
  hook: {
    color: '#dcf2ff',
    bgColor: '#263f97'
  },
  extra: {
    color: '#dcf2ff69',
    bgColor: '#263f97'
  }
}`,
    colorsData: {
      colors: {
        component: { color: '#dcf2ff', bgColor: '#263f97' },
        arrow: { color: '#dcf2ff69', bgColor: '#263f97' },
        hook: { color: '#dcf2ff', bgColor: '#263f97' },
        extra: { color: '#dcf2ff69', bgColor: '#263f97' },
      },
    },
  },
  {
    code: `{
  component: {
    color: 'green',
    bgColor: 'rgb(250 255 208)'
  },
  hook: {
    color: 'green',
    bgColor: 'rgb(250 255 208)'
  }
}`,
    colorsData: {
      colors: {
        component: { color: 'green', bgColor: 'rgb(250 255 208)' },
        hook: { color: 'green', bgColor: 'rgb(250 255 208)' },
      },
    },
  },
];
