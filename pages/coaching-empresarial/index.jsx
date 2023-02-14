import styles from './coaching.module.scss'

export default function Coaching() {
	return (
		<>
			<section className={styles.hero}>
				<div className={styles.container}>
					<h1 className={styles.hero__title}>Coaching empresarial</h1>
					<div className={styles.hero__content}>
						<p className={styles.hero__description}>
							¡Bienvenido a nuestro servicio de coaching empresarial! Si estás
							buscando mejorar el rendimiento de tu negocio y alcanzar tus
							objetivos, estás en el lugar correcto. Con nuestro equipo de coach
							empresarial certificado, podemos ayudarte a optimizar tu
							estrategia, maximizar tus oportunidades y liderar a tu equipo
							hacia el éxito.
						</p>
						<div className={styles.hero__enfoque}>
							<h4 className={styles.hero__subtitle}>Nuestro enfoque</h4>
							<ul className={styles.hero__list}>
								<li className={styles.hero__item}>
									Identificar tus fortalezas y debilidades como líder
									empresarial
								</li>
								<li className={styles.hero__item}>
									Desarrollar un plan de acción efectivo para alcanzar tus metas
								</li>
								<li className={styles.hero__item}>
									Gestionar el estrés y la presión en el trabajo
								</li>
								<li className={styles.hero__item}>
									Mejorar la comunicación y la colaboración en tu equipo
								</li>
								<li className={styles.hero__item}>
									Aumentar la productividad y la eficiencia en tu negocio
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<section className={styles.section}>
				<div className={styles.container}>
					<h4 className={styles.section__title}>preguntanos como</h4>
					{/* formulario */}
				</div>
			</section>
		</>
	)
}
