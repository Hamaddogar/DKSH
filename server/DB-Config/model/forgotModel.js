
import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const forgotSchema = new Schema({

    email: { type: String, required: [true, 'Email must be provieded'] },
    resetPasswordToken: String,
    resetPasswordExpires: Date

})
const UserForgot = mongoose.model('UserForgot', forgotSchema);

export default UserForgot;