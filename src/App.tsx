import './App.css'
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import RestaurantImage from './assets/image_rastaurant.png';
import BeautySalonImage from './assets/image_hairsalon.png';
import RealEstateImage from './assets/image_estate.png';

function App() {
  const portfolios = [
    {
      title: "飲食店向けLP",
      description: "飲食店の魅力を伝えるランディングページ。",
      link: "https://yourgithub.io/restaurant-lp",
      image: RestaurantImage
    },
    {
      title: "美容サロン向けLP",
      description: "美容サロンの予約促進に特化したLP。",
      link: "https://yourgithub.io/beauty-salon-lp",
      image: BeautySalonImage
    },
    {
      title: "不動産物件向けLP",
      description: "物件情報を魅力的に見せるLP。",
      link: "https://yourgithub.io/real-estate-lp",
      image: RealEstateImage
    },
  ];

  return (
    <div className='container mx-auto py-10 text-center'>
      <h1 className='text-4xl font-bold mb-6'>My Portfolio</h1>
      <p className='mb-6'>シンプルなLPを作成し、それぞれの業種向けにデザインしました。</p>

      <section className='mb-12'>
        <h2 className='text-3xl font-semibold mb-4'>About Me</h2>
        <p className='max-w-2xl mx-auto text-gray-700'>
          Web開発者として、ReactやViteを活用したモダンなウェブサイト制作を行っています。
          フロントエンドの設計に強みがあり、特にLP制作においてデザインと機能性の両方を重視しています。
        </p>
      </section>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        {portfolios.map((portfolio, index) => (
          <Card key={index} className='p-6 shadow-lg rounded-xl overflow-hidden'>
            <img src={portfolio.image} alt={portfolio.title} className='w-full h-48 object-cover' />
            <CardContent className='p-4'>
              <h2 className='text-xl font-semibold mb-2'>{portfolio.title}</h2>
              <p className='mb-4 text-gray-600'>{portfolio.description}</p>
              <Button asChild className='w-full'>
                <a href={portfolio.link} target='_blank' rel='noopener noreferrer'>
                  詳しく見る
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}


export default App
