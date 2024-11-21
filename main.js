function generatePassword(data) {
  const lowercase =  'abcdefghijklmnopqrstuvwxyz'
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const number =  '1234567890'
  const symbol =  '~`!@#$%^&*()_-+={}?[]/<>;:'
  const exclude = data.exclude

  let collection = [];
  let password = '';

  if (data.uppercase === "on") {
    collection = collection.concat(uppercase.split(''))
  }

  if (data.lowercase === "on") {
    collection = collection.concat(lowercase.split(''))
  }

  if (data.number === "on") {
    collection = collection.concat(number.split(''))
  }

  if (data.symbol === "on") {
    collection = collection.concat(symbol.split(''))
  }

  if (exclude) {
    collection = collection.filter(
      char => !exclude.includes(char)
    )
  }

  if (data.length < 4 || data.length > 16 || data.length.value === '') {
    return password = 'Please enter the correct password length'
  }

  if (data.uppercase !== 'on' && data.lowercase !== 'on' && data.number !== 'on' && data.symbol !== 'on') {
    return password = 'Please select at least one'
  }

  if (collection.length === 0) {
    return password = 'There is no valid conditions'
  }

  for (let i = 0; i < data.length; i++) {
    const collectionIndex = Math.floor(Math.random() * collection.length)
    password += collection[collectionIndex];
  }
  return password;
};

module.exports = generatePassword;