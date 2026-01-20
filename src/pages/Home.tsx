import Hero from '../components/Hero';
import Location from '../components/Location';
import Menu from '../components/Menu';
import BestSellers from '../components/BestSellers';
import Complements from '../components/Complements';
import Reviews from '../components/Reviews';

export default function Home() {
    return (
        <>
            <Hero />
            <Menu />
            <BestSellers />

            <Complements />
            <Reviews />
            <Location />
        </>
    );
}
