const { Router } = require("express");
const { cardController } = require("../controllers/index");

const router = Router();

router.post("/", cardController.addPay);
router.get("/", cardController.getPay);

module.exports = router;
