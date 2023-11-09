const express = require("express");
const adminController = require("../controllers/AdminController");
const PostController = require("../controllers/PostController");
const SubAdminController = require("../controllers/SubAdminController");
const useController = require("../controllers/useController");
const router = express.Router();

router.get("/a-create", adminController.create);
router.get("/a-read", adminController.read);
router.get("/a-delete", adminController.delete);
router.get("/a-update", adminController.update);

router.get("/p-create", PostController.create);
router.get("/p-read", PostController.read);
router.get("/p-delete", PostController.delete);
router.get("/p-update", PostController.update);


router.get("/s-create", SubAdminController.create);
router.get("/s-read", SubAdminController.read);
router.get("/s-delete", SubAdminController.delete);
router.get("/s-update", SubAdminController.update);

router.get("/u-create", useController.create);
router.get("/u-read", useController.read);
router.get("/u-delete", useController.delete);
router.get("/u-update", useController.update);

module.exports= router;