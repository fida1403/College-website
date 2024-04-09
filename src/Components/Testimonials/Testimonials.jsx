import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../Assets/next-icon.png'
import back_icon from '../../Assets/back-icon.png'
import user_1 from '../../Assets/user-1.png'
import user_2 from '../../Assets/user-2.png'
import user_3 from '../../Assets/user-3.png'
import user_4 from '../../Assets/user-4.png'

function Testimonials() {

    const slider = useRef();
    let tx = 0;
    const slideForward = () =>{
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = () =>{
        if(tx < 0){
            tx +=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

  return (
    <div className='testimonials'>
      <img className='next-btn' src={next_icon} alt='' onClick={slideForward} />
      <img className='back-btn' src={back_icon} alt='' onClick={slideBackward} />
      <div className='slider'>
        <ul ref={slider}>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user_1} alt='' />
                        <div>
                            <h3>William Jackson</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Chooseing to pursue my degree at Edusity was one of the best
                        decisions I've ever made. The supportive community, state-of-the-art facilities, and
                        commitment to academic excellence have truly exceeded my expectations.
                    </p>
                </div>
            </li>

            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user_2} alt='' />
                        <div>
                            <h3>William Jackson</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Chooseing to pursue my degree at Edusity was one of the best
                            decisions I've ever made. The supportive community, state-of-the-art facilities, and
                            commitment to academic excellence have truly exceeded my expectations.
                        </p>
                </div>
            </li>

            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user_3} alt='' />
                        <div>
                            <h3>William Jackson</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Chooseing to pursue my degree at Edusity was one of the best
                            decisions I've ever made. The supportive community, state-of-the-art facilities, and
                            commitment to academic excellence have truly exceeded my expectations.
                        </p>
                </div>
            </li>

            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user_4} alt='' />
                        <div>
                            <h3>William Jackson</h3>
                            <span>Edusity, USA</span>
                        </div>
                    </div>
                    <p>Chooseing to pursue my degree at Edusity was one of the best
                            decisions I've ever made. The supportive community, state-of-the-art facilities, and
                            commitment to academic excellence have truly exceeded my expectations.
                        </p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
