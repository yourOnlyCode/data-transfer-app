const mongoose = require('./connection.js')

const DataSchema = new mongoose.Schema({
    name: String,
    data: Number,
    location: String
})

const dataModel = mongoose.model('data', DataSchema)

// GET ALL
const getAllDatas = () => {
    return dataModel.find({})
}

// GET ONE

const getOneData = (dataId) => {
    return dataModel.findById(dataId)
}

// CREATE ONE
const createData = (dataData) => {
    return dataModel.create(dataData)
}

// UPDATE ONE
const updateData = (dataId, dataData) => {
    return dataModel.findByIdAndUpdate(dataId, dataData)
}

// DELETE ONE
const deleteData = (dataId) => {
    return dataModel.findByIdAndDelete(dataId)
}

module.exports = {
    getAllDatas,
    getOneData,
    createData,
    updateData,
    deleteData,
}