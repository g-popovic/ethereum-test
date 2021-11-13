import Web3 from 'web3';
import { config } from 'dotenv';
config();

const url = process.env.WEB3_INFURA_URI;
const web3 = new Web3(url);

async function fetchAccountBalance() {
	const address = '0x73BCEb1Cd57C711feaC4224D062b0F6ff338501e';
	const balance = await web3.eth.getBalance(address);
	console.log({ balance: web3.utils.fromWei(balance, 'ether') });

	web3.eth.accounts.create();
}

async function createNewAccount() {
	const account = web3.eth.accounts.create();
	console.log({ account });
}

createNewAccount();
