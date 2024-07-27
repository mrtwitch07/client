export const categories = [
    {
        id: 1,
        name: 'Soup',
        image: require('../assets/images/soupSwallow1.png'),
    },
    {
        id: 2,
        name: 'Rice',
        image: require('../assets/images/JollofRice1.png'),
    },
    {
        id: 3,
        name: 'Pizza',
        image: require('../assets/images/pizzaIcon.png'),
    },
    {
        id: 4,
        name: 'Cakes',
        image: require('../assets/images/pastry.png'),
    },
    {
        id: 5,
        name: 'Noodles',
        image: require('../assets/images/noodles.png'),
    },
    {
        id: 6,
        name: 'Pastry',
        image: require('../assets/images/fries1.png'),
    },

]


export const featured = {
    id: 1,
    title: 'Fast Foods',
    description: 'soft rice and tender fried chicken',
    restaurants: [
        {
            id: 1,
            name: 'Chicken Republic',
            image: require('../assets/images/chickenRepublic.png'),
            description: 'Hot and spicy',
            lng: -85.5324269,
            lat: 38.2145602,
            address: '434 second street',
            stars: 4,
            reviews: '4.4k',
            category: 'Fast Food',
            dishes: [
                {
                   id: 1,
                   name: 'jollof rice',
                   description: 'well cooked and seasoned rice',
                   price: 10,
                   image:  require('../assets/images/JollofRice1.png')
                },
                {
                   id: 2,
                   name: 'Plantain',
                   description: 'golden fried plantain',
                   price: 10,
                   image:  require('../assets/images/plantain.jpeg')
                },
                {
                   id: 3,
                   name: 'Chicken',
                   description: 'soft and tender fried chicken',
                   price: 10,
                   image:  require('../assets/images/chicken.png')
                },
                {
                   id: 4,
                   name: 'Meat',
                   description: 'crispy fried meat',
                   price: 10,
                   image:  require('../assets/images/meat.jpg')
                },
                {
                   id: 5,
                   name: 'Fish',
                   description: 'deliciously seasoned boiled fish',
                   price: 10,
                   image:  require('../assets/images/fish.jpg')
                },
            ]
    
        },
        {
            id: 2,
            name: 'Mega Chicken',
            image: require('../assets/images/megaChicken.jpg'),
            description: 'Hot and spicy pizzas',
            lng: -85.5324269,
            lat: 38.2145602,
            address: '434 second street',
            stars: 4,
            reviews: '4.4k',
            category: 'Fast Food',
            dishes: [
                {
                   id: 1,
                   name: 'Jollof rice',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image:  require('../assets/images/JollofRice1.png')
                },
                {
                   id: 2,
                   name: 'Chicken',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image:  require('../assets/images/chicken.png')
                },
                {
                   id: 3,
                   name: 'Plantain',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image:  require('../assets/images/plantain.jpeg')
                },
                {
                   id: 4,
                   name: 'coleslaw',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image:  require('../assets/images/coleslaw.jpg')
                },
            ]
    
        },
        {
            id: 3,
            name: 'The Place',
            image: require('../assets/images/thePlace.jpg'),
            description: 'Hot and spicy pizzas',
            lng: -85.5324269,
            lat: 38.2145602,
            address: '434 second street',
            stars: 4,
            reviews: '4.4k',
            category: 'Fast Food',
            dishes: [
                {
                   id: 1,
                   name: 'Jollof rice',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image:  require('../assets/images/JollofRice1.png')
                },
                {
                   id: 2,
                   name: 'fried rice',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image:  require('../assets/images/JollofRice1.png')
                },
                {
                   id: 3,
                   name: 'spaghetti',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image:  require('../assets/images/noodles.png')
                },
                {
                   id: 4,
                   name: 'coleslaw',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image:  require('../assets/images/coleslaw.jpg')
                },
                {
                   id: 5,
                   name: 'chicken',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image:  require('../assets/images/chicken.png')
                },
            ]
    
        }
    ]
}

