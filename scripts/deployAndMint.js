// const hre = require('hardhat')
const { FXRootContractAbi } = require('../contractABIs')

async function main() {
	const NftCollection = await ethers.getContractFactory('BoredKitty')
	const nftCollection = await NftCollection.deploy()
	await nftCollection.deployed()

	console.log('BoredKitty deployed to:', nftCollection.address)

	nftCollection.mint(3)
	console.log('Mint completed')
}

main().catch((error) => {
	console.error(error)
	process.exitCode = 1
})
