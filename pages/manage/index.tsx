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
          Escrow
        </h1> */}

        <div className="grid">
          <Link href="/manage/contracts" className="card">
            <h2>Initialize Contracts</h2>
            <p>
              Initialize new Escrow / Treasury contract.
            </p>
          </Link>

          <Link href="#" className="card">
            <h2>New Token</h2>
            <p>
              Mint a new contributor token.
            </p>
          </Link>
          
          <Link href="#" className="card">
            <h2>Distribute Rewards</h2>
            <p>
              Distribute completed commitments.
            </p>
          </Link>
        </div>

        <h1 className="title" style={{marginTop: "50px"}}>
          Treasury
        </h1>

        <div className="grid">
          {/* <Link href="#" className="card">
            <h2>Initialize Treasury</h2>
            <p>
              Initialize a new treasury contract.
            </p>
          </Link> */}

          <Link href="#" className="card">
            <h2>Fund Treasury</h2>
            <p>
              Add fund to existing treasury.
            </p>
          </Link>

          <Link href="#" className="card">
            <h2>Update Inline Datum*</h2>
            <p>
              Update inline datum at Treasury Contract
            </p>
          </Link>
        </div>

        <h1 className="title" style={{marginTop: "50px"}}>
          Projects
        </h1>

        <div className="grid">
          <Link href="#" className="card">
            <h2>New Project</h2>
            <p>
              Post a new project.
            </p>
          </Link>

          <Link href="#" className="card">
            <h2>Edit Project</h2>
            <p>
              Make changes to projects.
            </p>
          </Link>

          <Link href="#" className="card">
            <h2>Drafts</h2>
            <p>
              Create project drafts.
            </p>
          </Link>
        </div>

        {/* <h1 className="title">
          Contributor Token
        </h1>

        <div className="grid">
          <Link href="#" className="card">
            <h2>New Token</h2>
            <p>
              Mint a new contributor token.
            </p>
          </Link>
        </div> */}
      </main>

    </div>
  );
}
