require('@nomicfoundation/hardhat-toolbox')
const { alchemyRPCs, accounts } = require('./secrets')

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
	networks: {
		mumbai: {
			url: alchemyRPCs.mumbai,
			accounts,
		},
		goreli: {
			url: alchemyRPCs.goreli,
			accounts,
		},
	},
	paths: {
		sources: './contracts',
		tests: './test',
		cache: './cache',
		artifacts: './artifacts',
	},
	solidity: '0.8.4',
}
