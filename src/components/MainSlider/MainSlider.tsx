import React from 'react'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import * as styles from './MainSlider.module.scss'
import slider_1 from 'assets/videos/SME_video.mp4'
import slider_2 from 'assets/images/img_main_slide5.jpg'
import slider_3 from 'assets/images/img_main_slide6.jpg'
import slider_4 from 'assets/images/img_main_slide8.jpg'
import slider_5 from 'assets/images/img_main_slide4_v3.jpg'
import slider_6 from 'assets/images/img_main_slide3.jpg'
import { SliderText } from '../../pages'

const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  className: styles.mainSlider,
}

interface MainSliderProps {
  style?: React.CSSProperties
  sliderTexts: SliderText[]
  setCurrentSlide: (index: number) => void
}

const MainSlider = ({
  sliderTexts,
  setCurrentSlide,
  ...rest
}: MainSliderProps) => {
  return (
    <div className={styles.wrapper} {...rest}>
      <Slider
        {...sliderSettings}
        onReInit={() => {
          const currentSlide: HTMLDivElement = document.querySelector(
            `.${styles.mainSlider} .slick-current`
          )
          const currentIndex = Number(currentSlide.dataset.index)
          setCurrentSlide(currentIndex)
        }}
      >
        <div className={styles.sliderItem}>
          <div className={styles.img}>
            <video src={slider_1} muted autoPlay loop />
          </div>
          <div className={styles.txt}>
            <h3>{sliderTexts[0].title}</h3>
          </div>
        </div>
        <div className={styles.sliderItem}>
          <div className={styles.img}>
            <img src={slider_2} />
          </div>
          <div className={styles.txt}>
            <h3>{sliderTexts[1].title}</h3>
          </div>
        </div>
        <div className={styles.sliderItem}>
          <div className={styles.img}>
            <img src={slider_3} />
          </div>
          <div className={styles.txt}>
            <h3>{sliderTexts[2].title}</h3>
          </div>
        </div>
        <div className={styles.sliderItem}>
          <div className={styles.img}>
            <img src={slider_4} />
          </div>
          <div className={styles.txt}>
            <h3>{sliderTexts[3].title}</h3>
          </div>
        </div>
        <div className={styles.sliderItem}>
          <div className={styles.img}>
            <img src={slider_5} />
          </div>
          <div className={styles.txt}>
            <h3>{sliderTexts[4].title}</h3>
          </div>
        </div>
        <div className={styles.sliderItem}>
          <div className={styles.img}>
            <img src={slider_6} />
          </div>
          <div className={styles.txt}>
            <h3>{sliderTexts[5].title}</h3>
          </div>
        </div>
      </Slider>
    </div>
  )
}

export default MainSlider
