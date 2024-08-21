require('dotenv').config();
const axios = require('axios');
const { botLogger } = require('./logger');
const { getSession, saveSessionData } = require('./sessionManager');

// EVM library
const ethers = require("ethers");

const rpcUrl = process.env.EVM_RPC_URL;
const privateKey = process.env.FAUCET_PRIVATE_KEY;

if (!rpcUrl || !privateKey) {
  botLogger.error('Environment variables are not properly set');
  throw new Error('Environment variables are not properly set');
}

const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
const wallet = new ethers.Wallet(privateKey, provider);

async function sendTokens(recipientAddress) {
  try {
    const transaction = {
      to: recipientAddress,
      value: ethers.utils.parseEther("1.0"), // Sending 1 ETH
      maxPriorityFeePerGas: ethers.utils.parseUnits("100", "gwei"),
      maxFeePerGas: ethers.utils.parseUnits("100", "gwei"),
      gasLimit: ethers.utils.hexlify(21000), // No need to estimate EVM transfer
    };

    const txResponse = await wallet.sendTransaction(transaction);
    await txResponse.wait(1); // Wait for 1 confirm

    botLogger.info(`Transaction successful: ${txResponse.hash}`);
    return {
      success: true,
      transactionHash: txResponse.hash,
    };
  } catch (error) {
    botLogger.error('Error sending tokens:', error);
    return {
      success: false,
      error: error.message,
    };
  }
}

async function processFaucetRequest(ctx, userId, address) {
  const session = getSession(userId);

  try {
    const result = await sendTokens(address);
    if (result.success) {
      session.data.lastClaim = Date.now();
      session.data.lastReceived = session.data.lastReceived || {};
      session.data.lastReceived[address] = Date.now();
      saveSessionData();
      botLogger.info(`Successfully sent 1 Sei to ${address}. Transaction hash: ${result.transactionHash}`);
      const transactionHash = result.transactionHash || "unknown";
      const explorerLink = transactionHash !== "unknown" ?
        `https://seitrace.com/tx/${result.transactionHash}?chain=atlantic-2` :
        `https://seitrace.com/?chain=atlantic-2`;
      return ctx.reply(`Successfully sent 1 Sei to ${address}. [Transaction details](${explorerLink})`, { parse_mode: 'Markdown' });
    } else {
      throw new Error('Failed to send tokens. Please try again later.');
    }
  } catch (error) {
    botLogger.error('Error sending tokens:', error);
    if (error.message.includes("out of gas")) {
      return ctx.reply('Transaction failed due to out of gas. Please try again later with a higher gas limit.');
    }
    return ctx.reply('Failed to send tokens. Please try again later.');
  }
}

module.exports = {
  sendTokens,
  processFaucetRequest,
};
