const express = require('express');
const img=require("./img");

const router= express.Router();
router.get("/",img.get);

module.exports=router;
