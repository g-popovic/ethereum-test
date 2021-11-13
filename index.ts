import { AbiItem } from 'web3-utils';
import Web3 from 'web3';
import { config } from 'dotenv';
import { binanceTokenAbi } from './data';
config();

const url = process.env.WEB3_INFURA_URI;
const web3 = new Web3(url);

async function fetchAccountBalance(address: string) {
	const balance = await web3.eth.getBalance(address);
	console.log({ balance: web3.utils.fromWei(balance, 'ether') });

	web3.eth.accounts.create();
}

function createNewAccount() {
	const account = web3.eth.accounts.create();
	console.log({ account });
}

async function readSmartContractData() {
	const binanceTokenContractAddress = '0xB8c77482e45F1F44dE1745F52C74426C631bDD52';

	const contract = new web3.eth.Contract(
		binanceTokenAbi as AbiItem[],
		binanceTokenContractAddress
	);

	const contractName = await contract.methods.name().call();
	const contractTotalSupply = await contract.methods.totalSupply().call();
	console.log({ contractName, contractTotalSupply });
}

readSmartContractData();
