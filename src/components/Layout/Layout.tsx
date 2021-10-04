import React, { useCallback, useState } from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import 'styles/index.scss'
import * as styles from './Layout.module.scss'
import classnames from 'classnames/bind'

import logo from 'assets/images/header_logo.png'
import footer_logo from 'assets/images/footer_logo.png'
import copy from 'assets/images/footer_copy.png'

const cx = classnames.bind(styles)

interface Props {
  pageTitle?: string
  children: React.ReactNode
}

const Layout = ({ pageTitle, children }: Props) => {
  const [navOpened, setNavOpened] = useState(false)

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const handleNavToggle = useCallback(() => {
    setNavOpened(!navOpened)
  }, [navOpened])

  return (
    <div className={styles.layoutWrapper}>
      <Helmet>
        <title>{pageTitle || data.site.siteMetadata.title}</title>
      </Helmet>
      <header className={styles.header}>
        <h1 className={styles.logo}>
          <a href="#" aria-label="네이버 코퍼레이션">
            <img src={logo} alt="" />
          </a>
        </h1>
        <h2 className="a11y-hidden">네비게이션</h2>
        <button
          className={cx('hamburger', navOpened && 'opened')}
          onClick={handleNavToggle}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={cx('navigation', navOpened && 'opened')}>
          <div className={styles.pages}>
            <a href="#">네이버</a>
            <a href="#">서비스</a>
            <a href="#">가치실현</a>
            <a href="#">홍보</a>
            <a href="#">투자정보</a>
            <a href="#">채용</a>
          </div>
        </nav>

        <div className={styles.menuCopyright}>
          <h2 className="a11y-hidden">사이트 푸터</h2>
          <div className={styles.copyrightLinks}>
            <a href="#">제휴제안</a>
            <a href="#">기업윤리 상담센터</a>
            <a href="#">개인정보 처리방침</a>
          </div>
          <img
            src={copy}
            alt="Copyright NAVER Corperation. All Rights Reserved"
            width="200"
          />
        </div>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <div className={styles.footerCopyright}>
          <div className={styles.top}>
            <div className={styles.left}>
              <img
                src={footer_logo}
                alt=""
                className={styles.footerLogo}
                width="63"
              />
              <div className={styles.copyrightLinks}>
                <a href="#">제휴제안</a>
                <a href="#">기업윤리 상담센터</a>
                <a href="#">개인정보 처리방침</a>
              </div>
            </div>
            <a href="#" className={styles.childCompany}>
              <span>자회사 바로가기</span>
              <span className={styles.plusIcon}>+</span>
            </a>
          </div>
          <img
            src={copy}
            alt="Copyright NAVER Corperation. All Rights Reserved"
            className={styles.copyrightLogo}
            width="337"
          />
        </div>
      </footer>
    </div>
  )
}

export default Layout
