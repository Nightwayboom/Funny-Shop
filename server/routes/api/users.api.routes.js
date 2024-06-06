const router = require('express').Router()
const { User } = require('../../db/models')
const verifyAccessToken = require("../../middleware/verifyAccessToken");


router.get('/', async (req, res) => {
	try { 
    
		const cards = await User.findAll({order: [["id", "ASC"]],})
		res.json(cards)
	} catch (error) {
		res.status(418).json({ message: error.message })
	}
})

module.exports = router;