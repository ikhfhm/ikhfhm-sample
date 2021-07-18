module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#F0A662"
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"]
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: ["responsive", "hover", "focus", "active"]
    }
  },
  plugins: []
};
