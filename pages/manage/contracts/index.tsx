import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Manage</title>
      </Head>

      <main className="main">
        {/* <h1 className="title">
          Escrow Contract
        </h1> */}

        <div className="grid">
          <Link href="https://gitlab.com/gimbalabs/plutus-pbl-summer-2022/projects/gpte/gpte-plutus-v2/-/blob/master/readme.md" className="card">
            <h2>Documentation</h2>
            <p>
              Learn about the contracts.
            </p>
          </Link>
          
          <div className="card">
            <h2>Create Contract</h2>
              {/* Create Escrow Contract <br/><br/> */}
              <Link href="#" className="demeter-button">
                Demeter.run
              </Link>
          </div>
        </div>
        TO-DO
        <Link href="https://demeter.run/starter-kits">https://demeter.run/starter-kits</Link>
        <Link href="https://github.com/txpipe/awesome-starter-kits">https://github.com/txpipe/awesome-starter-kits</Link>

      </main>

    </div>
  );
}
