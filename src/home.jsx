import HomePage from "../components/home-page-components/homePage";

const Home = () => {
  useEffect(() => {
    document.title = "FABRE";
  }, []);
  return <HomePage />;
};

export default Home;
