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
          Escrow
        </h1>

        <div className="grid">
          <a href="/manage/escrow" className="card">
            <h2>Initialize Escrow</h2>
            <p>
              Initialize a new escrow contract.
            </p>
          </a>
          
          <a href="#" className="card">
            <h2>Distribute Commits</h2>
            <p>
              Distribute completed commits.
            </p>
          </a>
        </div>

        <h1 className="title">
          Treasury
        </h1>

        <div className="grid">
          <a href="#" className="card">
            <h2>Initialize Treasury</h2>
            <p>
              Initialize a new treasury contract.
            </p>
          </a>

          <a href="#" className="card">
            <h2>Fund Treasury</h2>
            <p>
              Add fund to existing treasury.
            </p>
          </a>

          <a href="#" className="card">
            <h2>Update Inline Datum*</h2>
            <p>
              Update inline datum at Treasury Contract
            </p>
          </a>
        </div>

        <h1 className="title">
          Projects
        </h1>

        <div className="grid">
          <a href="#" className="card">
            <h2>New Project</h2>
            <p>
              Post a new project.
            </p>
          </a>

          <a href="#" className="card">
            <h2>Edit Project</h2>
            <p>
              Make changes to projects.
            </p>
          </a>

          <a href="#" className="card">
            <h2>Drafts</h2>
            <p>
              Create project drafts.
            </p>
          </a>
        </div>

        <h1 className="title">
          Contributor Token
        </h1>

        <div className="grid">
          <a href="#" className="card">
            <h2>New Token</h2>
            <p>
              Mint a new contributor token.
            </p>
          </a>
        </div>
      </main>

    </div>
  );
}
