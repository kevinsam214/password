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
  }//concat返回一個包含合併後所有元素的新陣列

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
  }//符合char => !exclude.includes(char)條件時 為true保留 不符合則為false 不保留

  if (data.length < 4 || data.length > 16 || data.length.value === '') {
    return password = 'Please enter the correct password length'
  }

  if (data.uppercase !== 'on' && data.lowercase !== 'on' && data.number !== 'on' && data.symbol !== 'on') {
    return password = 'Please select at least one'
  }//檢查是否至少選擇了一種類型的字元。如果都沒選，則返回提示訊息。

  if (collection.length === 0) {
    return password = 'There is no valid conditions'
  }//如果 collection 為空，代表沒有有效條件可生成密碼，返回提示訊息 =>因為data.length.value 如果不為 === '' , 並不代表collection.length不為0 因為可能被exclude過濾掉

  for (let i = 0; i < data.length; i++) {
    const collectionIndex = Math.floor(Math.random() * collection.length)
    password += collection[collectionIndex];
  }
  return password;
};//使用迴圈生成密碼，迴圈次數為密碼長度（data.length）。

module.exports = generatePassword;//這行程式碼將 generatePassword 函式導出，使其他檔案可以透過 require 引入並使用它。