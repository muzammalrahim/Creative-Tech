const TestimonialModel = require("../models/Testimonial");

const saveTestimonial = async (req, res) => {
  try {
    const {  description , name , designition} = req.body;

    await new TestimonialModel({
      
      description,
      name,
      designition
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

const getTestimonialBYId = async (req, res) => {
  try {
    const { id } = req.params;

    const testimonial = await TestimonialModel.findById(id);

    return res.json({
      data: testimonial,
      
      success: true,
    });
  } catch (error) {
    return res.json({
      response: "Something went wrong.",
      success: false,
    });
  }
};
const getTestimonials = async (req, res) => {
  try {
    const testimonials = await TestimonialModel.find();

    return res.json({
      data: testimonials,
      documents: testimonials.length,
      success: true,
    });
  } catch (error) {
    return res.json({
      response: "Something went wrong.",
      success: false,
    });
  }
};

const deleteTestimonial = async (req, res) => {
  try {
    const { id } = req.params;

    await TestimonialModel.findByIdAndRemove(id);
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

const updateTestimonial = async (req, res) => {
  try {
    const {  description , name , designition } = req.body;
    const { id } = req.params;

    const updatedTestimonial = await TestimonialModel.findByIdAndUpdate(
      id,
      {
        description,
        name,
        designition
      },
      {
        new: true,
      }
    );

    return res.json({
      data: updatedTestimonial,
      response: "Post updated successfuly",
      success: true,
    });
  } catch (error) {}
};

module.exports = {
  saveTestimonial,
  getTestimonials,
  getTestimonialBYId,
  deleteTestimonial,
  updateTestimonial,
};
