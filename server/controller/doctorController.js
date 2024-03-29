const Doctor = require("../model/doctorModel");
const User = require("../model/userModel");
const Notification = require("../model/notificationModel");
const Appointment = require("../model/appointmentModel");

const getalldoctors = async (req, res) => {
  try {
    let docs;
    if (!req.locals) {
      docs = await Doctor.find({ isDoctor: true }).populate("userId");
    } else {
      docs = await Doctor.find({ isDoctor: true })
        .find({
          _id: { $ne: req.locals },
        })
        .populate("userId");
    }

    return res.send(docs);
  } catch (error) {
    console.log(error);
    res.status(500).send("Unable to get doctors");
  }
};

module.exports = {
  getalldoctors
};