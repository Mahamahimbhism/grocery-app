import React from 'react';
import Header from './Header';
import CategoryCard from './CategoryCard';  // Import CategoryCard
import ProductCard from './ProductCard';    // Import ProductCard

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-green-200 h-[400px] flex items-center justify-center">
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/18d60b107187879.5fa16aecd880f.jpg"
          alt="Groceries"
          className="w-full h-full object-cover absolute top-0 left-0 opacity-70"
        />
        {/* <div className="relative text-center z-10">
          <h1 className="text-4xl font-bold text-black">Fresh Groceries Delivered</h1>
          <p className="text-lg text-white mt-2">Shop the freshest groceries at your convenience</p>
        </div> */}
      </section>

      {/* Categories Section */}
      <section className="py-10 bg-white">
        <h2 className="text-2xl font-semibold text-center mb-6">Shop by Category</h2>
        <div className="flex justify-center space-x-8">
          <CategoryCard
            title="Fruits & Vegetables"
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Sep/Jupiter/SBC/V1/Fruits__vegetables_2.jpg"
          />
          <CategoryCard
            title="Dairy & Bread"
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Sep/Jupiter/SBC/V1/Dairy__bread.jpg"
          />
          <CategoryCard
            title="Snacks & Beverages"
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Sep/Jupiter/SBC/V1/Drinks__Juices.jpg"
          />
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-10 bg-gray-100">
        <h2 className="text-2xl font-semibold text-center mb-6">Featured Products</h2>
        <div className="flex justify-center space-x-8">
          <ProductCard
            title="Organic Avocados"
            price="₹99"
            image="https://5.imimg.com/data5/VR/LB/MY-58843567/organic-avocado.jpg"
          />
          <ProductCard
            title="Whole Wheat Bread"
            price="₹40"
            image="https://www.jiomart.com/images/product/original/491127282/britannia-100-whole-wheat-bread-450-g-product-images-o491127282-p491127282-0-202204092013.jpg?im=Resize=(420,420)"
          />
          <ProductCard
            title="Almond Milk"
            price="₹250"
            image="https://m.media-amazon.com/images/I/716VNx+TpuL.jpg"
          />
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-black text-white py-6 mt-auto text-center">
        <p>© 2024 Grocery App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
