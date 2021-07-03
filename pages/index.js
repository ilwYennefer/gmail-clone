import { getSession } from "next-auth/client";
import Head from "next/head";
import { useSelector } from "react-redux";
import EmailList from "../components/EmailList";
import Header from "../components/Header";
import Login from "../components/Login";
import SendMail from "../components/SendMail";
import Sidebar from "../components/Sidebar";
import { selectSendMessageIsOpen } from "../features/mailSlice";
import { db } from "../firebase";

export default function Home({ emails, session }) {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  if (!session) return <Login />;

  return (
    <div className="home">
      <Head>
        <title>Gmail</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="home__body">
        <Sidebar />
        <EmailList emails={emails} />
      </main>
      {sendMessageIsOpen && <SendMail />}
    </div>
  );
}

export async function getServerSideProps(context) {
  // Get User
  const session = await getSession(context);

  const emails = await db
    .collection("emails")
    .orderBy("timestamp", "desc")
    .get();

  const docs = emails.docs.map((email) => ({
    id: email.id,
    ...email.data(),
    timestamp: null,
  }));

  return {
    props: { session, emails: docs },
  };
}
