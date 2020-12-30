import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    }, 
    lastname: {
        type: String,
        required: true,
        unique: true
    }, 
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },  
    role: {
        type: String,
        default: 'user'
    }, 
    root: {
        type: Boolean,
        default: false
    }, 
    avatar: {
        type: String,
        default: 'https://unsplash.com/photos/ZHvM3XIOHoE'
    }
}, {
    timestamps: true
})

let Dataset = mongoose.models.user || mongoose.model('user', userSchema)

export default Dataset