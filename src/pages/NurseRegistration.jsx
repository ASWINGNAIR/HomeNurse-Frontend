import React from 'react'
import AddProfile from '../components/AddProfile'
import Header from '../components/Header'



function NurseRegistration() {

  
  return (
    <>
        <Header/>

        <div className='container'>
            <h1 className='text-center' style={{marginTop:"120px"}}>Home Nurse Registration Platform</h1>
            <h3 className='p-3'>About Us</h3>
            <p className='fs-5'>Care Partner is an innovative online platform designed to connect skilled home nurses with individuals or families seeking personalized healthcare services. It acts as a bridge, ensuring that users can easily find professional caregivers who meet their specific needs, while providing nurses a space to showcase their skills and grow their careers. <br /> This platform offers a seamless experience for both parties, combining convenience, trust, and high-quality care.For nurses, Care Partner provides an opportunity to register, create detailed profiles, and highlight their qualifications, experience, and specialties such as pediatric care, elderly care, or post-operative care. Through this, they gain visibility and access to meaningful job opportunities, enabling them to work directly with clients without intermediaries. Users, on the other hand, can browse verified profiles, read reviews, and contact nurses who match their requirements.The platform supports a wide range of services, including general nursing, physiotherapy, geriatric care, chronic illness management, and palliative care. <br /> Users can book services quickly and efficiently, ensuring timely assistance for their loved ones. A secure communication system allows both parties to interact directly, fostering transparency and building trust.What sets Care Partner apart is its dedication to quality and reliability. The platform ensures that all nurses undergo verification, and users can rely on detailed reviews and ratings for informed decisions. <br /> It also provides tools for nurses to manage their schedules and track payments, making it a complete solution for healthcare professionals.The mission of Care Partner is to redefine home healthcare by making compassionate, patient-centered services accessible to everyone. It envisions a future where finding reliable nursing care is no longer a challenge, but an empowering process for users and nurses alike.</p>
            <p className='fs-5'>There are multiple services like Child care , Oldage Care ,Postoperative care etc so interested and eligible nurses can join our team and serve the nation. <br /> <span className='text-danger fw-bold'>To join our team fill the form that follows...</span></p>
        </div>

        <AddProfile/>

    </>
  )
}

export default NurseRegistration