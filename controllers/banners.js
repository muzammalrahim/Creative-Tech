const BannerModel = require("../models/Banner");


const saveBanner = async (req, res) => {
    console.log('image checking ', req.body)
    try {
        const { title, description, link, image } = req.body
        
        await new BannerModel({
          title,
          description,
          link,
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

const getBannerBYId = async (req, res) => {
    try {
        const { id } = req.params
        const Banner = await BannerModel.findById(id);
        return res.json ({
            data: Banner,
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

const getBanners = async (req, res) => {
    try {

        const banner = await BannerModel.find()

        return res.json({
            data: banner,
            total: banner.length,
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

const deleteBanner = async (req, res) => {
  try {
    const { id } = req.params;

    await BannerModel.findByIdAndRemove(id);
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

const updateBanner = async (req, res) => {
  try {
    const { title, description, link , image } = req.body;
    const { id } = req.params;

    const updatedBanner = await BannerModel.findByIdAndUpdate(
      id,
      {
        title,
        description,
        link,
        image
      },
      {
        new: true,
      }
    );

    return res.json({
      data: updatedBanner,
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
   saveBanner,
    getBannerBYId,
    getBanners,
    updateBanner,
    deleteBanner
}