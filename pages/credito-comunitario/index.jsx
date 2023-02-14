import styles from './cridito.module.scss'
import Link from 'next/link'

export default function CreditoComunitario() {
	return (
		<>
			<section className={styles.hero}>
				<div className={styles.container}>
					<h1 className={styles.hero__title}>
						¡Juntos podemos hacer una diferencia!
					</h1>
					<div className={styles.hero__content}>
						<p className={styles.hero__description}>
							¡Bienvenido a nuestro servicio de crédito basado en nuestras
							comunidades! Si estás buscando acceder a opciones de crédito más
							asequibles y mejorar tus habilidades financieras al mismo tiempo,
							estás en el lugar correcto. En FINEDUCOM, trabajamos con la
							comunidad de prestamismas y beneficiarios para ofrecer préstamos y
							servicios financieros asequibles y responsables.
						</p>
						<div className={styles.hero__diagrama}>
							<h3 className={styles.hero__diagramaTitle}>Como funciona</h3>
							<div className={styles.hero__diaram0}></div>
						</div>
						<Link href="#" className={styles.hero__link}>
							Quiero un crédito
						</Link>
						<Link href="#" className={styles.hero__link}>
							Quiero ayudar con un prestamo
						</Link>
					</div>
				</div>
			</section>
			<section className={styles.section}>
				<div className={styles.container}>
					<h3 className={styles.section__title}>Condiciones</h3>
				</div>
			</section>
		</>
	)
}
