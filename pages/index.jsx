import Link from 'next/link'
import styles from '@styles/Home.module.scss'
import Form from '@components/Form'

export default function Home() {
	return (
		<div>
			<main className={styles.hero}>
				<div className={`${styles.container} ${styles.hero__content}`}>
					<div className={styles.hero__grupo}>
						<div className={styles.hero__grupoImg}>
							<Link href="#" className={styles.hero__grupoBtn}>
								Me interesa
							</Link>
						</div>
						<div className={styles.hero__gtupoDescription}>
							<p className={styles.hero__grupoTexto}>
								Bienvenido a Fineducom, donde nos dedicamos a proporcionar
								créditos y educación financiera de alta calidad.
							</p>
						</div>
					</div>
					<div className={styles.hero__grupo}>
						<div
							className={`${styles.hero__gtupoDescription} ${styles.hero__grupoDescriptionModificado}`}
						>
							<p className={styles.hero__grupoTexto}>
								Ofrecemos consejos y recursos sobre una amplia variedad de
								temas, cómo ahorrar dinero, cómo manejar deudas y cómo obtener y
								mantener un buen historial crediticio.
							</p>
						</div>
						<div className={styles.hero__grupoImg}>
							<Link href="#" className={styles.hero__grupoBtn}>
								Conoce más
							</Link>
						</div>
					</div>
					<div className={styles.hero__grupo}>
						<div className={styles.hero__grupoImg}>
							<Link href="#" className={styles.hero__grupoBtn}>
								Quiero Unirme
							</Link>
						</div>
						<div className={styles.hero__grupoDescription}>
							<p className={styles.hero__grupoTexto}>
								Nuestra comunidad en línea es un lugar para compartir
								experiencias y aprender de otros que también están tratando de
								alcanzar sus metas financieras.
							</p>
						</div>
					</div>
				</div>
			</main>

			<article className={styles.article}>
				<div className={styles.container}>
					<p className={styles.article__description}>
						En Fineducom, siempre ponemos a las comunidades en primer lugar. Nos
						esforzamos por proporcionar educación financiera y crédito de alta
						calidad a personas de todas las edades y antecedentes. Sabemos que
						una educación financiera sólida es fundamental para el éxito a largo
						plazo, y estamos comprometidos a ayudar a nuestras comunidades a
						alcanzar sus metas financieras. Si estás buscando una manera de
						mejorar tus finanzas y tomar el control de tu futuro, ¡no dudes en
						unirte a nosotros en Fineducom!
					</p>
				</div>
			</article>

			<section className={styles.section}>
				<div className={`${styles.container} ${styles.section__content}`}>
					<div className={styles.section__infoSimulador}>
						<p className={styles.section__infoTexto}>
							Prueba nuestro simulador de crédito para ver cuál es la opción de
							financiamiento más adecuada para ti
						</p>
						<Link href="#" className={styles.section__infoBtn}>
							Solicita tu crédito
						</Link>
					</div>
					<Form />
				</div>
			</section>
		</div>
	)
}
