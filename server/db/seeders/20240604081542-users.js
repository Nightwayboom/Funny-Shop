'use strict'

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			'Users',
			[
				{
					name: 'Vladyan',
					login: "vladyan",
          email: "vladyan@vladyan",
          password : "1234",
          isAdmin : true
				},
        {
					name: 'Seller',
					login: "seller",
          email: "seller@seller",
          password : "1234",
          isAdmin : false
				}
			],
			{}
		)
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete('Users', null, {})
	},
}
