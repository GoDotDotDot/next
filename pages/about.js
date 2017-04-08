import Header from '../components/Header'
import style from './about.css'
import style2 from './about2.css'
export default () => (
  <div>
    <Header />
    <p className={style.about_p}>This is the ABOUT page.</p>
    <span className={style2.abt2}>{JSON.stringify(style)}</span>
  </div>
)
