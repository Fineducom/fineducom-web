import styles from './cridito_personal.module.scss'
import Image from 'next/image'
export default function CreditoPersonal() {
	return (
		<>
			<section className={styles.sectionHero}>
				<div className={styles.container}>
					<h1 className={styles.section__title}>CREDITO</h1>
					<div className={styles.section__group}>
						<p className={styles.section__description}>
							Ofrecemos un crédito personal que está diseñado para ayudar a
							nuestros clientes a hacer frente a sus necesidades financieras a
							corto y mediano plazo.
						</p>
						<div className={styles.section__groupImg}></div>
					</div>
					<div className={styles.section__group}>
						<div className={styles.section__groupImg}></div>
						<p className={styles.section__description}>
							Nuestro enfoque único en la educación financiera nos permite
							ofrecer una tasa de interés más baja y una experiencia de préstamo
							más amigable que la de muchos prestamistas tradicionales.
						</p>
					</div>
				</div>
			</section>
			<section className={styles.section}>
				<div className={styles.container}>
					<div className={styles.section__content}>
						<div className={styles.sectio__form1}>
							<div>formulario</div>
						</div>
					</div>
					<div className={styles.section__form2}></div>
				</div>
			</section>
		</>
	)
}
