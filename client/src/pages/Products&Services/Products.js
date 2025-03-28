import React, {useEffect, useRef} from 'react'
import "./Products.css"
import image9 from '../../images/image9.jpg'
import image10 from '../../images/image10.jpg'
import image11 from '../../images/image11.jpg'
import image12 from '../../images/image12.jpg'
import image13 from '../../images/image13.jpg'
import image14 from '../../images/image14.jpg'
import image15 from '../../images/image15.jpg'
import image16 from '../../images/image16.jpg'
import { useNavigate } from 'react-router-dom'


const Products = () => {
  const lazyImagesRef = useRef([]);

  const navigate = useNavigate();

  useEffect(() => {
    const lazyImages = lazyImagesRef.current;

    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.getAttribute('data-src');
          img.classList.remove('lazy');
          img.classList.add('lazy-loaded');
          observer.unobserve(img);
        }
      });
    });

    lazyImages.forEach(img => {
      if (img) {
        imageObserver.observe(img);
      }
    });

    return () => {
      lazyImages.forEach(img => {
        if (img) {
          imageObserver.unobserve(img);
        }
      });
    };
  }, []);

  const images = [
    image9,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
  ];


  return (
    <>
      <section id="product" className="mt-5 pb-5">
        <div className="container-fluid">
        <div className="row">
          <div className="col-md-4 pb-5">
            <div className="imageContainer">
              <img  ref={el => lazyImagesRef.current[0] = el}
                    data-src={image9}
                    src="placeholder.jpg"
                    alt="Business Loans"
                    className="img-fluid lazy"/>
              <div className="imgOverlay pb-3">
                <div className="imgText">
                  <h4 className = "animate__animated animate__bounceIn animate__delay-2s">Business Loans</h4>
                  <p className = "animate__animated animate__zoomIn animate__delay-1s">A loan to grow or enhance an existing business or expand into another business venture.</p>
                  <a href="#business">
                      <button type="button" name="button" className="btn btn-outline-primary px-3" onClick={() => navigate('/products/businessLoans')}>Read More</button>
                    </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 pb-5">
            <div className="imageContainer">
              <img ref={el => lazyImagesRef.current[1] = el}
                    data-src={image10}
                    src="placeholder.jpg"
                    alt="Msingi Loans"
                    className="img-fluid lazy"/>
              <div className="imgOverlay pb-3">
                <div className="imgText">
                  <h4 className = "animate__animated animate__bounceIn animate__delay-2s">Msingi Loans(Business Start-up Loans)</h4>
                  <p className = "animate__animated animate__zoomIn animate__delay-1s">A loan to start a new business for a client without an existing business but has the desire to develop their business skills to support themselves and/or their family.</p>
                  <button type="button" name="button" className="btn btn-outline-primary px-3" onClick={() => navigate('/products/msingiLoans')}>Read More</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 pb-5">
            <div className="imageContainer">
              <img ref={el => lazyImagesRef.current[2] = el}
                    data-src={image11}
                    src="placeholder.jpg"
                    alt="Salaried Loans"
                    className="img-fluid lazy"/>
              <div className="imgOverlay pb-3">
                <div className="imgText">
                  <h4 className = "animate__animated animate__bounceIn animate__delay-3s">Salaried Loans</h4>
                  <p className = "animate__animated animate__zoomIn animate__delay-2s">This product is to cater for members of staff of private and public institutions who earn low income and are in need of loans to develop themselves and their families.</p>
                  <button type="button" name="button" className="btn btn-outline-primary px-3" onClick={() => navigate('/products/salariedLoans')}>Read More</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 pb-5">
            <div className="imageContainer">
              <img ref={el => lazyImagesRef.current[3] = el}
                    data-src={image12}
                    src="placeholder.jpg"
                    alt="Group Loans"
                    className="img-fluid lazy"/>
              <div className="imgOverlay pb-3">
                <div className="imgText">
                  <h4 className = "animate__animated animate__bounceIn animate__delay-3s">Group Loans</h4>
                  <p className = "animate__animated animate__zoomIn animate__delay-2s">The product is for groups running successful table banking and requires money to meet its members' demand.</p>
                  <button type="button" name="button" className="btn btn-outline-primary px-3" onClick={() => navigate('/products/groupLoans')}>Read More</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 pb-5">
            <div className="imageContainer">
              <img ref={el => lazyImagesRef.current[4] = el}
                    data-src={image13}
                    src="placeholder.jpg"
                    alt="Individual Loans"
                    className="img-fluid lazy"/>
              <div className="imgOverlay pb-3">
                <div className="imgText">
                  <h4 className = "animate__animated animate__bounceIn animate__delay-4s">Individual Loans</h4>
                  <p className = "animate__animated animate__zoomIn animate__delay-3s">These are loans given to an individual who wants to expand their business and they need not to be in a group. The loans will be secured.</p>
                  <button type="button" name="button" className="btn btn-outline-primary px-3" onClick={() => navigate('/products/individualLoans')}>Read More</button>
                </div>
              </div>
               </div>
          </div>
          <div className="col-md-4 pb-5">
            <div className="imageContainer">
              <img ref={el => lazyImagesRef.current[5] = el}
                    data-src={image14}
                    src="placeholder.jpg"
                    alt="Special Loans"
                    className="img-fluid lazy"/>
              <div className="imgOverlay">
                <div className="imgText">
                  <h4 className = "animate__animated animate__bounceIn animate__delay-4s">Special Loans</h4>
                  <p className = "animate__animated animate__zoomIn animate__delay-3s">The purpose is to provide customized financial solutions that empower individuals and small businesses to achieve their unique goals.</p>
                  <button type="button" name="button" className="btn btn-outline-primary px-3" onClick={() => navigate('/products/specialLoans')}>Read More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
      <section>
        <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 pb-3">
            <div className="card-img">
              <img ref={el => lazyImagesRef.current[6] = el}
                  data-src={image15}
                  src="placeholder.jpg"
                  alt="Savings Plan"
                  className="img-fluid lazy"/>
              <div className="card-body">
                  <h3 className = "animate__animated animate__bounceIn animate__delay-4s">Savings Plan</h3>
                  <p className = "animate__animated animate__zoomIn animate__delay-3s">The product is for our clients, encouraging them to save for a rainy day, emergency, asset, investment or holidays and family needs.</p>
              <button type="button" name="button" className="btn btn-outline-primary px-3" onClick={() => navigate('/products/savingsplan')}>Read More</button>
              </div>
            </div>
          </div>
          <div className="col-md-6 pb-3">
            <div className="card-img">
              <img ref={el => lazyImagesRef.current[7] = el}
                  data-src={image16}
                  src="placeholder.jpg"
                  alt="Benevolent Fund"
                  className="img-fluid lazy"/>
              <div className="card-body">
                <h3 className = "animate__animated animate__bounceIn animate__delay-4s">Benevolent Fund</h3>
              <p className = "animate__animated animate__zoomIn animate__delay-3s">This product is to support our client in times of demise of one of the nuclear family members.</p>
              <button type="button" name="button" className="btn btn-outline-primary px-3" onClick={() => navigate('/products/benevolentfund')}>Read More</button>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  )
}

export default Products;






