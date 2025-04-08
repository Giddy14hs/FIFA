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
import ScrollAnimation from '../../components/ScrollAnimation'

const Products = () => {
  const lazyImagesRef = useRef([]);
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    window.scrollTo(0, 0);
    navigate(path);
  };

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

  const products = [
    {
      image: image9,
      title: "Business Loans",
      description: "A loan to grow or enhance an existing business or expand into another business venture.",
      path: '/products/businessLoans'
    },
    {
      image: image10,
      title: "Msingi Loans",
      description: "A loan to start a new business for a client without an existing business but has the desire to develop their business skills to support themselves and/or their family.",
      path: '/products/msingiLoans'
    },
    {
      image: image11,
      title: "Salaried Loans",
      description: "This product is to cater for members of staff of private and public institutions who earn low income and are in need of loans to develop themselves and their families.",
      path: '/products/salariedLoans'
    },
    {
      image: image12,
      title: "Group Loans",
      description: "The product is for groups running successful table banking and requires money to meet its members' demand.",
      path: '/products/groupLoans'
    },
    {
      image: image13,
      title: "Individual Loans",
      description: "These are loans given to an individual who wants to expand their business and they need not to be in a group. The loans will be secured.",
      path: '/products/individualLoans'
    },
    {
      image: image14,
      title: "Special Loans",
      description: "The purpose is to provide customized financial solutions that empower individuals and small businesses to achieve their unique goals.",
      path: '/products/specialLoans'
    },
    {
      image: image15,
      title: "Savings Plan",
      description: "The product is for our clients, encouraging them to save for a rainy day, emergency, asset, investment or holidays and family needs.",
      path: '/products/savingsplan'
    },
    {
      image: image16,
      title: "Benevolent Fund",
      description: "This product is to support our client in times of demise of one of the nuclear family members.",
      path: '/products/benevolentfund'
    }
  ];

  return (
    <section id="product" className="mt-5 pb-5">
      <div className="products-grid">
        {products.map((product, index) => (
          <ScrollAnimation key={index} delay={index * 0.1}>
            <div className="product-card">
              <div className="imageContainer">
                <img
                  ref={el => lazyImagesRef.current[index] = el}
                  data-src={product.image}
                  src="placeholder.jpg"
                  alt={product.title}
                  className="img-fluid lazy"
                />
                <div className="imgOverlay">
                  <div className="imgText">
                    <h4 className="animate__animated animate__bounceIn animate__delay-2s">{product.title}</h4>
                    <p className="animate__animated animate__zoomIn animate__delay-1s">{product.description}</p>
                    <button
                      type="button"
                      className="btn btn-outline-primary px-3"
                      onClick={() => handleNavigation(product.path)}
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </section>
  );
};

export default Products;






