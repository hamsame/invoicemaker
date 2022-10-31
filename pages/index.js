import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import form2 from "../public/images/form2.png"
import form3 from "../public/images/form2.png"
import invoicePic from "../public/images/final-invoice.png"

export default function Home() {
  return (
    <>
      <Head>
        <title>Invoice Maker</title>
        <meta
          name="description"
          content="Create an invoice to send to a client for your products or services."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <header className="index-header">
          <h1>Create an invoice in three steps</h1>
          <Link href="/create">
            <a>Get Started</a>
          </Link>
        </header>

        <section className="app-doc">
          <article>
            <h2>Fill in the form</h2>
            <Image src={form2} alt="Form inputs" />
          </article>

          <article>
            <h2>Add your products/services</h2>
            <Image src={form3} alt="Services form" />
          </article>

          <article>
            <h2>Download the invoice</h2>
            <Image src={invoicePic} alt="Final Invoice" />
          </article>
        </section>
      </main>
      <footer>
        <p>Created By Hamsa Elmi &copy; 2022</p>
      </footer>
    </>
  )
}
