export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('lights').del()

  // Inserts seed entries
  await knex('lights').insert([
    {
      id: 1,
      name: 'Bedside Lamp',
      description: 'Small lamp, great for reading in bed.',
      status: 'Available',
      price: 39.99,
      image_url:
        'https://m.media-amazon.com/images/I/61agWqa6ekL._AC_UF1000,1000_QL80_.jpg',
      category_id: 1,
    },
    {
      id: 2,
      name: 'Clamping Desk Lamp',
      description: 'A lamp that clamps, perfect for the home office.',
      status: 'Available',
      price: 29.99,
      image_url: 'https://m.media-amazon.com/images/I/614aNUDoCxL.jpg',
      category_id: 1,
    },
    {
      id: 3,
      name: 'Fancy Chandelier',
      description: 'Pure opulence.',
      status: 'Sold',
      price: 3000,
      image_url: 'https://m.media-amazon.com/images/I/51srBVyXT-L._AC_.jpg',
      category_id: 3,
    },
    {
      id: 4,
      name: 'Utility Light',
      description:
        'Make sure your work site is well lit with this 1000W halogen lamp.',
      status: 'Available',
      price: 54.99,
      image_url:
        'https://m.media-amazon.com/images/I/61k4NCN8jnL._AC_UF1000,1000_QL80_.jpg',
      category_id: 4,
    },
    {
      id: 5,
      name: 'Chill Lamp',
      description:
        'Invite ambience into your home with this fully dimmable floor lamp.',
      status: 'Available',
      price: 78.99,
      image_url:
        'https://m.media-amazon.com/images/I/611fJoTucdL._AC_UF894,1000_QL80_.jpg',
      category_id: 2,
    },
    {
      id: 6,
      name: 'Retro Floor Lamp',
      description:
        'Stylish and retro, perfect for adding character to any room.',
      status: 'Available',
      price: 120.0,
      image_url:
        'https://m.media-amazon.com/images/I/51nvEQqspXL._AC_UF894,1000_QL80_.jpg',
      category_id: 2,
    },
    {
      id: 7,
      name: 'Modern Pendant Light',
      description:
        'Sleek and modern pendant light, ideal for contemporary spaces.',
      status: 'Available',
      price: 89.99,
      image_url: 'https://m.media-amazon.com/images/I/41Ut2HdLu4L._AC_.jpg',
      category_id: 3,
    },
    {
      id: 8,
      name: 'Industrial Desk Lamp',
      description:
        'Robust and functional, great for workspaces with an industrial vibe.',
      status: 'Sold',
      price: 45.0,
      image_url: 'https://m.media-amazon.com/images/I/71VFhnq3wqL.jpg',
      category_id: 4,
    },
    {
      id: 9,
      name: 'Arc Floor Lamp',
      description: 'Elegant arc floor lamp that makes a statement.',
      status: 'Available',
      price: 150.0,
      image_url:
        'https://m.media-amazon.com/images/I/81lWLX9tUPL._AC_UF894,1000_QL80_.jpg',
      category_id: 2,
    },
    {
      id: 10,
      name: 'Crystal Table Lamp',
      description:
        'Beautiful crystal lamp perfect for adding a touch of glamour.',
      status: 'Available',
      price: 89.99,
      image_url: 'https://m.media-amazon.com/images/I/71qtKGZuOAL.jpg',
      category_id: 1,
    },
    {
      id: 11,
      name: 'Vintage Desk Lamp',
      description: 'Classic vintage style desk lamp with adjustable arm.',
      status: 'Available',
      price: 65.0,
      image_url:
        'https://m.media-amazon.com/images/I/61EnMD+KhqL._AC_UF894,1000_QL80_.jpg',
      category_id: 1,
    },
    {
      id: 12,
      name: 'Swing Arm Wall Lamp',
      description: 'Wall-mounted lamp with adjustable swing arm.',
      status: 'Available',
      price: 55.0,
      image_url: 'https://m.media-amazon.com/images/I/61Anp7KEhBS.jpg',
      category_id: 1,
    },
    {
      id: 13,
      name: 'Geometric Floor Lamp',
      description: 'Modern geometric design for contemporary spaces.',
      status: 'Sold',
      price: 130.0,
      image_url:
        'https://m.media-amazon.com/images/I/61hM8ZAXeFL._AC_UF894,1000_QL80_.jpg',
      category_id: 2,
    },
    {
      id: 14,
      name: 'Lava Lamp',
      description: 'Retro lava lamp with mesmerizing motion.',
      status: 'Available',
      price: 40.0,
      image_url:
        'https://m.media-amazon.com/images/I/61nzSIMNzSL._AC_UF350,350_QL80_.jpg',
      category_id: 1,
    },
    {
      id: 15,
      name: 'Smart LED Desk Lamp',
      description:
        'LED desk lamp with smart features and adjustable brightness.',
      status: 'Available',
      price: 75.0,
      image_url:
        'https://m.media-amazon.com/images/I/71bCjgXnQkL._AC_UF894,1000_QL80_.jpg',
      category_id: 1,
    },
    {
      id: 16,
      name: 'Sculptural Table Lamp',
      description: 'Unique sculptural design that doubles as a piece of art.',
      status: 'Available',
      price: 95.0,
      image_url: 'https://m.media-amazon.com/images/I/715yMhD6gfL.jpg',
      category_id: 1,
    },
    {
      id: 17,
      name: 'Hanging String Lights',
      description: 'Decorative string lights for a cozy atmosphere.',
      status: 'Available',
      price: 25.0,
      image_url:
        'https://m.media-amazon.com/images/I/81Mozox7IPL._AC_UF894,1000_QL80_.jpg',
      category_id: 3,
    },
    {
      id: 18,
      name: 'Minimalist Desk Lamp',
      description: 'Simple and clean design for modern workspaces.',
      status: 'Available',
      price: 60.0,
      image_url: 'https://m.media-amazon.com/images/I/613gy45ySFL.jpg',
      category_id: 1,
    },
    {
      id: 19,
      name: 'Hooded Pendant Light',
      description: 'Industrial-style pendant light with a hooded design.',
      status: 'Sold',
      price: 110.0,
      image_url: 'https://m.media-amazon.com/images/I/61V1bEi-CvL.jpg',
      category_id: 4,
    },
    {
      id: 20,
      name: 'Retro Nightstand Lamp',
      description: 'Charming nightstand lamp with a retro design.',
      status: 'Available',
      price: 45.0,
      image_url:
        'https://m.media-amazon.com/images/I/71vMTpY2T9L._AC_UF894,1000_QL80_.jpg',
      category_id: 1,
    },
  ])
}
