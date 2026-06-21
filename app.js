/* ============================== ICONS ============================== */
const ICONS = {
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
  flame: '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 17a2.5 2.5 0 0 0 2.5-2.5c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7.5 7.5 0 1 1-15 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  cart: '<circle cx="9" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.5 2.5h2l2.6 12.4a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 7H6"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/>',
  trash: '<path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0-1 14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L4 6"/>',
  chevronDown: '<path d="M6 9l6 6 6-6"/>',
  chevronUp: '<path d="M18 15l-6-6-6 6"/>',
  bag: '<path d="M6 7h12l1 13H5L6 7z"/><path d="M9 7a3 3 0 0 1 6 0"/>',
  download: '<path d="M12 3v12m0 0 4-4m-4 4-4-4M4 19h16"/>',
  upload: '<path d="M12 21V9m0 0 4 4m-4-4-4 4M4 5h16"/>',
};
function icon(name, size) {
  size = size || 16;
  return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + (ICONS[name] || '') + '</svg>';
}
function escapeAttr(str) {
  return String(str == null ? '' : str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/* ============================== DATA ============================== */
const MEAL_META = {
  breakfast: { label: 'Breakfast', color: '#f5b942' },
  lunch: { label: 'Lunch', color: '#2dd4bf' },
  dinner: { label: 'Dinner', color: '#fb7a3c' },
  snack: { label: 'Snack', color: '#a3e635' },
};
const MEALS = ['breakfast', 'lunch', 'dinner'];
const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const DAY_NOTE = { Sat: 'light day', Sun: 'prep day' };
const FLAVORS = ['spicy', 'smoky', 'garlicky', 'citrusy', 'herby', 'sweet', 'tangy'];
const CATEGORY_ORDER = ['Protein', 'Produce', 'Dairy-Free & Fats', 'Pantry & Spice', 'Nuts & Safe Seeds'];

const CATEGORY_MAP = {
  'chicken thighs': 'Protein', 'chicken breast': 'Protein', 'ground beef': 'Protein',
  'sirloin steak': 'Protein', 'shrimp': 'Protein', 'salmon fillet': 'Protein',
  'smoked salmon': 'Protein', 'italian sausage': 'Protein', 'andouille sausage': 'Protein',
  'breakfast sausage': 'Protein', 'chorizo': 'Protein', 'eggs': 'Protein',
  'collagen protein powder': 'Protein',
  'bell pepper': 'Produce', 'onion': 'Produce', 'green onion': 'Produce', 'garlic': 'Produce',
  'ginger': 'Produce', 'celery': 'Produce', 'cucumber': 'Produce', 'tomato': 'Produce',
  'zucchini': 'Produce', 'broccoli': 'Produce', 'asparagus': 'Produce', 'green beans': 'Produce',
  'spinach': 'Produce', 'cauliflower rice': 'Produce', 'butter lettuce': 'Produce',
  'avocado': 'Produce', 'lime': 'Produce', 'lemon': 'Produce', 'cilantro': 'Produce',
  'parsley': 'Produce', 'basil': 'Produce',
  'ghee': 'Dairy-Free & Fats', 'olive oil': 'Dairy-Free & Fats', 'coconut milk': 'Dairy-Free & Fats',
  'coconut cream': 'Dairy-Free & Fats', 'almond milk': 'Dairy-Free & Fats',
  'coconut oil': 'Dairy-Free & Fats', 'coconut butter': 'Dairy-Free & Fats',
  'dairy-free cream cheese': 'Dairy-Free & Fats', 'avocado oil mayo': 'Dairy-Free & Fats',
  'buffalo sauce': 'Pantry & Spice', 'coconut aminos': 'Pantry & Spice', 'fish sauce': 'Pantry & Spice',
  'red curry paste': 'Pantry & Spice', 'marinara sauce': 'Pantry & Spice', 'capers': 'Pantry & Spice',
  'kalamata olives': 'Pantry & Spice', 'hot sauce': 'Pantry & Spice', 'apple cider vinegar': 'Pantry & Spice',
  'keto sweetener': 'Pantry & Spice', 'vanilla extract': 'Pantry & Spice', 'almond butter': 'Pantry & Spice',
  'cajun seasoning': 'Pantry & Spice', 'taco seasoning': 'Pantry & Spice', 'fajita seasoning': 'Pantry & Spice',
  'jerk seasoning': 'Pantry & Spice', 'italian seasoning': 'Pantry & Spice', 'greek seasoning': 'Pantry & Spice',
  'garlic-onion blend': 'Pantry & Spice', 'gochugaru': 'Pantry & Spice', 'cinnamon': 'Pantry & Spice',
  'almonds': 'Nuts & Safe Seeds', 'pecans': 'Nuts & Safe Seeds', 'hemp hearts': 'Nuts & Safe Seeds',
  'chia seeds': 'Nuts & Safe Seeds', 'coconut flakes': 'Nuts & Safe Seeds',
};

function ing(name, label) { return { name: name, label: label }; }

const RECIPES = [
  { id: 'b1', meal: 'breakfast', name: 'Smoky Chorizo & Pepper Egg Jar', time: 10, flavor: ['smoky', 'spicy'], grabGo: true, thermos: true, sundayPrep: false,
    macros: { cal: 420, fat: 34, protein: 24, netCarb: 4 },
    ingredients: [ing('chorizo', '4 oz chorizo, casing removed'), ing('eggs', '3 eggs'), ing('bell pepper', '1/2 bell pepper, diced'), ing('green onion', '1 stalk, sliced'), ing('avocado', '1/2 avocado'), ing('hot sauce', 'splash hot sauce')],
    steps: ['Brown chorizo in a skillet, breaking it up, 4 min.', 'Add bell pepper, soften 2 min.', 'Whisk eggs, pour in, scramble until just set.', 'Pack into a jar with avocado, finish with hot sauce.'] },
  { id: 'b2', meal: 'breakfast', name: 'Maple-Pecan Chia Pudding Jar', time: 5, flavor: ['sweet'], grabGo: true, thermos: false, sundayPrep: true,
    macros: { cal: 310, fat: 24, protein: 8, netCarb: 6 },
    ingredients: [ing('chia seeds', '1/4 cup chia seeds'), ing('almond milk', '3/4 cup almond milk'), ing('coconut cream', '2 tbsp coconut cream'), ing('pecans', '2 tbsp pecans, chopped'), ing('cinnamon', '1/2 tsp cinnamon'), ing('keto sweetener', '1 tbsp keto sweetener'), ing('vanilla extract', '1/2 tsp vanilla')],
    steps: ['Whisk almond milk, coconut cream, sweetener, vanilla, and cinnamon.', 'Stir in chia seeds, transfer to a jar.', 'Refrigerate overnight.', 'Top with pecans before eating.'] },
  { id: 'b3', meal: 'breakfast', name: 'Garlic-Onion Bagel Egg Muffins', time: 20, flavor: ['smoky'], grabGo: true, thermos: false, sundayPrep: true,
    macros: { cal: 280, fat: 20, protein: 19, netCarb: 3 },
    ingredients: [ing('eggs', '6 eggs'), ing('smoked salmon', '3 oz smoked salmon'), ing('dairy-free cream cheese', '2 tbsp dairy-free cream cheese'), ing('green onion', '1 stalk, sliced'), ing('garlic-onion blend', '1 tsp garlic-onion seasoning (sesame/poppy-free)')],
    steps: ['Whisk eggs with the garlic-onion blend.', 'Pour into a greased muffin tin, bake 350°F for 15 min.', 'Dollop with cream cheese, flake in salmon.', 'Top with green onion.'] },
  { id: 'b4', meal: 'breakfast', name: 'Western NY Diner Skillet', time: 12, flavor: ['spicy'], grabGo: false, thermos: true, sundayPrep: false,
    macros: { cal: 460, fat: 36, protein: 26, netCarb: 5 },
    ingredients: [ing('breakfast sausage', '4 oz breakfast sausage'), ing('eggs', '3 eggs'), ing('bell pepper', '1/2 bell pepper, diced'), ing('onion', '1/4 onion, diced'), ing('hot sauce', 'splash hot sauce'), ing('avocado', '1/2 avocado')],
    steps: ['Brown sausage 5 min.', 'Add peppers and onion, soften.', 'Push aside, scramble eggs in the same pan.', 'Combine, finish with hot sauce and avocado.'] },
  { id: 'b5', meal: 'breakfast', name: 'Iced Mocha Protein Shake', time: 5, flavor: ['sweet'], grabGo: true, thermos: false, sundayPrep: false,
    macros: { cal: 260, fat: 16, protein: 20, netCarb: 5 },
    ingredients: [ing('almond milk', '1 cup almond milk'), ing('coconut cream', '1 tbsp coconut cream'), ing('collagen protein powder', '1 scoop collagen protein'), ing('cinnamon', 'pinch cinnamon'), ing('vanilla extract', '1/2 tsp vanilla')],
    steps: ['Blend everything with ice until smooth.', 'Pour over fresh ice and go.'] },
  { id: 'b6', meal: 'breakfast', name: 'Smoked Salmon & Avocado Jar', time: 8, flavor: ['citrusy'], grabGo: true, thermos: true, sundayPrep: false,
    macros: { cal: 380, fat: 28, protein: 24, netCarb: 6 },
    ingredients: [ing('smoked salmon', '3 oz smoked salmon'), ing('avocado', '1/2 avocado'), ing('cucumber', '1/2 cucumber, sliced'), ing('capers', '1 tsp capers'), ing('eggs', '1 hard-boiled egg'), ing('lemon', 'wedge of lemon'), ing('olive oil', '1 tsp olive oil')],
    steps: ['Layer cucumber, smoked salmon, and sliced egg in a jar.', 'Top with avocado and capers.', 'Dress with olive oil and lemon right before eating.'] },
  { id: 'b7', meal: 'breakfast', name: 'Sausage, Spinach & Garlic Egg Bake Bars', time: 35, flavor: ['garlicky'], grabGo: true, thermos: false, sundayPrep: true,
    macros: { cal: 240, fat: 18, protein: 16, netCarb: 2 },
    ingredients: [ing('breakfast sausage', '8 oz breakfast sausage'), ing('eggs', '8 eggs'), ing('spinach', '2 cups spinach'), ing('garlic', '2 cloves garlic, minced'), ing('ghee', '1 tbsp ghee')],
    steps: ['Brown sausage with garlic, wilt in spinach.', 'Whisk eggs, fold in the sausage mix.', 'Pour into a greased baking dish, bake 350°F for 25 min.', 'Cool, then slice into bars for the week.'] },

  { id: 'l1', meal: 'lunch', name: 'Buffalo Chicken Cauli Rice Bowl', time: 15, flavor: ['spicy', 'tangy'], grabGo: false, thermos: true, sundayPrep: false,
    macros: { cal: 520, fat: 38, protein: 34, netCarb: 6 },
    ingredients: [ing('chicken thighs', '6 oz chicken thighs, diced'), ing('buffalo sauce', '3 tbsp buffalo sauce'), ing('cauliflower rice', '1.5 cups cauliflower rice'), ing('celery', '1 stalk, diced'), ing('avocado oil mayo', '1 tbsp avocado oil mayo'), ing('green onion', '1 stalk, sliced')],
    steps: ['Sear diced chicken thighs until cooked through, 8 min.', 'Toss with buffalo sauce.', 'Sauté cauliflower rice 4 min, plate.', 'Top with chicken, celery, a drizzle of mayo, and green onion.'] },
  { id: 'l2', meal: 'lunch', name: 'Korean Beef & Broccoli Bowl', time: 15, flavor: ['spicy', 'garlicky'], grabGo: false, thermos: true, sundayPrep: false,
    macros: { cal: 540, fat: 36, protein: 33, netCarb: 8 },
    ingredients: [ing('ground beef', '6 oz ground beef'), ing('coconut aminos', '2 tbsp coconut aminos'), ing('garlic', '2 cloves garlic, minced'), ing('ginger', '1 tsp ginger, grated'), ing('broccoli', '1.5 cups broccoli'), ing('gochugaru', '1 tsp gochugaru'), ing('green onion', '1 stalk, sliced')],
    steps: ['Brown beef with garlic and ginger, 6 min.', 'Stir in coconut aminos and gochugaru.', 'Steam or sauté broccoli, combine.', 'Top with green onion.'] },
  { id: 'l3', meal: 'lunch', name: 'Greek Lemon Chicken Jar', time: 15, flavor: ['citrusy', 'herby'], grabGo: false, thermos: true, sundayPrep: false,
    macros: { cal: 470, fat: 32, protein: 31, netCarb: 7 },
    ingredients: [ing('chicken thighs', '6 oz chicken thighs'), ing('greek seasoning', '1 tbsp Greek seasoning'), ing('lemon', '1/2 lemon'), ing('cucumber', '1/2 cucumber, diced'), ing('tomato', '1/2 cup tomato, diced'), ing('kalamata olives', '8 kalamata olives'), ing('olive oil', '1 tbsp olive oil')],
    steps: ['Season chicken thighs with Greek seasoning, sear 10 min.', 'Layer cucumber, tomato, and olives in a jar.', 'Add sliced chicken on top.', 'Finish with olive oil and lemon.'] },
  { id: 'l4', meal: 'lunch', name: 'Cajun Shrimp Zoodle Bowl', time: 12, flavor: ['spicy', 'citrusy'], grabGo: false, thermos: true, sundayPrep: false,
    macros: { cal: 410, fat: 28, protein: 30, netCarb: 6 },
    ingredients: [ing('shrimp', '6 oz shrimp'), ing('cajun seasoning', '1 tbsp cajun seasoning'), ing('zucchini', '1 zucchini, spiralized'), ing('garlic', '1 clove garlic, minced'), ing('ghee', '1 tbsp ghee'), ing('lemon', 'wedge of lemon'), ing('parsley', '1 tbsp parsley, chopped')],
    steps: ['Toss shrimp in cajun seasoning.', 'Sear in ghee with garlic, 2 min per side.', 'Toss in zoodles just to warm through.', 'Finish with lemon and parsley.'] },
  { id: 'l5', meal: 'lunch', name: 'Taco Bowl with Cilantro-Lime Cauli Rice', time: 15, flavor: ['spicy', 'citrusy'], grabGo: false, thermos: true, sundayPrep: false,
    macros: { cal: 500, fat: 34, protein: 32, netCarb: 7 },
    ingredients: [ing('ground beef', '6 oz ground beef'), ing('taco seasoning', '1.5 tbsp taco seasoning'), ing('cauliflower rice', '1.5 cups cauliflower rice'), ing('avocado', '1/2 avocado'), ing('lime', '1/2 lime'), ing('cilantro', '2 tbsp cilantro, chopped')],
    steps: ['Brown beef with taco seasoning, 6 min.', 'Sauté cauliflower rice with lime and cilantro.', 'Plate rice, top with beef and avocado.'] },
  { id: 'l6', meal: 'lunch', name: 'Italian Sausage & Pepper Skillet Jar', time: 15, flavor: ['herby', 'garlicky'], grabGo: false, thermos: true, sundayPrep: false,
    macros: { cal: 480, fat: 36, protein: 24, netCarb: 7 },
    ingredients: [ing('italian sausage', '6 oz italian sausage'), ing('bell pepper', '1 bell pepper, sliced'), ing('onion', '1/2 onion, sliced'), ing('garlic', '2 cloves garlic, minced'), ing('marinara sauce', '1/3 cup marinara sauce'), ing('italian seasoning', '1 tsp Italian seasoning')],
    steps: ['Slice and brown sausage, 6 min.', 'Add peppers, onion, and garlic, soften.', 'Stir in marinara and Italian seasoning, simmer 5 min, jar it.'] },
  { id: 'l7', meal: 'lunch', name: 'Thai Coconut Curry Chicken Jar', time: 18, flavor: ['spicy', 'herby'], grabGo: false, thermos: true, sundayPrep: false,
    macros: { cal: 510, fat: 38, protein: 28, netCarb: 8 },
    ingredients: [ing('chicken thighs', '6 oz chicken thighs, diced'), ing('red curry paste', '1.5 tbsp red curry paste'), ing('coconut milk', '1/2 cup coconut milk'), ing('bell pepper', '1/2 bell pepper, sliced'), ing('fish sauce', '1 tsp fish sauce'), ing('basil', 'small handful basil'), ing('lime', 'wedge of lime')],
    steps: ['Sear diced chicken, 5 min.', 'Stir in curry paste, bloom 1 min.', 'Add coconut milk, peppers, and fish sauce, simmer 8 min.', 'Finish with basil and lime.'] },

  { id: 'd1', meal: 'dinner', name: 'Garlic Butter Steak Bites & Asparagus', time: 15, flavor: ['garlicky', 'herby'], grabGo: false, thermos: false, sundayPrep: false,
    macros: { cal: 560, fat: 42, protein: 36, netCarb: 4 },
    ingredients: [ing('sirloin steak', '8 oz sirloin, cubed'), ing('ghee', '2 tbsp ghee'), ing('garlic', '3 cloves garlic, minced'), ing('asparagus', '1 bunch asparagus'), ing('parsley', '1 tbsp parsley, chopped')],
    steps: ['Cube steak, pat dry, season well.', 'Sear in ghee 2-3 min per side, add garlic the last minute.', 'Sauté asparagus in the same pan.', 'Rest steak, finish with parsley.'] },
  { id: 'd2', meal: 'dinner', name: 'Sheet-Pan Cajun Sausage & Veggies', time: 20, flavor: ['spicy', 'smoky'], grabGo: false, thermos: false, sundayPrep: false,
    macros: { cal: 520, fat: 40, protein: 26, netCarb: 7 },
    ingredients: [ing('andouille sausage', '8 oz andouille sausage, sliced'), ing('broccoli', '1.5 cups broccoli'), ing('bell pepper', '1 bell pepper, sliced'), ing('cajun seasoning', '1 tbsp cajun seasoning'), ing('olive oil', '2 tbsp olive oil')],
    steps: ['Toss sliced sausage and veggies with oil and cajun seasoning.', 'Roast at 425°F for 18 min, stirring once.'] },
  { id: 'd3', meal: 'dinner', name: 'Pan-Seared Salmon, Lemon-Caper, Green Beans', time: 15, flavor: ['citrusy', 'herby'], grabGo: false, thermos: false, sundayPrep: false,
    macros: { cal: 480, fat: 34, protein: 34, netCarb: 5 },
    ingredients: [ing('salmon fillet', '7 oz salmon fillet'), ing('ghee', '1.5 tbsp ghee'), ing('lemon', '1/2 lemon'), ing('capers', '1 tbsp capers'), ing('garlic', '1 clove garlic, minced'), ing('green beans', '1.5 cups green beans')],
    steps: ['Sear salmon skin-down in ghee, 4 min per side.', 'Sauté green beans with garlic in a second pan.', 'Deglaze the salmon pan with lemon and capers, spoon over.'] },
  { id: 'd4', meal: 'dinner', name: '15-Minute Chicken Fajita Skillet', time: 15, flavor: ['spicy', 'citrusy'], grabGo: false, thermos: false, sundayPrep: false,
    macros: { cal: 440, fat: 26, protein: 38, netCarb: 7 },
    ingredients: [ing('chicken breast', '7 oz chicken breast, sliced thin'), ing('fajita seasoning', '1.5 tbsp fajita seasoning'), ing('bell pepper', '1 bell pepper, sliced'), ing('onion', '1/2 onion, sliced'), ing('avocado', '1/2 avocado'), ing('lime', 'wedge of lime')],
    steps: ['Slice chicken thin, toss with fajita seasoning.', 'Sear 4 min, add peppers and onion, cook 6 min more.', 'Finish with lime, top with avocado.'] },
  { id: 'd5', meal: 'dinner', name: 'Spicy Korean Beef Lettuce Wraps', time: 15, flavor: ['spicy', 'garlicky'], grabGo: false, thermos: false, sundayPrep: false,
    macros: { cal: 460, fat: 32, protein: 30, netCarb: 5 },
    ingredients: [ing('ground beef', '6 oz ground beef'), ing('coconut aminos', '2 tbsp coconut aminos'), ing('gochugaru', '1 tsp gochugaru'), ing('garlic', '2 cloves garlic, minced'), ing('ginger', '1 tsp ginger, grated'), ing('butter lettuce', '1 head butter lettuce'), ing('green onion', '1 stalk, sliced')],
    steps: ['Brown beef with garlic and ginger.', 'Stir in coconut aminos and gochugaru.', 'Spoon into lettuce cups, top with green onion.'] },
  { id: 'd6', meal: 'dinner', name: 'Shrimp Scampi Zoodles', time: 15, flavor: ['garlicky', 'citrusy'], grabGo: false, thermos: false, sundayPrep: false,
    macros: { cal: 420, fat: 30, protein: 28, netCarb: 5 },
    ingredients: [ing('shrimp', '6 oz shrimp'), ing('ghee', '2 tbsp ghee'), ing('garlic', '3 cloves garlic, minced'), ing('lemon', '1/2 lemon'), ing('parsley', '1 tbsp parsley, chopped'), ing('zucchini', '1 zucchini, spiralized'), ing('apple cider vinegar', '1 tsp apple cider vinegar')],
    steps: ['Sear shrimp in ghee, 2 min per side, remove.', 'Add garlic, lemon, and a splash of vinegar to the pan.', 'Toss in zoodles and shrimp to warm through, finish with parsley.'] },
  { id: 'd7', meal: 'dinner', name: 'Jerk Chicken Thighs & Coconut Cauli Rice', time: 20, flavor: ['spicy', 'citrusy'], grabGo: false, thermos: false, sundayPrep: false,
    macros: { cal: 510, fat: 34, protein: 36, netCarb: 6 },
    ingredients: [ing('chicken thighs', '8 oz chicken thighs'), ing('jerk seasoning', '1.5 tbsp jerk seasoning'), ing('cauliflower rice', '1.5 cups cauliflower rice'), ing('coconut milk', '1/3 cup coconut milk'), ing('lime', 'wedge of lime')],
    steps: ['Rub chicken with jerk seasoning (marinate ahead if you can).', 'Sear 6-7 min per side until cooked through.', 'Simmer cauliflower rice in coconut milk 5 min.', 'Plate together, squeeze lime.'] },

  { id: 's1', meal: 'snack', name: 'Hemp Heart Energy Bites', time: 10, flavor: ['sweet'], grabGo: true, thermos: false, sundayPrep: true,
    macros: { cal: 190, fat: 16, protein: 5, netCarb: 3 },
    ingredients: [ing('almond butter', '1/2 cup almond butter'), ing('hemp hearts', '1/4 cup hemp hearts'), ing('coconut flakes', '2 tbsp coconut flakes'), ing('cinnamon', '1/2 tsp cinnamon'), ing('keto sweetener', '1 tbsp keto sweetener'), ing('vanilla extract', '1/2 tsp vanilla')],
    steps: ['Mix everything into a thick dough.', 'Roll into bites.', 'Chill 30 min, store in the fridge.'] },
  { id: 's2', meal: 'snack', name: 'Spicy Roasted Almonds & Pecans', time: 15, flavor: ['spicy', 'smoky'], grabGo: true, thermos: false, sundayPrep: true,
    macros: { cal: 220, fat: 20, protein: 6, netCarb: 3 },
    ingredients: [ing('almonds', '1/2 cup almonds'), ing('pecans', '1/2 cup pecans'), ing('ghee', '1 tbsp ghee, melted'), ing('cajun seasoning', '1 tsp cajun seasoning')],
    steps: ['Toss nuts with melted ghee and cajun seasoning.', 'Roast at 325°F for 12 min, stirring once.', 'Cool fully before storing.'] },
  { id: 's3', meal: 'snack', name: 'Buffalo Chicken Dip Jar with Celery', time: 10, flavor: ['spicy', 'tangy'], grabGo: true, thermos: false, sundayPrep: false,
    macros: { cal: 280, fat: 22, protein: 16, netCarb: 3 },
    ingredients: [ing('chicken thighs', '4 oz cooked chicken, shredded'), ing('buffalo sauce', '2 tbsp buffalo sauce'), ing('dairy-free cream cheese', '2 tbsp dairy-free cream cheese'), ing('celery', '2 stalks celery')],
    steps: ['Shred cooked chicken, warm with buffalo sauce and cream cheese until melty.', 'Jar it with celery sticks for dipping.'] },
  { id: 's4', meal: 'snack', name: 'Coconut-Lime Fat Bombs', time: 10, flavor: ['sweet', 'citrusy'], grabGo: true, thermos: false, sundayPrep: true,
    macros: { cal: 200, fat: 20, protein: 2, netCarb: 2 },
    ingredients: [ing('coconut butter', '1/3 cup coconut butter'), ing('coconut oil', '2 tbsp coconut oil'), ing('lime', 'zest of 1 lime'), ing('coconut flakes', '2 tbsp coconut flakes'), ing('keto sweetener', '1 tbsp keto sweetener')],
    steps: ['Melt coconut butter and oil together.', 'Stir in lime zest and sweetener.', 'Pour into molds, top with coconut flakes, freeze 1 hr.'] },
];

const ALL_INGREDIENT_NAMES = Array.from(new Set(RECIPES.flatMap(function (r) { return r.ingredients.map(function (i) { return i.name; }); }))).sort();
function emptyPlan() {
  return DAYS.reduce(function (acc, d) { acc[d] = { breakfast: null, lunch: null, dinner: null }; return acc; }, {});
}

/* ============================== STATE + STORAGE ============================== */
const STORAGE_KEYS = { pantry: 'walkin-pantry', plan: 'walkin-mealplan', bought: 'walkin-bought' };

function loadSet(key) {
  try { const raw = localStorage.getItem(key); return raw ? new Set(JSON.parse(raw)) : new Set(); }
  catch (e) { return new Set(); }
}
function loadPlan() {
  try { const raw = localStorage.getItem(STORAGE_KEYS.plan); return raw ? Object.assign(emptyPlan(), JSON.parse(raw)) : emptyPlan(); }
  catch (e) { return emptyPlan(); }
}
function saveSet(key, set) { try { localStorage.setItem(key, JSON.stringify(Array.from(set))); } catch (e) { console.error(e); } }
function savePlan(plan) { try { localStorage.setItem(STORAGE_KEYS.plan, JSON.stringify(plan)); } catch (e) { console.error(e); } }

const state = {
  tab: 'cookbook',
  have: loadSet(STORAGE_KEYS.pantry),
  plan: loadPlan(),
  bought: loadSet(STORAGE_KEYS.bought),
  selectedId: null,
  picker: null,
  cb: { search: '', meal: 'all', flavors: new Set(), quick: new Set() },
  pantryOpen: true,
  showStocked: false,
  pickerSearch: '',
  pickerMeal: null,
  addDay: 'Mon',
  addMeal: null,
};

function toggleSetVal(set, val) { if (set.has(val)) set.delete(val); else set.add(val); }

function togglePantry(name) {
  if (state.have.has(name)) state.have.delete(name); else state.have.add(name);
  saveSet(STORAGE_KEYS.pantry, state.have);
  render();
}
function toggleBought(name) {
  if (state.bought.has(name)) state.bought.delete(name); else state.bought.add(name);
  saveSet(STORAGE_KEYS.bought, state.bought);
  render();
}
function assignRecipe(day, meal, recipeId) {
  state.plan[day][meal] = recipeId;
  savePlan(state.plan);
  state.picker = null;
  render();
}
function removeRecipe(day, meal) {
  state.plan[day][meal] = null;
  savePlan(state.plan);
  render();
}
function clearWeek() {
  state.plan = emptyPlan();
  savePlan(state.plan);
  render();
}

/* ============================== RENDER HELPERS ============================== */
function renderMacroRow(m, compact) {
  return '<div class="macro-row ' + (compact ? 'compact' : '') + '">' +
    '<span><span class="val">' + m.cal + '</span> cal</span>' +
    '<span><span class="val">' + m.fat + 'g</span> fat</span>' +
    '<span><span class="val">' + m.protein + 'g</span> pro</span>' +
    '<span><span class="val">' + m.netCarb + 'g</span> net c</span></div>';
}
function renderFlameGauge(pct) {
  const color = pct >= 80 ? '#fb7a3c' : pct >= 50 ? '#f5b942' : '#64748b';
  return '<div class="flame-gauge"><div class="flame-gauge-track"><div class="flame-gauge-fill" style="width:' + pct + '%;background:linear-gradient(90deg,#f5b942,' + color + ')"></div></div>' +
    '<span class="flame-gauge-pct" style="color:' + color + '">' + pct + '%</span></div>';
}

function renderHeader() {
  return '<header class="header"><div class="header-row"><div>' +
    '<h1 class="display">THE WALK-IN</h1>' +
    '<p>Keto, flavor-first, built for a 15km day. No lactose, no sesame or related seeds.</p>' +
    '</div><div class="header-actions">' +
    '<button class="icon-btn" data-action="export" title="Export backup" aria-label="Export backup">' + icon('download') + '</button>' +
    '<button class="icon-btn" data-action="import" title="Import backup" aria-label="Import backup">' + icon('upload') + '</button>' +
    '</div></div></header>';
}
function renderNav() {
  const tabs = [['cookbook', 'Cookbook', 'book'], ['tonight', 'Cook Tonight', 'flame'], ['planner', 'Planner', 'calendar'], ['shopping', 'Shopping', 'cart']];
  return '<nav class="tab-bar">' + tabs.map(function (t) {
    const active = state.tab === t[0];
    return '<button class="tab-btn ' + (active ? 'active' : '') + '" data-action="set-tab" data-tab="' + t[0] + '">' + icon(t[2]) + ' ' + t[1] + '</button>';
  }).join('') + '</nav>';
}

/* ---- cookbook ---- */
function filteredRecipes() {
  return RECIPES.filter(function (r) {
    if (state.cb.meal !== 'all' && r.meal !== state.cb.meal) return false;
    if (state.cb.search && r.name.toLowerCase().indexOf(state.cb.search.toLowerCase()) === -1) return false;
    if (state.cb.flavors.size && !r.flavor.some(function (f) { return state.cb.flavors.has(f); })) return false;
    if (state.cb.quick.has('quick') && r.time > 15) return false;
    if (state.cb.quick.has('grabGo') && !r.grabGo) return false;
    if (state.cb.quick.has('thermos') && !r.thermos) return false;
    if (state.cb.quick.has('sundayPrep') && !r.sundayPrep) return false;
    return true;
  });
}
function renderRecipeCard(r) {
  const m = MEAL_META[r.meal];
  return '<button class="recipe-card" style="border-left-color:' + m.color + '" data-action="open-recipe" data-id="' + r.id + '"><div class="inner">' +
    '<div class="card-top"><span class="meal-tag" style="color:' + m.color + ';background:' + m.color + '1f">' + m.label + '</span>' +
    '<span class="ticket-no">№ ' + r.id.toUpperCase() + '</span></div>' +
    '<h3 class="recipe-title">' + r.name + '</h3>' +
    '<div class="meta-row"><span class="clock">' + icon('clock', 12) + ' ' + r.time + ' min</span>' +
    (r.grabGo ? '<span>grab &amp; go</span>' : '') + (r.thermos ? '<span>thermos</span>' : '') + '</div>' +
    renderMacroRow(r.macros, true) + '</div></button>';
}
function renderCookbookTab() {
  const list = filteredRecipes();
  const mealChips = ['all', 'breakfast', 'lunch', 'dinner', 'snack'].map(function (mm) {
    const active = state.cb.meal === mm;
    const color = mm === 'all' ? '#fb7a3c' : MEAL_META[mm].color;
    return '<button class="chip ' + (active ? 'active-meal' : '') + '" style="' + (active ? 'background:' + color + ';border-color:transparent;' : '') + '" data-action="cb-meal" data-meal="' + mm + '">' + (mm === 'all' ? 'All' : MEAL_META[mm].label) + '</button>';
  }).join('');
  const flavorChips = FLAVORS.map(function (f) {
    const active = state.cb.flavors.has(f);
    return '<button class="chip ' + (active ? 'active-flavor' : '') + '" data-action="cb-flavor" data-flavor="' + f + '">' + f + '</button>';
  }).join('');
  const quickDefs = [['quick', '\u226415 min'], ['grabGo', 'grab & go'], ['thermos', 'thermos'], ['sundayPrep', 'Sunday prep']];
  const quickChips = quickDefs.map(function (qd) {
    const active = state.cb.quick.has(qd[0]);
    return '<button class="chip ' + (active ? 'active-quick' : '') + '" data-action="cb-quick" data-quick="' + qd[0] + '">' + qd[1] + '</button>';
  }).join('');
  const cards = list.map(renderRecipeCard).join('');
  return '<div class="search-wrap">' + icon('search') +
    '<input class="search-input" type="text" placeholder="Search the cookbook\u2026" value="' + escapeAttr(state.cb.search) + '" data-action="cb-search" />' +
    '</div><div class="filter-row">' + mealChips + '</div><div class="filter-row">' + flavorChips + '</div><div class="filter-row last">' + quickChips + '</div>' +
    (list.length === 0 ? '<p class="empty-state">Nothing on the line matches that. Try clearing a filter.</p>' : '<div class="recipe-grid">' + cards + '</div>');
}

/* ---- cook tonight ---- */
function rankedRecipes() {
  return RECIPES.map(function (r) {
    const total = r.ingredients.length;
    const haveCount = r.ingredients.filter(function (i) { return state.have.has(i.name); }).length;
    const pct = total ? Math.round((haveCount / total) * 100) : 0;
    const missing = r.ingredients.filter(function (i) { return !state.have.has(i.name); });
    return Object.assign({}, r, { pct: pct, haveCount: haveCount, total: total, missing: missing });
  }).sort(function (a, b) { return b.pct - a.pct || a.time - b.time; });
}
function renderTonightTab() {
  const ranked = rankedRecipes();
  const ready = ranked.filter(function (r) { return r.pct >= 80; });
  const almost = ranked.filter(function (r) { return r.pct >= 50 && r.pct < 80; });
  const trip = ranked.filter(function (r) { return r.pct < 50; });
  const grouped = CATEGORY_ORDER.map(function (cat) { return { cat: cat, items: ALL_INGREDIENT_NAMES.filter(function (n) { return (CATEGORY_MAP[n] || 'Pantry & Spice') === cat; }) }; });

  const pantryHtml = '<div class="pantry-card"><button class="pantry-toggle" data-action="toggle-pantry-open">' +
    '<span class="label">' + icon('bag') + ' What\'s in the kitchen right now</span>' +
    icon(state.pantryOpen ? 'chevronUp' : 'chevronDown') + '</button>' +
    (state.pantryOpen ? '<div class="pantry-body">' + grouped.map(function (g) {
      return '<div class="pantry-cat"><h5>' + g.cat + '</h5><div class="pantry-chips">' +
        g.items.map(function (name) {
          const have = state.have.has(name);
          return '<button class="pantry-chip ' + (have ? 'have' : '') + '" data-action="toggle-pantry" data-name="' + escapeAttr(name) + '">' + name + '</button>';
        }).join('') + '</div></div>';
    }).join('') + '</div>' : '') + '</div>';

  const buckets = [['Ready now', ready, '#fb7a3c'], ['Almost there', almost, '#f5b942'], ['Need a grocery run', trip, '#64748b']].map(function (b) {
    const title = b[0], list = b[1], color = b[2];
    const items = list.length === 0 ? '<p class="bucket-empty">Nothing here yet.</p>' :
      '<div class="bucket-list">' + list.map(function (r) {
        return '<button class="bucket-item" style="border-left-color:' + MEAL_META[r.meal].color + '" data-action="open-recipe" data-id="' + r.id + '">' +
          '<div class="bucket-item-top"><span class="name">' + r.name + '</span><span class="count">' + r.haveCount + '/' + r.total + '</span></div>' +
          renderFlameGauge(r.pct) +
          ((r.missing.length > 0 && r.missing.length <= 4) ? '<p class="missing-note">missing: ' + r.missing.map(function (m) { return m.name; }).join(', ') + '</p>' : '') +
          '</button>';
      }).join('') + '</div>';
    return '<div class="bucket"><h4 style="color:' + color + '">' + icon('flame', 13) + ' ' + title + ' <span style="color:var(--text-faint)">(' + list.length + ')</span></h4>' + items + '</div>';
  }).join('');

  return pantryHtml + buckets;
}

/* ---- planner ---- */
function renderPlannerTab() {
  const filled = DAYS.reduce(function (acc, d) { return acc + MEALS.filter(function (m) { return state.plan[d] && state.plan[d][m]; }).length; }, 0);
  const head = '<div></div>' + DAYS.map(function (d) {
    return '<div class="planner-day-head"><div class="d">' + d + '</div>' + (DAY_NOTE[d] ? '<div class="note">' + DAY_NOTE[d] + '</div>' : '') + '</div>';
  }).join('');
  const rows = MEALS.map(function (meal) {
    const label = '<div class="meal-row-label" style="color:' + MEAL_META[meal].color + '">' + MEAL_META[meal].label + '</div>';
    const cells = DAYS.map(function (day) {
      const recipeId = state.plan[day] && state.plan[day][meal];
      const recipe = recipeId ? RECIPES.find(function (r) { return r.id === recipeId; }) : null;
      if (recipe) {
        return '<div class="planner-cell"><p class="recipe-name">' + recipe.name + '</p>' +
          '<button class="remove-link" data-action="remove-recipe" data-day="' + day + '" data-meal="' + meal + '">' + icon('x', 10) + ' remove</button></div>';
      }
      return '<div class="planner-cell"><button class="add-cell-btn" data-action="open-picker" data-day="' + day + '" data-meal="' + meal + '">' + icon('plus', 14) + '</button></div>';
    }).join('');
    return label + cells;
  }).join('');
  return '<div class="planner-summary"><span class="count"><b>' + filled + '</b> / ' + (DAYS.length * MEALS.length) + ' meals planned</span>' +
    '<button class="clear-btn" data-action="clear-week">' + icon('trash', 12) + ' Clear week</button></div>' +
    '<div class="planner-scroll"><div class="planner-grid" style="grid-template-columns: 90px repeat(' + DAYS.length + ', minmax(120px,1fr));">' + head + rows + '</div></div>';
}

/* ---- shopping ---- */
function plannedRecipesList() {
  const list = [];
  DAYS.forEach(function (day) {
    MEALS.forEach(function (meal) {
      const id = state.plan[day] && state.plan[day][meal];
      if (id) { const r = RECIPES.find(function (rr) { return rr.id === id; }); if (r) list.push(r); }
    });
  });
  return list;
}
function renderShoppingTab() {
  const planned = plannedRecipesList();
  if (planned.length === 0) {
    return '<div class="shop-empty">' + icon('cart', 28) + '<p>Your line\'s empty \u2014 plan some meals first and the list builds itself.</p>' +
      '<button class="go-planner-btn" data-action="set-tab" data-tab="planner">Go to Planner</button></div>';
  }
  const neededMap = {};
  planned.forEach(function (r) {
    r.ingredients.forEach(function (i) {
      if (state.have.has(i.name)) return;
      if (!neededMap[i.name]) neededMap[i.name] = { name: i.name, labels: new Set(), category: CATEGORY_MAP[i.name] || 'Pantry & Spice' };
      neededMap[i.name].labels.add(i.label);
    });
  });
  const needed = Object.values(neededMap);
  const stockedMap = {};
  planned.forEach(function (r) {
    r.ingredients.forEach(function (i) {
      if (!state.have.has(i.name)) return;
      if (!stockedMap[i.name]) stockedMap[i.name] = { name: i.name, category: CATEGORY_MAP[i.name] || 'Pantry & Spice' };
    });
  });
  const stocked = Object.values(stockedMap);

  const cats = CATEGORY_ORDER.map(function (cat) {
    const items = needed.filter(function (i) { return i.category === cat; });
    if (items.length === 0) return '';
    return '<div class="shop-cat"><h4>' + cat + '</h4><div class="shop-items">' + items.map(function (item) {
      const checked = state.bought.has(item.name);
      return '<button class="shop-row" data-action="toggle-bought" data-name="' + escapeAttr(item.name) + '">' +
        '<span class="box ' + (checked ? 'checked' : '') + '">' + (checked ? icon('check', 11) : '') + '</span>' +
        '<span class="label ' + (checked ? 'checked' : '') + '">' + item.name + ' <span class="detail">\u00b7 ' + Array.from(item.labels).join(' + ') + '</span></span></button>';
    }).join('') + '</div></div>';
  }).join('');

  const stockedHtml = stocked.length > 0 ? '<div><button class="stocked-toggle" data-action="toggle-stocked">' + icon(state.showStocked ? 'chevronUp' : 'chevronDown', 13) + ' Already in the kitchen (' + stocked.length + ')</button>' +
    (state.showStocked ? '<div class="stocked-chips">' + stocked.map(function (i) { return '<span class="stocked-chip">' + i.name + '</span>'; }).join('') + '</div>' : '') + '</div>' : '';

  return '<p class="shop-summary"><b>' + needed.length + '</b> items to buy for <b>' + planned.length + '</b> planned meals</p>' + cats + stockedHtml;
}

/* ---- detail modal ---- */
function renderDetailModal(recipe) {
  const m = MEAL_META[recipe.meal];
  const ingHtml = recipe.ingredients.map(function (i) {
    const have = state.have.has(i.name);
    return '<li><button class="ing-row" data-action="toggle-pantry" data-name="' + escapeAttr(i.name) + '">' +
      '<span class="ing-box" style="background:' + (have ? m.color : 'transparent') + ';border-color:' + (have ? m.color : 'var(--border-2)') + '">' + (have ? icon('check', 11) : '') + '</span>' +
      '<span class="ing-label ' + (have ? 'have' : '') + '">' + i.label + '</span></button></li>';
  }).join('');
  const stepsHtml = recipe.steps.map(function (s, idx) {
    return '<li class="step-row"><span class="step-num" style="color:' + m.color + '">' + String(idx + 1).padStart(2, '0') + '</span>' + s + '</li>';
  }).join('');
  const dayOptions = DAYS.map(function (d) { return '<option value="' + d + '"' + (state.addDay === d ? ' selected' : '') + '>' + d + '</option>'; }).join('');
  const mealOptions = MEALS.map(function (mm) { return '<option value="' + mm + '"' + (state.addMeal === mm ? ' selected' : '') + '>' + MEAL_META[mm].label + '</option>'; }).join('');

  return '<div class="overlay"><button class="overlay-bg" data-action="close-detail" aria-label="Close"></button>' +
    '<div class="slide-panel"><div class="slide-panel-head">' +
    '<span class="meal-tag" style="color:' + m.color + ';background:' + m.color + '1f">' + m.label + '</span>' +
    '<button class="x-btn" data-action="close-detail">' + icon('x', 20) + '</button></div>' +
    '<div class="panel-body"><span class="ticket-no">TICKET \u2116 ' + recipe.id.toUpperCase() + '</span>' +
    '<h2 class="panel-title">' + recipe.name + '</h2>' +
    '<div class="detail-meta"><span class="meta-row clock" style="margin:0">' + icon('clock', 14) + ' ' + recipe.time + ' min</span>' +
    recipe.flavor.map(function (f) { return '<span style="text-transform:capitalize">' + f + '</span>'; }).join('') + '</div>' +
    '<div class="macro-box">' + renderMacroRow(recipe.macros, false) + '</div>' +
    '<h4 class="section-label">Ingredients</h4><ul class="ing-list">' + ingHtml + '</ul>' +
    '<h4 class="section-label">Method</h4><ol class="steps-list">' + stepsHtml + '</ol>' +
    '<div class="add-plan-box"><h4 class="section-label">Add to plan</h4>' +
    '<div class="add-plan-row"><select data-action="set-add-day">' + dayOptions + '</select><select data-action="set-add-meal">' + mealOptions + '</select></div>' +
    '<button class="add-btn" data-action="confirm-add" data-id="' + recipe.id + '">Add to plan ' + icon('plus', 15) + '</button></div>' +
    '</div></div></div>';
}

/* ---- planner picker modal ---- */
function renderPickerModal() {
  const day = state.picker.day, meal = state.picker.meal;
  const filterMeal = state.pickerMeal || meal;
  const list = RECIPES.filter(function (r) {
    return (filterMeal === 'all' || r.meal === filterMeal) && r.name.toLowerCase().indexOf(state.pickerSearch.toLowerCase()) !== -1;
  });
  const mealChips = ['all', 'breakfast', 'lunch', 'dinner', 'snack'].map(function (mm) {
    const active = filterMeal === mm;
    return '<button class="chip ' + (active ? 'active-meal' : '') + '" style="' + (active ? 'background:#fb7a3c;color:#0b1120;border-color:transparent' : '') + '" data-action="picker-meal" data-meal="' + mm + '">' + (mm === 'all' ? 'All' : MEAL_META[mm].label) + '</button>';
  }).join('');
  const items = list.map(function (r) {
    return '<button class="picker-item" style="border-left-color:' + MEAL_META[r.meal].color + '" data-action="pick-recipe" data-id="' + r.id + '">' +
      '<div><p class="t">' + r.name + '</p><p class="sub">' + r.time + ' min</p></div>' + icon('plus', 15) + '</button>';
  }).join('');
  return '<div class="center-modal"><button class="overlay-bg" data-action="close-picker" aria-label="Close"></button>' +
    '<div class="picker-panel"><div class="picker-head"><h3>Add to ' + day + ' \u00b7 ' + MEAL_META[meal].label + '</h3>' +
    '<button class="x-btn" data-action="close-picker">' + icon('x', 18) + '</button></div>' +
    '<div class="picker-filters"><input class="search-input" type="text" placeholder="Search recipes\u2026" value="' + escapeAttr(state.pickerSearch) + '" data-action="picker-search" style="margin-bottom:12px" />' +
    '<div class="filter-row">' + mealChips + '</div></div>' +
    '<div class="picker-list">' + (items.length ? items : '<p class="empty-state">No matches.</p>') + '</div></div></div>';
}

/* ============================== MAIN RENDER ============================== */
function render() {
  const root = document.getElementById('app');
  let tabHtml = '';
  if (state.tab === 'cookbook') tabHtml = renderCookbookTab();
  else if (state.tab === 'tonight') tabHtml = renderTonightTab();
  else if (state.tab === 'planner') tabHtml = renderPlannerTab();
  else if (state.tab === 'shopping') tabHtml = renderShoppingTab();

  root.innerHTML = renderHeader() + renderNav() + '<main>' + tabHtml + '</main>' +
    (state.selectedId ? renderDetailModal(RECIPES.find(function (r) { return r.id === state.selectedId; })) : '') +
    (state.picker ? renderPickerModal() : '');
}

function renderPreserveFocus() {
  const active = document.activeElement;
  const action = active && active.dataset ? active.dataset.action : null;
  const selStart = active ? active.selectionStart : null;
  render();
  if (action) {
    const el = document.querySelector('[data-action="' + action + '"]');
    if (el) {
      el.focus();
      if (typeof selStart === 'number' && el.setSelectionRange) {
        try { el.setSelectionRange(selStart, selStart); } catch (e) {}
      }
    }
  }
}

/* ============================== TOAST ============================== */
let toastTimer = null;
function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function () { t.classList.remove('show'); }, 2200);
}

