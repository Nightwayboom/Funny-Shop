'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'Cards',
			[
				{
					name: 'Cушка',
					img: "https://e2.edimdoma.ru/data/ingredients/0000/2274/2274-ed4_wide.jpg?1518795424",
          price: 1000
				},
        {
					name: 'Килька',
					img: "https://lh3.googleusercontent.com/proxy/m-Kiz6_H328ENkh55-P_0JTi99uyQouCcwir88HhQpDoZJybXjHMJuNmgfTD9enRE02vf2RptTV7CXjzMx9zW14H-GNMqivwmFqY6zz6mWcPniXSW7Hkhx7IG-YtWGr4g-CnAtLzScucW-Eeb8g2_pavXdQtbNR43bcpCg",
          price: 42
				},
        {
					name: 'РПГ',
					img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Rpg-7.jpg/300px-Rpg-7.jpg",
          price: 552
				},
        {
					name: 'Скотч Баленсиага',
					img: "https://icdn.lenta.ru/images/2024/03/12/11/20240312114432753/wide_4_3_c59544c644217a964afbed1c931d174f.jpg",
          price: 10
				},
        {
					name: 'Вехотка',
					img: "https://st33.stpulscen.ru/images/product/347/390/976_original.jpg",
          price: 311
				},
        {
					name: 'Скелетон',
					img: "https://upload.wikimedia.org/wikipedia/ru/f/fc/Kostici.jpg",
          price: 9999
				},
			],
			{}
		)
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Cards', null, {})
	},
}
