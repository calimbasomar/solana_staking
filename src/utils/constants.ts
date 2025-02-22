import { PublicKey } from "@solana/web3.js";
import { BN } from "@project-serum/anchor";

const RPC_ENDPOINT = process.env.NEXT_PUBLIC_RPC as string;

const PORK_MINT = new PublicKey(process.env.NEXT_PUBLIC_PORK_MINT as string);

const PROGRAM_ID = "5FVv4vXjWxenXoyGreTVXvqNoNWVnDrCCZnQPfvynhbj";

const PORK_STAKE = new PublicKey("FmdbsWQ1A2FRQrNrtMMZGSUVdDwnehFUkBmKrHLzK8Ub");

const PORK_BUMP = 254;

const TREASURY_ADDRESS = new PublicKey("76hTqNGeRJ4m5j12WfwsQNJTcpyKNNUCMpKnYvmYY9Mv");

const DECIMALS = new BN(1000_000_000);

export {
  RPC_ENDPOINT,
  PORK_MINT,
  PROGRAM_ID,
  PORK_STAKE,
  PORK_BUMP,
  TREASURY_ADDRESS,
  DECIMALS,
}
