const express = require('express');
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;
const generatePassword = require('./main')//引入本地模組 ./main，用來生成密碼（具體實現可能在 main.js 文件中）

app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.use(express.static('public'));//將 public 文件夾設為靜態資源目錄，這樣 CSS、JS 和圖片文件可以直接通過 URL 訪問。
app.use(express.urlencoded({ extended: false }));//處理 URL 編碼的表單數據，使伺服器能接收並解析提交的表單內容。

app.get('/', (req, res) => {
  res.render('index');
});//表示渲染模板文件 views/index.hbs

app.post('/', (req, res) => {
  const option = req.body;  //接收數據: 使用 req.body 提取表單提交的選項。
  const password = generatePassword(option);//生成密碼: 調用 generatePassword(option)，根據選項生成密碼。
  res.render('index', {password, option})
})//渲染頁面: 將生成的密碼和選項數據傳遞給 index.hbs，更新頁面顯示生成的密碼

app.listen(port, () => {
  console.log(`伺服器已運作，監聽在 http://localhost:${port}`);
});//啟動 Express 伺服器，監聽 port（3000）