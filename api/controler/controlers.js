const Data = require('../model/dataModel');

exports.data = async (req, res) => {
  console.log(req.body);
  const { videoNo, views, link, imageUrl } = req.body;

  try {
    const record = new Data({
      imageUrl: imageUrl,
      videoNo: videoNo,
      views: views,
      link: link
    });

    await record.save();
    console.log(record);
    res.json(record);
  } catch (error) {
    console.log("error in data post api", error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getpostdata = async (req, res) => {
  try {
    const record = await Data.find();
    res.json(record);
  } catch (error) {
    console.log("error in get post data api", error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.deletepost = async (req, res) => {
  const id = req.params.id;
  try {
    const record = await Data.findByIdAndDelete(id);
    res.json(record);
  } catch (error) {
    console.log("error in delete post api", error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


exports.updatepost = async (req, res) => {
    const postId = req.params.postId;
    const { videoNo, views, link, imageUrl } = req.body;
  
    try {
      const updatedRecord = await Data.findByIdAndUpdate(
        postId,
        { imageUrl, videoNo, views, link },
        { new: true } // This option returns the modified document rather than the original.
      );
  
      if (!updatedRecord) {
        return res.status(404).json({ error: 'Post not found' });
      }
  
      res.json(updatedRecord);
    } catch (error) {
      console.log("Error in update post API", error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };
