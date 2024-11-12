import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Make sure to include all paths that need purging
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});
