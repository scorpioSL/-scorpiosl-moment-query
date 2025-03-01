import moment from 'moment';

export type TimeUnit = 'm' | 'h' | 'd' | 'w' | 'M' | 'y' | 'Q' | 's';

export type TimeReference = {
  [key: string]: moment.Moment;
};

export const timeReferences: TimeReference = {
  now: moment(),
  today: moment().startOf('day'),
  tomorrow: moment().add(1, 'day').startOf('day'),
  yesterday: moment().subtract(1, 'day').startOf('day'),
  week: moment().startOf('week'),
  month: moment().startOf('month'),
  year: moment().startOf('year'),
  quarter: moment().startOf('quarter'),
  'month.start': moment().startOf('month'),
  'month.end': moment().endOf('month'),
  'year.start': moment().startOf('year'),
  'year.end': moment().endOf('year'),
  'quarter.start': moment().startOf('quarter'),
  'quarter.end': moment().endOf('quarter'),
  'week.start': moment().startOf('week'),
  'week.end': moment().endOf('week'),
  'day.start': moment().startOf('day'),
  'day.end': moment().endOf('day'),
  'hour.start': moment().startOf('hour'),
  'hour.end': moment().endOf('hour'),
  'minute.start': moment().startOf('minute'),
  'minute.end': moment().endOf('minute'),
  'today.start': moment().startOf('day'),
  'today.end': moment().endOf('day'),
  'tomorrow.start': moment().add(1, 'day').startOf('day'),
  'tomorrow.end': moment().add(1, 'day').endOf('day'),
  'yesterday.start': moment().subtract(1, 'day').startOf('day'),
  'yesterday.end': moment().subtract(1, 'day').endOf('day'),
};

export function parseTimeExpression(expression: string): moment.Moment {
  const match = expression.match(/(\w+)(?:\.(start|end))?|[+-]\d+[mhdwMyQs]/g);
  console.log(match);

  if (!match) {
    throw new Error(`Invalid time expression: ${expression}`);
  }

  let baseKey = match[0];
  let baseTime = timeReferences[baseKey] ? moment(timeReferences[baseKey]) : moment();

  // Apply start or end modifier if present
  if (match[1] === 'start') {
    baseTime = baseTime.startOf(baseKey as moment.unitOfTime.StartOf);
  } else if (match[1] === 'end') {
    baseTime = baseTime.endOf(baseKey as moment.unitOfTime.StartOf);
  }

  // Apply modifications
  for (let i = 1; i < match.length; i++) {
    const adjustment = match[i];
    if (/^[+-]\d+[mhdwMyQs]$/.test(adjustment)) {
      const operator = adjustment[0];
      const amount = parseInt(adjustment.slice(1, -1), 10);
      const unit = adjustment.slice(-1) as TimeUnit;
      baseTime = operator === '+' ? baseTime.add(amount, unit) : baseTime.subtract(amount, unit);
    }
  }

  return baseTime;
}