export const featured2 = {
    id: 1,
    title: 'Local Delicacies',
    description: 'soup and swallow with assorted meat',
    restaurants: [
        {
            id: 1,
            name: 'The Amala Place',
            image: require('../assets/images/amalaJoint.jpg'),
            description: 'Hot and spicy pizzas',
            lng: -85.5324269,
            lat: 38.2145602,
            address: '434 second street',
            stars: 4,
            reviews: '4.4k',
            category: 'Local delicacies',
            dishes: [
                {
                   id: 1,
                   name: 'amala',
                   description: 'hot amala with efo',
                   price: 10,
                   image:  require('../assets/images/amala.jpg')
                },
                {
                   id: 2,
                   name: 'eba',
                   description: 'soft eba with vegetable soup',
                   price: 10,
                   image:  require('../assets/images/eba.jpg')
                },
                {
                   id: 3,
                   name: 'semo',
                   description: 'steamy semo with egusi soup',
                   price: 10,
                   image:  require('../assets/images/fufu.jpg')
                },
            ]
    
        },
        {
            id: 2,
            name: 'SoupFactory',
            image: require('../assets/images/soupFactory.jpg'),
            description: 'Hot and spicy pizzas',
            lng: -85.5324269,
            lat: 38.2145602,
            address: '434 second street',
            stars: 4,
            reviews: '4.4k',
            category: 'Local delicacies',
            dishes: [
               {
                  id: 1,
                  name: 'amala',
                  description: 'hot amala with efo',
                  price: 10,
                  image:  require('../assets/images/amala.jpg')
               },
               {
                  id: 2,
                  name: 'eba',
                  description: 'soft eba with vegetable soup',
                  price: 10,
                  image:  require('../assets/images/eba.jpg')
               },
               {
                  id: 3,
                  name: 'semo',
                  description: 'steamy semo with egusi soup',
                  price: 10,
                  image:  require('../assets/images/fufu.jpg')
               },
            ]
    
        },
        {
            id: 3,
            name: 'Micura Buka',
            image: require('../assets/images/micuraBuka.jpg'),
            description: 'Hot and spicy pizzas',
            lng: -85.5324269,
            lat: 38.2145602,
            address: '434 second street',
            stars: 4,
            reviews: '4.4k',
            category: 'Local delicacies',
            dishes: [
               {
                  id: 1,
                  name: 'amala',
                  description: 'hot amala with efo',
                  price: 10,
                  image:  require('../assets/images/amala.jpg')
               },
               {
                  id: 2,
                  name: 'eba',
                  description: 'soft eba with vegetable soup',
                  price: 10,
                  image:  require('../assets/images/eba.jpg')
               },
               {
                  id: 3,
                  name: 'semo',
                  description: 'steamy semo with egusi soup',
                  price: 10,
                  image:  require('../assets/images/fufu.jpg')
               },
            ]
    
        }
    ]
}



export const featured3 = {
    id: 1,
    title: 'Pizza',
    description: 'crispy hot pizza',
    restaurants: [
        {
            id: 1,
            name: 'Dominoes Pizza',
            image: require('../assets/images/dominoes.jpg'),
            description: 'Hot and spicy pizzas',
            lng: -85.5324269,
            lat: 38.2145602,
            address: '434 second street',
            stars: 4,
            reviews: '4.4k',
            category: 'Fast Food',
            dishes: [
                {
                   id: 1,
                   name: 'pizza',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image:  require('../assets/images/pizzaDish.png')
                },
                {
                   id: 2,
                   name: 'pizza',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image:  require('../assets/images/pizzaDish.png')
                },
                {
                   id: 3,
                   name: 'pizza',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image:  require('../assets/images/pizzaDish.png')
                },
            ]
    
        },
        {
            id: 2,
            name: 'Debonairs Pizza',
            image: require('../assets/images/debonairs.jpg'),
            description: 'Hot and spicy pizzas',
            lng: -85.5324269,
            lat: 38.2145602,
            address: '434 second street',
            stars: 4,
            reviews: '4.4k',
            category: 'Fast Food',
            dishes: [
                {
                   id: 1,
                   name: 'pizza',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image:  require('../assets/images/pizzaDish.png')
                },
                {
                   id: 2,
                   name: 'pizza',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image:  require('../assets/images/pizzaDish.png')
                },
                {
                   id: 3,
                   name: 'pizza',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image:  require('../assets/images/pizzaDish.png')
                },
            ]
    
        },
        {
            id: 3,
            name: 'Papa Johns',
            image: require('../assets/images/pizza.png'),
            description: 'Hot and spicy pizzas',
            lng: -85.5324269,
            lat: 38.2145602,
            address: '434 second street',
            stars: 4,
            reviews: '4.4k',
            category: 'Fast Food',
            dishes: [
                {
                   id: 1,
                   name: 'pizza',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image:  require('../assets/images/pizzaDish.png')
                },
                {
                   id: 2,
                   name: 'pizza',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image:  require('../assets/images/pizzaDish.png')
                },
                {
                   id: 3,
                   name: 'pizza',
                   description: 'cheezy garlic pizza',
                   price: 10,
                   image:  require('../assets/images/pizzaDish.png')
                },
            ]
    
        }
    ]
}