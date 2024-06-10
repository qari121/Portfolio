import React from "react";
import userData from "@constants/data";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function Testimonials() {
    const { testimonials } = userData
    return (
        <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={6100}
        >
            {testimonials.map((testimonial, index) => (
                <div className="flex flex-col justify-center items-center p-10" key={index}>
                    <p className="font-light text-xl my-2">"{testimonial.content}"</p>
                    {/* <div className="my-2 w-20">
                        <img className="rounded-full w-full" src={testimonial.avatar} alt={testimonial.client} />
                    </div> */}
                    <p className="font-bold text-2xl">{testimonial.client}</p>
                    <p className="font-light text-slate-600">{testimonial.about}</p>
                </div>
            ))}
        </Carousel>
    )
}