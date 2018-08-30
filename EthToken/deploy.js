// your code here
const HDWalletProvider = require('truffle-hdwallet-provider')// new

const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider// your code here 
 = new HDWalletProvider('such culture pony drink insect color close glimpse enough gentle someone toy' 'https://rinkeby.infura.io/7c3cf649ac1e453ebf56dc8af63e11ec'); 
                  
const web3 // your code here
= new Web3(provider);  

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]); // address of the deployer

  const result // your code here
   = await new web3.eth.Contract(JSON.parse(interface))
   .deploy({ data: '0x' + bytecode ,  arguments: [100000000000000000000, 'BCCoin', 0, 'BCC' , 100]  })
   .send({ gas: '1000000', from: accounts[0] });
  
  console.log('Contract deployed to', result.options.address); //address of the deployed contract
};
deploy();


