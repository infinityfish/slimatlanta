import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';
import Script from 'next/script';

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
       {/* <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
   
      
      <Script strategy="lazyOnload" id="google-script">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script> */}
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