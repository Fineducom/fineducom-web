import { useState } from 'react'
import styles from './Form.module.scss'
export default function Form() {
	const [solicitud, setSolicitud] = useState(1)
	const [meses, setMeses] = useState(1)
	const [monto, setMonto] = useState(500000)
	return (
		<div>
			<form action="" className={styles.form}>
				<div className={styles.form__grupo}>
					<h4 className={styles.form__grupoTitle}>
						¿Cuantos creditos ha solicitado con nosotros?
					</h4>
					<div className={styles.form__grupoInput}>
						<label htmlFor="credito" className={styles.form__label}>
							<input
								type="range"
								name="credito"
								id="credito"
								className={styles.form__inputRange}
							/>
						</label>
						<p className={styles.form__grupoText}>Creditos solicitados:</p>
					</div>
				</div>
				<div className={styles.form__grupo}>
					<h4 className={styles.form__Title}>
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
						<input
							type="radio"
							name="no2"
							className={styles.form__inputRadio}
						/>
						<label htmlFor="no2" className={styles.form__label}>
							No
						</label>
					</div>
					<div className={styles.form__grupoInput}>
						<input
							type="radio"
							name="personal"
							className={styles.form__inputRadio}
						/>
						<label htmlFor="personal" className={styles.form__label}>
							Personales
						</label>
					</div>
					<div className={styles.form__grupoInput}>
						<input
							type="radio"
							name="fpe"
							className={styles.form__inputRadio}
						/>
						<label htmlFor="fpe" className={styles.form__label}>
							Finanzas perosnales y empleo
						</label>
					</div>
				</div>
				<div className={styles.form__grupo}>
					<h4 className={styles.form__title}>Actividad que realiza</h4>
					<div className={styles.form__grupoInput}>
						<input
							type="radio"
							name="docente"
							id="docente"
							className={styles.form__iputRadio}
						/>
						<label htmlFor="" className={styles.form__label}>
							Dosente
						</label>
					</div>
					<div className={styles.form__grupoInput}>
						<input
							type="radio"
							name="independiente"
							id="independiente"
							className={styles.form__iputRadio}
						/>
						<label htmlFor="" className={styles.form__label}>
							Independiente
						</label>
					</div>
					<div className={styles.form__grupoInput}>
						<input
							type="radio"
							name="otro"
							id="otro"
							className={styles.form__iputRadio}
						/>
						<label htmlFor="" className={styles.form__label}>
							Otro
						</label>
						<input
							type="text"
							name="otro"
							id="otro"
							placeholder="Su respuesta"
						/>
					</div>
				</div>
				<div className={styles.form__grupo}>
					<h4 className={styles.form__grupoTitle}>Monto que necesita</h4>
					<div className={styles.form__grupoInput}>
						<input
							type="range"
							name="monto"
							id="monto"
							className={styles.form__inputRange}
						/>
					</div>
					<p className={styles.form__grupoText}>Valor solicitado: $</p>
				</div>
				<div className={styles.form__grupo}>
					<h4 className={styles.form__grupoText}>Plazo credito en (meses)</h4>
					<div className={styles.form__grupoInput}>
						<input
							type="range"
							name="meses"
							id="meses"
							className={styles.form__inputRange}
						/>
					</div>
					<p className={styles.form__grupoText}>Plazo:</p>
				</div>
				<div className={styles.form__grupo}>
					<h4 className={styles.form__grupoTitle}>Pagos</h4>
					<div className={styles.form__grupoInput}>
						<input
							type="radio"
							name="mensual"
							id="mensual"
							className={styles.form__inputRadio}
						/>
						<label htmlFor="mensual" className={styles.form__label}>
							Mensual
						</label>
					</div>
					<div className={styles.form__grupoInput}>
						<input
							type="radio"
							name="quincena"
							id="quincena"
							className={styles.form__inputRadio}
						/>
						<label htmlFor="mensual" className={styles.form__label}>
							Quincenal
						</label>
					</div>
				</div>
				<button type="submit" className={styles.form__btne}>
					¡Solicitar ya!
				</button>
			</form>
		</div>
	)
}
