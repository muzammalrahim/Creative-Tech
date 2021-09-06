const ServiceModel = require("../models/Services");
const fs = require('fs')
const path = require('path')

const saveService = async (req, res) => {
  console.log("service image checking", req.body)
  try {
    const { title, description, image } = req.body;

    await new ServiceModel({
      title,
      description,
      image:{
        data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
        contentType: 'image/png'
    }
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
    const { title, description } = req.body;
    const { id } = req.params;

    const updatedService = await ServiceModel.findByIdAndUpdate(
      id,
      {
        title,
        description
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
