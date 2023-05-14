// Client code...
console.log(pg.PROGRAM_ID.toString());
const blockhashInfo = await pg.connection.getLatestBlockhash();
const balance = await pg.connection.getBalance(pg.wallet.publicKey);
if (balance === 0) {
  await pg.connection.requestAirdrop(pg.wallet.publicKey, 1e9);
} else {
  console.log("Balance ", balance);
}

const tx = new web3.Transaction({
  ...blockhashInfo,
});

tx.add(
  new web3.TransactionInstruction({
    programId: pg.PROGRAM_ID,
    keys: [],
    data: Buffer.from([]),
  })
);

tx.sign(pg.wallet.keypair);

const txHash = await pg.connection.sendRawTransaction(tx.serialize());

console.log(txHash);
