const foodItems=[
    {
      food_id: 1,
      food_name: "Apple Pie",
      food_description: "A classic dessert made with a buttery, flaky crust filled with tender, spiced apples.",
      food_calories_per_serving: 320,
      food_nutritional_factors: {
        carbohydrates: "42g",
        protein: "2g",
        fat: "16g"
      },
      food_ingredients: [
        "Apples",
        "Flour",
        "Butter",
        "Sugar",
        "Cinnamon",
        "Nutmeg"
      ],
      food_health_benefits: "Rich in antioxidants and dietary fiber",
      cooking_method: "Baking",
      cuisine_type: "American",
      food_features: {
        taste: "sweet",
        texture: "crisp and tender",
        appearance: "golden brown",
        preparation: "baked",
        serving_type: "hot"
      }
    },
    {
      food_id: 2,
      food_name: "Chocolate Cake",
      food_description: "A rich, moist cake made with high-quality cocoa powder and frosted with creamy chocolate icing.",
      food_calories_per_serving: 450,
      food_nutritional_factors: {
        carbohydrates: "58g",
        protein: "5g",
        fat: "22g"
      },
      food_ingredients: [
        "Flour",
        "Sugar",
        "Cocoa Powder",
        "Eggs",
        "Butter",
        "Vanilla Extract"
      ],
      food_health_benefits: "Contains antioxidants from cocoa",
      cooking_method: "Baking",
      cuisine_type: "American",
      food_features: {
        taste: "sweet and rich",
        texture: "moist and fluffy",
        appearance: "dark and frosted",
        preparation: "baked",
        serving_type: "room temperature"
      }
    },
    {
      food_id: 3,
      food_name: "Tiramisu",
      food_description: "An Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cheese, dusted with cocoa powder.",
      food_calories_per_serving: 240,
      food_nutritional_factors: {
        carbohydrates: "28g",
        protein: "4g",
        fat: "12g"
      },
      food_ingredients: [
        "Ladyfingers",
        "Coffee",
        "Mascarpone Cheese",
        "Sugar",
        "Cocoa Powder",
        "Eggs"
      ],
      food_health_benefits: "Source of calcium and protein",
      cooking_method: "No-bake",
      cuisine_type: "Italian",
      food_features: {
        taste: "sweet and creamy",
        texture: "smooth and soft",
        appearance: "layered and dusted",
        preparation: "assembled",
        serving_type: "chilled"
      }
    },
    {
      food_id: 4,
      food_name: "Crème Brûlée",
      food_description: "A creamy custard dessert topped with a layer of hardened caramelized sugar.",
      food_calories_per_serving: 300,
      food_nutritional_factors: {
        carbohydrates: "30g",
        protein: "5g",
        fat: "18g"
      },
      food_ingredients: [
        "Cream",
        "Egg Yolks",
        "Sugar",
        "Vanilla Bean"
      ],
      food_health_benefits: "Rich in calcium and vitamin D",
      cooking_method: "Baking",
      cuisine_type: "French",
      food_features: {
        taste: "sweet and creamy",
        texture: "smooth and crunchy",
        appearance: "golden brown top",
        preparation: "baked",
        serving_type: "cold"
      }
    },
    {
      food_id: 5,
      food_name: "Cheesecake",
      food_description: "A creamy dessert made with a base of cream cheese and a graham cracker crust, often topped with fruit.",
      food_calories_per_serving: 350,
      food_nutritional_factors: {
        carbohydrates: "32g",
        protein: "6g",
        fat: "22g"
      },
      food_ingredients: [
        "Cream Cheese",
        "Graham Crackers",
        "Sugar",
        "Eggs",
        "Butter",
        "Vanilla Extract"
      ],
      food_health_benefits: "Source of calcium and protein",
      cooking_method: "Baking",
      cuisine_type: "American",
      food_features: {
        taste: "sweet and creamy",
        texture: "smooth and dense",
        appearance: "light golden",
        preparation: "baked",
        serving_type: "chilled"
      }
    },
    {
      food_id: 6,
      food_name: "Baklava",
      food_description: "A Middle Eastern dessert made with layers of filo pastry filled with chopped nuts and sweetened with honey or syrup.",
      food_calories_per_serving: 290,
      food_nutritional_factors: {
        carbohydrates: "45g",
        protein: "4g",
        fat: "12g"
      },
      food_ingredients: [
        "Filo Pastry",
        "Nuts",
        "Honey",
        "Butter",
        "Cinnamon"
      ],
      food_health_benefits: "Rich in healthy fats from nuts",
      cooking_method: "Baking",
      cuisine_type: "Middle Eastern",
      food_features: {
        taste: "sweet and nutty",
        texture: "crisp and flaky",
        appearance: "golden brown layers",
        preparation: "baked",
        serving_type: "room temperature"
      }
    },
    {
      food_id: 7,
      food_name: "Pavlova",
      food_description: "A meringue-based dessert topped with whipped cream and fresh fruits.",
      food_calories_per_serving: 150,
      food_nutritional_factors: {
        carbohydrates: "27g",
        protein: "3g",
        fat: "4g"
      },
      food_ingredients: [
        "Egg Whites",
        "Sugar",
        "Whipped Cream",
        "Fresh Fruits"
      ],
      food_health_benefits: "Low in fat, source of antioxidants from fruits",
      cooking_method: "Baking",
      cuisine_type: "Australian",
      food_features: {
        taste: "sweet and fruity",
        texture: "crisp and soft",
        appearance: "white and colorful",
        preparation: "baked",
        serving_type: "chilled"
      }
    },
    {
      food_id: 8,
      food_name: "Banoffee Pie",
      food_description: "A British dessert made with a digestive biscuit base, topped with bananas, caramel, and whipped cream.",
      food_calories_per_serving: 380,
      food_nutritional_factors: {
        carbohydrates: "50g",
        protein: "4g",
        fat: "18g"
      },
      food_ingredients: [
        "Digestive Biscuits",
        "Butter",
        "Bananas",
        "Caramel",
        "Whipped Cream"
      ],
      food_health_benefits: "Source of potassium from bananas",
      cooking_method: "No-bake",
      cuisine_type: "British",
      food_features: {
        taste: "sweet and creamy",
        texture: "smooth and crunchy",
        appearance: "layered",
        preparation: "assembled",
        serving_type: "chilled"
      }
    },
    {
      food_id: 9,
      food_name: "Raspberry Sorbet",
      food_description: "A refreshing dessert made with pureed raspberries and sugar, frozen until solid.",
      food_calories_per_serving: 120,
      food_nutritional_factors: {
        carbohydrates: "30g",
        protein: "1g",
        fat: "0g"
      },
      food_ingredients: [
        "Raspberries",
        "Sugar",
        "Lemon Juice"
      ],
      food_health_benefits: "Low in calories, high in antioxidants",
      cooking_method: "Freezing",
      cuisine_type: "French",
      food_features: {
        taste: "sweet and tangy",
        texture: "smooth and icy",
        appearance: "bright red",
        preparation: "frozen",
        serving_type: "cold"
      }
    },
    {
      food_id: 10,
      food_name: "Pumpkin Pie",
      food_description: "A traditional American pie made with a spiced pumpkin filling and a flaky pie crust.",
      food_calories_per_serving: 320,
      food_nutritional_factors: {
        carbohydrates: "38g",
        protein: "4g",
        fat: "16g"
      },
      food_ingredients: [
        "Pumpkin",
        "Flour",
        "Butter",
        "Sugar",
        "Cinnamon",
        "Nutmeg"
      ],
      food_health_benefits: "Rich in vitamin A and fiber",
      cooking_method: "Baking",
      cuisine_type: "American",
      food_features: {
        taste: "sweet and spiced",
        texture: "smooth and flaky",
        appearance: "golden brown",
        preparation: "baked",
        serving_type: "room temperature"
      }
    },
    {
      food_id: 11,
      food_name: "Lemon Tart",
      food_description: "A tart with a buttery crust filled with a tangy lemon custard.",
      food_calories_per_serving: 280,
      food_nutritional_factors: {
        carbohydrates: "35g",
        protein: "4g",
        fat: "14g"
      },
      food_ingredients: [
        "Flour",
        "Butter",
        "Lemons",
        "Sugar",
        "Eggs"
      ],
      food_health_benefits: "Good source of vitamin C",
      cooking_method: "Baking",
      cuisine_type: "French",
      food_features: {
        taste: "sweet and tangy",
        texture: "smooth and crisp",
        appearance: "yellow and golden",
        preparation: "baked",
        serving_type: "room temperature"
      }
    },
    {
      food_id: 12,
      food_name: "Strawberry Shortcake",
      food_description: "A dessert made with layers of shortcake, whipped cream, and fresh strawberries.",
      food_calories_per_serving: 220,
      food_nutritional_factors: {
        carbohydrates: "30g",
        protein: "4g",
        fat: "10g"
      },
      food_ingredients: [
        "Flour",
        "Sugar",
        "Butter",
        "Strawberries",
        "Whipped Cream"
      ],
      food_health_benefits: "High in vitamin C and antioxidants",
      cooking_method: "Baking",
      cuisine_type: "American",
      food_features: {
        taste: "sweet and fruity",
        texture: "soft and creamy",
        appearance: "layered",
        preparation: "baked",
        serving_type: "room temperature"
      }
    },
    {
      food_id: 13,
      food_name: "Mango Sticky Rice",
      food_description: "A Thai dessert made with sweet sticky rice, coconut milk, and fresh mango slices.",
      food_calories_per_serving: 300,
      food_nutritional_factors: {
        carbohydrates: "60g",
        protein: "4g",
        fat: "8g"
      },
      food_ingredients: [
        "Sticky Rice",
        "Coconut Milk",
        "Mangoes",
        "Sugar"
      ],
      food_health_benefits: "Rich in vitamins A and C",
      cooking_method: "Steaming",
      cuisine_type: "Thai",
      food_features: {
        taste: "sweet and creamy",
        texture: "soft and chewy",
        appearance: "white and yellow",
        preparation: "steamed",
        serving_type: "room temperature"
      }
    },
    {
      food_id: 14,
      food_name: "Black Forest Cake",
      food_description: "A German cake made with layers of chocolate sponge cake, whipped cream, and cherries.",
      food_calories_per_serving: 340,
      food_nutritional_factors: {
        carbohydrates: "45g",
        protein: "5g",
        fat: "15g"
      },
      food_ingredients: [
        "Flour",
        "Cocoa Powder",
        "Cherries",
        "Whipped Cream",
        "Sugar",
        "Eggs"
      ],
      food_health_benefits: "Contains antioxidants from cherries and cocoa",
      cooking_method: "Baking",
      cuisine_type: "German",
      food_features: {
        taste: "sweet and chocolatey",
        appearance: "dark and red",
        preparation: "baked",
        serving_type: "room temperature"
      }
    },
    {
      food_id: 15,
      food_name: "Key Lime Pie",
      food_description: "A tart pie made with key lime juice, sweetened condensed milk, and a graham cracker crust.",
      food_calories_per_serving: 290,
      food_nutritional_factors: {
        carbohydrates: "35g",
        protein: "5g",
        fat: "14g"
      },
      food_ingredients: [
        "Key Lime Juice",
        "Sweetened Condensed Milk",
        "Graham Crackers",
        "Butter"
      ],
      food_health_benefits: "Good source of vitamin C",
      cooking_method: "Baking",
      cuisine_type: "American",
      food_features: {
        taste: "sweet and tangy",
        texture: "smooth and crunchy",
        appearance: "yellow and crumbly",
        preparation: "baked",
        serving_type: "chilled"
      }
    },
    {
      food_id: 16,
      food_name: "Profiteroles",
      food_description: "French choux pastry balls filled with cream and topped with chocolate sauce.",
      food_calories_per_serving: 200,
      food_nutritional_factors: {
        carbohydrates: "25g",
        protein: "4g",
        fat: "10g"
      },
      food_ingredients: [
        "Flour",
        "Butter",
        "Eggs",
        "Whipped Cream",
        "Chocolate"
      ],
      food_health_benefits: "Source of protein",
      cooking_method: "Baking",
      cuisine_type: "French",
      food_features: {
        taste: "sweet and creamy",
        texture: "light and airy",
        appearance: "golden and chocolatey",
        preparation: "baked",
        serving_type: "room temperature"
      }
    },
    {
      food_id: 17,
      food_name: "Gelato",
      food_description: "An Italian frozen dessert similar to ice cream but denser and more flavorful.",
      food_calories_per_serving: 180,
      food_nutritional_factors: {
        carbohydrates: "28g",
        protein: "3g",
        fat: "6g"
      },
      food_ingredients: [
        "Milk",
        "Sugar",
        "Flavorings (e.g., vanilla, chocolate, fruit)"
      ],
      food_health_benefits: "Source of calcium and protein",
      cooking_method: "Freezing",
      cuisine_type: "Italian",
      food_features: {
        taste: "sweet and rich",
        texture: "smooth and creamy",
        appearance: "varies with flavor",
        preparation: "frozen",
        serving_type: "cold"
      }
    },
    {
      food_id: 18,
      food_name: "Peach Cobbler",
      food_description: "A Southern dessert made with fresh peaches and a biscuit-like topping, baked until golden.",
      food_calories_per_serving: 280,
      food_nutritional_factors: {
        carbohydrates: "40g",
        protein: "3g",
        fat: "12g"
      },
      food_ingredients: [
        "Peaches",
        "Flour",
        "Butter",
        "Sugar",
        "Cinnamon"
      ],
      food_health_benefits: "Rich in vitamins A and C",
      cooking_method: "Baking",
      cuisine_type: "Southern",
      food_features: {
        taste: "sweet and fruity",
        texture: "soft and crunchy",
        appearance: "golden brown",
        preparation: "baked",
        serving_type: "warm"
      }
    },
    {
      food_id: 19,
      food_name: "Flan",
      food_description: "A creamy custard dessert topped with caramel sauce, popular in Latin America.",
      food_calories_per_serving: 260,
      food_nutritional_factors: {
        carbohydrates: "40g",
        protein: "6g",
        fat: "8g"
      },
      food_ingredients: [
        "Milk",
        "Sugar",
        "Eggs",
        "Vanilla"
      ],
      food_health_benefits: "Source of calcium and protein",
      cooking_method: "Baking",
      cuisine_type: "Latin American",
      food_features: {
        taste: "sweet and creamy",
        texture: "smooth and silky",
        appearance: "golden and caramelized",
        preparation: "baked",
        serving_type: "chilled"
      }
    },
    {
      food_id: 20,
      food_name: "Mille-feuille",
      food_description: "A classic French pastry with layers of puff pastry and pastry cream, topped with icing.",
      food_calories_per_serving: 300,
      food_nutritional_factors: {
        carbohydrates: "40g",
        protein: "4g",
        fat: "14g"
      },
      food_ingredients: [
        "Puff Pastry",
        "Milk",
        "Sugar",
        "Eggs",
        "Vanilla",
        "Icing"
      ],
      food_health_benefits: "Source of calcium and protein",
      cooking_method: "Baking",
      cuisine_type: "French",
      food_features: {
        taste: "sweet and creamy",
        texture: "crispy and smooth",
        appearance: "layered",
        preparation: "baked",
        serving_type: "room temperature"
      }
    },
    {
      food_id: 21,
      food_name: "Cannoli",
      food_description: "An Italian dessert consisting of tube-shaped shells of fried pastry dough, filled with a sweet, creamy ricotta filling.",
      food_calories_per_serving: 220,
      food_nutritional_factors: {
        carbohydrates: "28g",
        protein: "5g",
        fat: "10g"
      },
      food_ingredients: [
        "Pastry Dough",
        "Ricotta Cheese",
        "Sugar",
        "Chocolate Chips"
      ],
      food_health_benefits: "Source of protein and calcium",
      cooking_method: "Frying",
      cuisine_type: "Italian",
      food_features: {
        taste: "sweet and creamy",
        texture: "crisp and smooth",
        appearance: "golden and filled",
        preparation: "fried",
        serving_type: "room temperature"
      }
    },
    {
      food_id: 22,
      food_name: "Brownies",
      food_description: "A dense, fudgy dessert bar made with chocolate and baked until chewy and moist.",
      food_calories_per_serving: 240,
      food_nutritional_factors: {
        carbohydrates: "35g",
        protein: "3g",
        fat: "10g"
      },
      food_ingredients: [
        "Flour",
        "Sugar",
        "Cocoa Powder",
        "Butter",
        "Eggs"
      ],
      food_health_benefits: "Source of antioxidants from cocoa",
      cooking_method: "Baking",
      cuisine_type: "American",
      food_features: {
        taste: "sweet and chocolatey",
        texture: "fudgy and moist",
        appearance: "dark brown",
        preparation: "baked",
        serving_type: "room temperature"
      }
    },
    {
      food_id: 23,
      food_name: "Churros",
      food_description: "A fried dough pastry coated in cinnamon sugar, often served with chocolate sauce.",
      food_calories_per_serving: 200,
      food_nutritional_factors: {
        carbohydrates: "25g",
        protein: "3g",
        fat: "10g"
      },
      food_ingredients: [
        "Flour",
        "Butter",
        "Sugar",
        "Cinnamon",
        "Eggs"
      ],
      food_health_benefits: "Source of carbohydrates for energy",
      cooking_method: "Frying",
      cuisine_type: "Spanish",
      food_features: {
        taste: "sweet and cinnamon-spiced",
        texture: "crisp and soft",
        appearance: "golden and coated",
        preparation: "fried",
        serving_type: "warm"
      }
    },
    {
      food_id: 24,
      food_name: "Tres Leches Cake",
      food_description: "A sponge cake soaked in three types of milk: evaporated milk, condensed milk, and heavy cream.",
      food_calories_per_serving: 280,
      food_nutritional_factors: {
        carbohydrates: "35g",
        protein: "6g",
        fat: "12g"
      },
      food_ingredients: [
        "Flour",
        "Sugar",
        "Eggs",
        "Evaporated Milk",
        "Condensed Milk",
        "Heavy Cream"
      ],
      food_health_benefits: "Source of calcium and protein",
      cooking_method: "Baking",
      cuisine_type: "Latin American",
      food_features: {
        taste: "sweet and creamy",
        texture: "moist and soft",
        appearance: "light golden",
        preparation: "baked",
        serving_type: "chilled"
      }
    },
    {
      food_id: 25,
      food_name: "Coconut Macaroons",
      food_description: "A chewy, sweet cookie made with shredded coconut and often dipped in chocolate.",
      food_calories_per_serving: 150,
      food_nutritional_factors: {
        carbohydrates: "20g",
        protein: "2g",
        fat: "8g"
      },
      food_ingredients: [
        "Shredded Coconut",
        "Sugar",
        "Egg Whites",
        "Vanilla Extract"
      ],
      food_health_benefits: "Rich in healthy fats from coconut",
      cooking_method: "Baking",
      cuisine_type: "French",
      food_features: {
        taste: "sweet and coconutty",
        texture: "chewy and crisp",
        appearance: "golden and white",
        preparation: "baked",
        serving_type: "room temperature"
      }
    },
    {
      food_id: 26,
      food_name: "Chocolate Lava Cake",
      food_description: "A decadent dessert with a gooey chocolate center, served warm with a scoop of vanilla ice cream.",
      food_calories_per_serving: 400,
      food_nutritional_factors: {
        carbohydrates: "45g",
        protein: "5g",
        fat: "22g"
      },
      food_ingredients: [
        "Chocolate",
        "Butter",
        "Sugar",
        "Eggs",
        "Flour"
      ],
      food_health_benefits: "Source of antioxidants from chocolate",
      cooking_method: "Baking",
      cuisine_type: "International",
      food_features: {
        taste: "rich and indulgent",
        texture: "gooey and moist",
        appearance: "molten and decadent",
        preparation: "baked",
        serving_type: "warm"
      }
    },
    {
      food_id: 27,
      food_name: "Tiramisu",
      food_description: "An Italian dessert made with layers of coffee-soaked ladyfingers, mascarpone cheese, and cocoa powder.",
      food_calories_per_serving: 350,
      food_nutritional_factors: {
        carbohydrates: "30g",
        protein: "6g",
        fat: "20g"
      },
      food_ingredients: [
        "Ladyfingers",
        "Mascarpone Cheese",
        "Coffee",
        "Eggs",
        "Sugar",
        "Cocoa Powder"
      ],
      food_health_benefits: "Source of calcium from mascarpone cheese",
      cooking_method: "Chilling",
      cuisine_type: "Italian",
      food_features: {
        taste: "sweet and creamy",
        texture: "soft and creamy",
        appearance: "layered and dusted",
        preparation: "chilled",
        serving_type: "cold"
      }
    },
    {
      food_id: 28,
      food_name: "Coconut Macaroons",
      food_description: "A chewy and sweet cookie made with shredded coconut, egg whites, and sugar, often dipped in chocolate.",
      food_calories_per_serving: 120,
      food_nutritional_factors: {
        carbohydrates: "15g",
        protein: "2g",
        fat: "6g"
      },
      food_ingredients: [
        "Shredded Coconut",
        "Egg Whites",
        "Sugar",
        "Vanilla Extract",
        "Chocolate (optional)"
      ],
      food_health_benefits: "Source of fiber from coconut",
      cooking_method: "Baking",
      cuisine_type: "International",
      food_features: {
        taste: "sweet and nutty",
        texture: "chewy and moist",
        appearance: "golden and bite-sized",
        preparation: "baked",
        serving_type: "room temperature"
      }
    },
    {
      food_id: 29,
      food_name: "Cinnamon Rolls",
      food_description: "Soft and fluffy rolls made with a sweet cinnamon-infused dough, topped with cream cheese frosting.",
      food_calories_per_serving: 300,
      food_nutritional_factors: {
        carbohydrates: "35g",
        protein: "4g",
        fat: "15g"
      },
      food_ingredients: [
        "Flour",
        "Sugar",
        "Butter",
        "Yeast",
        "Cinnamon",
        "Cream Cheese"
      ],
      food_health_benefits: "Source of calcium and protein from cream cheese",
      cooking_method: "Baking",
      cuisine_type: "American",
      food_features: {
        taste: "sweet and spicy",
        texture: "soft and fluffy",
        appearance: "swirled and glazed",
        preparation: "baked",
        serving_type: "warm"
      }
    },
    {
      food_id: 30,
      food_name: "Strawberry Shortcake",
      food_description: "A classic dessert made with layers of buttery shortcake, fresh strawberries, and whipped cream.",
      food_calories_per_serving: 280,
      food_nutritional_factors: {
        carbohydrates: "30g",
        protein: "3g",
        fat: "16g"
      },
      food_ingredients: [
        "Shortcake",
        "Strawberries",
        "Whipped Cream"
      ],
      food_health_benefits: "Source of vitamin C from strawberries",
      cooking_method: "Baking",
      cuisine_type: "American",
      food_features: {
        taste: "sweet and fruity",
        texture: "crumbly and creamy",
        appearance: "layered and colorful",
        preparation: "baked",
        serving_type: "room temperature"
      }
    },
    {
      food_id: 31,
      food_name: "Pecan Pie",
      food_description: "A Southern dessert made with a filling of pecans mixed with a syrupy mixture, baked in a pie crust.",
      food_calories_per_serving: 400,
      food_nutritional_factors: {
        carbohydrates: "45g",
        protein: "6g",
        fat: "20g"
      },
      food_ingredients: [
        "Pecans",
        "Corn Syrup",
        "Eggs",
        "Butter",
        "Sugar"
      ],
      food_health_benefits: "Source of healthy fats and protein from pecans",
      cooking_method: "Baking",
      cuisine_type: "American",
      food_features: {
        taste: "sweet and nutty",
        texture: "sticky and crunchy",
        appearance: "golden brown",
        preparation: "baked",
        serving_type: "room temperature"
      }
    },
    {
      food_id: 32,
      food_name: "Red Velvet Cake",
      food_description: "A moist and tender cake with a distinctive red color, often layered with cream cheese frosting.",
      food_calories_per_serving: 380,
      food_nutritional_factors: {
        carbohydrates: "45g",
        protein: "4g",
        fat: "20g"
      },
      food_ingredients: [
        "Flour",
        "Sugar",
        "Buttermilk",
        "Cocoa Powder",
        "Red Food Coloring",
        "Cream Cheese"
      ],
      food_health_benefits: "Source of calcium from cream cheese",
      cooking_method: "Baking",
      cuisine_type: "American",
      food_features: {
        taste: "sweet and tangy",
        texture: "moist and velvety",
        appearance: "bright red",
        preparation: "baked",
        serving_type: "room temperature"
      }
    },
    {
      food_id: 33,
      food_name: "Angel Food Cake",
      food_description: "A light and airy cake made with whipped egg whites, flour, and sugar, often served with fresh fruit.",
      food_calories_per_serving: 150,
      food_nutritional_factors: {
        carbohydrates: "35g",
        protein: "5g",
        fat: "0g"
      },
      food_ingredients: [
        "Egg Whites",
        "Sugar",
        "Flour",
        "Vanilla Extract"
      ],
      food_health_benefits: "Low in fat, source of protein from egg whites",
      cooking_method: "Baking",
      cuisine_type: "American",
      food_features: {
        taste: "sweet and light",
        texture: "fluffy and delicate",
        appearance: "white and tall",
        preparation: "baked",
        serving_type: "room temperature"
      }
    },
    {
      food_id: 34,
      food_name: "Fruit Tart",
      food_description: "A dessert consisting of a buttery pastry crust filled with custard or cream and topped with fresh fruits.",
      food_calories_per_serving: 280,
      food_nutritional_factors: {
        carbohydrates: "35g",
        protein: "4g",
        fat: "14g"
      },
      food_ingredients: [
        "Pastry Dough",
        "Custard",
        "Fresh Fruits",
        "Sugar"
      ],
      food_health_benefits: "Source of vitamins and antioxidants from fruits",
      cooking_method: "Baking",
      cuisine_type: "International",
      food_features: {
        taste: "sweet and fruity",
        texture: "crisp and creamy",
        appearance: "colorful and decorative",
        preparation: "baked",
        serving_type: "room temperature"
      }
    },
    {
      food_id: 35,
      food_name: "Bread Pudding",
      food_description: "A comforting dessert made with stale bread soaked in a mixture of milk, eggs, sugar, and spices, then baked until set.",
      food_calories_per_serving: 320,
      food_nutritional_factors: {
        carbohydrates: "40g",
        protein: "6g",
        fat: "14g"
      },
      food_ingredients: [
        "Bread",
        "Milk",
        "Eggs",
        "Sugar",
        "Vanilla Extract",
        "Cinnamon"
      ],
      food_health_benefits: "Source of calcium and protein from milk and eggs",
      cooking_method: "Baking",
      cuisine_type: "International",
      food_features: {
        taste: "sweet and comforting",
        texture: "soft and custardy",
        appearance: "golden brown",
        preparation: "baked",
        serving_type: "warm"
      }
    },
    {
      food_id: 36,
      food_name: "Panna Cotta",
      food_description: "An Italian dessert made with sweetened cream that is thickened with gelatin and molded.",
      food_calories_per_serving: 250,
      food_nutritional_factors: {
        carbohydrates: "20g",
        protein: "3g",
        fat: "18g"
      },
      food_ingredients: [
        "Cream",
        "Sugar",
        "Gelatin",
        "Vanilla Extract"
      ],
      food_health_benefits: "Source of calcium and protein from cream",
      cooking_method: "Chilling",
      cuisine_type: "Italian",
      food_features: {
        taste: "sweet and creamy",
        texture: "smooth and silky",
        appearance: "white and wobbly",
        preparation: "chilled",
        serving_type: "chilled"
      }
    },
    {
      food_id: 37,
      food_name: "Maple Pecan Pie",
      food_description: "A variation of pecan pie made with maple syrup, pecans, and a flaky pie crust.",
      food_calories_per_serving: 420,
      food_nutritional_factors: {
        carbohydrates: "45g",
        protein: "6g",
        fat: "22g"
      },
      food_ingredients: [
        "Pecans",
        "Maple Syrup",
        "Eggs",
        "Butter",
        "Sugar",
        "Flour"
      ],
      food_health_benefits: "Source of healthy fats and protein from pecans",
      cooking_method: "Baking",
      cuisine_type: "American",
      food_features: {
        taste: "sweet and nutty",
        texture: "sticky and crunchy",
        appearance: "golden brown",
        preparation: "baked",
        serving_type: "room temperature"
      }
    },
    {
      food_id: 38,
      food_name: "Banoffee Pie",
      food_description: "A British dessert made with a biscuit or pastry base, topped with bananas, cream, and toffee.",
      food_calories_per_serving: 350,
      food_nutritional_factors: {
        carbohydrates: "40g",
        protein: "4g",
        fat: "18g"
      },
      food_ingredients: [
        "Biscuit Base",
        "Bananas",
        "Whipped Cream",
        "Toffee Sauce"
      ],
      food_health_benefits: "Source of potassium from bananas",
      cooking_method: "Refrigerating",
      cuisine_type: "British",
      food_features: {
        taste: "sweet and creamy",
        texture: "crisp and smooth",
        appearance: "layered",
        preparation: "refrigerated",
        serving_type: "cold"
      }
    },
    {
      food_id: 39,
      food_name: "Opera Cake",
      food_description: "A French cake made with layers of almond sponge cake soaked in coffee syrup, layered with ganache and coffee buttercream, and topped with a chocolate glaze.",
      food_calories_per_serving: 380,
      food_nutritional_factors: {
        carbohydrates: "40g",
        protein: "5g",
        fat: "20g"
      },
      food_ingredients: [
        "Almond Sponge Cake",
        "Coffee Syrup",
        "Ganache",
        "Coffee Buttercream",
        "Chocolate Glaze"
      ],
      food_health_benefits: "Source of energy from carbohydrates",
      cooking_method: "Baking",
      cuisine_type: "French",
      food_features: {
        taste: "sweet and rich",
        texture: "smooth and velvety",
        appearance: "layered and glossy",
        preparation: "baked",
        serving_type: "room temperature"
      }
    },
    {
      food_id: 40,
      food_name: "Lemon Bars",
      food_description: "A tangy dessert made with a shortbread crust topped with a lemony custard layer and dusted with powdered sugar.",
      food_calories_per_serving: 260,
      food_nutritional_factors: {
        carbohydrates: "30g",
        protein: "3g",
        fat: "15g"
      },
      food_ingredients: [
        "Shortbread Crust",
        "Lemon Juice",
        "Eggs",
        "Sugar",
        "Flour"
      ],
      food_health_benefits: "Source of vitamin C from lemon juice",
      cooking_method: "Baking",
      cuisine_type: "American",
      food_features: {
        taste: "sweet and tangy",
        texture: "crisp and creamy",
        appearance: "yellow and dusted",
        preparation: "baked",
        serving_type: "room temperature"
      }
    },
    {
      food_id: 41,
      food_name: "Baklava",
      food_description: "A rich, sweet pastry made of layers of filo pastry filled with chopped nuts and sweetened with honey or syrup.",
      food_calories_per_serving: 320,
      food_nutritional_factors: {
        carbohydrates: "35g",
        protein: "5g",
        fat: "18g"
      },
      food_ingredients: [
        "Filo Pastry",
        "Nuts (usually pistachios or walnuts)",
        "Honey",
        "Butter"
      ],
      food_health_benefits: "Source of protein and healthy fats from nuts",
      cooking_method: "Baking",
      cuisine_type: "Middle Eastern",
      food_features: {
        taste: "sweet and nutty",
        texture: "crisp and flaky",
        appearance: "golden and layered",
        preparation: "baked",
        serving_type: "room temperature"
      }
    },
    {
      food_id: 42,
      food_name: "Pumpkin Roll",
      food_description: "A classic fall dessert made with a thin pumpkin sponge cake filled with sweetened cream cheese filling and rolled into a log shape.",
      food_calories_per_serving: 280,
      food_nutritional_factors: {
        carbohydrates: "35g",
        protein: "4g",
        fat: "14g"
      },
      food_ingredients: [
        "Pumpkin Puree",
        "Flour",
        "Eggs",
        "Sugar",
        "Cream Cheese"
      ],
      food_health_benefits: "Source of vitamin A from pumpkin",
      cooking_method: "Baking",
      cuisine_type: "American",
      food_features: {
        taste: "sweet and spiced",
        texture: "soft and creamy",
        appearance: "rolled and sliced",
        preparation: "baked",
        serving_type: "chilled"
      }
    },
    {
      food_id: 43,
      food_name: "Creme Brulee",
      food_description: "A French dessert consisting of a rich custard base topped with a contrasting layer of hardened caramelized sugar.",
      food_calories_per_serving: 320,
      food_nutritional_factors: {
        carbohydrates: "25g",
        protein: "5g",
        fat: "20g"
      },
      food_ingredients: [
        "Cream",
        "Egg Yolks",
        "Sugar",
        "Vanilla Bean"
      ],
      food_health_benefits: "Source of calcium and protein from cream and eggs",
      cooking_method: "Baking",
      cuisine_type: "French",
      food_features: {
        taste: "sweet and creamy",
        texture: "smooth and silky",
        appearance: "golden and caramelized",
        preparation: "baked",
        serving_type: "room temperature"
      }
    },
    {
      food_id: 44,
      food_name: "Pineapple Upside-Down Cake",
      food_description: "A classic cake made by placing pineapple rings and cherries in the bottom of a pan, topped with cake batter, then flipped over after baking to reveal the caramelized fruit on top.",
      food_calories_per_serving: 320,
      food_nutritional_factors: {
        carbohydrates: "40g",
        protein: "3g",
        fat: "16g"
      },
      food_ingredients: [
        "Pineapple Rings",
        "Maraschino Cherries",
        "Brown Sugar",
        "Butter",
        "Flour",
        "Sugar",
        "Eggs"
      ],
      food_health_benefits: "Source of vitamin C from pineapple",
      cooking_method: "Baking",
      cuisine_type: "American",
      food_features: {
        taste: "sweet and fruity",
        texture: "moist and tender",
        appearance: "caramelized and decorative",
        preparation: "baked",
        serving_type: "warm"
      }
    },
    {
      food_id: 45,
      food_name: "Cannoli Pastry",
      food_description: "An Italian pastry consisting of a tube-shaped shell of fried pastry dough, filled with a sweet, creamy filling usually containing ricotta.",
      food_calories_per_serving: 250,
      food_nutritional_factors: {
        carbohydrates: "25g",
        protein: "5g",
        fat: "14g"
      },
      food_ingredients: [
        "Pastry Shells",
        "Ricotta Cheese",
        "Powdered Sugar",
        "Cinnamon",
        "Chocolate Chips"
      ],
      food_health_benefits: "Source of protein and calcium from ricotta",
      cooking_method: "Frying",
      cuisine_type: "Italian",
      food_features: {
        taste: "sweet and creamy",
        texture: "crisp and smooth",
        appearance: "golden and filled",
        preparation: "fried",
        serving_type: "room temperature"
      }
    },
    {
      food_id: 46,
      food_name: "Peach Cobbler",
      food_description: "A dessert made with sliced peaches layered in a baking dish, topped with a biscuit-like crust, and baked until golden and bubbly.",
      food_calories_per_serving: 280,
      food_nutritional_factors: {
        carbohydrates: "35g",
        protein: "3g",
        fat: "14g"
      },
      food_ingredients: [
        "Peaches",
        "Flour",
        "Sugar",
        "Butter",
        "Baking Powder",
        "Milk"
      ],
      food_health_benefits: "Source of vitamin C from peaches",
      cooking_method: "Baking",
      cuisine_type: "American",
      food_features: {
        taste: "sweet and fruity",
        texture: "soft and crumbly",
        appearance: "golden and bubbly",
        preparation: "baked",
        serving_type: "warm"
      }
    },
    {
      food_id: 47,
      food_name: "Raspberry Mousse",
      food_description: "A light and airy dessert made with fresh raspberries, whipped cream, and gelatin, chilled until set.",
      food_calories_per_serving: 200,
      food_nutritional_factors: {
        carbohydrates: "20g",
        protein: "3g",
        fat: "12g"
      },
      food_ingredients: [
        "Raspberries",
        "Heavy Cream",
        "Sugar",
        "Gelatin"
      ],
      food_health_benefits: "Source of vitamin C and antioxidants from raspberries",
      cooking_method: "Chilling",
      cuisine_type: "International",
      food_features: {
        taste: "sweet and fruity",
        texture: "light and fluffy",
        appearance: "pink and airy",
        preparation: "chilled",
        serving_type: "chilled"
      }
    },
    {
      food_id: 48,
      food_name: "Key Lime Pie",
      food_description: "A Florida classic dessert made with key lime juice, egg yolks, and sweetened condensed milk in a pie crust, topped with whipped cream or meringue.",
      food_calories_per_serving: 320,
      food_nutritional_factors: {
        carbohydrates: "35g",
        protein: "5g",
        fat: "16g"
      },
      food_ingredients: [
        "Key Lime Juice",
        "Egg Yolks",
        "Sweetened Condensed Milk",
        "Pie Crust",
        "Whipped Cream"
      ],
      food_health_benefits: "Source of vitamin C from lime juice",
      cooking_method: "Baking",
      cuisine_type: "American",
      food_features: {
        taste: "sweet and tangy",
        texture: "creamy and smooth",
        appearance: "yellow and creamy",
        preparation: "baked",
        serving_type: "chilled"
      }
    },
    {
      food_id: 49,
      food_name: "Carrot Cake",
      food_description: "A moist and flavorful cake made with grated carrots, spices, and topped with cream cheese frosting.",
      food_calories_per_serving: 350,
      food_nutritional_factors: {
        carbohydrates: "40g",
        protein: "4g",
        fat: "18g"
      },
      food_ingredients: [
        "Carrots",
        "Flour",
        "Sugar",
        "Oil",
        "Eggs",
        "Spices",
        "Cream Cheese"
      ],
      food_health_benefits: "Source of vitamin A from carrots",
      cooking_method: "Baking",
      cuisine_type: "American",
      food_features: {
        taste: "sweet and spiced",
        texture: "moist and dense",
        appearance: "orange and frosted",
        preparation: "baked",
        serving_type: "room temperature"
      }
    },
    {
      food_id: 50,
      food_name: "Bienenstich",
      food_description: "A German dessert consisting of a yeasted cake topped with a honey almond crunch layer and filled with a vanilla or custard cream.",
      food_calories_per_serving: 300,
      food_nutritional_factors: {
        carbohydrates: "35g",
        protein: "5g",
        fat: "15g"
      },
      food_ingredients: [
        "Yeast Cake",
        "Almonds",
        "Honey",
        "Vanilla Cream"
      ],
      food_health_benefits: "Source of energy from carbohydrates",
      cooking_method: "Baking",
      cuisine_type: "German",
      food_features: {
        taste: "sweet and nutty",
        texture: "soft and crunchy",
        appearance: "golden and layered",
        preparation: "baked",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "sour_01",
      food_name: "Lemonade",
      food_description: "A refreshing citrus drink made from lemon juice, water, and sugar.",
      food_calories_per_serving: 100,
      food_nutritional_factors: {
        carbohydrates: "25g",
        protein: "0g",
        fat: "0g"
      },
      food_ingredients: [
        "Lemon Juice",
        "Water",
        "Sugar"
      ],
      food_health_benefits: "Source of vitamin C from lemon juice",
      cooking_method: "Mixing",
      cuisine_type: "International",
      food_features: {
        taste: "sour and refreshing",
        texture: "liquid",
        appearance: "clear and yellow",
        preparation: "mixed",
        serving_type: "cold"
      }
    },
    {
      food_id: "sour_02",
      food_name: "Kimchi",
      food_description: "A traditional Korean side dish made from fermented vegetables, typically cabbage or radishes, seasoned with chili peppers, garlic, ginger, and salt.",
      food_calories_per_serving: 30,
      food_nutritional_factors: {
        carbohydrates: "7g",
        protein: "2g",
        fat: "0g"
      },
      food_ingredients: [
        "Cabbage",
        "Radishes",
        "Chili Peppers",
        "Garlic",
        "Ginger",
        "Salt"
      ],
      food_health_benefits: "Source of probiotics and vitamins from fermented vegetables",
      cooking_method: "Fermenting",
      cuisine_type: "Korean",
      food_features: {
        taste: "sour and spicy",
        texture: "crunchy and tangy",
        appearance: "fermented and colorful",
        preparation: "fermented",
        serving_type: "cold"
      }
    },
    {
      food_id: "sour_03",
      food_name: "Sour Patch Kids",
      food_description: "A popular sour candy in the shape of small children, coated with sour sugar.",
      food_calories_per_serving: 150,
      food_nutritional_factors: {
        carbohydrates: "36g",
        protein: "0g",
        fat: "0g"
      },
      food_ingredients: [
        "Sugar",
        "Corn Syrup",
        "Modified Corn Starch",
        "Citric Acid",
        "Lactic Acid",
        "Malic Acid"
      ],
      food_health_benefits: "None",
      cooking_method: "Manufacturing",
      cuisine_type: "International",
      food_features: {
        taste: "extremely sour and sweet",
        texture: "chewy",
        appearance: "bright and colorful",
        preparation: "manufactured",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "sour_04",
      food_name: "Grapefruit",
      food_description: "A citrus fruit known for its sour and slightly bitter taste.",
      food_calories_per_serving: 50,
      food_nutritional_factors: {
        carbohydrates: "13g",
        protein: "1g",
        fat: "0g"
      },
      food_ingredients: [
        "Grapefruit"
      ],
      food_health_benefits: "Source of vitamin C and antioxidants",
      cooking_method: "None",
      cuisine_type: "International",
      food_features: {
        taste: "sour and tangy",
        texture: "juicy",
        appearance: "round and yellow/pink",
        preparation: "none",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "sour_05",
      food_name: "Sour Cream",
      food_description: "A dairy product obtained by fermenting regular cream with certain kinds of lactic acid bacteria.",
      food_calories_per_serving: 60,
      food_nutritional_factors: {
        carbohydrates: "2g",
        protein: "1g",
        fat: "5g"
      },
      food_ingredients: [
        "Cream",
        "Lactic Acid Bacteria"
      ],
      food_health_benefits: "Source of calcium and probiotics",
      cooking_method: "Fermenting",
      cuisine_type: "International",
      food_features: {
        taste: "tangy and creamy",
        texture: "smooth",
        appearance: "white and creamy",
        preparation: "fermented",
        serving_type: "cold"
      }
    },
    {
      food_id: "sour_06",
      food_name: "Pickles",
      food_description: "Cucumbers that have been pickled in a solution of vinegar, salt, and spices, resulting in a sour and crunchy snack.",
      food_calories_per_serving: 5,
      food_nutritional_factors: {
        carbohydrates: "1g",
        protein: "0g",
        fat: "0g"
      },
      food_ingredients: [
        "Cucumbers",
        "Vinegar",
        "Salt",
        "Spices"
      ],
      food_health_benefits: "Source of hydration and some vitamins and minerals",
      cooking_method: "Pickling",
      cuisine_type: "International",
      food_features: {
        taste: "sour and tangy",
        texture: "crisp and crunchy",
        appearance: "green and speckled",
        preparation: "pickled",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "sour_07",
      food_name: "Greek Yogurt",
      food_description: "Thick, creamy yogurt that has been strained to remove most of the whey, resulting in a tangy and sour taste.",
      food_calories_per_serving: 100,
      food_nutritional_factors: {
        carbohydrates: "6g",
        protein: "18g",
        fat: "2g"
      },
      food_ingredients: [
        "Milk",
        "Live Active Cultures"
      ],
      food_health_benefits: "Source of probiotics and protein",
      cooking_method: "Straining",
      cuisine_type: "Greek",
      food_features: {
        taste: "tangy and sour",
        texture: "thick and creamy",
        appearance: "white and smooth",
        preparation: "strained",
        serving_type: "cold"
      }
    },
    {
      food_id: "sour_08",
      food_name: "Sauerkraut",
      food_description: "Finely shredded cabbage that has been fermented with lactic acid bacteria, resulting in a tangy and sour flavor.",
      food_calories_per_serving: 15,
      food_nutritional_factors: {
        carbohydrates: "3g",
        protein: "1g",
        fat: "0g"
      },
      food_ingredients: [
        "Cabbage",
        "Salt",
        "Lactic Acid Bacteria"
      ],
      food_health_benefits: "Source of probiotics and vitamins",
      cooking_method: "Fermenting",
      cuisine_type: "German",
      food_features: {
        taste: "tangy and sour",
        texture: "crunchy and crisp",
        appearance: "white and shredded",
        preparation: "fermented",
        serving_type: "cold"
      }
    },
    {
      food_id: "sour_09",
      food_name: "Vinegar",
      food_description: "A sour liquid made by fermenting ethanol alcohol, typically derived from wine, beer, or grains.",
      food_calories_per_serving: 3,
      food_nutritional_factors: {
        carbohydrates: "0g",
        protein: "0g",
        fat: "0g"
      },
      food_ingredients: [
        "Ethanol Alcohol"
      ],
      food_health_benefits: "May have some health benefits when consumed in moderation",
      cooking_method: "Fermenting",
      cuisine_type: "International",
      food_features: {
        taste: "sour and acidic",
        texture: "liquid",
        appearance: "clear",
        preparation: "fermented",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "sour_10",
      food_name: "Lime Juice",
      food_description: "The juice extracted from limes, known for its sour and tart flavor.",
      food_calories_per_serving: 10,
      food_nutritional_factors: {
        carbohydrates: "3g",
        protein: "0g",
        fat: "0g"
      },
      food_ingredients: [
        "Limes"
      ],
      food_health_benefits: "Source of vitamin C and antioxidants",
      cooking_method: "Extracting",
      cuisine_type: "International",
      food_features: {
        taste: "sour and tangy",
        texture: "liquid",
        appearance: "clear and green",
        preparation: "extracted",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "sour_11",
      food_name: "Sour Cherry",
      food_description: "Tart cherries known for their sour flavor, often used in pies, jams, and desserts.",
      food_calories_per_serving: 50,
      food_nutritional_factors: {
        carbohydrates: "12g",
        protein: "1g",
        fat: "0g"
      },
      food_ingredients: [
        "Sour Cherries"
      ],
      food_health_benefits: "Source of antioxidants and vitamins",
      cooking_method: "None",
      cuisine_type: "International",
      food_features: {
        taste: "sour and tart",
        texture: "juicy",
        appearance: "red and small",
        preparation: "none",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "sour_12",
      food_name: "Tamarind",
      food_description: "A sour fruit often used as a flavoring agent in various cuisines, known for its tangy taste.",
      food_calories_per_serving: 40,
      food_nutritional_factors: {
        carbohydrates: "10g",
        protein: "1g",
        fat: "0g"
      },
      food_ingredients: [
        "Tamarind Pulp"
      ],
      food_health_benefits: "Source of antioxidants and may aid digestion",
      cooking_method: "None",
      cuisine_type: "International",
      food_features: {
        taste: "sour and tangy",
        texture: "pulpy",
        appearance: "brown and fibrous",
        preparation: "none",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "sour_13",
      food_name: "Sour Milk",
      food_description: "Milk that has soured due to the action of bacteria, resulting in a tangy and sour taste.",
      food_calories_per_serving: 80,
      food_nutritional_factors: {
        carbohydrates: "6g",
        protein: "4g",
        fat: "5g"
      },
      food_ingredients: [
        "Milk",
        "Bacteria Cultures"
      ],
      food_health_benefits: "Source of probiotics and calcium",
      cooking_method: "Fermenting",
      cuisine_type: "International",
      food_features: {
        taste: "tangy and sour",
        texture: "liquid",
        appearance: "white",
        preparation: "fermented",
        serving_type: "cold"
      }
    },
    {
      food_id: "sour_14",
      food_name: "Sour Gummy Worms",
      food_description: "Gummy candies shaped like worms, coated with sour sugar for a tangy flavor.",
      food_calories_per_serving: 120,
      food_nutritional_factors: {
        carbohydrates: "30g",
        protein: "1g",
        fat: "0g"
      },
      food_ingredients: [
        "Sugar",
        "Corn Syrup",
        "Gelatin",
        "Citric Acid",
        "Lactic Acid",
        "Fruit Juice"
      ],
      food_health_benefits: "None",
      cooking_method: "Manufacturing",
      cuisine_type: "International",
      food_features: {
        taste: "sour and sweet",
        texture: "chewy",
        appearance: "colorful and worm-shaped",
        preparation: "manufactured",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "sour_15",
      food_name: "Sourdough Bread",
      food_description: "A type of bread made from naturally fermented dough, resulting in a tangy and sour flavor.",
      food_calories_per_serving: 120,
      food_nutritional_factors: {
        carbohydrates: "25g",
        protein: "4g",
        fat: "1g"
      },
      food_ingredients: [
        "Flour",
        "Water",
        "Starter Culture"
      ],
      food_health_benefits: "May be easier to digest for some people due to fermentation",
      cooking_method: "Baking",
      cuisine_type: "International",
      food_features: {
        taste: "tangy and sour",
        texture: "chewy",
        appearance: "golden and crusty",
        preparation: "fermented",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "sour_16",
      food_name: "Sour Apple",
      food_description: "Apples with a tart and sour flavor, often used in cooking and baking.",
      food_calories_per_serving: 60,
      food_nutritional_factors: {
        carbohydrates: "15g",
        protein: "0g",
        fat: "0g"
      },
      food_ingredients: [
        "Sour Apples"
      ],
      food_health_benefits: "Source of vitamin C and fiber",
      cooking_method: "None",
      cuisine_type: "International",
      food_features: {
        taste: "sour and tart",
        texture: "crisp",
        appearance: "green and firm",
        preparation: "none",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "sour_17",
      food_name: "Sour Fish Soup",
      food_description: "A tangy and savory soup made with fish, vegetables, and souring agents like tamarind or lime juice.",
      food_calories_per_serving: 150,
      food_nutritional_factors: {
        carbohydrates: "10g",
        protein: "15g",
        fat: "5g"
      },
      food_ingredients: [
        "Fish",
        "Vegetables",
        "Tamarind",
        "Lime Juice",
        "Spices"
      ],
      food_health_benefits: "Source of protein and vitamins",
      cooking_method: "Boiling",
      cuisine_type: "International",
      food_features: {
        taste: "sour and savory",
        texture: "brothy",
        appearance: "clear and aromatic",
        preparation: "cooked",
        serving_type: "hot"
      }
    },
    {
      food_id: "sour_18",
      food_name: "Sour Cream and Onion Chips",
      food_description: "Potato chips flavored with a blend of sour cream and onion seasoning, offering a tangy and savory snack.",
      food_calories_per_serving: 150,
      food_nutritional_factors: {
        carbohydrates: "15g",
        protein: "2g",
        fat: "9g"
      },
      food_ingredients: [
        "Potatoes",
        "Vegetable Oil",
        "Sour Cream Powder",
        "Onion Powder",
        "Salt"
      ],
      food_health_benefits: "Source of energy from carbohydrates",
      cooking_method: "Frying",
      cuisine_type: "International",
      food_features: {
        taste: "sour and savory",
        texture: "crispy",
        appearance: "golden and seasoned",
        preparation: "fried",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "sour_19",
      food_name: "Sour Beef Stew",
      food_description: "A hearty stew made with beef, vegetables, and a souring agent like vinegar or tamarind, resulting in a tangy and savory flavor.",
      food_calories_per_serving: 250,
      food_nutritional_factors: {
        carbohydrates: "20g",
        protein: "25g",
        fat: "10g"
      },
      food_ingredients: [
        "Beef",
        "Vegetables",
        "Vinegar",
        "Tamarind",
        "Spices"
      ],
      food_health_benefits: "Source of protein and vitamins",
      cooking_method: "Stewing",
      cuisine_type: "International",
      food_features: {
        taste: "sour and savory",
        texture: "hearty",
        appearance: "thick and aromatic",
        preparation: "cooked",
        serving_type: "hot"
      }
    },
    {
      food_id: "sour_20",
      food_name: "Sour Plum",
      food_description: "Plums known for their tart and sour flavor, often used in jams, sauces, and desserts.",
      food_calories_per_serving: 40,
      food_nutritional_factors: {
        carbohydrates: "10g",
        protein: "1g",
        fat: "0g"
      },
      food_ingredients: [
        "Sour Plums"
      ],
      food_health_benefits: "Source of antioxidants and fiber",
      cooking_method: "None",
      cuisine_type: "International",
      food_features: {
        taste: "sour and tart",
        texture: "juicy",
        appearance: "purple and small",
        preparation: "none",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "sour_21",
      food_name: "Sour Lemon Drops",
      food_description: "Hard candies with a sour lemon flavor, often enjoyed as a tangy treat.",
      food_calories_per_serving: 120,
      food_nutritional_factors: {
        carbohydrates: "30g",
        protein: "0g",
        fat: "0g"
      },
      food_ingredients: [
        "Sugar",
        "Corn Syrup",
        "Citric Acid",
        "Natural Lemon Flavor"
      ],
      food_health_benefits: "None",
      cooking_method: "Manufacturing",
      cuisine_type: "International",
      food_features: {
        taste: "sour and sweet",
        texture: "hard",
        appearance: "yellow and translucent",
        preparation: "manufactured",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "sour_22",
      food_name: "Sour Raspberry Jam",
      food_description: "Jam made from raspberries with added sugar and lemon juice, offering a tart and sweet spread.",
      food_calories_per_serving: 60,
      food_nutritional_factors: {
        carbohydrates: "15g",
        protein: "0g",
        fat: "0g"
      },
      food_ingredients: [
        "Raspberries",
        "Sugar",
        "Lemon Juice"
      ],
      food_health_benefits: "Source of antioxidants and vitamins",
      cooking_method: "Boiling",
      cuisine_type: "International",
      food_features: {
        taste: "sour and sweet",
        texture: "smooth",
        appearance: "red and spreadable",
        preparation: "cooked",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "sour_23",
      food_name: "Sour Cherry Pie",
      food_description: "A pie filled with sour cherries, sugar, and lemon juice, baked to perfection.",
      food_calories_per_serving: 300,
      food_nutritional_factors: {
        carbohydrates: "40g",
        protein: "2g",
        fat: "15g"
      },
      food_ingredients: [
        "Sour Cherries",
        "Sugar",
        "Lemon Juice",
        "Flour",
        "Butter"
      ],
      food_health_benefits: "Source of antioxidants and fiber",
      cooking_method: "Baking",
      cuisine_type: "International",
      food_features: {
        taste: "sour and sweet",
        texture: "flaky and juicy",
        appearance: "golden brown",
        preparation: "baked",
        serving_type: "hot"
      }
    },
    {
      food_id: "sour_24",
      food_name: "Sour Orange Marmalade",
      food_description: "Marmalade made from oranges with added sugar and lemon zest, offering a tangy and sweet spread.",
      food_calories_per_serving: 50,
      food_nutritional_factors: {
        carbohydrates: "12g",
        protein: "0g",
        fat: "0g"
      },
      food_ingredients: [
        "Oranges",
        "Sugar",
        "Lemon Zest"
      ],
      food_health_benefits: "Source of vitamin C and antioxidants",
      cooking_method: "Boiling",
      cuisine_type: "International",
      food_features: {
        taste: "sour and sweet",
        texture: "smooth",
        appearance: "orange and spreadable",
        preparation: "cooked",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "sour_25",
      food_name: "Sour Watermelon Slices",
      food_description: "Watermelon-flavored gummy candies with a sour coating, offering a tangy and sweet snack.",
      food_calories_per_serving: 110,
      food_nutritional_factors: {
        carbohydrates: "27g",
        protein: "1g",
        fat: "0g"
      },
      food_ingredients: [
        "Sugar",
        "Corn Syrup",
        "Gelatin",
        "Citric Acid",
        "Lactic Acid",
        "Watermelon Flavor"
      ],
      food_health_benefits: "None",
      cooking_method: "Manufacturing",
      cuisine_type: "International",
      food_features: {
        taste: "sour and sweet",
        texture: "chewy",
        appearance: "pink and watermelon-shaped",
        preparation: "manufactured",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "sour_26",
      food_name: "Sour Patch Watermelon",
      food_description: "Watermelon-shaped gummy candies coated with sour sugar, offering a tangy and sweet flavor.",
      food_calories_per_serving: 130,
      food_nutritional_factors: {
        carbohydrates: "32g",
        protein: "0g",
        fat: "0g"
      },
      food_ingredients: [
        "Sugar",
        "Corn Syrup",
        "Modified Corn Starch",
        "Citric Acid",
        "Lactic Acid",
        "Fruit Juice"
      ],
      food_health_benefits: "None",
      cooking_method: "Manufacturing",
      cuisine_type: "International",
      food_features: {
        taste: "sour and sweet",
        texture: "chewy",
        appearance: "pink and watermelon-shaped",
        preparation: "manufactured",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "sour_27",
      food_name: "Sour Patch Strawberries",
      food_description: "Strawberry-shaped gummy candies coated with sour sugar, providing a tangy and sweet snack.",
      food_calories_per_serving: 120,
      food_nutritional_factors: {
        carbohydrates: "30g",
        protein: "0g",
        fat: "0g"
      },
      food_ingredients: [
        "Sugar",
        "Corn Syrup",
        "Modified Corn Starch",
        "Citric Acid",
        "Lactic Acid",
        "Fruit Juice"
      ],
      food_health_benefits: "None",
      cooking_method: "Manufacturing",
      cuisine_type: "International",
      food_features: {
        taste: "sour and sweet",
        texture: "chewy",
        appearance: "red and strawberry-shaped",
        preparation: "manufactured",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "sour_28",
      food_name: "Sour Cherry Lollipops",
      food_description: "Cherry-flavored lollipops with a sour coating, providing a tangy and sweet treat.",
      food_calories_per_serving: 70,
      food_nutritional_factors: {
        carbohydrates: "18g",
        protein: "0g",
        fat: "0g"
      },
      food_ingredients: [
        "Sugar",
        "Corn Syrup",
        "Citric Acid",
        "Lactic Acid",
        "Cherry Flavor"
      ],
      food_health_benefits: "None",
      cooking_method: "Manufacturing",
      cuisine_type: "International",
      food_features: {
        taste: "sour and sweet",
        texture: "hard",
        appearance: "red and round",
        preparation: "manufactured",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "sour_29",
      food_name: "Sour Raspberry Gummies",
      food_description: "Raspberry-flavored gummy candies with a sour sugar coating, offering a tangy and sweet snack.",
      food_calories_per_serving: 110,
      food_nutritional_factors: {
        carbohydrates: "27g",
        protein: "1g",
        fat: "0g"
      },
      food_ingredients: [
        "Sugar",
        "Corn Syrup",
        "Gelatin",
        "Citric Acid",
        "Lactic Acid",
        "Raspberry Flavor"
      ],
      food_health_benefits: "None",
      cooking_method: "Manufacturing",
      cuisine_type: "International",
      food_features: {
        taste: "sour and sweet",
        texture: "chewy",
        appearance: "red and raspberry-shaped",
        preparation: "manufactured",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "sour_30",
      food_name: "Sour Apple Rings",
      food_description: "Apple-flavored gummy candies shaped like rings, coated with sour sugar for a tangy and sweet taste.",
      food_calories_per_serving: 120,
      food_nutritional_factors: {
        carbohydrates: "30g",
        protein: "0g",
        fat: "0g"
      },
      food_ingredients: [
        "Sugar",
        "Corn Syrup",
        "Gelatin",
        "Citric Acid",
        "Lactic Acid",
        "Apple Flavor"
      ],
      food_health_benefits: "None",
      cooking_method: "Manufacturing",
      cuisine_type: "International",
      food_features: {
        taste: "sour and sweet",
        texture: "chewy",
        appearance: "green and ring-shaped",
        preparation: "manufactured",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "sour_31",
      food_name: "Sour Blueberry Candy",
      food_description: "Blueberry-flavored candies with a sour sugar coating, providing a tangy and sweet flavor.",
      food_calories_per_serving: 100,
      food_nutritional_factors: {
        carbohydrates: "25g",
        protein: "0g",
        fat: "0g"
      },
      food_ingredients: [
        "Sugar",
        "Corn Syrup",
        "Citric Acid",
        "Lactic Acid",
        "Blueberry Flavor"
      ],
      food_health_benefits: "None",
      cooking_method: "Manufacturing",
      cuisine_type: "International",
      food_features: {
        taste: "sour and sweet",
        texture: "hard",
        appearance: "blue and round",
        preparation: "manufactured",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "sour_32",
      food_name: "Sour Grapefruit Slices",
      food_description: "Grapefruit-flavored gummy candies shaped like slices, coated with sour sugar for a tangy taste.",
      food_calories_per_serving: 110,
      food_nutritional_factors: {
        carbohydrates: "28g",
        protein: "1g",
        fat: "0g"
      },
      food_ingredients: [
        "Sugar",
        "Corn Syrup",
        "Gelatin",
        "Citric Acid",
        "Lactic Acid",
        "Grapefruit Flavor"
      ],
      food_health_benefits: "None",
      cooking_method: "Manufacturing",
      cuisine_type: "International",
      food_features: {
        taste: "sour and sweet",
        texture: "chewy",
        appearance: "pink and slice-shaped",
        preparation: "manufactured",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "sour_33",
      food_name: "Sour Strawberry Belts",
      food_description: "Strawberry-flavored gummy candies shaped like belts, coated with sour sugar for a tangy flavor.",
      food_calories_per_serving: 120,
      food_nutritional_factors: {
        carbohydrates: "30g",
        protein: "0g",
        fat: "0g"
      },
      food_ingredients: [
        "Sugar",
        "Corn Syrup",
        "Gelatin",
        "Citric Acid",
        "Lactic Acid",
        "Strawberry Flavor"
      ],
      food_health_benefits: "None",
      cooking_method: "Manufacturing",
      cuisine_type: "International",
      food_features: {
        taste: "sour and sweet",
        texture: "chewy",
        appearance: "red and belt-shaped",
        preparation: "manufactured",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "sour_34",
      food_name: "Sour Peach Rings",
      food_description: "Peach-flavored gummy candies shaped like rings, coated with sour sugar for a tangy and sweet taste.",
      food_calories_per_serving: 130,
      food_nutritional_factors: {
        carbohydrates: "32g",
        protein: "0g",
        fat: "0g"
      },
      food_ingredients: [
        "Sugar",
        "Corn Syrup",
        "Gelatin",
        "Citric Acid",
        "Lactic Acid",
        "Peach Flavor"
      ],
      food_health_benefits: "None",
      cooking_method: "Manufacturing",
      cuisine_type: "International",
      food_features: {
        taste: "sour and sweet",
        texture: "chewy",
        appearance: "orange and ring-shaped",
        preparation: "manufactured",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "sour_35",
      food_name: "Sour Cola Bottles",
      food_description: "Cola-flavored gummy candies shaped like bottles, coated with sour sugar for a tangy taste.",
      food_calories_per_serving: 120,
      food_nutritional_factors: {
        carbohydrates: "30g",
        protein: "0g",
        fat: "0g"
      },
      food_ingredients: [
        "Sugar",
        "Corn Syrup",
        "Gelatin",
        "Citric Acid",
        "Lactic Acid",
        "Cola Flavor"
      ],
      food_health_benefits: "None",
      cooking_method: "Manufacturing",
      cuisine_type: "International",
      food_features: {
        taste: "sour and sweet",
        texture: "chewy",
        appearance: "brown and bottle-shaped",
        preparation: "manufactured",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "sour_36",
      food_name: "Sour Lemonade",
      food_description: "A refreshing beverage made from lemon juice, water, and sugar, offering a tangy and sweet taste.",
      food_calories_per_serving: 80,
      food_nutritional_factors: {
        carbohydrates: "20g",
        protein: "0g",
        fat: "0g"
      },
      food_ingredients: [
        "Lemon Juice",
        "Water",
        "Sugar"
      ],
      food_health_benefits: "Source of vitamin C",
      cooking_method: "Mixing",
      cuisine_type: "International",
      food_features: {
        taste: "sour and sweet",
        texture: "liquid",
        appearance: "yellow and clear",
        preparation: "mixed",
        serving_type: "cold"
      }
    },
    {
      food_id: "sour_37",
      food_name: "Sour Patch Kids",
      food_description: "Assorted fruit-flavored gummy candies coated with sour sugar, offering a tangy and sweet snack.",
      food_calories_per_serving: 110,
      food_nutritional_factors: {
        carbohydrates: "27g",
        protein: "0g",
        fat: "0g"
      },
      food_ingredients: [
        "Sugar",
        "Corn Syrup",
        "Modified Corn Starch",
        "Citric Acid",
        "Lactic Acid",
        "Fruit Juice"
      ],
      food_health_benefits: "None",
      cooking_method: "Manufacturing",
      cuisine_type: "International",
      food_features: {
        taste: "sour and sweet",
        texture: "chewy",
        appearance: "colorful and kid-shaped",
        preparation: "manufactured",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "sour_38",
      food_name: "Sour Blue Raspberry Straws",
      food_description: "Blue raspberry-flavored candy straws filled with sour powder, offering a tangy and sweet taste.",
      food_calories_per_serving: 90,
      food_nutritional_factors: {
        carbohydrates: "22g",
        protein: "0g",
        fat: "0g"
      },
      food_ingredients: [
        "Sugar",
        "Corn Syrup",
        "Cornstarch",
        "Citric Acid",
        "Lactic Acid",
        "Blue Raspberry Flavor"
      ],
      food_health_benefits: "None",
      cooking_method: "Manufacturing",
      cuisine_type: "International",
      food_features: {
        taste: "sour and sweet",
        texture: "chewy",
        appearance: "blue and straw-shaped",
        preparation: "manufactured",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "sour_39",
      food_name: "Sour Mango Slices",
      food_description: "Mango-flavored gummy candies shaped like slices, coated with sour sugar for a tangy taste.",
      food_calories_per_serving: 100,
      food_nutritional_factors: {
        carbohydrates: "25g",
        protein: "0g",
        fat: "0g"
      },
      food_ingredients: [
        "Sugar",
        "Corn Syrup",
        "Gelatin",
        "Citric Acid",
        "Lactic Acid",
        "Mango Flavor"
      ],
      food_health_benefits: "None",
      cooking_method: "Manufacturing",
      cuisine_type: "International",
      food_features: {
        taste: "sour and sweet",
        texture: "chewy",
        appearance: "orange and slice-shaped",
        preparation: "manufactured",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "sour_40",
      food_name: "Sour Pineapple Rings",
      food_description: "Pineapple-flavored gummy candies shaped like rings, coated with sour sugar for a tangy and sweet taste.",
      food_calories_per_serving: 120,
      food_nutritional_factors: {
        carbohydrates: "30g",
        protein: "0g",
        fat: "0g"
      },
      food_ingredients: [
        "Sugar",
        "Corn Syrup",
        "Gelatin",
        "Citric Acid",
        "Lactic Acid",
        "Pineapple Flavor"
      ],
      food_health_benefits: "None",
      cooking_method: "Manufacturing",
      cuisine_type: "International",
      food_features: {
        taste: "sour and sweet",
        texture: "chewy",
        appearance: "yellow and ring-shaped",
        preparation: "manufactured",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "sour_41",
      food_name: "Sour Grape Slices",
      food_description: "Grape-flavored gummy candies shaped like slices, coated with sour sugar for a tangy taste.",
      food_calories_per_serving: 100,
      food_nutritional_factors: {
        carbohydrates: "25g",
        protein: "0g",
        fat: "0g"
      },
      food_ingredients: [
        "Sugar",
        "Corn Syrup",
        "Gelatin",
        "Citric Acid",
        "Lactic Acid",
        "Grape Flavor"
      ],
      food_health_benefits: "None",
      cooking_method: "Manufacturing",
      cuisine_type: "International",
      food_features: {
        taste: "sour and sweet",
        texture: "chewy",
        appearance: "purple and slice-shaped",
        preparation: "manufactured",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "sour_42",
      food_name: "Sour Kiwi Gummies",
      food_description: "Kiwi-flavored gummy candies shaped like slices, coated with sour sugar for a tangy taste.",
      food_calories_per_serving: 110,
      food_nutritional_factors: {
        carbohydrates: "27g",
        protein: "1g",
        fat: "0g"
      },
      food_ingredients: [
        "Sugar",
        "Corn Syrup",
        "Gelatin",
        "Citric Acid",
        "Lactic Acid",
        "Kiwi Flavor"
      ],
      food_health_benefits: "None",
      cooking_method: "Manufacturing",
      cuisine_type: "International",
      food_features: {
        taste: "sour and sweet",
        texture: "chewy",
        appearance: "green and slice-shaped",
        preparation: "manufactured",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "sour_43",
      food_name: "Sour Cranberry Candy",
      food_description: "Cranberry-flavored candies with a sour sugar coating, providing a tangy and sweet flavor.",
      food_calories_per_serving: 100,
      food_nutritional_factors: {
        carbohydrates: "25g",
        protein: "0g",
        fat: "0g"
      },
      food_ingredients: [
        "Sugar",
        "Corn Syrup",
        "Citric Acid",
        "Cranberry Flavor"
      ],
      food_health_benefits: "Source of antioxidants",
      cooking_method: "Manufacturing",
      cuisine_type: "International",
      food_features: {
        taste: "sour and sweet",
        texture: "hard",
        appearance: "red and round",
        preparation: "manufactured",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "sour_44",
      food_name: "Sour Peach Slices",
      food_description: "Peach-flavored gummy candies shaped like slices, coated with sour sugar for a tangy taste.",
      food_calories_per_serving: 100,
      food_nutritional_factors: {
        carbohydrates: "25g",
        protein: "0g",
        fat: "0g"
      },
      food_ingredients: [
        "Sugar",
        "Corn Syrup",
        "Gelatin",
        "Citric Acid",
        "Lactic Acid",
        "Peach Flavor"
      ],
      food_health_benefits: "None",
      cooking_method: "Manufacturing",
      cuisine_type: "International",
      food_features: {
        taste: "sour and sweet",
        texture: "chewy",
        appearance: "orange and slice-shaped",
        preparation: "manufactured",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "sour_45",
      food_name: "Sour Lemon Sherbet",
      food_description: "A frozen dessert made from lemon juice, sugar, and water, offering a tangy and sweet treat.",
      food_calories_per_serving: 120,
      food_nutritional_factors: {
        carbohydrates: "30g",
        protein: "0g",
        fat: "0g"
      },
      food_ingredients: [
        "Lemon Juice",
        "Sugar",
        "Water"
      ],
      food_health_benefits: "Source of vitamin C",
      cooking_method: "Freezing",
      cuisine_type: "International",
      food_features: {
        taste: "sour and sweet",
        texture: "smooth and creamy",
        appearance: "yellow and icy",
        preparation: "frozen",
        serving_type: "cold"
      }
    },
    {
      food_id: "sour_46",
      food_name: "Sour Cherry Licorice",
      food_description: "Cherry-flavored licorice ropes coated with sour sugar for a tangy and sweet snack.",
      food_calories_per_serving: 90,
      food_nutritional_factors: {
        carbohydrates: "22g",
        protein: "1g",
        fat: "0g"
      },
      food_ingredients: [
        "Sugar",
        "Corn Syrup",
        "Wheat Flour",
        "Citric Acid",
        "Cherry Flavor"
      ],
      food_health_benefits: "None",
      cooking_method: "Manufacturing",
      cuisine_type: "International",
      food_features: {
        taste: "sour and sweet",
        texture: "chewy",
        appearance: "red and rope-shaped",
        preparation: "manufactured",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "sour_47",
      food_name: "Sour Apple Lollipops",
      food_description: "Apple-flavored lollipops with a sour coating, offering a tangy and sweet treat.",
      food_calories_per_serving: 70,
      food_nutritional_factors: {
        carbohydrates: "18g",
        protein: "0g",
        fat: "0g"
      },
      food_ingredients: [
        "Sugar",
        "Corn Syrup",
        "Citric Acid",
        "Lactic Acid",
        "Apple Flavor"
      ],
      food_health_benefits: "None",
      cooking_method: "Manufacturing",
      cuisine_type: "International",
      food_features: {
        taste: "sour and sweet",
        texture: "hard",
        appearance: "green and round",
        preparation: "manufactured",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "sour_48",
      food_name: "Sour Grape Lollipops",
      food_description: "Grape-flavored lollipops with a sour coating, providing a tangy and sweet treat.",
      food_calories_per_serving: 70,
      food_nutritional_factors: {
        carbohydrates: "18g",
        protein: "0g",
        fat: "0g"
      },
      food_ingredients: [
        "Sugar",
        "Corn Syrup",
        "Citric Acid",
        "Lactic Acid",
        "Grape Flavor"
      ],
      food_health_benefits: "None",
      cooking_method: "Manufacturing",
      cuisine_type: "International",
      food_features: {
        taste: "sour and sweet",
        texture: "hard",
        appearance: "purple and round",
        preparation: "manufactured",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "sour_49",
      food_name: "Sour Blue Raspberry Belts",
      food_description: "Blue raspberry-flavored gummy candy belts coated with sour sugar for a tangy taste.",
      food_calories_per_serving: 120,
      food_nutritional_factors: {
        carbohydrates: "30g",
        protein: "0g",
        fat: "0g"
      },
      food_ingredients: [
        "Sugar",
        "Corn Syrup",
        "Gelatin",
        "Citric Acid",
        "Lactic Acid",
        "Blue Raspberry Flavor"
      ],
      food_health_benefits: "None",
      cooking_method: "Manufacturing",
      cuisine_type: "International",
      food_features: {
        taste: "sour and sweet",
        texture: "chewy",
        appearance: "blue and belt-shaped",
        preparation: "manufactured",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "sour_50",
      food_name: "Sour Blackberry Gummies",
      food_description: "Blackberry-flavored gummy candies with a sour sugar coating, offering a tangy and sweet snack.",
      food_calories_per_serving: 110,
      food_nutritional_factors: {
        carbohydrates: "27g",
        protein: "1g",
        fat: "0g"
      },
      food_ingredients: [
        "Sugar",
        "Corn Syrup",
        "Gelatin",
        "Citric Acid",
        "Lactic Acid",
        "Blackberry Flavor"
      ],
      food_health_benefits: "None",
      cooking_method: "Manufacturing",
      cuisine_type: "International",
      food_features: {
        taste: "sour and sweet",
        texture: "chewy",
        appearance: "purple and berry-shaped",
        preparation: "manufactured",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "salty_01",
      food_name: "Classic Potato Chips",
      food_description: "Thinly sliced potatoes fried to a crisp and seasoned with salt, offering a satisfying salty snack.",
      food_calories_per_serving: 160,
      food_nutritional_factors: {
        carbohydrates: "15g",
        protein: "2g",
        fat: "10g"
      },
      food_ingredients: [
        "Potatoes",
        "Vegetable Oil",
        "Salt"
      ],
      food_health_benefits: "Source of potassium",
      cooking_method: "Frying",
      cuisine_type: "International",
      food_features: {
        taste: "salty",
        texture: "crispy",
        appearance: "golden brown",
        preparation: "fried",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "salty_02",
      food_name: "Sea Salted Pretzels",
      food_description: "Crunchy pretzels twisted into knots and sprinkled with sea salt, offering a savory and salty snack.",
      food_calories_per_serving: 120,
      food_nutritional_factors: {
        carbohydrates: "25g",
        protein: "3g",
        fat: "1g"
      },
      food_ingredients: [
        "Flour",
        "Water",
        "Yeast",
        "Salt"
      ],
      food_health_benefits: "Source of carbohydrates",
      cooking_method: "Baking",
      cuisine_type: "International",
      food_features: {
        taste: "salty",
        texture: "crunchy",
        appearance: "brown and twisted",
        preparation: "baked",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "salty_03",
      food_name: "Salted Cashews",
      food_description: "Cashew nuts roasted and seasoned with salt, offering a crunchy and savory snack.",
      food_calories_per_serving: 160,
      food_nutritional_factors: {
        carbohydrates: "8g",
        protein: "5g",
        fat: "13g"
      },
      food_ingredients: [
        "Cashews",
        "Salt",
        "Vegetable Oil"
      ],
      food_health_benefits: "Rich in healthy fats",
      cooking_method: "Roasting",
      cuisine_type: "International",
      food_features: {
        taste: "salty",
        texture: "crunchy",
        appearance: "golden brown",
        preparation: "roasted",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "salty_04",
      food_name: "Salted Popcorn",
      food_description: "Popcorn kernels popped and seasoned with salt, offering a light and salty snack.",
      food_calories_per_serving: 90,
      food_nutritional_factors: {
        carbohydrates: "18g",
        protein: "2g",
        fat: "1g"
      },
      food_ingredients: [
        "Popcorn Kernels",
        "Salt",
        "Butter"
      ],
      food_health_benefits: "High in fiber",
      cooking_method: "Popping",
      cuisine_type: "International",
      food_features: {
        taste: "salty",
        texture: "crunchy",
        appearance: "white and fluffy",
        preparation: "popped",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "salty_05",
      food_name: "Salted Roasted Almonds",
      food_description: "Almonds roasted and seasoned with salt, offering a satisfying and savory snack.",
      food_calories_per_serving: 170,
      food_nutritional_factors: {
        carbohydrates: "6g",
        protein: "6g",
        fat: "15g"
      },
      food_ingredients: [
        "Almonds",
        "Salt",
        "Vegetable Oil"
      ],
      food_health_benefits: "Rich in vitamin E",
      cooking_method: "Roasting",
      cuisine_type: "International",
      food_features: {
        taste: "salty",
        texture: "crunchy",
        appearance: "golden brown",
        preparation: "roasted",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "salty_06",
      food_name: "Salted Sunflower Seeds",
      food_description: "Sunflower seeds roasted and seasoned with salt, offering a crunchy and salty snack.",
      food_calories_per_serving: 160,
      food_nutritional_factors: {
        carbohydrates: "7g",
        protein: "6g",
        fat: "14g"
      },
      food_ingredients: [
        "Sunflower Seeds",
        "Salt",
        "Vegetable Oil"
      ],
      food_health_benefits: "Source of protein and healthy fats",
      cooking_method: "Roasting",
      cuisine_type: "International",
      food_features: {
        taste: "salty",
        texture: "crunchy",
        appearance: "brown and small",
        preparation: "roasted",
        serving_type: "room temperature"
      }
    },
    {
        "food_id": "salty_07",
        "food_name": "Salted Roasted Peanuts",
        "food_description": "Peanuts roasted and seasoned with salt, offering a crunchy and savory snack.",
        "food_calories_per_serving": 160,
        "food_nutritional_factors": {
          "carbohydrates": "6g",
          "protein": "7g",
          "fat": "14g"
        },
        "food_ingredients": [
          "Peanuts",
          "Salt",
          "Vegetable Oil"
        ],
        "food_health_benefits": "Source of protein",
        "cooking_method": "Roasting",
        "cuisine_type": "International",
        "food_features": {
          "taste": "salty",
          "texture": "crunchy",
          "appearance": "green and shell-on",
          "preparation": "roasted",
          "serving_type": "room temperature"
        }
      },
      
    {
      food_id: "salty_08",
      food_name: "Salted Roasted Pistachios",
      food_description: "Pistachios roasted and seasoned with salt, offering a crunchy and savory snack.",
      food_calories_per_serving: 160,
      food_nutritional_factors: {
        carbohydrates: "8g",
        protein: "6g",
        fat: "14g"
      },
      food_ingredients: [
        "Pistachios",
        "Salt",
        "Vegetable Oil"
      ],
      food_health_benefits: "Rich in protein and healthy fats",
      cooking_method: "Roasting",
      cuisine_type: "International",
      food_features: {
        taste: "salty",
        texture: "crunchy",
        appearance: "green and shell-on",
        preparation: "roasted",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "salty_09",
      food_name: "Salted Roasted Macadamia Nuts",
      food_description: "Macadamia nuts roasted and seasoned with salt, offering a buttery and salty snack.",
      food_calories_per_serving: 200,
      food_nutritional_factors: {
        carbohydrates: "4g",
        protein: "2g",
        fat: "22g"
      },
      food_ingredients: [
        "Macadamia Nuts",
        "Salt",
        "Vegetable Oil"
      ],
      food_health_benefits: "Source of healthy fats",
      cooking_method: "Roasting",
      cuisine_type: "International",
      food_features: {
        taste: "salty",
        texture: "creamy",
        appearance: "white and shell-on",
        preparation: "roasted",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "salty_10",
      food_name: "Salted Roasted Mixed Nuts",
      food_description: "Assorted nuts including almonds, cashews, and peanuts roasted and seasoned with salt, offering a crunchy and savory snack.",
      food_calories_per_serving: 180,
      food_nutritional_factors: {
        carbohydrates: "7g",
        protein: "5g",
        fat: "15g"
      },
      food_ingredients: [
        "Almonds",
        "Cashews",
        "Peanuts",
        "Salt",
        "Vegetable Oil"
      ],
      food_health_benefits: "Rich in protein and healthy fats",
      cooking_method: "Roasting",
      cuisine_type: "International",
      food_features: {
        taste: "salty",
        texture: "crunchy",
        appearance: "assorted",
        preparation: "roasted",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "salty_11",
      food_name: "Salted Roasted Pecans",
      food_description: "Pecans roasted and seasoned with salt, offering a buttery and salty snack.",
      food_calories_per_serving: 180,
      food_nutritional_factors: {
        carbohydrates: "4g",
        protein: "2g",
        fat: "20g"
      },
      food_ingredients: [
        "Pecans",
        "Salt",
        "Vegetable Oil"
      ],
      food_health_benefits: "Source of antioxidants",
      cooking_method: "Roasting",
      cuisine_type: "International",
      food_features: {
        taste: "salty",
        texture: "crunchy",
        appearance: "brown and shell-on",
        preparation: "roasted",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "salty_12",
      food_name: "Salted Roasted Hazelnuts",
      food_description: "Hazelnuts roasted and seasoned with salt, offering a nutty and salty snack.",
      food_calories_per_serving: 170,
      food_nutritional_factors: {
        carbohydrates: "5g",
        protein: "3g",
        fat: "15g"
      },
      food_ingredients: [
        "Hazelnuts",
        "Salt",
        "Vegetable Oil"
      ],
      food_health_benefits: "Source of vitamin E",
      cooking_method: "Roasting",
      cuisine_type: "International",
      food_features: {
        taste: "salty",
        texture: "crunchy",
        appearance: "brown and shell-on",
        preparation: "roasted",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "salty_13",
      food_name: "Salted Roasted Chicken",
      food_description: "Roasted Chicken and seasoned with salt, offering a crunchy and savory snack.",
      food_calories_per_serving: 130,
      food_nutritional_factors: {
        carbohydrates: "18g",
        protein: "5g",
        fat: "3g"
      },
      food_ingredients: [
        "Chickpeas",
        "Salt",
        "Olive Oil"
      ],
      food_health_benefits: "Rich in fiber and protein",
      cooking_method: "Roasting",
      cuisine_type: "International",
      food_features: {
        taste: "salty",
        texture: "crunchy",
        appearance: "golden brown",
        preparation: "roasted",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "salty_14",
      food_name: "Salted Roasted Edamame",
      food_description: "Edamame beans roasted and seasoned with salt, offering a crunchy and savory snack.",
      food_calories_per_serving: 150,
      food_nutritional_factors: {
        carbohydrates: "8g",
        protein: "14g",
        fat: "6g"
      },
      food_ingredients: [
        "Edamame",
        "Salt",
        "Olive Oil"
      ],
      food_health_benefits: "High in protein",
      cooking_method: "Roasting",
      cuisine_type: "International",
      food_features: {
        taste: "salty",
        texture: "crunchy",
        appearance: "green and shell-on",
        preparation: "roasted",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "salty_15",
      food_name: "Salted Roasted Walnuts",
      food_description: "Walnuts roasted and seasoned with salt, offering a nutty and savory snack.",
      food_calories_per_serving: 180,
      food_nutritional_factors: {
        carbohydrates: "4g",
        protein: "4g",
        fat: "18g"
      },
      food_ingredients: [
        "Walnuts",
        "Salt",
        "Vegetable Oil"
      ],
      food_health_benefits: "Source of omega-3 fatty acids",
      cooking_method: "Roasting",
      cuisine_type: "International",
      food_features: {
        taste: "salty",
        texture: "crunchy",
        appearance: "brown and shell-on",
        preparation: "roasted",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "salty_16",
      food_name: "Salted Roasted Pumpkin Seeds",
      food_description: "Pumpkin seeds roasted and seasoned with salt, offering a crunchy and savory snack.",
      food_calories_per_serving: 160,
      food_nutritional_factors: {
        carbohydrates: "4g",
        protein: "9g",
        fat: "13g"
      },
      food_ingredients: [
        "Pumpkin Seeds",
        "Salt",
        "Vegetable Oil"
      ],
      food_health_benefits: "Source of magnesium",
      cooking_method: "Roasting",
      cuisine_type: "International",
      food_features: {
        taste: "salty",
        texture: "crunchy",
        appearance: "brown and shell-on",
        preparation: "roasted",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "salty_17",
      food_name: "Salted Roasted Brazil Nuts",
      food_description: "Brazil nuts roasted and seasoned with salt, offering a rich and savory snack.",
      food_calories_per_serving: 190,
      food_nutritional_factors: {
        carbohydrates: "3g",
        protein: "4g",
        fat: "19g"
      },
      food_ingredients: [
        "Brazil Nuts",
        "Salt",
        "Vegetable Oil"
      ],
      food_health_benefits: "Source of selenium",
      cooking_method: "Roasting",
      cuisine_type: "International",
      food_features: {
        taste: "salty",
        texture: "crunchy",
        appearance: "brown and shell-on",
        preparation: "roasted",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "salty_18",
      food_name: "Salted Roasted Soybeans",
      food_description: "Soybeans roasted and seasoned with salt, offering a crunchy and savory snack.",
      food_calories_per_serving: 150,
      food_nutritional_factors: {
        carbohydrates: "9g",
        protein: "12g",
        fat: "8g"
      },
      food_ingredients: [
        "Soybeans",
        "Salt",
        "Vegetable Oil"
      ],
      food_health_benefits: "Rich in protein",
      cooking_method: "Roasting",
      cuisine_type: "International",
      food_features: {
        taste: "salty",
        texture: "crunchy",
        appearance: "golden brown",
        preparation: "roasted",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "salty_19",
      food_name: "Salted Roasted Corn",
      food_description: "Corn kernels roasted and seasoned with salt, offering a crunchy and savory snack.",
      food_calories_per_serving: 140,
      food_nutritional_factors: {
        carbohydrates: "22g",
        protein: "4g",
        fat: "5g"
      },
      food_ingredients: [
        "Corn Kernels",
        "Salt",
        "Butter"
      ],
      food_health_benefits: "Source of fiber",
      cooking_method: "Roasting",
      cuisine_type: "International",
      food_features: {
        taste: "salty",
        texture: "crunchy",
        appearance: "golden brown",
        preparation: "roasted",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "salty_20",
      food_name: "Salted Roasted Chickpea Snack Mix",
      food_description: "A mix of roasted chickpeas, nuts, and seeds seasoned with salt, offering a flavorful and crunchy snack.",
      food_calories_per_serving: 160,
      food_nutritional_factors: {
        carbohydrates: "14g",
        protein: "6g",
        fat: "10g"
      },
      food_ingredients: [
        "Chickpeas",
        "Almonds",
        "Cashews",
        "Sunflower Seeds",
        "Salt",
        "Olive Oil"
      ],
      food_health_benefits: "Source of protein and healthy fats",
      cooking_method: "Roasting",
      cuisine_type: "International",
      food_features: {
        taste: "salty",
        texture: "crunchy",
        appearance: "assorted",
        preparation: "roasted",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "salty_21",
      food_name: "Salted Roasted Mixed Nuts and Dried Fruits",
      food_description: "A mix of roasted nuts including almonds, cashews, and peanuts, along with dried fruits, seasoned with salt, offering a sweet and savory snack.",
      food_calories_per_serving: 180,
      food_nutritional_factors: {
        carbohydrates: "15g",
        protein: "5g",
        fat: "12g"
      },
      food_ingredients: [
        "Almonds",
        "Cashews",
        "Peanuts",
        "Dried Fruits",
        "Salt",
        "Vegetable Oil"
      ],
      food_health_benefits: "Source of protein and fiber",
      cooking_method: "Roasting",
      cuisine_type: "International",
      food_features: {
        taste: "salty and sweet",
        texture: "crunchy",
        appearance: "assorted",
        preparation: "roasted",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "salty_22",
      food_name: "Salted Roasted Seaweed Snacks",
      food_description: "Thin sheets of seaweed roasted and seasoned with salt, offering a crispy and savory snack.",
      food_calories_per_serving: 25,
      food_nutritional_factors: {
        carbohydrates: "1g",
        protein: "1g",
        fat: "2g"
      },
      food_ingredients: [
        "Seaweed",
        "Salt",
        "Sesame Oil"
      ],
      food_health_benefits: "High in iodine and minerals",
      cooking_method: "Roasting",
      cuisine_type: "International",
      food_features: {
        taste: "salty",
        texture: "crispy",
        appearance: "green and thin",
        preparation: "roasted",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "salty_23",
      food_name: "Salted Roasted Green Peas",
      food_description: "Green peas roasted and seasoned with salt, offering a crunchy and savory snack.",
      food_calories_per_serving: 130,
      food_nutritional_factors: {
        carbohydrates: "20g",
        protein: "7g",
        fat: "3g"
      },
      food_ingredients: [
        "Green Peas",
        "Salt",
        "Vegetable Oil"
      ],
      food_health_benefits: "High in protein and fiber",
      cooking_method: "Roasting",
      cuisine_type: "International",
      food_features: {
        taste: "salty",
        texture: "crunchy",
        appearance: "green and small",
        preparation: "roasted",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "salty_24",
      food_name: "Salted Roasted Broad Beans",
      food_description: "Broad beans roasted and seasoned with salt, offering a crispy and savory snack.",
      food_calories_per_serving: 120,
      food_nutritional_factors: {
        carbohydrates: "19g",
        protein: "6g",
        fat: "3g"
      },
      food_ingredients: [
        "Broad Beans",
        "Salt",
        "Vegetable Oil"
      ],
      food_health_benefits: "High in fiber and protein",
      cooking_method: "Roasting",
      cuisine_type: "International",
      food_features: {
        taste: "salty",
        texture: "crispy",
        appearance: "brown and shell-on",
        preparation: "roasted",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "salty_25",
      food_name: "Salted Roasted Fava Beans",
      food_description: "Fava beans roasted and seasoned with salt, offering a crunchy and savory snack.",
      food_calories_per_serving: 140,
      food_nutritional_factors: {
        carbohydrates: "18g",
        protein: "8g",
        fat: "3g"
      },
      food_ingredients: [
        "Fava Beans",
        "Salt",
        "Vegetable Oil"
      ],
      food_health_benefits: "High in protein and fiber",
      cooking_method: "Roasting",
      cuisine_type: "International",
      food_features: {
        taste: "salty",
        texture: "crunchy",
        appearance: "brown and shell-on",
        preparation: "roasted",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "salty_26",
      food_name: "Salted Roasted Mixed Seeds",
      food_description: "Assorted seeds including pumpkin seeds, sunflower seeds, and sesame seeds roasted and seasoned with salt, offering a crunchy and savory snack.",
      food_calories_per_serving: 150,
      food_nutritional_factors: {
        carbohydrates: "6g",
        protein: "7g",
        fat: "10g"
      },
      food_ingredients: [
        "Pumpkin Seeds",
        "Sunflower Seeds",
        "Sesame Seeds",
        "Salt",
        "Vegetable Oil"
      ],
      food_health_benefits: "Rich in protein and healthy fats",
      cooking_method: "Roasting",
      cuisine_type: "International",
      food_features: {
        taste: "salty",
        texture: "crunchy",
        appearance: "assorted",
        preparation: "roasted",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "salty_27",
      food_name: "Salted Roasted Rice Crackers",
      food_description: "Crunchy rice crackers roasted and seasoned with salt, offering a light and savory snack.",
      food_calories_per_serving: 120,
      food_nutritional_factors: {
        carbohydrates: "24g",
        protein: "2g",
        fat: "2g"
      },
      food_ingredients: [
        "Rice Flour",
        "Salt",
        "Vegetable Oil"
      ],
      food_health_benefits: "Gluten-free alternative",
      cooking_method: "Roasting",
      cuisine_type: "International",
      food_features: {
        taste: "salty",
        texture: "crunchy",
        appearance: "round and flat",
        preparation: "roasted",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "salty_28",
      food_name: "Salted Roasted Quinoa Snack",
      food_description: "Quinoa grains roasted and seasoned with salt, offering a crunchy and savory snack.",
      food_calories_per_serving: 130,
      food_nutritional_factors: {
        carbohydrates: "22g",
        protein: "4g",
        fat: "3g"
      },
      food_ingredients: [
        "Quinoa",
        "Salt",
        "Vegetable Oil"
      ],
      food_health_benefits: "High in protein and fiber",
      cooking_method: "Roasting",
      cuisine_type: "International",
      food_features: {
        taste: "salty",
        texture: "crunchy",
        appearance: "small grains",
        preparation: "roasted",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "salty_29",
      food_name: "Salted Roasted Barley Snack",
      food_description: "Barley grains roasted and seasoned with salt, offering a chewy and savory snack.",
      food_calories_per_serving: 140,
      food_nutritional_factors: {
        carbohydrates: "27g",
        protein: "5g",
        fat: "2g"
      },
      food_ingredients: [
        "Barley",
        "Salt",
        "Vegetable Oil"
      ],
      food_health_benefits: "High in fiber",
      cooking_method: "Roasting",
      cuisine_type: "International",
      food_features: {
        taste: "salty",
        texture: "chewy",
        appearance: "small grains",
        preparation: "roasted",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "salty_30",
      food_name: "Salted Roasted Lentil Snack",
      food_description: "Lentils roasted and seasoned with salt, offering a crunchy and savory snack.",
      food_calories_per_serving: 150,
      food_nutritional_factors: {
        carbohydrates: "24g",
        protein: "9g",
        fat: "2g"
      },
      food_ingredients: [
        "Lentils",
        "Salt",
        "Vegetable Oil"
      ],
      food_health_benefits: "High in protein and fiber",
      cooking_method: "Roasting",
      cuisine_type: "International",
      food_features: {
        taste: "salty",
        texture: "crunchy",
        appearance: "small beans",
        preparation: "roasted",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "salty_31",
      food_name: "Salted Roasted Almonds",
      food_description: "Almonds roasted and seasoned with salt, offering a crunchy and savory snack.",
      food_calories_per_serving: 160,
      food_nutritional_factors: {
        carbohydrates: "6g",
        protein: "6g",
        fat: "14g"
      },
      food_ingredients: [
        "Almonds",
        "Salt",
        "Vegetable Oil"
      ],
      food_health_benefits: "Rich in protein and healthy fats",
      cooking_method: "Roasting",
      cuisine_type: "International",
      food_features: {
        taste: "salty",
        texture: "crunchy",
        appearance: "brown and shell-on",
        preparation: "roasted",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "salty_32",
      food_name: "Salted Roasted Hazelnuts",
      food_description: "Hazelnuts roasted and seasoned with salt, offering a nutty and savory snack.",
      food_calories_per_serving: 170,
      food_nutritional_factors: {
        carbohydrates: "5g",
        protein: "3g",
        fat: "15g"
      },
      food_ingredients: [
        "Hazelnuts",
        "Salt",
        "Vegetable Oil"
      ],
      food_health_benefits: "Source of vitamin E",
      cooking_method: "Roasting",
      cuisine_type: "International",
      food_features: {
        taste: "salty",
        texture: "crunchy",
        appearance: "brown and shell-on",
        preparation: "roasted",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "salty_33",
      food_name: "Salted Roasted Cashews",
      food_description: "Cashews roasted and seasoned with salt, offering a creamy and savory snack.",
      food_calories_per_serving: 180,
      food_nutritional_factors: {
        carbohydrates: "9g",
        protein: "5g",
        fat: "15g"
      },
      food_ingredients: [
        "Cashews",
        "Salt",
        "Vegetable Oil"
      ],
      food_health_benefits: "Rich in protein and healthy fats",
      cooking_method: "Roasting",
      cuisine_type: "International",
      food_features: {
        taste: "salty",
        texture: "creamy",
        appearance: "white and shell-on",
        preparation: "roasted",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "salty_34",
      food_name: "Salted Roasted Peanuts",
      food_description: "Peanuts roasted and seasoned with salt, offering a crunchy and savory snack.",
      food_calories_per_serving: 150,
      food_nutritional_factors: {
        carbohydrates: "5g",
        protein: "7g",
        fat: "12g"
      },
      food_ingredients: [
        "Peanuts",
        "Salt",
        "Vegetable Oil"
      ],
      food_health_benefits: "Source of protein and healthy fats",
      cooking_method: "Roasting",
      cuisine_type: "International",
      food_features: {
        taste: "salty",
        texture: "crunchy",
        appearance: "brown and shell-on",
        preparation: "roasted",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "salty_35",
      food_name: "Salted Roasted Mixed Nuts",
      food_description: "Assorted nuts including almonds, cashews, and peanuts roasted and seasoned with salt, offering a crunchy and savory snack.",
      food_calories_per_serving: 180,
      food_nutritional_factors: {
        carbohydrates: "7g",
        protein: "5g",
        fat: "15g"
      },
      food_ingredients: [
        "Almonds",
        "Cashews",
        "Peanuts",
        "Salt",
        "Vegetable Oil"
      ],
      food_health_benefits: "Rich in protein and healthy fats",
      cooking_method: "Roasting",
      cuisine_type: "International",
      food_features: {
        taste: "salty",
        texture: "crunchy",
        appearance: "assorted",
        preparation: "roasted",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "salty_36",
      food_name: "Salted Roasted Almonds",
      food_description: "Almonds roasted and seasoned with salt, offering a crunchy and savory snack.",
      food_calories_per_serving: 160,
      food_nutritional_factors: {
        carbohydrates: "6g",
        protein: "6g",
        fat: "14g"
      },
      food_ingredients: [
        "Almonds",
        "Salt",
        "Vegetable Oil"
      ],
      food_health_benefits: "Rich in protein and healthy fats",
      cooking_method: "Roasting",
      cuisine_type: "International",
      food_features: {
        taste: "salty",
        texture: "crunchy",
        appearance: "brown and shell-on",
        preparation: "roasted",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "salty_37",
      food_name: "Salted Roasted Hazelnuts",
      food_description: "Hazelnuts roasted and seasoned with salt, offering a nutty and savory snack.",
      food_calories_per_serving: 170,
      food_nutritional_factors: {
        carbohydrates: "5g",
        protein: "3g",
        fat: "15g"
      },
      food_ingredients: [
        "Hazelnuts",
        "Salt",
        "Vegetable Oil"
      ],
      food_health_benefits: "Source of vitamin E",
      cooking_method: "Roasting",
      cuisine_type: "International",
      food_features: {
        taste: "salty",
        texture: "crunchy",
        appearance: "brown and shell-on",
        preparation: "roasted",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "salty_38",
      food_name: "Salted Roasted Cashews",
      food_description: "Cashews roasted and seasoned with salt, offering a creamy and savory snack.",
      food_calories_per_serving: 180,
      food_nutritional_factors: {
        carbohydrates: "9g",
        protein: "5g",
        fat: "15g"
      },
      food_ingredients: [
        "Cashews",
        "Salt",
        "Vegetable Oil"
      ],
      food_health_benefits: "Rich in protein and healthy fats",
      cooking_method: "Roasting",
      cuisine_type: "International",
      food_features: {
        taste: "salty",
        texture: "creamy",
        appearance: "white and shell-on",
        preparation: "roasted",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "salty_39",
      food_name: "Salted Roasted Peanuts",
      food_description: "Peanuts roasted and seasoned with salt, offering a crunchy and savory snack.",
      food_calories_per_serving: 150,
      food_nutritional_factors: {
        carbohydrates: "5g",
        protein: "7g",
        fat: "12g"
      },
      food_ingredients: [
        "Peanuts",
        "Salt",
        "Vegetable Oil"
      ],
      food_health_benefits: "Source of protein and healthy fats",
      cooking_method: "Roasting",
      cuisine_type: "International",
      food_features: {
        taste: "salty",
        texture: "crunchy",
        appearance: "brown and shell-on",
        preparation: "roasted",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "salty_40",
      food_name: "Salted Roasted Mixed Nuts",
      food_description: "Assorted nuts including almonds, cashews, and peanuts roasted and seasoned with salt, offering a crunchy and savory snack.",
      food_calories_per_serving: 180,
      food_nutritional_factors: {
        carbohydrates: "7g",
        protein: "5g",
        fat: "15g"
      },
      food_ingredients: [
        "Almonds",
        "Cashews",
        "Peanuts",
        "Salt",
        "Vegetable Oil"
      ],
      food_health_benefits: "Rich in protein and healthy fats",
      cooking_method: "Roasting",
      cuisine_type: "International",
      food_features: {
        taste: "salty",
        texture: "crunchy",
        appearance: "assorted",
        preparation: "roasted",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "salty_41",
      food_name: "Salted Roasted Pumpkin Seeds",
      food_description: "Pumpkin seeds roasted and seasoned with salt, offering a crunchy and savory snack.",
      food_calories_per_serving: 160,
      food_nutritional_factors: {
        carbohydrates: "4g",
        protein: "8g",
        fat: "14g"
      },
      food_ingredients: [
        "Pumpkin Seeds",
        "Salt",
        "Vegetable Oil"
      ],
      food_health_benefits: "Rich in magnesium and zinc",
      cooking_method: "Roasting",
      cuisine_type: "International",
      food_features: {
        taste: "salty",
        texture: "crunchy",
        appearance: "green and small",
        preparation: "roasted",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "salty_42",
      food_name: "Salted Roasted Edamame",
      food_description: "Edamame beans roasted and seasoned with salt, offering a crunchy and savory snack.",
      food_calories_per_serving: 130,
      food_nutritional_factors: {
        carbohydrates: "10g",
        protein: "12g",
        fat: "4g"
      },
      food_ingredients: [
        "Edamame",
        "Salt",
        "Vegetable Oil"
      ],
      food_health_benefits: "High in protein and fiber",
      cooking_method: "Roasting",
      cuisine_type: "International",
      food_features: {
        taste: "salty",
        texture: "crunchy",
        appearance: "green and small",
        preparation: "roasted",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "salty_43",
      food_name: "Salted Roasted Chickpeas",
      food_description: "Chickpeas roasted and seasoned with salt, offering a crunchy and savory snack.",
      food_calories_per_serving: 140,
      food_nutritional_factors: {
        carbohydrates: "22g",
        protein: "7g",
        fat: "3g"
      },
      food_ingredients: [
        "Chickpeas",
        "Salt",
        "Vegetable Oil"
      ],
      food_health_benefits: "High in protein and fiber",
      cooking_method: "Roasting",
      cuisine_type: "International",
      food_features: {
        taste: "salty",
        texture: "crunchy",
        appearance: "brown and small",
        preparation: "roasted",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "salty_44",
      food_name: "Salted Pretzel Sticks",
      food_description: "Crunchy pretzel sticks seasoned with salt, offering a savory snack.",
      food_calories_per_serving: 110,
      food_nutritional_factors: {
        carbohydrates: "22g",
        protein: "2g",
        fat: "1g"
      },
      food_ingredients: [
        "Wheat Flour",
        "Salt",
        "Yeast",
        "Water",
        "Vegetable Oil"
      ],
      food_health_benefits: "Low in fat",
      cooking_method: "Baking",
      cuisine_type: "International",
      food_features: {
        taste: "salty",
        texture: "crunchy",
        appearance: "brown sticks",
        preparation: "baked",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "salty_45",
      food_name: "Salted Rice Cakes",
      food_description: "Light and airy rice cakes seasoned with salt, offering a crunchy and savory snack.",
      food_calories_per_serving: 70,
      food_nutritional_factors: {
        carbohydrates: "14g",
        protein: "1g",
        fat: "0g"
      },
      food_ingredients: [
        "Rice",
        "Salt"
      ],
      food_health_benefits: "Low in calories and fat",
      cooking_method: "Puffing",
      cuisine_type: "International",
      food_features: {
        taste: "salty",
        texture: "crunchy",
        appearance: "white and round",
        preparation: "puffed",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "salty_46",
      food_name: "Salted Roasted Seaweed",
      food_description: "Thin sheets of seaweed roasted and lightly salted, offering a crispy and savory snack.",
      food_calories_per_serving: 30,
      food_nutritional_factors: {
        carbohydrates: "1g",
        protein: "1g",
        fat: "2g"
      },
      food_ingredients: [
        "Seaweed",
        "Salt",
        "Sesame Oil"
      ],
      food_health_benefits: "High in iodine and minerals",
      cooking_method: "Roasting",
      cuisine_type: "International",
      food_features: {
        taste: "salty",
        texture: "crispy",
        appearance: "green sheets",
        preparation: "roasted",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "salty_47",
      food_name: "Salted Corn Chips",
      food_description: "Crispy corn chips seasoned with salt, offering a crunchy and savory snack.",
      food_calories_per_serving: 150,
      food_nutritional_factors: {
        carbohydrates: "18g",
        protein: "2g",
        fat: "8g"
      },
      food_ingredients: [
        "Corn",
        "Salt",
        "Vegetable Oil"
      ],
      food_health_benefits: "Gluten-free",
      cooking_method: "Frying",
      cuisine_type: "International",
      food_features: {
        taste: "salty",
        texture: "crunchy",
        appearance: "yellow chips",
        preparation: "fried",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "salty_48",
      food_name: "Salted Tortilla Chips",
      food_description: "Crispy tortilla chips seasoned with salt, offering a crunchy and savory snack.",
      food_calories_per_serving: 140,
      food_nutritional_factors: {
        carbohydrates: "18g",
        protein: "2g",
        fat: "7g"
      },
      food_ingredients: [
        "Corn",
        "Salt",
        "Vegetable Oil"
      ],
      food_health_benefits: "Gluten-free",
      cooking_method: "Frying",
      cuisine_type: "Mexican",
      food_features: {
        taste: "salty",
        texture: "crunchy",
        appearance: "triangular chips",
        preparation: "fried",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "salty_49",
      food_name: "Salted Roasted Cashew Nuts",
      food_description: "Cashew nuts roasted and seasoned with salt, offering a crunchy and savory snack.",
      food_calories_per_serving: 170,
      food_nutritional_factors: {
        carbohydrates: "9g",
        protein: "5g",
        fat: "14g"
      },
      food_ingredients: [
        "Cashew Nuts",
        "Salt",
        "Vegetable Oil"
      ],
      food_health_benefits: "Rich in protein and healthy fats",
      cooking_method: "Roasting",
      cuisine_type: "International",
      food_features: {
        taste: "salty",
        texture: "crunchy",
        appearance: "brown and shell-on",
        preparation: "roasted",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "salty_50",
      food_name: "Salted Crackers",
      food_description: "Light and crispy crackers seasoned with salt, offering a crunchy and savory snack.",
      food_calories_per_serving: 120,
      food_nutritional_factors: {
        carbohydrates: "20g",
        protein: "2g",
        fat: "4g"
      },
      food_ingredients: [
        "Wheat Flour",
        "Salt",
        "Vegetable Oil"
      ],
      food_health_benefits: "Low in sugar",
      cooking_method: "Baking",
      cuisine_type: "International",
      food_features: {
        taste: "salty",
        texture: "crispy",
        appearance: "square crackers",
        preparation: "baked",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "salty_51",
      food_name: "Salted Breadsticks",
      food_description: "Crunchy breadsticks seasoned with salt, offering a savory snack.",
      food_calories_per_serving: 130,
      food_nutritional_factors: {
        carbohydrates: "24g",
        protein: "3g",
        fat: "3g"
      },
      food_ingredients: [
        "Wheat Flour",
        "Salt",
        "Yeast",
        "Water",
        "Vegetable Oil"
      ],
      food_health_benefits: "Low in fat",
      cooking_method: "Baking",
      cuisine_type: "International",
      food_features: {
        taste: "salty",
        texture: "crunchy",
        appearance: "long sticks",
        preparation: "baked",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "salty_52",
      food_name: "Salted Roasted Pecans",
      food_description: "Pecans roasted and seasoned with salt, offering a crunchy and savory snack.",
      food_calories_per_serving: 200,
      food_nutritional_factors: {
        carbohydrates: "4g",
        protein: "3g",
        fat: "21g"
      },
      food_ingredients: [
        "Pecans",
        "Salt",
        "Vegetable Oil"
      ],
      food_health_benefits: "Rich in healthy fats and antioxidants",
      cooking_method: "Roasting",
      cuisine_type: "International",
      food_features: {
        taste: "salty",
        texture: "crunchy",
        appearance: "brown and small",
        preparation: "roasted",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "salty_53",
      food_name: "Salted Sunflower Seeds",
      food_description: "Sunflower seeds roasted and seasoned with salt, offering a crunchy and savory snack.",
      food_calories_per_serving: 190,
      food_nutritional_factors: {
        carbohydrates: "6g",
        protein: "7g",
        fat: "16g"
      },
      food_ingredients: [
        "Sunflower Seeds",
        "Salt",
        "Vegetable Oil"
      ],
      food_health_benefits: "Rich in vitamin E and healthy fats",
      cooking_method: "Roasting",
      cuisine_type: "International",
      food_features: {
        taste: "salty",
        texture: "crunchy",
        appearance: "small and shelled",
        preparation: "roasted",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "salty_54",
      food_name: "Salted Pretzel Bites",
      food_description: "Small, soft pretzel bites seasoned with salt, offering a chewy and savory snack.",
      food_calories_per_serving: 120,
      food_nutritional_factors: {
        carbohydrates: "23g",
        protein: "3g",
        fat: "1g"
      },
      food_ingredients: [
        "Wheat Flour",
        "Salt",
        "Yeast",
        "Water",
        "Vegetable Oil"
      ],
      food_health_benefits: "Low in fat",
      cooking_method: "Baking",
      cuisine_type: "International",
      food_features: {
        taste: "salty",
        texture: "chewy",
        appearance: "small bites",
        preparation: "baked",
        serving_type: "room temperature"
      }
    },
    {
      food_id: "salty_55",
      food_name: "Salted Roasted Macadamia Nuts",
      food_description: "Macadamia nuts roasted and seasoned with salt, offering a creamy and savory snack.",
      food_calories_per_serving: 200,
      food_nutritional_factors: {
        carbohydrates: "4g",
        protein: "2g",
        fat: "21g"
      },
      food_ingredients: [
        "Macadamia Nuts",
        "Salt",
        "Vegetable Oil"
      ],
      food_health_benefits: "Rich in healthy fats",
      cooking_method: "Roasting",
      cuisine_type: "International",
      food_features: {
        taste: "salty",
        texture: "creamy",
        appearance: "white and small",
        preparation: "roasted",
        serving_type: "room temperature"
      }
    },
    {
        food_id: "pizza_1",
        food_name: "Margherita Pizza",
        food_description:
          "Classic pizza topped with fresh tomatoes, mozzarella cheese, and basil.",
        food_calories_per_serving: 250,
        food_nutritional_factors: {
          carbohydrates: "30g",
          protein: "12g",
          fat: "10g",
        },
        food_ingredients: [
          "Pizza Dough",
          "Tomatoes",
          "Mozzarella Cheese",
          "Basil",
          "capsicum",
        ],
        food_health_benefits:
          "Rich in calcium, contains antioxidants from tomatoes",
        cooking_method: "Baking",
        cuisine_type: "Italian",
        food_features: {
          taste: "savory",
          texture: "crispy crust with gooey cheese",
          appearance: "vibrant with red, white, and green colors",
          preparation: "oven-baked",
          serving_type: "hot",
        },
      },
      {
        food_id: "pizza_2",
        food_name: "Pepperoni Pizza",
        food_description:
          "Pizza topped with pepperoni slices and melted mozzarella cheese.",
        food_calories_per_serving: 300,
        food_nutritional_factors: {
          carbohydrates: "32g",
          protein: "14g",
          fat: "15g",
        },
        food_ingredients: [
          "Pizza Dough",
          "Pepperoni",
          "Mozzarella Cheese",
          "Tomato Sauce",
        ],
        food_health_benefits: "High in protein, source of iron",
        cooking_method: "Baking",
        cuisine_type: "American",
        food_features: {
          taste: "spicy and savory",
          texture: "crispy crust with chewy cheese and pepperoni",
          appearance: "golden brown with red pepperoni",
          preparation: "oven-baked",
          serving_type: "hot",
        },
      },
      {
        food_id: "pizza_3",
        food_name: "BBQ Chicken Pizza",
        food_description:
          "Pizza topped with BBQ sauce, grilled chicken, red onions, and cilantro.",
        food_calories_per_serving: 350,
        food_nutritional_factors: {
          carbohydrates: "34g",
          protein: "18g",
          fat: "16g",
        },
        food_ingredients: [
          "Pizza Dough",
          "BBQ Sauce",
          "Grilled Chicken",
          "Red Onions",
          "Cilantro",
          "Mozzarella Cheese",
        ],
        food_health_benefits: "High in protein, rich in flavor",
        cooking_method: "Baking",
        cuisine_type: "American",
        food_features: {
          taste: "sweet and tangy",
          texture: "crispy crust with tender chicken",
          appearance: "colorful with red onions and green cilantro",
          preparation: "oven-baked",
          serving_type: "hot",
        },
      },
      {
        food_id: "pizza_4",
        food_name: "Hawaiian Pizza",
        food_description:
          "Pizza topped with ham, pineapple, and mozzarella cheese.",
        food_calories_per_serving: 280,
        food_nutritional_factors: {
          carbohydrates: "35g",
          protein: "13g",
          fat: "12g",
        },
        food_ingredients: [
          "Pizza Dough",
          "Ham",
          "Pineapple",
          "Mozzarella Cheese",
          "Tomato Sauce",
        ],
        food_health_benefits: "Contains vitamins from pineapple, high in protein",
        cooking_method: "Baking",
        cuisine_type: "Canadian",
        food_features: {
          taste: "sweet and savory",
          texture: "crispy crust with juicy pineapple",
          appearance: "bright with yellow pineapple and pink ham",
          preparation: "oven-baked",
          serving_type: "hot",
        },
      },
      {
        food_id: "vege_5",
        food_name: "Vegan Pizza ",
        food_description:
          "Topped with a variety of fresh vegetables and plant based mozzarella cheese.",
        food_calories_per_serving: 230,
        food_nutritional_factors: {
          carbohydrates: "28g",
          protein: "11g",
          fat: "9g",
        },
        food_ingredients: [
          " Dough",
          "Bell Peppers",
          "Mushrooms",
          "Olives",
          "Tomatoes",
          "Mozzarella Cheese",
          "Tomato Sauce",
        ],
        food_health_benefits: "Rich in vitamins and fiber, low in fat",
        cooking_method: "Baking",
        cuisine_type: "Italian",
        food_features: {
          taste: "fresh and savory",
          texture: "crispy crust with tender vegetables",
          appearance: "colorful with a variety of vegetables",
          preparation: "oven-baked",
          serving_type: "hot",
        },
      },
      {
        food_id: "chocolate_1",
        food_name: "Classic Chocolate Cake",
        food_description: "A traditional, rich chocolate cake with a smooth, velvety chocolate icing.",
        food_calories_per_serving: 450,
        food_nutritional_factors: {
          carbohydrates: "60g",
          protein: "6g",
          fat: "25g",
        },
        food_ingredients: [
          "Flour",
          "Sugar",
          "Cocoa Powder",
          "Eggs",
          "Butter",
          "Vanilla Extract",
          "Baking Powder",
        ],
        food_health_benefits: "Contains antioxidants from cocoa",
        cooking_method: "Baking",
        cuisine_type: "American",
        food_features: {
          taste: "sweet and rich",
          texture: "moist and fluffy",
          appearance: "dark and frosted",
          preparation: "baked",
          serving_type: "room temperature",
        },
      },
      {
        food_id: "chocolate_2",
        food_name: "Chocolate Lava Cake",
        food_description: "A decadent chocolate cake with a gooey molten chocolate center.",
        food_calories_per_serving: 520,
        food_nutritional_factors: {
          carbohydrates: "55g",
          protein: "7g",
          fat: "28g",
        },
        food_ingredients: [
          "Flour",
          "Sugar",
          "Dark Chocolate",
          "Eggs",
          "Butter",
          "Vanilla Extract",
        ],
        food_health_benefits: "Rich in antioxidants from dark chocolate",
        cooking_method: "Baking",
        cuisine_type: "French",
        food_features: {
          taste: "intensely chocolatey",
          texture: "soft and molten",
          appearance: "rich and gooey",
          preparation: "baked",
          serving_type: "warm",
        },
      },
      {
        food_id: "chocolate_3",
        food_name: "Vegan Chocolate Cake",
        food_description: "A moist and delicious chocolate cake made without any animal products.",
        food_calories_per_serving: 400,
        food_nutritional_factors: {
          carbohydrates: "62g",
          protein: "5g",
          fat: "18g",
        },
        food_ingredients: [
          "Flour",
          "Sugar",
          "Cocoa Powder",
          "Almond Milk",
          "Coconut Oil",
          "Vanilla Extract",
          "Apple Cider Vinegar",
          "Baking Soda",
        ],
        food_health_benefits: "Dairy-free and cholesterol-free",
        cooking_method: "Baking",
        cuisine_type: "American",
        food_features: {
          taste: "sweet and chocolatey",
          texture: "moist and tender",
          appearance: "dark and frosted",
          preparation: "baked",
          serving_type: "room temperature",
        },
      },
      {
        food_id: "chocolate_4",
        food_name: "Gluten-Free Chocolate Cake",
        food_description: "A rich and moist chocolate cake made with gluten-free ingredients.",
        food_calories_per_serving: 430,
        food_nutritional_factors: {
          carbohydrates: "57g",
          protein: "6g",
          fat: "20g",
        },
        food_ingredients: [
          "Gluten-Free Flour",
          "Sugar",
          "Cocoa Powder",
          "Eggs",
          "Butter",
          "Vanilla Extract",
          "Baking Powder",
          "Xanthan Gum",
        ],
        food_health_benefits: "Suitable for those with gluten intolerance",
        cooking_method: "Baking",
        cuisine_type: "American",
        food_features: {
          taste: "sweet and chocolatey",
          texture: "moist and dense",
          appearance: "dark and frosted",
          preparation: "baked",
          serving_type: "room temperature",
        },
      },
      {
        food_id: "chocolate_5",
        food_name: "Chocolate Syrup",
        food_description: "A rich and thick chocolate syrup perfect for drizzling over desserts.",
        food_calories_per_serving: 150,
        food_nutritional_factors: {
          carbohydrates: "35g",
          protein: "2g",
          fat: "2g",
        },
        food_ingredients: [
          "Cocoa Powder",
          "Sugar",
          "Water",
          "Vanilla Extract",
          "Salt",
        ],
        food_health_benefits: "Contains antioxidants from cocoa",
        cooking_method: "Mixing",
        cuisine_type: "Universal",
        food_features: {
          taste: "sweet and chocolatey",
          texture: "smooth and syrupy",
          appearance: "dark and glossy",
          preparation: "mixed",
          serving_type: "room temperature",
        },
      },
      {
        "food_id": "sushi_1",
        "food_name": "California Roll",
        "food_description": "A popular type of sushi roll filled with crab, avocado, and cucumber, wrapped in seaweed and rice.",
        "food_calories_per_serving": 250,
        "food_nutritional_factors": {
          "carbohydrates": "34g",
          "protein": "9g",
          "fat": "7g"
        },
        "food_ingredients": [
          "Crab",
          "Avocado",
          "Cucumber",
          "Seaweed",
          "Rice",
          "Soy Sauce"
        ],
        "food_health_benefits": "High in omega-3 fatty acids from the crab",
        "cooking_method": "Rolling",
        "cuisine_type": "Japanese",
        "food_features": {
          "taste": "savory and fresh",
          "texture": "soft and crunchy",
          "appearance": "rolled and sliced",
          "preparation": "raw",
          "serving_type": "cold"
        }
      },
      {
        "food_id": "pasta_1",
        "food_name": "Spaghetti Carbonara",
        "food_description": "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
        "food_calories_per_serving": 420,
        "food_nutritional_factors": {
          "carbohydrates": "58g",
          "protein": "17g",
          "fat": "15g"
        },
        "food_ingredients": [
          "Spaghetti",
          "Eggs",
          "Parmesan Cheese",
          "Pancetta",
          "Black Pepper"
        ],
        "food_health_benefits": "Good source of protein from eggs and pancetta",
        "cooking_method": "Boiling and mixing",
        "cuisine_type": "Italian",
        "food_features": {
          "taste": "creamy and savory",
          "texture": "smooth and firm",
          "appearance": "golden and speckled",
          "preparation": "cooked",
          "serving_type": "hot"
        }
      },
      {
        "food_id": "salad_1",
        "food_name": "Caesar Salad",
        "food_description": "A green salad of romaine lettuce and croutons dressed with lemon juice, olive oil, egg, Worcestershire sauce, anchovies, garlic, Dijon mustard, Parmesan cheese, and black pepper.",
        "food_calories_per_serving": 250,
        "food_nutritional_factors": {
          "carbohydrates": "14g",
          "protein": "7g",
          "fat": "19g"
        },
        "food_ingredients": [
          "Romaine Lettuce",
          "Croutons",
          "Parmesan Cheese",
          "Caesar Dressing"
        ],
        "food_health_benefits": "Rich in vitamins A and K from the romaine lettuce",
        "cooking_method": "Mixing",
        "cuisine_type": "Italian",
        "food_features": {
          "taste": "tangy and savory",
          "texture": "crisp and crunchy",
          "appearance": "green and speckled",
          "preparation": "fresh",
          "serving_type": "cold"
        }
      },
      {
        "food_id": "curry_1",
        "food_name": "Chicken Tikka Masala",
        "food_description": "Chunks of roasted marinated chicken in a spiced curry sauce. The sauce is usually creamy and orange-coloured.",
        "food_calories_per_serving": 540,
        "food_nutritional_factors": {
          "carbohydrates": "30g",
          "protein": "40g",
          "fat": "25g"
        },
        "food_ingredients": [
          "Chicken",
          "Yogurt",
          "Tomato Sauce",
          "Cream",
          "Spices"
        ],
        "food_health_benefits": "High in protein from the chicken",
        "cooking_method": "Grilling and simmering",
        "cuisine_type": "Indian",
        "food_features": {
          "taste": "spicy and creamy",
          "texture": "tender and smooth",
          "appearance": "orange and thick",
          "preparation": "cooked",
          "serving_type": "hot"
        }
      },
      {
        "food_id": "soup_1",
        "food_name": "Miso Soup",
        "food_description": "A traditional Japanese soup consisting of a stock called 'dashi' into which softened miso paste is mixed.",
        "food_calories_per_serving": 84,
        "food_nutritional_factors": {
          "carbohydrates": "7g",
          "protein": "6g",
          "fat": "3g"
        },
        "food_ingredients": [
          "Miso Paste",
          "Dashi",
          "Tofu",
          "Seaweed",
          "Green Onions"
        ],
        "food_health_benefits": "Rich in probiotics from the miso paste",
        "cooking_method": "Boiling and mixing",
        "cuisine_type": "Japanese",
        "food_features": {
          "taste": "umami and savory",
          "texture": "smooth and light",
          "appearance": "brothy with floating ingredients",
          "preparation": "cooked",
          "serving_type": "hot"
        }
      },
      {
        "food_id": "biryani_1",
        "food_name": "Chicken Biryani",
        "food_description": "A mixed rice dish with its origins among the Muslims of the Indian subcontinent. It is made with Indian spices, rice, and usually some type of meat (chicken, beef, goat, lamb, prawn, or fish), and sometimes, in certain varieties, eggs or vegetables such as potatoes in certain regional varieties.",
        "food_calories_per_serving": 600,
        "food_nutritional_factors": {
          "carbohydrates": "85g",
          "protein": "25g",
          "fat": "20g"
        },
        "food_ingredients": [
          "Rice",
          "Chicken",
          "Spices",
          "Yogurt",
          "Onions"
        ],
        "food_health_benefits": "High in protein and rich in spices with antioxidant properties",
        "cooking_method": "Simmering and baking",
        "cuisine_type": "Indian",
        "food_features": {
          "taste": "spicy and aromatic",
          "texture": "fluffy and moist",
          "appearance": "golden and colorful",
          "preparation": "cooked",
          "serving_type": "hot"
        }
      },

      {
  "food_id": "biryani_1",
  "food_name": "Chicken Dum Biryani ",
  "food_description": "A mixed rice dish with its origins among the Muslims of the Indian subcontinent. It is made with Indian spices, rice, and usually some type of meat (chicken, beef, goat, lamb, prawn, or fish), and sometimes, in certain varieties, eggs or vegetables such as potatoes in certain regional varieties.",
  "food_calories_per_serving": 600,
  "food_nutritional_factors": {
    "carbohydrates": "85g",
    "protein": "25g",
    "fat": "20g"
  },
  "food_ingredients": [
    "Rice",
    "Chicken",
    "Spices",
    "Yogurt",
    "Onions"
  ],
  "food_health_benefits": "High in protein and rich in spices with antioxidant properties",
  "cooking_method": "Simmering and baking",
  "cuisine_type": "Indian",
  "food_features": {
    "taste": "spicy and aromatic",
    "texture": "fluffy and moist",
    "appearance": "golden and colorful",
    "preparation": "cooked",
    "serving_type": "hot"
  }
},

{
  "food_id": "stir_fry_1",
  "food_name": "Vegetable Stir Fry",
  "food_description": "A quick and easy stir fry dish with a variety of fresh vegetables, soy sauce, and garlic.",
  "food_calories_per_serving": 180,
  "food_nutritional_factors": {
    "carbohydrates": "25g",
    "protein": "5g",
    "fat": "7g"
  },
  "food_ingredients": [
    "Broccoli",
    "Carrots",
    "Bell Peppers",
    "Soy Sauce",
    "Garlic",
    "Ginger"
  ],
  "food_health_benefits": "Rich in vitamins and fiber from fresh vegetables",
  "cooking_method": "Stir-frying",
  "cuisine_type": "Chinese",
  "food_features": {
    "taste": "savory and slightly sweet",
    "texture": "crisp and tender",
    "appearance": "colorful and vibrant",
    "preparation": "cooked",
    "serving_type": "hot"
  }
},
{
  "food_id": "bread_1",
  "food_name": "Garlic Bread",
  "food_description": "Toasted bread slices rubbed with garlic and drizzled with olive oil or butter.",
  "food_calories_per_serving": 200,
  "food_nutritional_factors": {
    "carbohydrates": "24g",
    "protein": "4g",
    "fat": "10g"
  },
  "food_ingredients": [
    "Bread",
    "Garlic",
    "Butter",
    "Parsley"
  ],
  "food_health_benefits": "Contains antioxidants from garlic",
  "cooking_method": "Toasting",
  "cuisine_type": "Italian",
  "food_features": {
    "taste": "garlicky and buttery",
    "texture": "crunchy and soft",
    "appearance": "golden and speckled with herbs",
    "preparation": "toasted",
    "serving_type": "hot"
  }
},
{
  "food_id": "dessert_1",
  "food_name": "Tiramisu",
  "food_description": "A classic Italian dessert made of layers of coffee-soaked ladyfingers and a rich, creamy mascarpone mixture, dusted with cocoa powder.",
  "food_calories_per_serving": 480,
  "food_nutritional_factors": {
    "carbohydrates": "45g",
    "protein": "7g",
    "fat": "30g"
  },
  "food_ingredients": [
    "Ladyfingers",
    "Coffee",
    "Mascarpone Cheese",
    "Eggs",
    "Cocoa Powder",
    "Sugar"
  ],
  "food_health_benefits": "Contains calcium from the mascarpone cheese",
  "cooking_method": "Layering and chilling",
  "cuisine_type": "Italian",
  "food_features": {
    "taste": "sweet and coffee-flavored",
    "texture": "creamy and soft",
    "appearance": "layered and dusted",
    "preparation": "no-bake",
    "serving_type": "cold"
  }
},
{
  "food_id": "taco_1",
  "food_name": "Beef Tacos",
  "food_description": "Soft corn tortillas filled with seasoned beef, lettuce, cheese, and salsa.",
  "food_calories_per_serving": 300,
  "food_nutritional_factors": {
    "carbohydrates": "28g",
    "protein": "15g",
    "fat": "15g"
  },
  "food_ingredients": [
    "Corn Tortillas",
    "Beef",
    "Lettuce",
    "Cheese",
    "Salsa"
  ],
  "food_health_benefits": "High in protein from the beef",
  "cooking_method": "Frying and assembling",
  "cuisine_type": "Mexican",
  "food_features": {
    "taste": "savory and tangy",
    "texture": "soft and crunchy",
    "appearance": "colorful and stuffed",
    "preparation": "cooked",
    "serving_type": "hot"
  }
},

{
  "food_id": "soup_2",
  "food_name": "Tom Yum Soup",
  "food_description": "A hot and sour Thai soup usually cooked with shrimp, mushrooms, tomatoes, lemongrass, galangal, and kaffir lime leaves.",
  "food_calories_per_serving": 120,
  "food_nutritional_factors": {
    "carbohydrates": "10g",
    "protein": "8g",
    "fat": "5g"
  },
  "food_ingredients": [
    "Shrimp",
    "Mushrooms",
    "Tomatoes",
    "Lemongrass",
    "Galangal",
    "Kaffir Lime Leaves"
  ],
  "food_health_benefits": "Rich in antioxidants and anti-inflammatory compounds",
  "cooking_method": "Boiling and simmering",
  "cuisine_type": "Thai",
  "food_features": {
    "taste": "spicy and sour",
    "texture": "brothy and chunky",
    "appearance": "clear with vibrant ingredients",
    "preparation": "cooked",
    "serving_type": "hot"
  }
},
{
  "food_id": "dumpling_1",
  "food_name": "Pork Dumplings",
  "food_description": "Chinese dumplings filled with seasoned ground pork and vegetables, steamed or fried.",
  "food_calories_per_serving": 220,
  "food_nutritional_factors": {
    "carbohydrates": "20g",
    "protein": "12g",
    "fat": "10g"
  },
  "food_ingredients": [
    "Ground Pork",
    "Cabbage",
    "Ginger",
    "Garlic",
    "Soy Sauce",
    "Dumpling Wrappers"
  ],
  "food_health_benefits": "High in protein from the pork",
  "cooking_method": "Steaming or frying",
  "cuisine_type": "Chinese",
  "food_features": {
    "taste": "savory and umami",
    "texture": "soft and chewy",
    "appearance": "pale and plump",
    "preparation": "cooked",
    "serving_type": "hot"
  }
},
{
  "food_id": "pizza_1",
  "food_name": "Margherita Pizza",
  "food_description": "A classic pizza topped with fresh tomatoes, mozzarella cheese, and basil.",
  "food_calories_per_serving": 270,
  "food_nutritional_factors": {
    "carbohydrates": "33g",
    "protein": "12g",
    "fat": "10g"
  },
  "food_ingredients": [
    "Pizza Dough",
    "Tomatoes",
    "Mozzarella Cheese",
    "Basil",
    "Olive Oil"
  ],
  "food_health_benefits": "Good source of calcium from the cheese",
  "cooking_method": "Baking",
  "cuisine_type": "Italian",
  "food_features": {
    "taste": "savory and fresh",
    "texture": "crispy and melty",
    "appearance": "golden with green and red toppings",
    "preparation": "cooked",
    "serving_type": "hot"
  }
},
{
  "food_id": "noodle_1",
  "food_name": "Pad Thai",
  "food_description": "A stir-fried rice noodle dish commonly served as street food in Thailand. It is typically made with rice noodles, shrimp, peanuts, a scrambled egg, and bean sprouts, among other vegetables.",
  "food_calories_per_serving": 400,
  "food_nutritional_factors": {
    "carbohydrates": "45g",
    "protein": "20g",
    "fat": "15g"
  },
  "food_ingredients": [
    "Rice Noodles",
    "Shrimp",
    "Peanuts",
    "Egg",
    "Bean Sprouts",
    "Tamarind Paste"
  ],
  "food_health_benefits": "High in protein from shrimp and eggs",
  "cooking_method": "Stir-frying",
  "cuisine_type": "Thai",
  "food_features": {
    "taste": "sweet and tangy",
    "texture": "chewy and crunchy",
    "appearance": "colorful and glossy",
    "preparation": "cooked",
    "serving_type": "hot"
  }
},
{
  "food_id": "stew_1",
  "food_name": "Beef Stew",
  "food_description": "A hearty stew made with chunks of beef, potatoes, carrots, and onions simmered in a rich broth.",
  "food_calories_per_serving": 350,
  "food_nutritional_factors": {
    "carbohydrates": "30g",
    "protein": "25g",
    "fat": "15g"
  },
  "food_ingredients": [
    "Beef",
    "Potatoes",
    "Carrots",
    "Onions",
    "Beef Broth",
    "Herbs"
  ],
  "food_health_benefits": "High in protein and iron from the beef",
  "cooking_method": "Simmering",
  "cuisine_type": "American",
  "food_features": {
    "taste": "savory and rich",
    "texture": "tender and chunky",
    "appearance": "brown and hearty",
    "preparation": "cooked",
    "serving_type": "hot"
  }
},
{
  "food_id": "curry_2",
  "food_name": "Paneer Butter Masala",
  "food_description": "Cubes of paneer cooked in a rich, creamy, and mildly spiced tomato-based curry.",
  "food_calories_per_serving": 420,
  "food_nutritional_factors": {
    "carbohydrates": "20g",
    "protein": "15g",
    "fat": "30g"
  },
  "food_ingredients": [
    "Paneer",
    "Tomato Sauce",
    "Cream",
    "Butter",
    "Spices"
  ],
  "food_health_benefits": "Rich in calcium and protein from the paneer",
  "cooking_method": "Simmering",
  "cuisine_type": "Indian",
  "food_features": {
    "taste": "mildly spiced and creamy",
    "texture": "soft and smooth",
    "appearance": "orange and thick",
    "preparation": "cooked",
    "serving_type": "hot"
  }
},
{
  "food_id": "curry_3",
  "food_name": "Chickpea Curry",
  "food_description": "A hearty and flavorful curry made with chickpeas simmered in a spiced tomato and coconut milk sauce.",
  "food_calories_per_serving": 380,
  "food_nutritional_factors": {
    "carbohydrates": "50g",
    "protein": "12g",
    "fat": "12g"
  },
  "food_ingredients": [
    "Chickpeas",
    "Tomato Sauce",
    "Coconut Milk",
    "Onions",
    "Spices"
  ],
  "food_health_benefits": "High in fiber and plant-based protein from chickpeas",
  "cooking_method": "Simmering",
  "cuisine_type": "Indian",
  "food_features": {
    "taste": "spicy and rich",
    "texture": "tender and creamy",
    "appearance": "orange and chunky",
    "preparation": "cooked",
    "serving_type": "hot"
  }
},
{
  "food_id": "curry_4",
  "food_name": "Vegetable Korma",
  "food_description": "A creamy and mildly spiced curry made with mixed vegetables cooked in a yogurt and cashew-based sauce.",
  "food_calories_per_serving": 320,
  "food_nutritional_factors": {
    "carbohydrates": "25g",
    "protein": "8g",
    "fat": "20g"
  },
  "food_ingredients": [
    "Mixed Vegetables",
    "Yogurt",
    "Cashew Paste",
    "Onions",
    "Spices"
  ],
  "food_health_benefits": "Rich in vitamins and minerals from the vegetables",
  "cooking_method": "Simmering",
  "cuisine_type": "Indian",
  "food_features": {
    "taste": "mildly spiced and creamy",
    "texture": "soft and smooth",
    "appearance": "light brown and chunky",
    "preparation": "cooked",
    "serving_type": "hot"
  }
},
{
  "food_id": "curry_5",
  "food_name": "Lentil Dhal",
  "food_description": "A nutritious and flavorful curry made with red lentils simmered in a spiced tomato and coconut milk sauce.",
  "food_calories_per_serving": 300,
  "food_nutritional_factors": {
    "carbohydrates": "40g",
    "protein": "15g",
    "fat": "10g"
  },
  "food_ingredients": [
    "Red Lentils",
    "Tomato Sauce",
    "Coconut Milk",
    "Onions",
    "Spices"
  ],
  "food_health_benefits": "High in protein and fiber from the lentils",
  "cooking_method": "Simmering",
  "cuisine_type": "Indian",
  "food_features": {
    "taste": "spicy and rich",
    "texture": "thick and creamy",
    "appearance": "golden and chunky",
    "preparation": "cooked",
    "serving_type": "hot"
  }
}




  ]

  module.exports=foodItems;