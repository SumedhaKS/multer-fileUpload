const express = require("express");
const app = express();
const PORT = 8000;
const multer = require("multer");
const path = require("path");
const cors = require("cors");


app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, './uploads')
    },
    filename: (req, file, cb)=>{
        const filename = "xyz" + path.extname(file.originalname); 
        cb(null, filename)
    }
})
const upload = multer({storage: storage});



app.post('/uploads', upload.single("image") , (req, res)=>{
    console.log("hitting server");
    console.log(req.file);
    res.json({
        response: req.body
    })
})

app.get('/uploads', (req,res)=>{
    res.json({
        msg : "Server healthy"
    })
})

app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`));
