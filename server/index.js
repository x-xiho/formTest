
const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors()); //cors 허용

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

////////////////////////////////


const formData = []; // 유저데이터 저장 배열

app.get('/api/getFormData', function (req, res) {
  res.json(formData);
});

app.post('/api/saveFormData', function (req, res) {
  const { email, password, radio } = req.body;
  const newFormData = { email, password, radio };
  formData.push(newFormData);
  console.log('새로운 데이터가 추가되었습니다:', newFormData); // 콘솔에 데이터 출력
  console.log('현재 저장된 데이터:', formData);
  res.json(newFormData);
});

app.listen(4000, () => console.log('켜졌다!'))