import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import PopularProducts from "@/components/PopularProducts";
import Services from "@/components/Services";
import SpecialOffer from "@/components/SpecialOffer";
import SuperQuality from "@/components/SuperQuality";

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      {/* 
    <section className='bg-pale-blue padding'>
      <CustomerReviews />
    </section>
    <section className='padding-x sm:py-32 py-16 w-full'>
      <Subscribe />
    </section>
    <section className=' bg-black padding-x padding-t pb-8'>
      <Footer />
    </section> */}
    </main>
  );
}
