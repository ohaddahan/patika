// Client
// console.log("My address:", pg.wallet.publicKey.toString());
const balance = await pg.connection.getBalance(pg.wallet.publicKey);
// console.log(`My balance: ${balance / web3.LAMPORTS_PER_SOL} SOL`);

    // console.log(`My program ID: ${pg.PROGRAM_ID.toString()}`);

     
    
    // Get latest blockhash 
    const blockhashInf = await pg.connection.getLatestBlockhash();
    // console.log(`BlockhashInf: `, blockhashInf)

    // Create transaction
    const tx = new web3.Transaction({
      ...blockhashInf,
    });

    // Add our hello world program instruction
    tx.add(
      new web3.TransactionInstruction({
            programId: pg.PROGRAM_ID,
            keys: [],
            data: Buffer.from([]),
          })
    );

  // console.log(pg.wallet.keypair)
    tx.sign(pg.wallet.keypair);

// Send the transaction to the Solana cluster
const txHash = await pg.connection.sendRawTransaction(tx.serialize());
console.log(txHash);
// console.log("Tx: ", tx);
