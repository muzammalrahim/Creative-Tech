
const ContactModel = require("../models/Contact");

const saveContact = async (req, res) => {
    console.log("contact data", req.body)
    try {
        const { name, email, subject, phone, message } = req.body
        
        await new ContactModel({
          name,
          email,
          subject,
          phone,
          message,
        }).save()

        return res.status(201).json({
          response: "Contact details added successfully",
          success: true,
        })
      
    } catch (error) {

      return res.status(404).json({
            response: "something went wrong",
            error,
            success: false,
        });        
    }
}

const getContactsById = async (req, res) => {
  try {
    const { id } = req.params;
    const Contact = await ContactModel.findById(id);
    return res.json({
      data: Contact,
      success: true
    })

  } catch (error) {
    res.json({
      response: "something went wrong",
      error,
      success: false
    })
  }
}

const getContacts = async (req, res) => {
  try {
    const contact = await ContactModel.find();
    return res.json({
      data: contact,
      message: "you get the records",
      total: contact.length,
      success: true
    })
  } catch (error) {
    return res.json({
      response: "something went wrong",
      error,
      success: false
    })
  }
}

module.exports = {
  saveContact,
  getContactsById,
  getContacts,
};