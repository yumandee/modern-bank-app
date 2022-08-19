import { card } from '../assets'
import styles, { layout } from '../style'
import Button from './Button'

const CardDeal = () => (
  <section className={layout.section}>
    {/* Section Info */}
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Find a better card deal in <br className='sm:block hidden' />few, easy steps.</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean euismod elementum nisi quis.</p>

      <Button styles='mt-10' />
    </div>

    {/* Card Image */}
    <div className={layout.sectionImg}>
      <img src={card} alt='card' className='w-[100%] h-[100%]' />
    </div>

  </section>
)

export default CardDeal