import { parseTimeExpression } from '../dist/index'
console.log(parseTimeExpression('month+1M+1d+1y-1y').format('YYYY-MM-DD'));