/* ============================== EXPORT / IMPORT ============================== */
function exportData() {
  const payload = {
    app: 'the-walk-in',
    exportedAt: new Date().toISOString(),
    pantry: Array.from(state.have),
    mealPlan: state.plan,
    bought: Array.from(state.bought),
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'walk-in-backup-' + new Date().toISOString().slice(0, 10) + '.json';
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
  showToast('Backup downloaded');
}
function importData(file) {
  const reader = new FileReader();
  reader.onload = function () {
    try {
      const data = JSON.parse(reader.result);
      if (data && typeof data === 'object') {
        state.have = new Set(Array.isArray(data.pantry) ? data.pantry : []);
        state.plan = (data.mealPlan && typeof data.mealPlan === 'object') ? Object.assign(emptyPlan(), data.mealPlan) : emptyPlan();
        state.bought = new Set(Array.isArray(data.bought) ? data.bought : []);
        saveSet(STORAGE_KEYS.pantry, state.have);
        savePlan(state.plan);
        saveSet(STORAGE_KEYS.bought, state.bought);
        render();
        showToast('Backup restored');
      } else {
        showToast("That file doesn't look like a Walk-In backup");
      }
    } catch (e) {
      console.error(e);
      showToast('Could not read that file');
    }
  };
  reader.readAsText(file);
}

/* ============================== EVENTS ============================== */
document.addEventListener('click', function (e) {
  const btn = e.target.closest('[data-action]');
  if (!btn) return;
  const action = btn.dataset.action;
  if (action === 'set-tab') { state.tab = btn.dataset.tab; render(); }
  else if (action === 'open-recipe') {
    const recipe = RECIPES.find(function (r) { return r.id === btn.dataset.id; });
    state.selectedId = btn.dataset.id;
    state.addDay = 'Mon';
    state.addMeal = recipe.meal === 'snack' ? 'lunch' : recipe.meal;
    render();
  }
  else if (action === 'close-detail') { state.selectedId = null; render(); }
  else if (action === 'toggle-pantry') { togglePantry(btn.dataset.name); }
  else if (action === 'cb-meal') { state.cb.meal = btn.dataset.meal; render(); }
  else if (action === 'cb-flavor') { toggleSetVal(state.cb.flavors, btn.dataset.flavor); render(); }
  else if (action === 'cb-quick') { toggleSetVal(state.cb.quick, btn.dataset.quick); render(); }
  else if (action === 'toggle-pantry-open') { state.pantryOpen = !state.pantryOpen; render(); }
  else if (action === 'open-picker') { state.picker = { day: btn.dataset.day, meal: btn.dataset.meal }; state.pickerMeal = btn.dataset.meal; state.pickerSearch = ''; render(); }
  else if (action === 'close-picker') { state.picker = null; render(); }
  else if (action === 'picker-meal') { state.pickerMeal = btn.dataset.meal; render(); }
  else if (action === 'pick-recipe') { assignRecipe(state.picker.day, state.picker.meal, btn.dataset.id); }
  else if (action === 'remove-recipe') { removeRecipe(btn.dataset.day, btn.dataset.meal); }
  else if (action === 'clear-week') { clearWeek(); }
  else if (action === 'confirm-add') { assignRecipe(state.addDay, state.addMeal, btn.dataset.id); showToast('Added to plan'); }
  else if (action === 'toggle-bought') { toggleBought(btn.dataset.name); }
  else if (action === 'toggle-stocked') { state.showStocked = !state.showStocked; render(); }
  else if (action === 'export') { exportData(); }
  else if (action === 'import') { document.getElementById('import-input').click(); }
});

document.addEventListener('input', function (e) {
  const el = e.target;
  if (!el.dataset || !el.dataset.action) return;
  if (el.dataset.action === 'cb-search') { state.cb.search = el.value; renderPreserveFocus(); }
  else if (el.dataset.action === 'picker-search') { state.pickerSearch = el.value; renderPreserveFocus(); }
});

document.addEventListener('change', function (e) {
  const el = e.target;
  if (!el.dataset || !el.dataset.action) return;
  if (el.dataset.action === 'set-add-day') { state.addDay = el.value; }
  else if (el.dataset.action === 'set-add-meal') { state.addMeal = el.value; }
});

document.addEventListener('DOMContentLoaded', function () {
  const importInput = document.getElementById('import-input');
  if (importInput) {
    importInput.addEventListener('change', function (e) {
      const file = e.target.files[0];
      if (file) importData(file);
      e.target.value = '';
    });
  }
  render();

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('./service-worker.js').catch(function (err) { console.error('SW registration failed', err); });
    });
  }
});
