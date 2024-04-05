const mongoose = require('mongoose');

const mealSchema = new mongoose.Schema({
    mealName: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('AddedMeal', mealSchema);