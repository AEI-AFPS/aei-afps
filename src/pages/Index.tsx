import { Layout } from '../components/layout/Layout';
import { HeroSection } from '../components/home/HeroSection';
import { WhyAEI } from '../components/home/WhyAEI';
import { CertificationsBar } from '../components/home/CertificationsBar';
import { FeaturedProducts } from '../components/home/FeaturedProducts';
import { CTASection } from '../components/home/CTASection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <WhyAEI />
      <CertificationsBar />
      <FeaturedProducts />
      <CTASection />
    </Layout>
  );
};

export default Index;
