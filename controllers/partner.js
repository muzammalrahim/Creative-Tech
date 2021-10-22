const PartnerModel = require("../models/Partner");



const savePartner = async (req, res) => {
  try {

    
    const {  link , image} = req.body;

    await new PartnerModel({         
     link,image
    }).save();

    return res.json({
      response: "Post saved successfully.",
      success: true,
    });
  } catch (error) {
    return res.json({
      response: "Something went wrong.",
      error,
      success: false,
    });
  }
};

const getPartnerById = async (req, res) => {
  try {
    const { id } = req.params;

    const partner = await PartnerModel.findById(id);

    return res.json({
      data: partner,
      
      success: true,
    });
  } catch (error) {
    return res.json({
      response: "Something went wrong.",
      success: false,
    });
  }
};
const getPartners = async (req, res) => {
  try {
    const partners = await PartnerModel.find();

    return res.json({
      data: partners,
      documents: partners.length,
      success: true,
    });
  } catch (error) {
    return res.json({
      response: "Something went wrong.",
      success: false,
    });
  }
};

const deletePartner = async (req, res) => {
  try {
    const { id } = req.params;

    await PartnerModel.findByIdAndRemove(id);
    return res.json({
      data: null,
      response: "Post deleted successfuly",
      success: true,
    });
  } catch (error) {
    return res.json({
      response: "Something went wrong.",
      success: false,
    });
  }
};

const updatePartner = async (req, res) => {
  try {
    const { link ,image } = req.body;
    const { id } = req.params;

    const updatedPartner = await PartnerModel.findByIdAndUpdate(
      id,
      {
          link,
        image
      },
      {
        new: true,
      }
    );

    return res.json({
      data: updatedPartner,
      response: "Post updated successfuly",
      success: true,
    });
  } catch (error) {}
};

module.exports = {
  savePartner,
  getPartners,
  getPartnerById,
  deletePartner,
  updatePartner,
};
