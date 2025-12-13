import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import RestaurantImage from '../assets/image_rastaurant.png';
import BeautySalonImage from '../assets/image_hairsalon.png';
import RealEstateImage from '../assets/image_estate.png';
import "../App.css";

function Home() {
  const portfolios = [
    {
      title: "飲食店向けLP",
      description: "飲食店の魅力を伝えるランディングページ。",
      path: "/restaurant",
      image: RestaurantImage
    },
    {
      title: "美容サロン向けLP",
      description: "美容サロンの予約促進に特化したLP。",
      path: "/beauty-salon",
      image: BeautySalonImage
    },
    {
      title: "不動産物件向けLP",
      description: "物件情報を魅力的に見せるLP。",
      path: "/real-estate",
      image: RealEstateImage
    },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      try {
        element.scrollIntoView({ behavior: 'smooth' });
      } catch (_error) {
        // Fallback to instant scroll if smooth scrolling fails
        element.scrollIntoView();
      }
    } else {
      console.warn(`scrollToSection: Element with id '${sectionId}' not found.`);
    }
  };

  return (
    <>
      <section id="hero" className="text-center py-32">
        <h2 className="text-4xl font-bold text-neutral-900">My Portfolio</h2>
        <p className="mt-2 text-neutral-600">IT IS A FREELANCE ENGINEER'S PORTFOLIO SITE.</p>
        <p className="mt-6 text-xl text-neutral-700">
          <span className="block">あなたのビジネスを加速させる、</span>
          <span className="block">クオリティの高いWebソリューション</span>
        </p>
        <nav className="mt-8 flex gap-4 justify-center" aria-label="Hero call-to-action buttons">
          <Button 
            size="lg" 
            onClick={() => scrollToSection('samples')}
            className="shadow-lg hover:shadow-xl"
            aria-label="作品セクションにスクロールします"
          >
            作品を見る
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => scrollToSection('contact')}
            className="shadow-lg hover:shadow-xl"
            aria-label="お問い合わせセクションにスクロールします"
          >
            お問い合わせ
          </Button>
        </nav>
      </section>
      <section id="about" className="p-10 bg-white rounded-lg mx-4 mt-6 shadow-md border border-neutral-200">
        <h2 className="text-3xl font-semibold text-neutral-900">About Me</h2>
        <p className="mt-2 text-neutral-600">ここに自己紹介を記述します。</p>
      </section>
      <section id="works" className="p-10 mx-4 mt-6">
        <h2 className="text-3xl font-semibold text-neutral-900">Works</h2>
        <p className="mt-2 text-neutral-600">今後、実際の作品を追加予定です。</p>
      </section>
      <section id="samples" className="p-10 mx-4 mt-6">
        <h2 className="text-3xl font-semibold text-neutral-900">Samples</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {portfolios.map((portfolio, index) => (
            <Link to={portfolio.path} key={index}>
              <Card className="p-6 bg-white shadow-md rounded-lg border border-neutral-200 hover:border-primary-500 hover:shadow-xl transition-all duration-300">
                <img src={portfolio.image} alt={portfolio.title} className="portfolio-image" />
                <CardContent className="p-4">
                  <h3 className="text-xl font-medium text-neutral-900">{portfolio.title}</h3>
                  <p className="text-neutral-600 mt-2">{portfolio.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
      <section id="contact" className="p-10 bg-white mx-4 mt-6 text-center shadow-md rounded-lg border border-neutral-200">
        <h2 className="text-3xl font-semibold text-neutral-900">Contact</h2>
        <p className="mt-2 text-neutral-600">お問い合わせはこちら</p>
      </section>
    </>
  );
}

export default Home;