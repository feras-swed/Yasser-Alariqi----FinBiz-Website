import React from 'react'
import HeadingTitle from '../ui/HeadingTitle'
import HeadingDescription from '../ui/HeadingDescription'

function TestmoinalsCardSlider() {
  return (
    <section className="container mx-auto">
        <div className="dark:bg-dark-navbarBg bg-white  py-10 md:py-20 px-4 lg:px-24">
        <HeadingTitle icon="fa-regular fa-message" title="Testimonials" />
        <HeadingDescription
            mainTitle="What are people saying"
            subTitle={`Thank you for your trust in Crypt Land! We are grateful for your feedback and are committed to providing the best [products/<br/>services offered]. Read what our clients have to say about their experience with us.`}
        />{" "}
        </div>
    </section>  )
}

export default TestmoinalsCardSlider

