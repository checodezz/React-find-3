import "./App.css";

//1. Given an array of objects, write a React component to find and display all the details of "Car 2". Pass the data as props.

const Cars = ({ cars, model }) => {
  const carDetails = cars.find((car) => car.model === model);

  return (
    <div>
      <h2>Car Details</h2>
      <p>{carDetails.model}</p>
      <p>Make: {carDetails.make}</p>
      <p>Year: {carDetails.year}</p>
    </div>
  );
};

//2. Given an array of objects, write a React component to find and display all the details of gym in "Location 2". Pass the data as props.

const Gyms = ({ gyms, location }) => {
  const gymDetails = gyms.find((gym) => gym.location === location);
  return (
    <div>
      <h2>Gym Details</h2>
      <p>{gymDetails.name}</p>
      <p>Location: {gymDetails.location}</p>
      <p>Rating: {gymDetails.rating}</p>
    </div>
  );
};

//3. Given an array of objects, write a React component to find and display all the details of "Travel 3" destination. Pass the data as props.

const Destination = ({ travels, destination }) => {
  const destinationDetails = travels.find(
    (dest) => dest.destination === destination,
  );

  return (
    <div>
      <h2>Destination Details</h2>
      <p>{destinationDetails.destination}</p>
      <p>Duration: {destinationDetails.duration}</p>
      <p>Activities: {destinationDetails.activities.join(", ")}</p>
    </div>
  );
};

//4. Given an array of objects, write a React component to find and display all the details of laptop with "Apple M1" processor. Pass the data as props.

const Laptops = ({ laptops, processor }) => {
  const laptopDetails = laptops.find(
    (laptop) => laptop.processor === processor,
  );
  return (
    <div>
      <h2>Laptop Details</h2>
      <p>{laptopDetails.brand}</p>
      <p>Processor: {laptopDetails.processor}</p>
      <p>RAM: {laptopDetails.ram}</p>
    </div>
  );
};

//5. Given an array of objects, write a React component to find and display all the details of "Recipe 2". Pass the data as props.

const Recipe = ({ recipes, dish }) => {
  const recipeDetails = recipes.find((recipe) => recipe.dish === dish);
  return (
    <div>
      <h2>Recipe Details</h2>
      <p>{recipeDetails.dish}</p>
      <p>Cuisine: {recipeDetails.cuisine}</p>
      <p>Ingredients: {recipeDetails.ingredients.join(", ")}</p>
    </div>
  );
};

//6. Given an array of objects, write a React component to find and display all the blog details of "Blog Post 3". Pass the data as props.

const Blog = ({ blogPosts, title }) => {
  const blogDetails = blogPosts.find((blog) => blog.title === title);
  return (
    <div>
      <h2>Blog Details</h2>
      <p>{blogDetails.title}</p>
      <p>Content: {blogDetails.content}</p>
      <p>Category: {blogDetails.category}</p>
    </div>
  );
};

export default function App() {
  const cars = [
    { model: "Car 1", make: "Make 1", year: 2022 },
    { model: "Car 2", make: "Make 2", year: 2021 },
    { model: "Car 3", make: "Make 3", year: 2023 },
  ];

  const gyms = [
    { name: "Gym 1", location: "Location 1", rating: 4.7 },
    { name: "Gym 2", location: "Location 2", rating: 4.2 },
    { name: "Gym 3", location: "Location 3", rating: 4.5 },
  ];

  const laptops = [
    { brand: "Laptop 1", processor: "Intel i5", ram: "8GB" },
    { brand: "Laptop 2", processor: "AMD Ryzen 7", ram: "16GB" },
    { brand: "Laptop 3", processor: "Apple M1", ram: "12GB" },
  ];

  const travels = [
    {
      destination: "Travel 1",
      duration: "5 days",
      activities: ["Hiking", "Sightseeing"],
    },
    {
      destination: "Travel 2",
      duration: "7 days",
      activities: ["Beach", "Shopping"],
    },
    {
      destination: "Travel 3",
      duration: "3 days",
      activities: ["Cultural Tours", "Photography"],
    },
  ];

  const recipes = [
    {
      dish: "Recipe 1",
      cuisine: "Italian",
      ingredients: ["Tomatoes", "Pasta", "Cheese"],
    },
    {
      dish: "Recipe 2",
      cuisine: "Mexican",
      ingredients: ["Beans", "Rice", "Avocado"],
    },
    {
      dish: "Recipe 3",
      cuisine: "Indian",
      ingredients: ["Curry", "Rice", "Naan"],
    },
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Blog Post 1",
      content: "Content 1",
      category: "Technology",
    },
    { id: 2, title: "Blog Post 2", content: "Content 2", category: "Food" },
    { id: 3, title: "Blog Post 3", content: "Content 3", category: "Fashion" },
  ];

  return (
    <main>
      <h1>IR2.4_HW2</h1>
      <Cars cars={cars} model="Car 2" />
      <hr />
      <Gyms gyms={gyms} location="Location 2" />
      <hr />
      <Destination travels={travels} destination="Travel 3" />
      <hr />
      <Laptops laptops={laptops} processor="Apple M1" />
      <hr />
      <Recipe recipes={recipes} dish="Recipe 2" />
      <hr />
      <Blog blogPosts={blogPosts} title="Blog Post 3" />
    </main>
  );
}
