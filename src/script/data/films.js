const films = [
    {
        name: "Corba",
        foodPic: "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
        instructions: "Pick through your lentils for any foreign debris, rinse them 2 or 3 times, drain, and set aside. Fair warning, this will probably turn your lentils into a solid block that you’ll have to break up later In a large pot over medium-high heat, sauté the olive oil and the onion with a pinch of salt for about 3 minutes, then add the carrots and cook for another 3 minutes. Add the tomato paste and stir it around for around 1 minute. Now add the cumin, paprika, mint, thyme, black pepper, and red pepper as quickly as you can and stir for 10 seconds to bloom the spices. Congratulate yourself on how amazing your house now smells. Immediately add the lentils, water, broth, and salt. Bring the soup to a (gentle) boil. After it has come to a boil, reduce heat to medium-low, cover the pot halfway, and cook for 15-20 minutes or until the lentils have fallen apart and the carrots are completely cooked. After the soup has cooked and the lentils are tender, blend the soup either in a blender or simply use a hand "
    },
    {
        name: "Kumpir",
        foodPic: "https://www.themealdb.com/images/media/meals/mlchx21564916997.jpg",
        instructions: "If you order kumpir in Turkey, the standard filling is first, lots of butter mashed into the potato, followed by cheese. There’s then a row of other toppings that you can just point at to your heart’s content – sweetcorn, olives, salami, coleslaw, Russian salad, allsorts – and you walk away with an over-stuffed potato because you got ever-excited by the choices on offer. Grate (roughly – you can use as much as you like) 150g of cheese. Finely chop one onion and one sweet red pepper. Put these ingredients into a large bowl with a good sprinkling of salt and pepper, chilli flakes (optional)."
    },
    {
        name: "Dal fry",
        foodPic: "https://www.themealdb.com/images/media/meals/wuxrtu1483564410.jpg",
        instructions: "Wash and soak toor dal in approx. 3 cups of water, for at least one hours. Dal will be double in volume after soaking. Drain the water. Cook dal with 2-1/2 cups water and add salt, turmeric, on medium high heat, until soft in texture (approximately 30 mins) it should be like thick soup. In a frying pan, heat the ghee. Add cumin seeds, and mustard seeds. After the seeds crack, add bay leaves, green chili, ginger and chili powder. Stir for a few seconds. Add tomatoes, salt and sugar stir and cook until tomatoes are tender and mushy. Add cilantro and garam masala cook for about one minute. Pour the seasoning over dal mix it well and cook for another minute. Serve with Naan."
    },
    {
        name: "Poutine",
        foodPic: "https://www.themealdb.com/images/media/meals/uuyrrx1487327597.jpg",
        instructions: "Heat oil in a deep fryer or deep heavy skillet to 365°F (185°C). Warm gravy in saucepan or microwave. Place the fries into the hot oil, and cook until light brown, about 5 minutes. Remove to a paper towel lined plate to drain. Place the fries on a serving platter, and sprinkle the cheese over them. Ladle gravy over the fries and cheese, and serve immediately."
    },
    {
        name: "Lasagne",
        foodPic: "https://www.themealdb.com/images/media/meals/wtsvxx1511296896.jpg",
        instructions: "Heat the oil in a large saucepan. Use kitchen scissors to snip the bacon into small pieces, or use a sharp knife to chop it on a chopping board. Add the bacon to the pan and cook for just a few mins until starting to turn golden. Add the onion, celery and carrot, and cook over a medium heat for 5 mins, stirring occasionally, until softened. Add the garlic and cook for 1 min, then tip in the mince and cook, stirring and breaking it up with a wooden spoon, for about 6 mins until browned all over. Stir in the tomato purée and cook for 1 min, mixing in well with the beef and vegetables. Tip in the chopped tomatoes. Fill each can half full with water to rinse out any tomatoes left in the can, and add to the pan. Add the honey and season to taste. Simmer for 20 mins. Heat oven to 200C/180C fan/gas 6. To assemble the lasagne, ladle a little of the ragu sauce into the bottom of the roasting tin or casserole dish, spreading the sauce all over the base. Place 2 sheets of lasagne on top of the sauce "
    },
    {
        name: "Timbits",
        foodPic: "https://www.themealdb.com/images/media/meals/txsupu1511815755.jpg",
        instructions: "Sift together dry ingredients. Mix together wet ingredients and incorporate into dry. Stir until smooth. Drop by teaspoonfuls(no bigger) into hot oil (365 degrees, no hotter), turning after a few moments until golden brown on all sides. Remove and drain. Roll in cinnamon sugar while still warm and serve."
    },
    {
        name: "Wontons",
        foodPic: "https://www.themealdb.com/images/media/meals/1525876468.jpg",
        instructions: "Combine pork, garlic, ginger, soy sauce, sesame oil, and vegetables in a bowl. Separate wonton skins. Place a heaping teaspoon of filling in the center of the wonton. Brush water on 2 borders of the skin, covering 1/4 inch from the edge. Fold skin over to form a triangle, sealing edges. Pinch the two long outside points together. Heat oil to 450 degrees and fry 4 to 5 at a time until golden. Drain and serve with sauce."
    },
    {
        name: "Kafteji",
        foodPic: "https://www.themealdb.com/images/media/meals/1bsv1q1560459826.jpg",
        instructions: "Peel potatoes and cut into 5cm cubes. Pour 1-2 cm of olive oil into a large pan and heat up very hot. Fry potatoes until golden brown for 20 minutes, turning from time to time. Place on kitchen paper to drain. Cut the peppers in half and remove seeds. Rub a little olive oil on them and place the cut side down on a baking tray. Place them under the grill. Grill until the skin is dark and bubbly. While the peppers are still hot, put them into a plastic sandwich bag and seal it. Take them out after 15 minutes and remove skins. In the meantime, heat more olive oil another pan. Peel the onions and cut into thin rings. Fry for 15 minutes until golden brown, turning them often. Add the Ras el hanout at the end. Cut the pumpkin into 5cm cubes and fry in the same pan you used for the potatoes for 10-15 minutes until it is soft and slightly browned. Place on kitchen paper. Pour the remaining olive oil out of the pan and put all the cooked vegetables into the pan and mix. Whisk eggs and pour them over the vegetables. Put the lid on the pan so that the eggs cook. Put the contents of the pan onto a la"
    },
    {
        name: "Big Mac",
        foodPic: "https://www.themealdb.com/images/media/meals/urzj1d1587670726.jpg",
        instructions: "For the Big Mac sauce, combine all the ingredients in a bowl, season with salt and chill until ready to use. 2. To make the patties, season the mince with salt and pepper and form into 4 balls using about 1/3 cup mince each. Place each onto a square of baking paper and flatten to form into four x 15cm circles. Heat oil in a large frypan over high heat. In 2 batches, cook beef patties for 1-2 minutes each side until lightly charred and cooked through. Remove from heat and keep warm. Repeat with remaining two patties. 3. Carefully slice each burger bun into three acrossways, then lightly toast. 4. To assemble the burgers, spread a little Big Mac sauce over the bottom base. Top with some chopped onion, shredded lettuce, slice of cheese, beef patty and some pickle slices. Top with the middle bun layer, and spread with more Big Mac sauce, onion, lettuce, pickles, beef patty and then finish with more sauce. Top with burger lid to serve. 5. After waiting half an hour for your food to settle, go for a jog."
    }
    ];

export default films;