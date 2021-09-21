const ServiceModel = require("../models/Services");



const saveService = async (req, res) => {
  try {

    
    const {  title , description, image} = req.body;

    await new ServiceModel({         
      title,description,image
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

const getServiceBYId = async (req, res) => {
  try {
    const { id } = req.params;

    const service = await ServiceModel.findById(id);

    return res.json({
      data: service,
      
      success: true,
    });
  } catch (error) {
    return res.json({
      response: "Something went wrong.",
      success: false,
    });
  }
};
const getServices = async (req, res) => {
  try {
    const services = await ServiceModel.find();

    return res.json({
      data: services,
      documents: services.length,
      success: true,
    });
  } catch (error) {
    return res.json({
      response: "Something went wrong.",
      success: false,
    });
  }
};

const deleteService = async (req, res) => {
  try {
    const { id } = req.params;

    await ServiceModel.findByIdAndRemove(id);
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

const updateService = async (req, res) => {
  try {
    const { title, description ,image } = req.body;
    const { id } = req.params;

    const updatedService = await ServiceModel.findByIdAndUpdate(
      id,
      {
        title,
        description,
        image
      },
      {
        new: true,
      }
    );

    return res.json({
      data: updatedService,
      response: "Post updated successfuly",
      success: true,
    });
  } catch (error) {}
};

module.exports = {
  saveService,
  getServices,
  getServiceBYId,
  deleteService,
  updateService,
};
