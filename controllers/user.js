const UserModel = require("../models/User");

// let productPictures = [];
// if (req.files.length > 0) {
//   productPictures = req.files.map((file) => {
//     return { image: file.filename };
//   });
// }

const saveUser = async (req, res) => {
  try {
    const { title, description, ref1, ref2, ref3, image } = req.body;

    await new UserModel({
      title,
      image,
      description,
      ref1,
      ref2,
      ref3,
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

const getUserBYId = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await UserModel.findById(id);

    return res.json({
      data: user,

      success: true,
    });
  } catch (error) {
    return res.json({
      response: "Something went wrong.",
      success: false,
    });
  }
};
const getUsers = async (req, res) => {
  // console.log("users");
  try {
    const users = await UserModel.find();

    return res.json({
      data: users,
      documents: users.length,
      success: true,
    });
  } catch (error) {
    return res.json({
      response: "Something went wrong.",
      success: false,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    await UserModel.findByIdAndRemove(id);
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

const updateUser = async (req, res) => {
  try {
    const { title, description, ref1, ref2, ref3 } = req.body;
    const { id } = req.params;

    const updatedUser = await UserModel.findByIdAndUpdate(
      id,
      {
        title,
        description,
        ref1,
        ref2,
        ref3,
      },
      {
        new: true,
      }
    );

    return res.json({
      data: updatedUser,
      response: "Post updated successfuly",
      success: true,
    });
  } catch (error) {}
};

module.exports = {
  saveUser,
  getUsers,
  getUserBYId,
  deleteUser,
  updateUser,
};
