import React, { useEffect, useState } from 'react'
import Layout from 'components/Layout/Layout'
import MainSlider from '../components/MainSlider/MainSlider'
import * as styles from './index.module.scss'

import img1 from 'assets/images/img_main_content10.png'
import img2 from 'assets/images/img_main_content11.png'
import img3 from 'assets/images/img_main_content3.png'
import img4 from 'assets/images/img_main_content4.png'
import img5 from 'assets/images/img_main_content5.png'
import img6 from 'assets/images/img_main_content6.png'

export interface SliderText {
  title: string
  content: string
}

const sliderTexts: SliderText[] = [
  {
    title: '사업의 시작부터 성장까지 네이버 SME 풀케어시스템이 함께합니다.',
    content:
      '사업자를 지원하고 응원하는 네이버 시스템이 사장님의 경쟁력이 됩니다.',
  },
  {
    title: '데이터를 안전하게 보관하고 지속 가능한 미래를 준비합니다.',
    content:
      '다양한 일상의 데이터를 안전하게 보관하여 다음 세대를 위한 지식의 토대를 제공하겠습니다.',
  },
  {
    title: '삶의 가치를 높이는 AI 기술을 연구합니다.',
    content:
      '네이버 클로바는 삶을 더 깊이 이해하는 기술로 일상 속의 변화를 만들어가고 있습니다.',
  },
  {
    title: '세계적인 AI 기술로 새로운 사용자 경험을 제공합니다.',
    content:
      '사람에 가장 가까운 기술을 연구하며, 가치를 더하는 서비스를 선보이고 있습니다.',
  },
  {
    title: '앞선 기술력으로 사람, 머신, 공간, 정보의 새로운 연결을 만듭니다.',
    content:
      '네이버랩스는 한국과 유럽의 우수한 연구자들이 함께 AI, 로보틱스, 자율주행, 3D/HD 매핑, AR 등의 연구를 하고 있습니다.',
  },
  {
    title: '더 넓은 세상에서 더 큰 미래를 생각합니다.',
    content:
      '전 세계 이용자들을 만나 새로운 경험과 가치를 전하고, 글로벌과 호흡하는 기술을 통해, 한 단계 진화한 연결을 만들어갑니다.',
  },
]
// markup
const IndexPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    // 애니메이션 재시작 코드
    const mainSliderDesc: HTMLDivElement = document.querySelector(
      `.${styles.mainSliderDesc}`
    )
    mainSliderDesc.classList.remove(styles.runAnimation)
    void mainSliderDesc.offsetWidth
    mainSliderDesc.classList.add(styles.runAnimation)
  }, [currentSlide])

  return (
    <Layout>
      <div className={styles.grid}>
        <div className={styles.mainSlider}>
          <h2 className="a11y-hidden">메인 슬라이드</h2>
          <MainSlider
            sliderTexts={sliderTexts}
            setCurrentSlide={setCurrentSlide}
          />
        </div>
        <div className={styles.mainSliderDesc}>
          <div className={styles.desc}>
            <h3>{sliderTexts[currentSlide].title}</h3>
            <p>{sliderTexts[currentSlide].content}</p>
          </div>
        </div>
        <div className={styles.itemImg1}>
          <img src={img1} alt="로봇이 정해진 길을 따라가는 모습" />
        </div>
        <div className={styles.itemDesc1}>
          <div className={styles.desc}>
            <h2>ARC</h2>
            <p>멀티 로봇 인텔리전스 시스템</p>
          </div>
        </div>
        <div className={styles.itemImg2}>
          <img src={img2} alt="차 위에 부착된 자율주행기기" />
        </div>
        <div className={styles.itemDesc2}>
          <div className={styles.desc}>
            <h2>On-road intelligence</h2>
            <p>도로 위 자율주행을 위한 통합 솔루션</p>
          </div>
        </div>
        <div className={styles.itemImg3}>
          <img src={img3} alt="디지털 탁상시계" />
        </div>
        <div className={styles.itemDesc3}>
          <div className={styles.desc}>
            <h2>클로바 클락</h2>
            <p>일상, 스마트홈을 만나다</p>
          </div>
        </div>
        <div className={styles.itemImg4}>
          <img src={img4} alt="노트북에서 네이버 웨일을 실행시킨 모습" />
        </div>
        <div className={styles.itemDesc4}>
          <div className={styles.desc}>
            <h2>네이버 웨일</h2>
            <p>인터넷의 새로운 시작</p>
          </div>
        </div>
        <div className={styles.itemImg5}>
          <img
            src={img5}
            alt="데이터센터 각 외부사진 - 데이터를 통해 현재를 기록하는 곳"
          />
        </div>
        <div className={styles.itemImg6}>
          <img src={img6} alt="네이버 그린팩토리 외부사진" />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
