const Fruit = require("../models/fruit")

// ! INDEX
const index = async (req, res) => {
    try {
        const fruits = await Fruit.showAll()
        res.status(200).send(fruits)
    } catch (err) {
        res.status(500).send({ "error": "Server Error" })
    }

}

// ! SHOW
const show = async (req, res) => {
    const name = req.params.name.toLowerCase()
    try {
        const fruit = await Fruit.showOne(name)
        res.status(200).send(fruit)
    } catch (err) {
        res.status(404).send({ "error": "not found" })
    }

}



const create = async (req,res) => {
    try {
        const fruitData = req.body
        const newFruit = await Fruit.create(fruitData)
        res.status(201).send(newFruit)
    } catch (err) {
        res.status(409).send("Not able to add Fruit")
    }
}

const update = async (req,res) => {
    const name = req.params.name.toLowerCase()
    try {
        const fruit = await Fruit.showOne(name)
        const result = await fruit.update(req.body)
        res.status(200).send(result)
    } catch (err) {
        res.status(404).send("No Fruit with that name found")
    }
}

const destroy = async (req,res) => {
    const name = req.params.name.toLowerCase()
    try {
        const fruit = await Fruit.showOne(name)
        const result = await fruit.destroy(req.body)
        res.status(200).send(result)
    } catch (err) {
        res.status(404).send("No Fruit with that name found")
    }
}



module.exports = {
    index, show, create, update, destroy
}
