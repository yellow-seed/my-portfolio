import { Card, CardContent } from "@/components/ui/card";
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

  return (
    <>
      <section id="hero" className="text-center py-32">
        <h2 className="text-4xl font-bold text-neutral-900">My Portfolio</h2>
        <p className="mt-2 text-neutral-600">IT IS A FREELANCE ENGINEER'S PORTFOLIO SITE.</p>
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