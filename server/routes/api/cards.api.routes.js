const router = require('express').Router()
const { Card } = require('../../db/models')
const verifyAccessToken = require("../../middleware/verifyAccessToken");


router.get('/', async (req, res) => {
	try { 
    
		const cards = await Card.findAll({order: [["id", "ASC"]],})
		res.json(cards)
	} catch (error) {
		res.status(418).json({ message: error.message })
	}
})

router.get('/:id', async (req, res) => {
	const { id } = req.params // id = req.params.id
	if (isNaN(+id)) {
		return res.status(400).json({ message: 'Id не число' })
	}
	try {
		const cars = await Card.findByPk(id)
		res.json(cars)
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
})

router.post('/', verifyAccessToken ,async (req, res) => {
	const { name, img, price } = req.body
	try {
		const cars = await Card.create({
			name,
			img,
			price
		})
		res.json(cars)
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
})

router.delete("/:id", verifyAccessToken, async (req, res) => {
  const { id } = req.params;
  res.locals.user;
  try {
    const card = await Card.destroy({
      where: { id },
    });
    if (card > 0 ){
      res.json(card);
    } else {
      res.status(403).json({ message: "Не твоя, вот и бесишься!" })
    }
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;