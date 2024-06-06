const bcrypt = require("bcrypt");

const router = require("express").Router();
const { User } = require("../../db/models");
const generateTokens = require("../../utils/generateTokens");
const cookiesConfig = require("../../configs/cookiesConfig");

router.post("/login", async (req, res) => {
    const { email, password } = req.body; /// 111111
    try {
        const targetUser = await User.findOne({ where: { email} });
        if (!targetUser) return res.status(401).json({ message: "Неверный email или пароль" });
        
        const isValid = await bcrypt.compare(password, targetUser.password);
        if (!isValid) return res.status(401).json({ message: "Неверный email или пароль" })
        
        const user = targetUser.get();
        delete user.password

    
        const {accessToken, refreshToken} = generateTokens({user})
        
        res
        .cookie("refreshToken", refreshToken,cookiesConfig)
        .json({accessToken, user});

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

router.get("/logout", async (req, res) => {
    res.clearCookie("refreshToken").json({ message: "OK" });
})

router.post('/registration', async (req, res) => {
	const { login, email, password, name, isAdmin} = req.body
	console.log(req.body);
	const user = await User.findAll({
		where: { email },
	})
	if (!user.length) {
		try {
			const hash = await bcrypt.hash(password, 10)
			const user = await User.create({
				name,
				login,
				email,
				password: hash,
				isAdmin
			})
			const { accessToken, refreshToken } = generateTokens({ user })
			res
				.cookie('refreshToken', refreshToken, cookiesConfig)
				.json({ accessToken, user })
		} catch (error) {
			res.status(500).json({ message: error.message })
		}
	} else {
		res.send({ message: 'Данный email уже зарегистрирован' })
	}
})

module.exports = router;