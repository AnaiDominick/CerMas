'use strict';

const mongoose = require("mongoose");
const bcrypt = require("bcrypt-nodejs");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    // plan: { type: Boolean, required: true },
    tables: [
        {
            type: Schema.Types.ObjectId,
            ref: "Csv"
        }
    ]
});

userSchema.pre("save", function (next) {
    if (this.isModified("password")) {
        this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(10), null);
    }
    next();
})

//Validates that the user password is correct
userSchema.methods.login = function (password) {
    return bcrypt.compareSync(password, this.password);
}

const User = mongoose.model("User", userSchema);

module.exports = User;