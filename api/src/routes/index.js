const { Router } = require("express");
const {getAllNews} = require("../controllers/guardarNoticias");
const router = Router();

router.get("/", getAllNews);
module.exports = router;
