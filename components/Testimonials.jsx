import NextImage from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation } from "swiper";

function Separator() {
  return (
    <div className="my-40 border-t border-transparent h-0">
      {/* Adjust the 'my-40' class to control top and bottom margins */}
      {/* Adjust the 'border-t' class to control border color */}
      {/* Adjust the 'h-0' class to control border height */}
    </div>
  );
}

function Container({ children }) {
  return (
    <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Adjust the 'max-w-screen-xl' class to control maximum width */}
      {/* Adjust the 'px-*' classes to control horizontal padding */}
      {children}
    </div>
  );
}

function Testimonials({ citations = [] }) {
  return (
    <div className="bg-white">
      <Separator />
      <TestimonialsWrapper citations={citations} />
      <Separator />
    </div>
  );
}

function TestimonialsWrapper({ citations }) {
  return (
    <Container>
      <Swiper
        modules={[Navigation, Autoplay, A11y]}
        slidesPerView={1}
        autoplay={{ delay: 8000 }}
        centeredSlides
        navigation
        loop
      >
        {citations.map((citation, idx) => (
          <SwiperSlide key={idx}>
            <TestimonialCard>
              <NextImage
                src="/svg/quote.svg"
                alt={`${citation.author.name}'s company logo`}
                width={48}
                height={48}
              />
              <Content>{`"${citation.text}"`}</Content>
              <AuthorContainer>
                <AuthorImageContainer>
                  <NextImage
                    src={`${citation?.author?.photo?.url}`}
                    alt={citation?.author?.name}
                    width={48}
                    height={48}
                  />
                </AuthorImageContainer>
                <AuthorContent>
                  <AuthorName>{citation.author.name}</AuthorName>
                  <AuthorTitle>{citation.author.bio}</AuthorTitle>
                </AuthorContent>
              </AuthorContainer>
            </TestimonialCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

function TestimonialCard({ children }) {
  return <div className="flex flex-col items-center">{children}</div>;
}

function Content({ children }) {
  return (
    <blockquote className="text-center text-2xl font-bold italic max-w-60 md:max-w-full">
      {children}
    </blockquote>
  );
}

function AuthorContainer({ children }) {
  return <div className="flex items-center">{children}</div>;
}

function AuthorContent({ children }) {
  return (
    <div className="flex flex-col justify-between text-base">{children}</div>
  );
}

function AuthorTitle({ children }) {
  return <p className="font-bold">{children}</p>;
}

function AuthorName({ children }) {
  return <p className="font-normal">{children}</p>;
}

function AuthorImageContainer({ children }) {
  return (
    <div className="flex rounded-full mr-4 overflow-hidden">{children}</div>
  );
}

export default Testimonials;
