const getUser = async (req, res) => {
    //const data = await Models.Users.findAll();
    //res.send({ result: 200, data: data });
    res.send({ name: "elizabeth", DOB:"12/6/2000", occupation:"Software Engineer"});
  };


  module.exports = {
    getUser,}