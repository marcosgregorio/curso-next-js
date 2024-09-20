import Head from "next/head";
import localFont from "next/font/local";
import { Banner, Container, Modal, Star } from "@/components/styles";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <html>
        <Container>
          <Banner />
          <div style={{display: "flex", justifyContent: "center",}}>

            <Modal >
              <div style={{padding: "20px"}}>
                <Star>
                  <div id="axis-x"></div>
                  <div id="axis-y"></div>
                </Star>
                <h1>FAQs</h1>
                <p>This is a modal</p>
              </div>
            </Modal>
          </div>
        </Container>
      </html>
    </>
  );
}
