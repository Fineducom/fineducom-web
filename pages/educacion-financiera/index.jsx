import Styles from './financier.module.scss'
import Image from 'next/image'

export default function EducacionFinanciera() {
	return (
		<>
			<section className={Styles.hero}>
				<div className={`${Styles.container} ${Styles.content}`}>
					<h2 className={Styles.hero__title}>Educación Financiera</h2>
					<div className={Styles.hero__content}>
						<p className={Styles.hero__description}>
							Entendemos que el mundo financiero puede ser confuso y abrumador,
							especialmente para aquellos que no tienen una gran cantidad de
							experiencia o conocimiento en este ámbito. Por eso, ofrecemos una
							amplia variedad de recursos educativos y servicios de
							asesoramiento financiero para ayudar a nuestros clientes a tomar
							decisiones financieras más informadas y a alcanzar sus metas.
						</p>

						<Image
							className={Styles.hero__img}
							src="/imf-not-found.webp"
							alt="Imagen fineducon"
							width={300}
							height={250}
						/>
					</div>
				</div>
			</section>
			<section className={Styles.section}>
				<div className={Styles.container}>
					<h3 className={Styles.section__title}>Inscribete</h3>
					{/* formulario */}
				</div>
			</section>
		</>
	)
}
