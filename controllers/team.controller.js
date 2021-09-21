const TeamModel = require("../models/Team");


const AddTeam = async (req, res) => {
    console.log('image checking ', req.body)
    try {
        const { name, designation, linkedin, image } = req.body
        
        await new TeamModel({
          name,
          designation,
          linkedin,
          image
        }).save()
        
        return res.json({
            response: "Team member added successfully",
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

const getTeamMemberById = async (req, res) => {
    try {
        const { id } = req.params
        const TeamMember = await TeamModel.findById(id);
        return res.json ({
            data: TeamMember,
            success:true
        })
    } catch (error) {
        
        return res.json({
            response: "something went wrong",
            error,
            success:false
        })
        
    }

}

const getTeam = async (req, res) => {
    try {

        const team = await TeamModel.find()

        return res.json({
            data: team,
            total: team.length,
            success: true
        })
        
    } catch (error) {
        
        return res.json({
            response: "something went wrong",
            error,
            success:false
        })
    }
}

const deleteTeamMember = async (req, res) => {
  try {
    const { id } = req.params;

    await TeamModel.findByIdAndRemove(id);
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

const updateTeamMember = async (req, res) => {
  try {
    const { name, designation, linkedin , image } = req.body;
    const { id } = req.params;

    const updatedTeamMember = await UserModel.findByIdAndUpdate(
      id,
      {
        name,
        designation,
        linkedin,
        image
      },
      {
        new: true,
      }
    );

    return res.json({
      data: updatedTeamMember,
      response: "Post updated successfuly",
      success: true,
    });
  } catch (error) {
      return res.json({
          response: "505 It's Server Error",
          error,
          success:false
      })
  }
};

module.exports = {
    AddTeam,
    getTeamMemberById,
    getTeam,
    updateTeamMember,
    deleteTeamMember
}