import styles from './usefull-info.module.scss';
import { nanoid } from 'nanoid';
import literature from './data/literature';
import resources from './data/resources';
const UsefulInfo = () => {
    const literatureList = literature.map(item => {
        return (
          <li className={styles.literatureItem} key={nanoid()}>
            <a className={styles.literatureLink}  href={item.link}>{item.content}</a>
          </li>
        );
      });
      const resourcesList = resources.map(item => {
        return (
          <li className={styles.resourceItem} key={nanoid()}>
            <a className={styles.resourceLink} href={item.link}>{item.content}</a>
          </li>
        );
      });
    return (
        <main className={styles.main}>
        <section className='container'>
        <div className={styles.block}>
          <h2 className={styles.title}>Useful literature</h2>
          {/* <img alt='line' src="../../images/icons.svg#line1" width="321" height="1"/> */}
          <div className={styles.lineTop}></div>
          <ol className={styles.literatureList}>{literatureList}</ol>
          <h2 className={styles.title}>Useful resources</h2>
          <div className={styles.lineBottom}></div>
          <ol className={styles.resourcesList}>{resourcesList}</ol>
        </div>
        </section>
        </main>
    )
};

export default UsefulInfo;