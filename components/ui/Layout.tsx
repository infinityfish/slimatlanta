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
       
        <Script id="tiktok-pixel"
          strategy="afterInteractive">
            
          {`!function (w, d, t) {
              w.TiktokAnalyticsObject=t;
              var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};
  
              ttq.load('CD045PRC77U87GSMJ23G');
              ttq.page();
            }(window, document, 'ttq');
            
          `}

          </Script>
      </Head>
       <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
   
      
      <Script strategy="afterInteractive" id="google-script">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script> 
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