import React from 'react';
import { motion } from 'framer-motion';

const Trending = () => {
  const posts = [
    {
      id: 1,
      title: 'New Fashion Trends for Summer',
      author: 'FashionLover123',
      content:
        'I recently discovered some amazing fashion trends for this summer season. Let\'s discuss the latest styles and outfits!',
    },
    {
      id: 2,
      title: 'Favorite Fashion Brands',
      author: 'StyleGuru',
      content:
        'Share your favorite fashion brands and why you love them. Let\'s discover new brands and discuss our fashion inspirations!',
    },
    {
      id: 3,
      title: 'Fashion Tips for a Job Interview',
      author: 'CareerFashionista',
      content:
        'Need some fashion advice for your upcoming job interview? Share your tips and experiences to help fellow fashionistas!',
    },
    {
      id: 4,
      title: 'Summer Wardrobe Essentials',
      author: 'FashionistaQueen',
      content:
        'What are the must-have items for a stylish summer wardrobe? Let\'s share our suggestions and create a fabulous summer lookbook!',
    },
    {
      id: 5,
      title: 'DIY Fashion Projects',
      author: 'CreativeFashionista',
      content:
        'Share your DIY fashion projects and tutorials. Let\'s get creative and explore unique ways to upcycle and personalize our clothing!',
    },
    {
      id: 6,
      title: 'Fashion Influencers to Follow',
      author: 'Trendsetter101',
      content:
        'Who are your favorite fashion influencers? Share their profiles and let\'s discuss their style, fashion advice, and inspirations!',
    },
    {
      id: 7,
      title: 'Fashion Events and Runways',
      author: 'RunwayFashionista',
      content:
        'Stay up to date with the latest fashion events and runways. Share your thoughts on the hottest collections and emerging designers!',
    },
    {
      id: 8,
      title: 'Styling Tips for Petite Figures',
      author: 'PetiteFashionista',
      content:
        'Do you have styling tips for petite figures? Let\'s share our recommendations on how to dress for our height and embrace our unique style!',
    },
    {
      id: 9,
      title: 'Vintage Fashion Finds',
      author: 'RetroFashionEnthusiast',
      content:
        'Discover hidden gems and vintage fashion finds. Share your favorite thrift stores, online marketplaces, and styling tips for vintage pieces!',
    },
    {
      id: 10,
      title: 'Fashion Accessories Wishlist',
      author: 'AccessoryAddict',
      content:
        'What fashion accessories are on your wishlist? Let\'s discuss the latest trends in bags, jewelry, hats, and more!',
    },
    {
      id: 11,
      title: 'Sustainable Fashion Choices',
      author: 'EcoFashionista',
      content:
        'Share your sustainable fashion choices and tips for a more eco-friendly wardrobe. Let\'s promote ethical and conscious fashion!',
    },
    {
      id: 12,
      title: 'Fashion Brands Supporting Social Causes',
      author: 'FashionActivist',
      content:
        'Which fashion brands do you admire for their commitment to social causes? Let\'s highlight brands that make a positive impact!',
    },
    {
      id: 13,
      title: 'Fashion Bloggers Recommendations',
      author: 'FashionBlogger101',
      content:
        'Discover new fashion bloggers and their style recommendations. Let\'s share our favorite blogs and get inspired!',
    },
    {
      id: 14,
      title: 'Latest Street Style Trends',
      author: 'StreetStyleQueen',
      content:
        'Share the latest street style trends from around the world. Let\'s get inspired by unique and urban fashion looks!',
    },
    {
      id: 15,
      title: 'Fashionable Workout Outfits',
      author: 'FitnessFashionista',
      content:
        'Discover stylish and comfortable workout outfits. Share your go-to activewear brands and fitness fashion tips!',
    },
    {
      id: 16,
      title: 'Fashionable Travel Essentials',
      author: 'WanderlustFashionista',
      content:
        'Share your must-have fashion essentials for traveling. Let\'s discuss stylish and practical outfits for your next adventure!',
    },
    {
      id: 17,
      title: 'Fashionable Workwear Ideas',
      author: 'OfficeFashionista',
      content:
        'Looking for fashionable workwear ideas? Share your office-appropriate outfits and style tips for a professional yet stylish look!',
    },
    {
      id: 18,
      title: 'Fashionable Maternity Clothing',
      author: 'MomToBeFashionista',
      content:
        'Share your favorite maternity clothing brands and stylish outfits for expectant mothers. Let\'s embrace fashion during pregnancy!',
    },
    {
      id: 19,
      title: 'Fashionable Evening Gowns',
      author: 'GlamourFashionista',
      content:
        'Explore fashionable evening gowns for special occasions. Share your favorite designers and glamorous red carpet looks!',
    },
    {
      id: 20,
      title: 'Fashionable Winter Outfits',
      author: 'WinterFashionista',
      content:
        'Stay stylish and warm during winter. Share your cozy outfits, layering tips, and fashionable winter accessories!',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: -50 },
    visible: { y: 0 },
  };

  return (
    <div className="bg-black py-8 px-9">
      <h1 className="text-white text-4xl font-bold mb-8">Trending Fashion Discussions</h1>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        {posts.map((post) => (
          <motion.div key={post.id} variants={itemVariants} className="border rounded p-4 text-white">
            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-500">Posted by {post.author}</p>
            <p className="mt-2">{post.content}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Trending;
