import Banner from "../components/Banner/Banner";
import Heading from "../components/Heading/Heading";


const Home = () => {
    return (
        <div>
            {/* Banner */}
            <Banner></Banner>
            {/* Heading */}
            <Heading
                title={"Browse Coffees by Category"}
                subtitle={"Choose your desired coffee category to browse through specific coffees that fit in your taste"}>

            </Heading>
            {/* Categories tab section  */}
            {/* Dynamic Nested component */}
        </div>
    );
};

export default Home;