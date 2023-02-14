import styles from './trabaja.module.scss'

export default function TrabajaConNosotros() {
	return (
		<div>
			<section className={styles.hero}>
				<div className={styles.container}>
					<h1 className={styles.hero__title}>Trabaja con nosotros</h1>
					<p className={styles.hero__descripcion}>
						¡Únete a nuestra misión de brindar educación financiera a
						comunidades necesitadas! ¡Se un voluntario y ayuda a mejorar la
						calidad de vida de personas que luchan por manejar sus finanzas de
						manera efectiva!
						<br />
						<br /> Juntos podemos darles las herramientas y el conocimiento
						necesario para tomar decisiones financieras inteligentes y alcanzar
						sus metas económicas. ¡No pierdas esta oportunidad de hacer una gran
						diferencia en la vida de otros! ¡Regístrate hoy como voluntario!
					</p>
				</div>
			</section>
		</div>
	)
}
