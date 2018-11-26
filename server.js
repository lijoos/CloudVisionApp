const express = require('express');
const app = express();
const path = require('path');
const cors=require('cors');
const multer = require('multer');
const bodyParser = require('body-parser');
const DIR = './app/uploads';
let imageName='';
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, DIR);
    },
    filename: (req, file, cb) => {
      imageName=file.fieldname + '-' + Date.now()  + path.extname(file.originalname);
      cb(null, imageName);
    }
});

let upload = multer({storage: storage});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
 
const port=process.env.PORT || 8080;
app.use(express.static(path.join(__dirname,'dist/Cloud-VisionApp')));
const routes=require('./app/router');


app.use(cors());
app.post('/api/upload',upload.single('photo'), function (req, res) {
    if (!req.file) {
        console.log("No file received");
        return res.send({
          success: false
        });
    
      } else {
        console.log('file received');
        return res.json({
          image:imageName,
          success: true
        });
      }
});

app.use('/api',routes);
app.get('*',(req,res)=>{
  res.sendfile(path.join(__dirname,'dist/Cloud-VisionApp/index.html'));
})

app.listen(port,()=>{
    console.log("Serve stated on port "+port);
})