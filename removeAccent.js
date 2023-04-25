function removeAccent(str) {
  const strWithoutAccent = str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  return strWithoutAccent;
}

module.exports = removeAccent;
