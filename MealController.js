const MealModel = require('./MealModel');

module.exports.getMeal = async (req, res) => {
    const myMeal = await MealModel.find();
    res.send(myMeal);
}

module.exports.saveMeals = async (req, res) => {
    const { mealName } =  req.body;
    MealModel.create({ mealName })
    .then((data) => { console.log('Meal added')
    res.send(data)
    })
}

module.exports.deleteMeal = async (req, res) => {
    const { _id } = req.body;
    MealModel.findByIdAndDelete(_id)
    .then(() => res.send('Deleted a meal'))
}

module.exports.editMeal = async (req, res) => {
    const { _id, mealName } = req.body;
    MealModel.findByIdAndUpdate(_id, { mealName })
    .then(() => res.send('Edited a meal'))
}


