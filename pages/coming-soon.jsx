import Image from "next/image";
import styles from 'styles/pages/ComingSoon.module.scss'
import useLocalize from 'i18n/i18n';

const ComingSoon = () => {
  const { localize } = useLocalize();
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image height={339} width={550} src="/assets/coming-soon/coming_soon.svg" alt="coming-soon" />
      </div>
      <h1 className={styles.titleContainer}>{localize('Coming Soon!')}</h1>
    </div>
  )
}

export default ComingSoon
