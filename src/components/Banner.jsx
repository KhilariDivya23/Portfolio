import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import { SectionWrapper } from "../hoc";
import TrackVisibility from 'react-on-screen';

const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [isMobile, setIsMobile] = useState(false);
    const [index, setIndex] = useState(1);
    const toRotate = [ "Web Developer", "Python Developer", "Programmer" ];
    const period = 2000;
    
    
    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 500px)');
        setIsMobile(mediaQuery.matches);
        
        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        }
        
        mediaQuery.addEventListener ('change', handleMediaQueryChange);
        
        return () => {
            mediaQuery.removeEventListener ('change', handleMediaQueryChange);
        }
    }, [])
    
    
    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);
        
        return () => { clearInterval(ticker) };
    }, [text])
    
    
    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        
        setText(updatedText);
        
        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }
        
        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        }
        
        else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        }
        
        else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }
    
    
    return (
        
        <section className="w-full">
            <Container>
                <Row className={ isMobile ? "flex-column": "flex" }>
                    <Col xs={12} md={6} xl={7} className={ `${ isMobile ? 'h-2/5' : 'w-3/5' }` }>
                        <TrackVisibility>
                                <div>
                                    <span
                                        className={ `font-bold tracking-[0.8px] border ${ isMobile ? 'text-10px' : 'text-xl' } inline-block ${ isMobile ? "w-[250px]": "" } mb-4 px-2.5 py-2 border-solid bg-[linear-gradient(90.21deg,_rgba(170,54,124,0.5)_-5.91%,_rgba(74,47,189,0.5)_111.58%)]` }
                                    >
                                        Welcome to my Portfolio
                                    </span>
                                    <h1
                                        className={ `${ isMobile ? 'text-[30px]' : 'text-[40px]' } font-bold tracking-[0.8px] leading-[45px] block mb-5` }
                                    >
                                        Hi! I'm Divya
                                        <br/>
                                        <span data-rotate={ toRotate }>
                                            <span className="text-[#915eff] border-r-[0.08em] border-r-[#666] border-solid">
                                                { text }
                                            </span>
                                        </span>
                                    </h1>
                                    <a
                                        className={ `text-white font-bold text-xl tracking-[0.8px] flex items-center ${ isMobile ? 'mb-[80px]': 'mt-[60px]' }` }
                                        href="https://drive.google.com/file/d/1wPNr1x_rmFK9yzXbVzUPhIT9NAfNNaKj/view?usp=sharing"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Resume &nbsp;
                                        <ArrowRightCircle size={25} />
                                    </a>
                                </div>
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                                <div>
                                    <img className="animate-bounce" src={ headerImg } alt="Header Img"/>
                                </div>
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default SectionWrapper(Banner, "");