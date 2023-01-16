/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: () => ({
        main: "url('https://img.freepik.com/free-vector/tropical-leaves-background-zoom_52683-40995.jpg?w=1500&t=st=1667200527~exp=1667201127~hmac=65b5871de3308197b0630665146871d60133a35107bfe068e222c43bf44c0ad6')",
        home: "url('https://static.vecteezy.com/system/resources/previews/001/988/909/non_2x/seamless-watercolor-fresh-green-background-with-text-space-illustration-environmentally-conscious-image-with-plants-and-sunlight-horizontally-repeatable-free-vector.jpg')",
        text: "url('https://img.freepik.com/free-vector/spring-floral-watercolor-background-vector-green-with-leaf-illustration_53876-126350.jpg?w=1380')",
        doa: "url('https://static.vecteezy.com/system/resources/previews/016/187/307/non_2x/background-seamless-pattern-of-green-heart-shape-on-white-background-free-vector.jpg')"
      }),
      fontFamily: {
        rochester: ["Rochester", "handwriting"],
        Poppins: ["Poppins", "san-serif"],
        Poppins2: ["Poppins", "san-serif"],
        Open: ["Open Sans", "san-serif"],
        Bree: ["Bree Serif", "serif"],
      },
      colors: {
        primary: "#6A9483",
        secondary: "#A2BFAD",
        third: "#223C31",
      },
    },
  },
  plugins: [],
}
