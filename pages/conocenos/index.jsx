import Image from 'next/image'
import styles from './conocenos.module.scss'

export default function Conocenos() {
	return (
		<div>
			<section className={styles.section}>
				<div className={styles.container}>
					<h1 className={styles.title}>Conocenos</h1>
					<p className={styles.description}>
						En Fineducom, siempre ponemos a las comunidades en primer lugar. Nos
						esforzamos por proporcionar educación financiera y crédito de alta
						calidad a personas de todas las edades y antecedentes. Sabemos que
						una educación financiera sólida es fundamental para el éxito a largo
						plazo, y estamos comprometidos a ayudar a nuestras comunidades a
						alcanzar sus metas financieras. Si estás buscando una manera de
						mejorar tus finanzas y tomar el control de tu futuro, ¡no dudes en
						unirte a nosotros en Fineducom!
					</p>
					<Image
						className={styles.img}
						src="/imf-not-found.webp"
						alt="imagen"
						width={300}
						height={250}
					/>
				</div>
			</section>
		</div>
	)
	l
}
