const getDaysInMonth = (year: string, month: string) => {
  return new Date(Number(year), Number(month), 0).getDate();
};

export const calculateAge = (age: string) => {
  const birthDate = new Date(age);

  const d1 = birthDate.getDate();
  const m1 = birthDate.getMonth() + 1;
  const y1 = birthDate.getFullYear();

  const today = new Date();

  const d2 = today.getDate();
  const m2 = today.getMonth() + 1;
  const y2 = today.getFullYear();

  let d3, m3, y3;

  y3 = y2 - y1;

  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = 12 + m2 - m1;
  }

  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    m3--;
    d3 = getDaysInMonth(y1, m1) + d2 - d1;
  }
  if (m3 < 0) {
    m3 = 11;
    y3--;
  }
  return { years: y3, months:  m3, days: d3 };
};
