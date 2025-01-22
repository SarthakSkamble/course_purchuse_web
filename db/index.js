const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://rohikamble17:3igm63vUEwDBk3Ii@cluster0.pxok7.mongodb.net/');

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username:String,
    password:Number
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username:String,
    password:Number,
    purchuse:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'course'
    }]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title:String,
    description:String,
    price:Number,
    imageLink:String
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}