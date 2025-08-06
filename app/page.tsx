import Container from '@/components/Container';
import Hero from '@/components/hero';
import Navbar from '@/components/Navbar';
export default function Home() {
    return (
        <div className="layout">
            <div className="container-lines">
                <div className="left-line"></div>
                <div className="right-line"></div>
            </div>
            <Container>
                <Navbar />
                <Hero />
            </Container>
            <div className="thumb-image-cont">
                <div className="hori-line"></div>
                <img
                    className="thumb-image"
                    alt="main image"
                    src="./hero.webp"
                />
            </div>
        </div>
    );
}
