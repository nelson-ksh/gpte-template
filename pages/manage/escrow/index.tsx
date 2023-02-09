import Head from "next/head";
import { CardanoWallet, MeshBadge } from "@meshsdk/react";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Manage</title>
      </Head>

      <main className="main">
        <h1 className="title">
          Escrow Contract
        </h1>

        <div className="grid">
          <a href="https://gitlab.com/gimbalabs/plutus-pbl-summer-2022/projects/gpte/gpte-plutus-v2/-/blob/master/readme.md" className="card">
            <h2>Documentation</h2>
            <p>
              Learn escrow contract components.
            </p>
          </a>
          
          <div className="card">
            <h2>Create Contract</h2>
              {/* Create Escrow Contract <br/><br/> */}
              <a className="demeter-button">
                Demeter.run
              </a>
          </div>
        </div>
        
        {/* <a href="https://demeter.run/starter-kits">https://demeter.run/starter-kits</a><br/>
        <a href="https://github.com/txpipe/awesome-starter-kits">https://github.com/txpipe/awesome-starter-kits</a> */}

      </main>

    </div>
  );
}