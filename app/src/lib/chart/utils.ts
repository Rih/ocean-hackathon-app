
const valueOrDefault = (value: any, defaultV: any = null) => {
    if(value === undefined || value === null || value === '') return defaultV;
    return value;
}
// Adapted from http://indiegamr.com/generate-repeatable-random-numbers-in-js/
var _seed = Date.now();

export function srand(seed: number) {
  _seed = seed;
}

export function rand(min: number, max: number) {
  min = valueOrDefault(min, 0);
  max = valueOrDefault(max, 0);
  _seed = (_seed * 9301 + 49297) % 233280;
  return min + (_seed / 233280) * (max - min);
}

export function numbers(config: any) {
  var cfg = config || {};
  var min = valueOrDefault(cfg.min, 0);
  var max = valueOrDefault(cfg.max, 100);
  var from = valueOrDefault(cfg.from, []);
  var count = valueOrDefault(cfg.count, 8);
  var decimals = valueOrDefault(cfg.decimals, 8);
  var continuity = valueOrDefault(cfg.continuity, 1);
  var dfactor = Math.pow(10, decimals) || 0;
  var data = [];
  var i, value;

  for (i = 0; i < count; ++i) {
    value = (from[i] || 0) + rand(min, max);
    if (Math.random() <= continuity) {
      data.push(Math.round(dfactor * value) / dfactor);
    } else {
      data.push(null);
    }
  }

  return data;
}

export function points(config: any) {
  const xs = numbers(config);
  const ys = numbers(config);
  return xs.map((x, i) => ({x, y: ys[i]}));
}

export function bubbles(config: any) {
  return points(config).map((pt: any) => {
    pt.r = rand(config.rmin, config.rmax);
    return pt;
  });
}

export function labels(config: any) {
  var cfg = config || {};
  var min = cfg.min || 0;
  var max = cfg.max || 100;
  var count = cfg.count || 8;
  var step = (max - min) / count;
  var decimals = cfg.decimals || 8;
  var dfactor = Math.pow(10, decimals) || 0;
  var prefix = cfg.prefix || '';
  var values = [];
  var i;

  for (i = min; i < max; i += step) {
    values.push(prefix + Math.round(dfactor * i) / dfactor);
  }

  return values;
}

const MONTHS = [
  'Enero',
  'Febrero',
  'Marzo',
  'Abril',
  'Mayo',
  'Junio',
  'Julio',
  'Agosto',
  'Septiembre',
  'Octubre',
  'Noviembre',
  'Diciembre'
];

const YEARS = [
  2023,
  2022,
  2021,
  2020,
]

export function transparentize(value: string, opacity: number) {
    var alpha = opacity === undefined ? 0.5 : 1 - opacity;
    return value.replace(/rgb/,'rgba').substring(0, value.length - 2) +"," + String(alpha) + ')';
  }

export function months(config: any) {
  var cfg = config || {};
  var count = cfg.count || 12;
  var section = cfg.section;
  var values = [];
  var i, value;

  for (i = 0; i < count; ++i) {
    value = MONTHS[Math.ceil(i) % 12];
    values.push(value.substring(0, section));
  }

  return values;
}


export function years(config: any) {
  var cfg = config || {};
  var count = cfg.count || 12;
  var section = cfg.section;
  var values = [];
  var i, value;

  for (i = 0; i < count; ++i) {
    value = YEARS[Math.ceil(i) % 10];
    values.push(String(value).substring(0, section));
  }

  return values;
}

const COLORS = [
  '#F90501',
  '#F9A601',
  '#F9EA01',
  '#9909C1',
  '#10C109',
  '#092EC1',
  '#0101F9',
  '#F98701',
  '#F9012A'
];

export function color(index: number) {
  return COLORS[index % COLORS.length];
}


export const CHART_COLORS = {
  red: 'rgb(249, 1, 42)',
  orange: 'rgb(249, 135, 1)',
  yellow: 'rgb(249, 224, 1)',
  green: 'rgb(16, 193, 9)',
  blue: 'rgb(9, 46, 193)',
  purple: 'rgb(153, 9, 193)',
};

const NAMED_COLORS = [
  CHART_COLORS.red,
  CHART_COLORS.orange,
  CHART_COLORS.yellow,
  CHART_COLORS.green,
  CHART_COLORS.blue,
];

export function namedColor(index: number) {
  return NAMED_COLORS[index % NAMED_COLORS.length];
}

// export function newDate(days) {
//   return DateTime.now().plus({days}).toJSDate();
// }

// export function newDateString(days) {
//   return DateTime.now().plus({days}).toISO();
// }

// export function parseISODate(str) {
//   return DateTime.fromISO(str);
// }