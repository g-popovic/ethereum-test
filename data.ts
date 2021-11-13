export const binanceTokenAbi = [
	{
		'constant': true,
		'inputs': [],
		'name': 'name',
		'outputs': [{ 'name': '', 'type': 'string' }],
		'payable': false,
		'type': 'function'
	},
	{
		'constant': false,
		'inputs': [
			{ 'name': '_spender', 'type': 'address' },
			{ 'name': '_value', 'type': 'uint256' }
		],
		'name': 'approve',
		'outputs': [{ 'name': 'success', 'type': 'bool' }],
		'payable': false,
		'type': 'function'
	},
	{
		'constant': true,
		'inputs': [],
		'name': 'totalSupply',
		'outputs': [{ 'name': '', 'type': 'uint256' }],
		'payable': false,
		'type': 'function'
	},
	{
		'constant': false,
		'inputs': [
			{ 'name': '_from', 'type': 'address' },
			{ 'name': '_to', 'type': 'address' },
			{ 'name': '_value', 'type': 'uint256' }
		],
		'name': 'transferFrom',
		'outputs': [{ 'name': 'success', 'type': 'bool' }],
		'payable': false,
		'type': 'function'
	},
	{
		'constant': true,
		'inputs': [],
		'name': 'decimals',
		'outputs': [{ 'name': '', 'type': 'uint8' }],
		'payable': false,
		'type': 'function'
	},
	{
		'constant': false,
		'inputs': [{ 'name': 'amount', 'type': 'uint256' }],
		'name': 'withdrawEther',
		'outputs': [],
		'payable': false,
		'type': 'function'
	},
	{
		'constant': false,
		'inputs': [{ 'name': '_value', 'type': 'uint256' }],
		'name': 'burn',
		'outputs': [{ 'name': 'success', 'type': 'bool' }],
		'payable': false,
		'type': 'function'
	},
	{
		'constant': false,
		'inputs': [{ 'name': '_value', 'type': 'uint256' }],
		'name': 'unfreeze',
		'outputs': [{ 'name': 'success', 'type': 'bool' }],
		'payable': false,
		'type': 'function'
	},
	{
		'constant': true,
		'inputs': [{ 'name': '', 'type': 'address' }],
		'name': 'balanceOf',
		'outputs': [{ 'name': '', 'type': 'uint256' }],
		'payable': false,
		'type': 'function'
	},
	{
		'constant': true,
		'inputs': [],
		'name': 'owner',
		'outputs': [{ 'name': '', 'type': 'address' }],
		'payable': false,
		'type': 'function'
	},
	{
		'constant': true,
		'inputs': [],
		'name': 'symbol',
		'outputs': [{ 'name': '', 'type': 'string' }],
		'payable': false,
		'type': 'function'
	},
	{
		'constant': false,
		'inputs': [
			{ 'name': '_to', 'type': 'address' },
			{ 'name': '_value', 'type': 'uint256' }
		],
		'name': 'transfer',
		'outputs': [],
		'payable': false,
		'type': 'function'
	},
	{
		'constant': true,
		'inputs': [{ 'name': '', 'type': 'address' }],
		'name': 'freezeOf',
		'outputs': [{ 'name': '', 'type': 'uint256' }],
		'payable': false,
		'type': 'function'
	},
	{
		'constant': false,
		'inputs': [{ 'name': '_value', 'type': 'uint256' }],
		'name': 'freeze',
		'outputs': [{ 'name': 'success', 'type': 'bool' }],
		'payable': false,
		'type': 'function'
	},
	{
		'constant': true,
		'inputs': [
			{ 'name': '', 'type': 'address' },
			{ 'name': '', 'type': 'address' }
		],
		'name': 'allowance',
		'outputs': [{ 'name': '', 'type': 'uint256' }],
		'payable': false,
		'type': 'function'
	},
	{
		'inputs': [
			{ 'name': 'initialSupply', 'type': 'uint256' },
			{ 'name': 'tokenName', 'type': 'string' },
			{ 'name': 'decimalUnits', 'type': 'uint8' },
			{ 'name': 'tokenSymbol', 'type': 'string' }
		],
		'payable': false,
		'type': 'constructor'
	},
	{ 'payable': true, 'type': 'fallback' },
	{
		'anonymous': false,
		'inputs': [
			{ 'indexed': true, 'name': 'from', 'type': 'address' },
			{ 'indexed': true, 'name': 'to', 'type': 'address' },
			{ 'indexed': false, 'name': 'value', 'type': 'uint256' }
		],
		'name': 'Transfer',
		'type': 'event'
	},
	{
		'anonymous': false,
		'inputs': [
			{ 'indexed': true, 'name': 'from', 'type': 'address' },
			{ 'indexed': false, 'name': 'value', 'type': 'uint256' }
		],
		'name': 'Burn',
		'type': 'event'
	},
	{
		'anonymous': false,
		'inputs': [
			{ 'indexed': true, 'name': 'from', 'type': 'address' },
			{ 'indexed': false, 'name': 'value', 'type': 'uint256' }
		],
		'name': 'Freeze',
		'type': 'event'
	},
	{
		'anonymous': false,
		'inputs': [
			{ 'indexed': true, 'name': 'from', 'type': 'address' },
			{ 'indexed': false, 'name': 'value', 'type': 'uint256' }
		],
		'name': 'Unfreeze',
		'type': 'event'
	}
];
