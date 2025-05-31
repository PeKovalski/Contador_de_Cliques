let count = 0;
let currentMode = 'normal';

const romanNumerals = ['0', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX',
  'X', 'XI', 'XII', 'XIII', 'XIV', 'XV', 'XVI', 'XVII', 'XVIII', 'XIX', 'XX'];

const arabicNumerals = ['٠','١','٢','٣','٤','٥','٦','٧','٨','٩']; // 0–9
const chineseNumerals = ['〇','一','二','三','四','五','六','七','八','九']; // 0–9

function convertToArabic(num) {
  return num.toString().split('').map(d => arabicNumerals[+d]).join('');
}

function convertToChinese(num) {
  return num.toString().split('').map(d => chineseNumerals[+d]).join('');
}

function convertToRoman(num) {
  if (num < romanNumerals.length) return romanNumerals[num];
  return num; // fallback
}

function displayCount() {
  let display;
  switch(currentMode) {
    case 'grecia':
      display = convertToRoman(count);
      break;
    case 'arabia':
      display = convertToArabic(count);
      break;
    case 'china':
      display = convertToChinese(count);
      break;
    default:
      display = count;
  }
  document.getElementById('counter').innerText = display;
}

function incrementCounter() {
  count++;
  displayCount();
}

function toggleMode(mode) {
  if (currentMode === mode) {
    // voltar ao modo normal
    currentMode = 'normal';
    document.body.style.backgroundImage = '';
  } else {
    currentMode = mode;
    let image = '';
    if (mode === 'grecia') image = 'grecia.jpg';
    if (mode === 'arabia') image = 'arabia.webp';
    if (mode === 'china') image = 'china.jpg';
    document.body.style.backgroundImage = `url('${image}')`;
  }
  displayCount();
}