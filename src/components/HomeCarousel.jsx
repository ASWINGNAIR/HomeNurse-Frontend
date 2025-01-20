import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function HomeCarousel() {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img src="https://content.jdmagicbox.com/comp/malappuram/d8/9999px483.x483.170614160123.w7d8/catalogue/reliable-home-nursing-chelembra-malappuram-home-nursing-services-3rr0pcb.jpg" alt="We Care Our Oldages" className="d-block w-100 img-fluid" style={{ maxHeight: "600px", objectFit: "cover" }} />
          <Carousel.Caption>
            <h3>We Care Our Oldages</h3>
            <p>Our basic nurses assist in daily activities, hygiene, and mobility.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={1000}>
          <img src="https://media.istockphoto.com/id/1398823552/photo/pediatrician-nurse-taking-care-of-newborn-baby-at-hospital-ward.jpg?s=612x612&w=0&k=20&c=Kvg9P5Vm9x6MKoTXFRzpGkyKUMN_qgcgIm4GftSOpEo=" alt="We care Our Children" className="d-block w-100 img-fluid" style={{ maxHeight: "600px", objectFit: "cover" }} />
          <Carousel.Caption>
            <h3>We care Our Children</h3>
            <p>Provide evidence-based care for children and young people.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item interval={1000}>
          <img src="https://media.istockphoto.com/id/1328200664/photo/nursing-home.jpg?s=612x612&w=0&k=20&c=9tFrJ0Y3edKCzQjftkozNd4ZGZvIj2CTIfhHOeLaOnE=" alt="We Care Postoperative people" className="d-block w-100 img-fluid" style={{ maxHeight: "600px", objectFit: "cover" }} />
          <Carousel.Caption>
            <h3>We Care Postoperative People</h3>
            <p>Postoperative care is the type of home care service provided after a surgical procedure.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>

  )
}

export default HomeCarousel