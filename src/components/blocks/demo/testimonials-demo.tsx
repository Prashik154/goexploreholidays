"use client";

import { CircularTestimonials } from "@/components/testimonials/Testimonials";

export const TestimonialsDemo = () => {
  const testimonials = [
    {
      quote: "The safari experience was beyond incredible! Our guide spotted tigers that even the park rangers hadn't seen in weeks.",
      name: "Sarah Johnson",
      designation: "Wildlife Photographer",
      src: "/images/guides/kunal-goswami-5DYuCuFgJBs-unsplash.jpg",
      width: 800,
      height: 800
    },
    {
      quote: "As someone who's been on safaris across Africa and Asia, this was by far the most well-organized and ethical operation I've encountered.",
      name: "Michael Chen",
      designation: "Travel Journalist",
      src: "/images/guides/himanshu-dewangan-k9tUQNeOfx0-unsplash.jpg",
      width: 800,
      height: 800
    },
    {
      quote: "Our family had the most magical experience. The guides were so patient with our children and taught them so much about wildlife.",
      name: "The Patel Family",
      designation: "Family Vacationers",
      src: "/images/guides/family.jpg",
      width: 800,
      height: 800
    },
  ];

  return (
    <section className="py-20">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What Our Guests Say
        </h2>
        
        <div className="bg-background p-8 rounded-xl mb-12">
          <CircularTestimonials 
            testimonials={testimonials}
            autoplay={true}
          />
        </div>
        
        {/* <div className="bg-primary-foreground p-8 rounded-xl">
          <CircularTestimonials 
            testimonials={testimonials}
            autoplay={true}
            colors={{
              name: "hsl(var(--primary))",
              designation: "hsl(var(--primary)/0.8))",
              testimony: "hsl(var(--primary))",
              arrowBackground: "hsl(var(--primary))",
              arrowForeground: "hsl(var(--primary-foreground))",
              arrowHoverBackground: "hsl(var(--primary)/0.8))",
            }}
          />
        </div> */}
      </div>
    </section>
  );
};