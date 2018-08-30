import Web3 from 'web3';

// PROVIDER OF METAMASK INJECTED IN CHROME
const web3 =  new Web3(window.web3.currentProvider)// your code here;

export default web3;