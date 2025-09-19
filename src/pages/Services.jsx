import React from 'react'

function Services() {
  return (
    <div className='container-fluid my-5'>
      <div className='row my-5' align-items-center>
        <div className='col-md-6 mb-4 mb-md-0'>
          <img 
            src= "/imgs/services.jpg" 
            alt= "Our Services" 
            className= "img-fluid img-thumbnail shadow" 
          />
        </div>

        <div className='col-md-6'>
          <h2 className='mb-3'>Our Services</h2>
          <p className='text-muted'>
            At <strong>Cats World</strong>, we are dedicated to providing a comprehensive range of services to support cat lovers and their feline companions. Our offerings include expert advice on cat care, nutrition, and behavior, as well as product recommendations tailored to meet the unique needs of different cat breeds and lifestyles. We also host engaging events and workshops to foster a sense of community among cat enthusiasts, while promoting responsible pet ownership and adoption initiatives. Whether you're a seasoned cat parent or a new adopter, Cats World is here to help you create a loving and enriching environment for your furry friends.
          </p>
          <p className='text-muted'>
            Our services are designed to empower cat owners with the knowledge and resources they need to ensure the health and happiness of their pets. From personalized care plans to interactive forums where you can connect with other cat lovers, we strive to be your go-to destination for all things feline. Join us at Cats World and discover a world of support, inspiration, and joy for you and your beloved cats.
          </p>
        </div>

        <div className='row mt-5'>
        <div className='col-4 text-center shadow p-3 mb-5 bg-body rounded'>
          <h4>🩺 Cat Care & Health Guidance</h4>
          <p className='text-muted'>
            Expert articles and tips on grooming, feeding, training, behavior, and overall health to keep your cats happy and healthy.          </p>
        </div>

        <div className='col-4 text-center shadow p-3 mb-5 bg-body rounded'>
          <h4>🛍️ Product Reviews & Recommendations</h4>
          <p className='text-muted'>
            Honest and detailed reviews of the latest cat toys, treats, accessories, litter, and furniture — so you can choose what’s best for your pet.          </p>
        </div>

        <div className='col-4 text-center shadow p-3 mb-5 bg-body rounded'>
          <h4>💬 Cat Community & Forums</h4>
          <p className='text-muted'>
            A safe and friendly space where cat lovers can connect, share stories, ask questions, and get advice from other cat parents.          </p>
        </div>

        <div className='col-4 text-center shadow p-3 mb-5 bg-body rounded'>
          <h4>🏡 Adoption & Rescue Support</h4>
          <p className='text-muted'>
            Information about local shelters, adoption drives, and rescue organizations to help find loving homes for homeless and abandoned cats.  
          </p>      
        </div>

        <div className='col-4 text-center shadow p-3 mb-5 bg-body rounded'>
          <h4>📸 Cat Stories & Fun Content</h4>
          <p className='text-muted'>
            Heartwarming cat stories, cute pictures, and fun content to brighten your day and celebrate the magic of cats.       
          </p>
        </div>
          
      </div>

      </div>
    </div>
  )
}

export default Services