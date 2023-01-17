import Link from 'next/link'
import styles from '@styles/Home.module.scss'
import { useState } from 'react'

export default function Home() {
	const [solicitado, setSolicitado] = useState(1)
	const [plazo, setPlazo] = useState(1)
	const [monto, setMonto] = useState(0)
	const handleChange = (event) => {
		setMonto(event.target.value)
	}
	const [selectedOption, setSelectedOption] = useState('')
	const handleOptionClick = (option) => {
		setSelectedOption(option)
	}
	return (
		<div>
			<main className={styles.hero}>
				<div className={styles.container}>
					<div className={styles.hero__content}>
						<div className={styles.hero__grupo}>
							<div className={styles.hero__grupoImg}>
								<Link href="#" className={styles.hero__grupoBtn}>
									Me interesa
								</Link>
							</div>
							<div className={styles.hero__grupoDescription}>
								<p className={styles.hero__grupoTexto}>
									Bienvenido a Fineducom, donde nos dedicamos a proporcionar
									créditos y educación financiera de alta calidad.
								</p>
							</div>
						</div>
						<div className={styles.hero__grupo}>
							<div
								className={`${styles.hero__grupoDescription} ${styles.hero__grupoDescriptionModificado}`}
							>
								<p className={styles.hero__grupoTexto}>
									Ofrecemos consejos y recursos sobre una amplia variedad de
									temas, cómo ahorrar dinero, cómo manejar deudas y cómo obtener
									y mantener un buen historial crediticio.
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

			<section className={`${styles.section} ${styles.sectionForm}`}>
				<div className={`${styles.container} ${styles.section__content}`}>
					<div
						className={`${styles.section__infoGrop} ${styles.section__infoGropModificado}`}
					>
						<p className={styles.section__infoTexto}>
							Prueba nuestro simulador de crédito para ver cuál es la opción de
							financiamiento más adecuada para ti
						</p>
						<Link href="#" className={styles.section__infoBtn}>
							Solicita tu crédito
						</Link>
					</div>
					<div
						className={`${styles.section__infoGroup} ${styles.section__infoGroupForm}`}
					>
						<form action="" className={styles.form}>
							<div className={styles.form__grupo}>
								<h4 className={styles.form__grupoTitle}>
									¿Cuantos creditos ha solicitado con nosotros?
								</h4>
								<div
									className={`${styles.form__grupoInput} ${styles.form__grupoInputRange}`}
								>
									<label htmlFor="credito" className={styles.form__label}>
										<input
											type="range"
											name="credito"
											id="credito"
											min="0"
											max="12"
											value={solicitado}
											onChange={(event) => setSolicitado(event.target.value)}
											className={styles.form__inputRange}
										/>
									</label>
									<p className={styles.form__grupoText}>
										Creditos solicitados: {solicitado}
									</p>
								</div>
							</div>
							<div className={styles.form__grupo}>
								<h4 className={styles.form__grupoTitle}>
									¿Hace parte de la tribu FINEDUCOM?
								</h4>
								<div className={styles.form__grupoInput}>
									<label htmlFor="si" className={styles.form__label}>
										<input
											type="radio"
											name="si"
											id="si"
											className={styles.form__inputRadio}
										/>
										Si
									</label>
								</div>
								<div className={styles.form__grupoInput}>
									<label htmlFor="no" className={styles.form__label}>
										<input
											type="radio"
											name="no"
											id="no"
											className={styles.form__inputRadio}
										/>
										No
									</label>
								</div>
							</div>
							<div className={styles.form__grupo}>
								<h4 className={styles.form__grupoTitle}>
									¿Ha completado cursos con nosotros o aliados?
								</h4>
								<div className={styles.form__grupoInput}>
									<label htmlFor="no2" className={styles.form__label}>
										<input
											type="radio"
											name="no2"
											className={styles.form__inputRadio}
										/>
										No
									</label>
								</div>
								<div className={styles.form__grupoInput}>
									<label htmlFor="personal" className={styles.form__label}>
										<input
											type="radio"
											name="personal"
											className={styles.form__inputRadio}
										/>
										Personales
									</label>
								</div>
								<div className={styles.form__grupoInput}>
									<label htmlFor="fpe" className={styles.form__label}>
										<input
											type="radio"
											name="fpe"
											className={styles.form__inputRadio}
										/>
										Finanzas perosnales y empleo
									</label>
								</div>
							</div>
							<div className={styles.form__grupo}>
								<h4 className={styles.form__grupoTitle}>
									Actividad que realiza
								</h4>
								<div className={styles.form__grupoInput}>
									<label htmlFor="" className={styles.form__label}>
										<input
											type="radio"
											name="docente"
											id="docente"
											className={styles.form__iputRadio}
										/>
										Dosente
									</label>
								</div>
								<div className={styles.form__grupoInput}>
									<label htmlFor="" className={styles.form__label}>
										<input
											type="radio"
											name="independiente"
											id="independiente"
											className={styles.form__iputRadio}
										/>
										Independiente
									</label>
								</div>
								<div className={styles.form__grupoInput}>
									<label htmlFor="" className={styles.form__label}>
										<input
											type="radio"
											name="otro"
											id="otro"
											className={styles.form__iputRadio}
										/>
										Otro
										<input
											type="text"
											name="otro"
											id="otro"
											placeholder="Su respuesta"
											className={styles.form__inputText}
										/>
									</label>
								</div>
							</div>
							<div className={styles.form__grupo}>
								<h4 className={styles.form__grupoTitle}>Monto que necesita</h4>
								<div className={styles.form__grupoInput}>
									<input
										type="range"
										name="monto"
										id="monto"
										min="0"
										max="20000000"
										step="500000"
										value={monto}
										onChange={handleChange}
										className={styles.form__inputRange}
									/>
								</div>
								<p className={styles.form__grupoText}>
									Valor solicitado: ${monto}
								</p>
							</div>
							<div className={styles.form__grupo}>
								<h4 className={styles.form__grupoTitle}>
									Plazo credito en (meses)
								</h4>
								<div className={styles.form__grupoInput}>
									<input
										type="range"
										name="meses"
										id="meses"
										min="0"
										max="64"
										value={plazo}
										onChange={(event) => setPlazo(event.target.value)}
										className={styles.form__inputRange}
									/>
								</div>
								<p className={styles.form__grupoText}>Plazo: {plazo}</p>
							</div>
							<div className={styles.form__grupo}>
								<h4 className={styles.form__grupoTitle}>Pagos</h4>
								<div className={styles.form__grupoInput}>
									<label htmlFor="mensual" className={styles.form__label}>
										<input
											type="radio"
											name="mensual"
											id="mensual"
											className={styles.form__inputRadio}
										/>
										Mensual
									</label>
								</div>
								<div className={styles.form__grupoInput}>
									<label htmlFor="mensual" className={styles.form__label}>
										<input
											type="radio"
											name="quincena"
											id="quincena"
											className={styles.form__inputRadio}
										/>
										Quincenal
									</label>
								</div>
							</div>
							<div className={styles.form__grupoBtn}>
								<button type="submit" className={styles.form__btn}>
									¡Solicitar ya!
								</button>
							</div>
						</form>
					</div>
				</div>
			</section>
		</div>
	)
}
