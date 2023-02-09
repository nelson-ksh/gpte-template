import Head from "next/head";
import Link from "next/link";
import { CardanoWallet } from "@meshsdk/react";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Gimbal Project Treasury and Escrow</title>
        <meta name="description" content="A Cardano dApp powered my Mesh" />
        {/* <link
          rel="icon"
          href="https://meshjs.dev/favicon/favicon-32x32.png"
        /> */}
        {/* <link
          href="https://meshjs.dev/css/template.css"
          rel="stylesheet"
          key="mesh-demo"
        /> */}
      </Head>

      <main className="main">
        <h1 className="title">
          <Link href="https://gimbalabs.com">Gimbalabs</Link> GPTE
        </h1>

        <div className="connect">
          <CardanoWallet />
        </div>

        <div className="grid">
          <Link href="#" className="card">
            <h2>Projects</h2>
            <p>
              Start your Cardano development journey by participating in projects and making impactful contributions.
            </p>
          </Link>

          <Link href="#" className="card">
            <h2>Contributions</h2>
            <p>
              Keep track of your commitments along with ongoing and fulfilled contributions from peers.
            </p>
          </Link>

          <Link href="/manage" className="card">
            <h2>Manage</h2>
            <p>
              Update treasury by seamlessly adding funds and tokens, and distribute rewards for escrow commitments with ease.
            </p>
          </Link>
        </div>
      </main>

      {/* <footer className="footer">
        <MeshBadge dark={true} />
      </footer> */}
    </div>
  );
}
