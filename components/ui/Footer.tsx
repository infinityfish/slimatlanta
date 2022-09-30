import Link from 'next/link';
import CookieConsent, { Cookies } from 'react-cookie-consent';

const Footer = () => {
  return (
    <div className="footer"> 
      <CookieConsent
        location="bottom"
        buttonText="OK I Understand"
        // cookieName="myAwesomeCookieName2"
        style={{ background: '#000000' }}
        buttonStyle={{
          color: '#30cd30',
          fontSize: '16px',
          background: '#ffffff',
        }}
        expires={365}
      >
        This website uses cookies to enhance the user experience.{' '}
        <Link href="/privacy">
          <a> Read our Privacy Policy here</a>
        </Link>
      </CookieConsent>
      Copyright &copy; 2022  {'  '}  {'  '} {' - '}
      <Link href="/">
        <a> SlimAtlanta by ReGenesisDoc LLC </a>
      </Link>
      {' | '}
      <Link href="#">
        <a> Privacy Policy </a>
      </Link>
      {' | '}
      <Link href="#">
        <a> Terms and conditions </a>
      </Link>
      {' | '}
      <Link href="#">
        <a> Contact Us </a>
      </Link>

    </div>
  );
};

export default Footer;