const Form = require('../Database/model/formModel');
const UserSettings = require('../Database/model/settings');

exports.saveFormData = async (req, res) => {
  const { firstName, role, lastName, contactNo, country, email, password } = req.body;

  try {
    const existingForm = await Form.findOne({ email });

    if (existingForm) {
      return res.send({ success: false, message: 'Email already exists' });
    }

    const newForm = new Form({ firstName, role, lastName, contactNo, country, email, password, fullName: `${firstName} ${lastName}` });

    const userSettings = new UserSettings({ userId: newForm._id });
    newForm.settings = userSettings._id;
    await newForm.save();
    await userSettings.save();

    const user = await Form.findOne({ email }).populate('settings');
    res.send({ success: true, user });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
