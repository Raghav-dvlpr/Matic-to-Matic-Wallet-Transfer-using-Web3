async function main() {
  
    const API_URL ="https://matic-mumbai.chainstacklabs.com"
    const PRIVATE_KEY=" # paste your account private key"
    const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
    const web3 = createAlchemyWeb3(API_URL);
    const myAddress = '# Paste from address' //TODO: replace this address with your own public address
   
    const nonce = await web3.eth.getTransactionCount(myAddress, 'latest'); // nonce starts counting from 0

    const transaction = {
     'to': '# Paste To address', // Address to send MATIC
     'value': 562000000000000,  // so we want to use wei convertion in "value" field => 562000000000000 wei == 0.001 ETH == 1 Matic
     'gas': 30000,
     'nonce': nonce,
     // optional data field to send message or execute smart contract
    };
   
    const signedTx = await web3.eth.accounts.signTransaction(transaction, PRIVATE_KEY);
    
    web3.eth.sendSignedTransaction(signedTx.rawTransaction, function(error, hash) {
    if (!error) {
      console.log("🎉 The hash of your transaction is: ", hash, "\n Check the status of your transaction in Polygon Scan ","Link : https://mumbai.polygonscan.com/tx/"+hash);
    } else {
      console.log("❗Something went wrong while submitting your transaction:", error)
    }
   });
}

main();

// For reference I used google....

// 1 MATIC	== 0.001 ETH 
// 0.001 ETH == 562000000000000 wei

// so we want to wei convertion in "value" field 562000000000000 wei == 0.001 ETH == 1 Matic

