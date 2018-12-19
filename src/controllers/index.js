const express = require('express');
const img = require("./img");
const error=require("./error");
const {formValidation} = require("../validation/validation")
const validate = require("../validation/validate")
const router= express.Router();

router.get("/",img.get);
router.post("/add", validate(formValidation),img.post)

router.use(error.pageNotFound);
router.use(error.serverErorr);
module.exports=router;
