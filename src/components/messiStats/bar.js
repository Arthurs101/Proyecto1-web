import React , {useEffect , useRef} from 'react';
import './bar.scss'
export default function StaticsBase({type , text, isEspecial}) { 
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
      return (
        <div ref={targetRef} className={`Messi-Stats-bar ${type}`}  id={`${isEspecial ? 'special' : ''}`}>
            <p>
                {text}
            </p>
        </div>
      )
}