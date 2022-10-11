import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Iframe from 'react-iframe';

export const FooterInfo = () => {
  return (
    <>
      <footer className="mt-5 text-center text-lg-start bg-light text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>SÍGUENOS EN REDES SOCIALES:</span>
          </div>

          <div>
            <a href="https://www.facebook.com/Macropay-104888348563048/" className="me-4 text-reset">
              <FacebookIcon />
            </a>
            <a href="https://www.instagram.com/macropayoficial_mx/" className="me-4 text-reset">
              <InstagramIcon />
            </a>
            <a href="https://www.linkedin.com/company/macropaymx/" className="me-4 text-reset">
              <LinkedInIcon />
            </a>
            <a href="https://www.youtube.com/c/MacropayOficial" className="me-4 text-reset">
              <YouTubeIcon />
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>DIRECCIÓN
                </h6>
                <p>Calle 51 Esquina con 52 Centro, 97880 Oxcutzcab, Yuc.</p>
                <Iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119218.96061817883!2d-89.73249112943682!3d20.968872924574075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f57ab8ffc9fe57b%3A0xac21ec33e7a0f314!2sMacropay!5e0!3m2!1ses-419!2smx!4v1665512688469!5m2!1ses-419!2smx"
                  width="400"
                  height="300"
                />
              </div>
            </div>
          </div>
        </section>
      </footer>
    </>
  )
}
