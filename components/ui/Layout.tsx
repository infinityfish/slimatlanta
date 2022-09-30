import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  
  return (
    <>
      <Head>
        <title>SlimAtlanta by ReGenesisDoc LLC </title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <div className="appflex">
        <Header />
         <div className="main">{children}
          
          <Footer />
         </div>
     
      </div>
    </>
  );
};

export default Layout;