import Billboard from '../../components/Billboard/Billboard';
import Carousel from '../../components/Carousel/Carousel';
import Nav from '../../components/Nav/Nav';
import './Home.scss';

export default function Home() {
    return (
        <div className="home"> 
            <Nav />
            <Billboard />
            <Carousel />
        </div>
    )
}
