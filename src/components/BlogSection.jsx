import React from 'react';

const blogPosts = [
  {
    title: 'Top 10 Tourist Attractions',
    excerpt: 'Discover the must-visit spots in our city...',
    image: '/src/assets/images/image4.jpg',
  },
  {
    title: 'A Foodies Guide to Local Cuisine',
    excerpt: 'Explore the flavors of our region...',
    image: '/src/assets/images/Exploring-the -Local-Cuisine-A -Foodies-Guide -to-Ashtamudi-1.jpg',
  },
  {
    title: 'Sustainable Tourism: Our Commitment',
    excerpt: 'Learn about our eco-friendly initiatives...',
    image: '/src/assets/images/sustainable-tourism-chart.jpg',
  },
];

export default function BlogSection() {
  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Latest from Our Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <a href="#" className="text-blue-500 hover:underline">Read more</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}