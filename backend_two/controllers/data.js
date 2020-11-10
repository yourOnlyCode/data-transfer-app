const express = require('express')
const dataModel = require('../models/data.js')

const dataRouter = express.Router()

// GET ALL
dataRouter.get('/', async (req, res) => {
    try {
        const allDatas = await dataModel.getAllDatas()
        res.json(allDatas)
    } catch (err) {
        console.log('failed to get all datas from data controller')
        res.status(500).json(err)
    }
})

// GET ONE
dataRouter.get('/:dataId', async (req, res) => {
    try {
        const singleData = await dataModel.getOneData(req.params.dataId)
        res.json(singleData)
    } catch (err) {
        console.log('failed to get one data from data controller')
        res.status(500).json(err)
    }
})

// CREATE
dataRouter.post('/', async (req, res) => {
    try {
        await dataModel.createData(req.body)
        res.json('ok')
    } catch (err) {
        console.log('failed to create data from data controller')
        res.status(500).json(err)
    }
})

// EDIT DATA
dataRouter.put('/:dataId', async (req, res) => {
    try {
        await dataModel.updateData(req.params.dataId, req.body)
        res.json('ok')
    } catch (err) {
        console.log('failed to update data from data controller')
        res.status(500).json(err)
    }
})

// DELETE DATA
dataRouter.delete('/:dataId', async (req, res) => {
    try {
        await dataModel.deleteData(req.params.dataId)
        res.json('ok')
    } catch (err) {
        console.log('failed to delete data from data controller')
        res.status(500).json(err)
    }
})

module.exports = dataRouter