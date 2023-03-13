const { Op } = require("sequelize");
const db = require("../models");
const Quiz = db.quizzes;

exports.create = async (req, res) => {
    try {
        let data = req.body
        data.image = req.file.filename
        data = await Quiz.create(data)
        res.json({
            message: "quiz create successfully",
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null
        })
    }
}
exports.getAll = async (req, res) => {
    try {
        const soal = await Quiz.findAll();
        res.json({
            message: "quiz retrieved successfully",
            data: soal
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null
        })
    }
}
exports.update = async (req, res) => {
    const id = req.params.id
    try {
        let data = await Quiz.findByPk(id, { rejectOnEmpty: true })
        let body = req.body
        if (req.file != null) {
            body.image = req.file.filename
        }
        data.update(body, {
            where: { id }
        });
        res.json({
            message: "quiz updated successfully",
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null
        })
    }
}
exports.delete = async (req, res) => {
    const id = req.params.id
    try {
        const soal = await Quiz.findByPk(id, { rejectOnEmpty: true })
        soal.destroy()
        res.json({
            message: `Data dengan id ${soal.id} berhasil dihapus`
        })
    } catch (error) {
        res.status(500).json({
            message: error.message,
            data: null
        })
    }
}
exports.getByCategory = async (req, res) => {
    const category  = req.params.category
    const quizzes = await Quiz.findAll({
        where : {
            category: {
                [Op.like]: `%${category}%`
            }
        }
    })
    res.json({
        message: `quiz retrived successfully with categoryId=${category}`,
        data: quizzes
    })
}
exports.findOne = async (req, res) => {
    const id = req.params.id
    try {
        const soal = await Quiz.findByPk(id, { rejectOnEmpty: true })
        res.json({
            message: `soal retrived successfully with id=${id}`,
            data: soal
        })
    } catch (error) {
        res.status(500).json({
            message: error.message || "Some error occured while retriving soal",
            data: null
        })
    }
}