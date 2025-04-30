import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src="/assets/iteration-2/footer/logo-footer.svg" alt="Logo" />
      </div>

      <div className="footer-container">
        <div className="footer-contact">
          <ul>
            <li><img src="/assets/iteration-2/footer/icons/icon-1.png" alt="" />341 Londonderry Road, İstanbul Türkiye</li>
            <li><img src="/assets/iteration-2/footer/icons/icon-2.png" alt="" />aciktim@teknolojikyemekler.com</li>
            <li><img src="/assets/iteration-2/footer/icons/icon-3.png" alt="" />+90 216 123 45 67</li>
          </ul>
        </div>

        <div className="footer-menu">
          <h4>Hot Menu</h4>
          <a href="#">Terminal Pizza</a>
          <a href="#">6 Kişilik Hackathlon Pizza</a>
          <a href="#">useEffect Tavuklu Pizza</a>
          <a href="#">Beyaz Console Frosty</a>
          <a href="#">Testler: Geçti Mutlu Burger</a>
          <a href="#">Position Absolute Acı Burger</a>
        </div>

        <div className="footer-instagram">
          <h4>Instagram</h4>
          <div className="footer-gallery">
            {[0,1,2,3,4,5].map(i => (
              <img
                key={i}
                src={`/assets/iteration-2/footer/insta/li-${i}.png`}
                alt={`Insta ${i}`}
              />
            ))}
          </div>
        </div>
      </div>

      <p className="copyrigth">© 2023 Teknolojik Yemekler.</p>
    </footer>
  );
}

export default Footer;
