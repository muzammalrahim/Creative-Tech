const express = require("express");
const router = express.Router();

const {
    saveContact,
    getContactsById,
    getContacts,
} = require("../controllers/contact");

router.post("/save-contact", saveContact);
router.get("/getContact/:id", getContactsById);
router.get("/getContacts", getContacts);

module.exports = router;