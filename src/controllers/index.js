const express = require('express');
const img=require("./img");
const error=require("./error");

const router= express.Router();

router.get("/",img.get);

router.use(error.pageNotFound);
router.use(error.serverErorr);
module.exports=router;
