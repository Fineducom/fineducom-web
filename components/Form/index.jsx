import styles from './Form.module.scss'
export default function Form() {
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
			</form>
		</div>
	)
}
