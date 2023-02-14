import styles from './cridito_personal.module.scss'
import Image from 'next/image'
import Formulario from '@components/Formulario'
import Simulador from '@components/Simulador'

export default function CreditosPersonal() {
	return (
		<>
			<section className={styles.hero}>
				<div className={`${styles.container} ${styles.content}`}>
					<div className={styles.hero__group}>
						<p
							className={`${styles.hero__description} ${styles.hero__description1}`}
						>
							Ofrecemos un crédito personal que está diseñado para ayudar a
							nuestros clientes a hacer frente a sus necesidades financieras a
							corto y mediano plazo.{' '}
						</p>
						<Image
							className={styles.hero__img}
							src="/imf-not-found.webp"
							width={300}
							height={250}
							alt="image not found"
						/>
					</div>
					<div className={styles.hero__group}>
						<Image
							className={styles.hero__img}
							src="/imf-not-found.webp"
							width={300}
							height={250}
							alt="image not found"
						/>
						<p
							className={`${styles.hero__description} ${styles.hero__description2}`}
						>
							Nuestro enfoque único en la educación financiera nos permite
							ofrecer una tasa de interés más baja y una experiencia de préstamo
							más amigable que la de muchos prestamistas tradicionales.{''}
						</p>
					</div>
				</div>
			</section>
			<section className={styles.section}>
				<div className={`${styles.container} ${styles.content}`}>
					<div className={styles.section__group}>
						<h4 className={styles.section__title}>Solicitalo en 2 minutos</h4>
						<Formulario />
					</div>
					<div className={styles.section__group}>
						<h4 className={styles.section__title}>Simulador de credito</h4>
						<Simulador />
					</div>
				</div>
			</section>
		</>
	)
}
