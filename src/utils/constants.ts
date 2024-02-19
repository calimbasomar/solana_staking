import { PublicKey } from "@solana/web3.js";
import { BN } from "@project-serum/anchor";

const RPC_ENDPOINT = process.env.NEXT_PUBLIC_RPC as string;

const PORK_MINT = new PublicKey(process.env.NEXT_PUBLIC_PORK_MINT as string);

const PROGRAM_ID = "FhWWsKM5erDU1xbhkpZayeieAXhGXauKZWKmRjEL9BZW";

const TREASURY_ADDRESS = new PublicKey("HMXh8po6J3c319NeqkXMrJYDJnTK69fvDhK5p6KDWLgJ");

const DECIMALS = new BN(1000_000_000);

export {
  RPC_ENDPOINT,
  PORK_MINT,
  PROGRAM_ID,
  TREASURY_ADDRESS,
  DECIMALS,
}
