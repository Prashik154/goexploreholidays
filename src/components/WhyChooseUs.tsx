"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";


interface TextParallaxContentProps {
  imgUrl: string;
  subheading: string;
  heading: string;
  children?: React.ReactNode;
  className?: string;
}

interface StickyImageProps {
  imgUrl: string;
}

interface OverlayCopyProps {
  subheading: string;
  heading: string;
}

const IMG_PADDING = 12;

export const WhyChooseUsParallax = () => {
  return (
    <div className="bg-background">
      <TextParallaxContent
        imgUrl="/images/guides/Guide.jpg"
        subheading="Expertise"
        heading="World-Class Safari Guides"
      >
        <ParallaxContent>
          <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
            Unmatched Wildlife Knowledge
          </h2>
          <div className="col-span-1 md:col-span-8">
            <p className="mb-4 text-xl text-muted-foreground md:text-2xl">
              Our guides have 10+ years of experience tracking wildlife across India&apos;s 
              diverse ecosystems. They know every trail, animal behavior pattern, and 
              the best spots for sightings.
            </p>
            <p className="mb-8 text-xl text-muted-foreground md:text-2xl">
              From Bengal tigers to rare bird species, our experts will help you 
              discover wildlife like never before.
            </p>
          </div>
        </ParallaxContent>
      </TextParallaxContent>
      
      <TextParallaxContent
        imgUrl="/images/guides/EcoFriendly.jpg"
        subheading="Sustainability"
        heading="Eco-Conscious Safaris"
      >
        <ParallaxContent>
          <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
            Responsible Tourism
          </h2>
          <div className="col-span-1 md:col-span-8">
            <p className="mb-4 text-xl text-muted-foreground md:text-2xl">
              We&apos;re committed to conservation and supporting local communities. 
              Our safaris follow strict eco-friendly practices to minimize environmental impact.
            </p>
            <p className="mb-8 text-xl text-muted-foreground md:text-2xl">
              5% of all proceeds go directly to wildlife conservation efforts in 
              the regions we operate.
            </p>
          </div>
        </ParallaxContent>
      </TextParallaxContent>
      
      <TextParallaxContent
        imgUrl="/images/guides/Luxury.jpg"
        subheading="Comfort"
        heading="Luxury in the Wild"
      >
        <ParallaxContent>
          <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
            Unforgettable Experiences
          </h2>
          <div className="col-span-1 md:col-span-8">
            <p className="mb-4 text-xl text-muted-foreground md:text-2xl">
              Our premium safari vehicles and lodges combine adventure with comfort. 
              Enjoy gourmet meals, expert-guided tours, and stunning wilderness views.
            </p>
            <p className="mb-8 text-xl text-muted-foreground md:text-2xl">
              We&apos;ve been recognized as India&apos;s premier safari operator for 5 consecutive years.
            </p>
          </div>
        </ParallaxContent>
      </TextParallaxContent>
    </div>
  );
};

const TextParallaxContent = ({ 
  imgUrl, 
  subheading, 
  heading, 
  children,
  className 
}: TextParallaxContentProps) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
      className={className}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }: StickyImageProps) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }: OverlayCopyProps) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const ParallaxContent = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    {children}
  </div>
);