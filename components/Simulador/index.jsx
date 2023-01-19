import { useState } from 'react'
import Styles from './simulador.module.scss'

export default function Simulador() {
	const [solicitado, setSolicitado] = useState(0)
	const [plazo, setPlazo] = useState(0)
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
			<form className={Styles.form}>
				<div className={Styles.form__grupo}>
					<h4 className={Styles.form__grupoTitle}>
						¿Cuántos créditos ha solicitado con nosotros?
					</h4>
					<div
						className={`${Styles.form__grupoInput} ${Styles.form__grupoInputRange}`}
					>
						<label htmlFor="credito" className={Styles.form__label}>
							<input
								type="range"
								name="credito"
								id="credito"
								min="0"
								max="12"
								value={solicitado}
								onChange={(event) => setSolicitado(event.target.value)}
								className={Styles.form__inputRange}
							/>
						</label>
						<p className={Styles.form__grupoText}>
							Creditos solicitados: {solicitado}
						</p>
					</div>
				</div>
				<div className={Styles.form__grupo}>
					<h4 className={Styles.form__grupoTitle}>
						¿Hace parte de la tribu FINEDUCOM?
					</h4>
					<div className={Styles.form__grupoInput}>
						<label htmlFor="si" className={Styles.form__label}>
							<input
								type="radio"
								name="si"
								id="si"
								className={Styles.form__inputRadio}
							/>
							Si
						</label>
					</div>
					<div className={Styles.form__grupoInput}>
						<label htmlFor="no" className={Styles.form__label}>
							<input
								type="radio"
								name="no"
								id="no"
								className={Styles.form__inputRadio}
							/>
							No
						</label>
					</div>
				</div>
				<div className={Styles.form__grupo}>
					<h4 className={Styles.form__grupoTitle}>
						¿Ha completado cursos con nosotros o aliados?
					</h4>
					<div className={Styles.form__grupoInput}>
						<label htmlFor="no2" className={Styles.form__label}>
							<input
								type="radio"
								name="no2"
								className={Styles.form__inputRadio}
							/>
							No
						</label>
					</div>
					<div className={Styles.form__grupoInput}>
						<label htmlFor="personal" className={Styles.form__label}>
							<input
								type="radio"
								name="personal"
								className={Styles.form__inputRadio}
							/>
							Personales
						</label>
					</div>
					<div className={Styles.form__grupoInput}>
						<label htmlFor="fpe" className={Styles.form__label}>
							<input
								type="radio"
								name="fpe"
								className={Styles.form__inputRadio}
							/>
							Finanzas perosnales y empleo
						</label>
					</div>
				</div>
				<div className={Styles.form__grupo}>
					<h4 className={Styles.form__grupoTitle}>Actividad que realiza</h4>
					<div className={Styles.form__grupoInput}>
						<label htmlFor="" className={Styles.form__label}>
							<input
								type="radio"
								name="docente"
								id="docente"
								className={Styles.form__iputRadio}
							/>
							Dosente
						</label>
					</div>
					<div className={Styles.form__grupoInput}>
						<label htmlFor="" className={Styles.form__label}>
							<input
								type="radio"
								name="independiente"
								id="independiente"
								className={Styles.form__iputRadio}
							/>
							Independiente
						</label>
					</div>
					<div className={Styles.form__grupoInput}>
						<label htmlFor="" className={Styles.form__label}>
							<input
								type="radio"
								name="otro"
								id="otro"
								className={Styles.form__iputRadio}
							/>
							Otro
							<input
								type="text"
								name="otro"
								id="otro"
								placeholder="Su respuesta"
								className={Styles.form__inputText}
							/>
						</label>
					</div>
				</div>
				<div className={Styles.form__grupo}>
					<h4 className={Styles.form__grupoTitle}>Monto que necesita</h4>
					<div className={Styles.form__grupoInput}>
						<input
							type="range"
							name="monto"
							id="monto"
							min="0"
							max="20000000"
							step="500000"
							value={monto}
							onChange={handleChange}
							className={Styles.form__inputRange}
						/>
					</div>
					<p className={Styles.form__grupoText}>Valor solicitado: ${monto}</p>
				</div>
				<div className={Styles.form__grupo}>
					<h4 className={Styles.form__grupoTitle}>Plazo credito en (meses)</h4>
					<div className={Styles.form__grupoInput}>
						<input
							type="range"
							name="meses"
							id="meses"
							min="0"
							max="64"
							value={plazo}
							onChange={(event) => setPlazo(event.target.value)}
							className={Styles.form__inputRange}
						/>
					</div>
					<p className={Styles.form__grupoText}>Plazo: {plazo} </p>
				</div>
				<div className={Styles.form__grupo}>
					<h4 className={Styles.form__grupoTitle}>Pagos</h4>
					<div className={Styles.form__grupoInput}>
						<label htmlFor="mensual" className={Styles.form__label}>
							<input
								type="radio"
								name="mensual"
								id="mensual"
								className={Styles.form__inputRadio}
							/>
							Mensual
						</label>
					</div>
					<div className={Styles.form__grupoInput}>
						<label htmlFor="mensual" className={Styles.form__label}>
							<input
								type="radio"
								name="quincena"
								id="quincena"
								className={Styles.form__inputRadio}
							/>
							Quincenal
						</label>
					</div>
				</div>
				<div className={Styles.form__grupoBtn}>
					<button type="submit" className={Styles.form__btn}>
						¡Solicitar ya!
					</button>
				</div>
			</form>
		</div>
	)
}
