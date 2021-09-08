import { TezosToolkit, MichelsonMap } from "@taquito/taquito";
import { importKey } from "@taquito/signer";
import { char2Bytes } from "@taquito/utils";

class Tezos {
  constructor() {
    this.tezos = new TezosToolkit("https://granadanet.smartpy.io/");
    const FAUCET_KEY = {
      mnemonic: [
        "feed",
        "awake",
        "slide",
        "flower",
        "now",
        "foster",
        "matter",
        "evolve",
        "waste",
        "usage",
        "logic",
        "divert",
        "oxygen",
        "few",
        "increase",
      ],
      secret: "30a39b6abe9788a152798e13ed8d1e962f003d5c",
      amount: "5167261688",
      pkh: "tz1gcBJ67BBdCxeekyzwjSNf4ovgjyDBStuc",
      password: "00rXis98UG",
      email: "ajcwpgbg.adksqkvr@tezos.example.org",
    };
    importKey(
      this.tezos,
      FAUCET_KEY.email,
      FAUCET_KEY.password,
      FAUCET_KEY.mnemonic.join(" "),
      FAUCET_KEY.secret
    ).catch((e) => console.error(e));
  }
  async sendTransaction(from, transactionId, amount) {
    console.log(from, transactionId);
    const contract = await this.tezos.wallet.at(
      "KT1Dz8vtfzCmqGVV5nYZtynVwyctpheHYZf7"
    );
    const op = await contract.methods
      .transfer([
        {
          from_: from,
          txs: [
            {
              to_: transactionId,
              token_id: 0,
              amount: amount,
            },
          ],
        },
      ])
      .send()
      .catch((err) => console.log(err));
    const results = await op;
    console.log(
      "You can check your transaction on : ",
      `https://granada.tzstats.com/${results.opHash}`
    );
    var balance = localStorage.getItem("balance");
    balance -= amount;
    localStorage.setItem("balance", balance);
    return true;
  }

  async initMint(reciepient) {
    const contract = await this.tezos.wallet.at(
      "KT1Dz8vtfzCmqGVV5nYZtynVwyctpheHYZf7"
    );
    const op = await contract.methods
      .mint(
        reciepient,
        50,
        MichelsonMap.fromLiteral({
          symbol: char2Bytes("ZCO"),
          name: char2Bytes("Tezco Tokens"),
        }),
        0
      )
      .send()
      .catch((err) => console.log(err));
    const results = await op;
    console.log(
      "You can check your transaction on : ",
      `https://granada.tzstats.com/${results.opHash}`
    );
  }
}

export default Tezos;
