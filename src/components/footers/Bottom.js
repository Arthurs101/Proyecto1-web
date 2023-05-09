import React , {useEffect , useRef} from 'react';
import './Bottom.scss';
import messi_prom from '../../asssets/messi-cirque-logo1.png';
import messi_prom_letter from '../../asssets/messi-cirque-logo2.png';
export default function bottom() {
    const targetRef = useRef(null);

    useEffect(() => {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      };
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Apply animation to the target element
            entry.target.classList.add('animate');
          }else{
            entry.target.classList.remove('animate');
          }
        });
      }, options);
      
      if (targetRef.current) {
        observer.observe(targetRef.current);
      }
      
      return () => {
        if (targetRef.current) {
          observer.unobserve(targetRef.current);
        }
      };
    }, [targetRef]);
    return(
        <div className="end-page">
            <div  className='cirque-du-solei-wrapper'>
                <div ref={targetRef} className='cirque-du-solei-bkg'>
                <div className='logos-container'>
                <img src={messi_prom} alt='promo-messi-solei' className='messi_prom'></img>
                <img src={messi_prom_letter} alt='hay un 10 en cada uno de nosotros'></img>
                <div class="caixa-cirque"><div class="pais-cirque-box"><p class="pais-cirque"> Buenos Aires</p><p class="ciudad-cirque">Argentina</p></div><div class="lugar-cirque-box"><p class="lugar">Costanera Sur</p><p class="fecha-cirque">Próximamente</p></div></div>
                </div>
                </div>
            </div>
        </div>
    )
}