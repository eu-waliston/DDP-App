const express = require('express');
// const cors = require('cors');
const bodyParser = require('body-parser');
const multipart = require('connect-multiparty');

const routes = express.Router()
const crypto = require('crypto')
const secret = 'bf3c199c2470cb477d907b1e0917c17b'
const BASE_URL_JSON_SERVER = 'http://localhost:3000'
// const axios = require('axios')



const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

// const corsOptions = {
//   origin: '*',
//   optionsSuccessStatus: 200
// };
// app.use(cors(corsOptions));

const multipartiMiddleware = multipart({ uploadDir: './uploads' })
app.post('/upload', multipartiMiddleware, (req, res) =>{
  const files = req.files;
  console.log(files);
  res,json({ message: files });
});

app.get('/downloadExcel', (req, res) =>{
  res.download('./upload/report.xlsx')
})

app.get('/downloadPDF', (req, res) =>{
  res.download('./upload/report.pdf')
})

app.use((err, req, res, next) =>  res.json({ error: err.message }));

app.listen(8000, () => {
  console.log("Servidor Porta 8000");
})
