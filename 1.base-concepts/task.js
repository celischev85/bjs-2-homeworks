function solveEquation(a, b, c) {
  // Validate inputs: a should not be 0 for a real quadratic equation
  if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
    throw new TypeError('All coefficients must be numbers.');
  }
  if (a === 0) {
    // Linear equation: bx + c = 0 -> x = -c / b (if b != 0)
    if (b === 0) {
      // Degenerate case: c = 0 -> infinite solutions; c != 0 -> no solution
      if (c === 0) return ['infinite solutions'];
      return [];
    }
    return [-c / b];
  }

  const d = b * b - 4 * a * c; // discriminant
  const roots = [];

  if (d > 0) {
    const sqrtD = Math.sqrt(d);
    roots.push((-b + sqrtD) / (2 * a));
    roots.push((-b - sqrtD) / (2 * a));
  } else if (d === 0) {
    roots.push(-b / (2 * a));
  }
  // If d < 0: roots remain empty
  return roots;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  // 1. Преобразуем ставку из процентов в доли и делим на 12 (месячная ставка)
  let P = (percent / 100) / 12;

  // 2. Считаем тело кредита (сумма минус первоначальный взнос)
  let S = amount - contribution;

  // 3. Формула ежемесячного платежа
  let payment = S * (P + (P / (Math.pow(1 + P, countMonths) - 1)));

  // 4. Общая сумма выплат
  let totalAmount = payment * countMonths;

  // 5. Округляем до 2 знаков после запятой и преобразуем обратно в число
  totalAmount = Number(totalAmount.toFixed(2));

  return totalAmount;
}
