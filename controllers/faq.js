const FaqModel = require("../models/Faq");

const saveFaq = async (req, res) => {
  try {
    const { title, description} = req.body;

    await new FaqModel({
      title,
      description,
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

const getFaqBYId = async (req, res) => {
  try {
    const { id } = req.params;

    const faq = await FaqModel.findById(id);

    return res.json({
      data: faq,
      
      success: true,
    });
  } catch (error) {
    return res.json({
      response: "Something went wrong.",
      success: false,
    });
  }
};
const getFaq = async (req, res) => {
  try {
    const faq = await FaqModel.find();

    return res.json({
      data: faq,
      documents: faq.length,
      success: true,
    });
  } catch (error) {
    return res.json({
      response: "Something went wrong.",
      success: false,
    });
  }
};

const deleteFaq = async (req, res) => {
  try {
    const { id } = req.params;

    await FaqModel.findByIdAndRemove(id);
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

const updateFaq = async (req, res) => {
  try {
    const { title, description } = req.body;
    const { id } = req.params;

    const updatedFaq = await FaqModel.findByIdAndUpdate(
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
      data: updatedFaq,
      response: "Post updated successfuly",
      success: true,
    });
  } catch (error) {}
};

module.exports = {
  saveFaq,
  getFaq,
  getFaqBYId,
  deleteFaq,
  updateFaq,
};
