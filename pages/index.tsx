import Head from 'next/head';
import AuthStepSol from '../components/AuthStepSol';
import Navbar from '../components/Navbar';

function HomePage() {
  return (
    <>
      <Head>
        <title>Drift Discord Connect</title>
      </Head>
      <div className="bg-slate-900 px-2 py-4 text-white">
        <Navbar />
        <div className="flex flex-col items-center">
          <AuthStepSol />
        </div>
      </div>
    </>
  );
}

export default HomePage;
