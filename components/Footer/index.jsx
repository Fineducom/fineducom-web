import Link from 'next/link'
import styles from './footer.module.scss'
import Image from 'next/image'
export default function Footer() {
	return (
		<>
			<footer className={styles.footer}>
				<div className={`${styles.container} ${styles.footer__content}`}>
					<div className={styles.footer__group}>
						<Image alt="logo" width={120} height={66} src="/fineducom-2.png" />
						<div className={styles.footer__groupRedesSociales}>
							<Link className={styles.footer__link} href="#">
								<i className="bx bxl-facebook-circle"></i>
							</Link>
							<Link className={styles.footer__link} href="#">
								<i className="bx bxl-instagram"></i>
							</Link>
							<Link className={styles.footer__link} href="#">
								<i className="bx bxl-linkedin-square"></i>
							</Link>
							<Link className={styles.footer__link} href="#">
								<i className="bx bxl-youtube"></i>
							</Link>
						</div>
						<p className={styles.footer__groupTexto}>
							FINEDUCOM es una sociedad por acciones simplificada incorporada
							bajo las leyes de la República de Colombia.
						</p>
					</div>
					<div className={styles.footer__group}>
						<h4 className={styles.footer__groupTitle}>Nuestros Productos </h4>
						<ul className={styles.footer__groupList}>
							<li className={styles.footer__groupItem}>
								<Link href="#" className={styles.footer__groupLink}>
									Créditos Personales
								</Link>
							</li>
							<li className={styles.footer__groupItem}>
								<Link href="#" className={styles.footer__groupLink}>
									Educación Financiera
								</Link>
							</li>
							<li className={styles.footer__groupItem}>
								<Link href="#" className={styles.footer__groupLink}>
									Coaching Empresarial
								</Link>
							</li>
							<li className={styles.footer__groupItem}>
								<Link href="#" className={styles.footer__groupLink}>
									Crédito Comunitario
								</Link>
							</li>
						</ul>
					</div>
					<div className={styles.footer__group}>
						<h4 className={styles.footer__groupTitle}>Nosotros</h4>
						<ul className={styles.footer__groupList}>
							<li className={styles.footer__groupItem}>
								<Link href="#" className={styles.footer__groupLink}>
									Conócenos
								</Link>
							</li>
							<li className={styles.footer__groupItem}>
								<Link href="#" className={styles.footer__groupLink}>
									Trabaja con Nosotros
								</Link>
							</li>
						</ul>
					</div>
					<div className={styles.foofer__group}>
						<h4 className={styles.footer__groupTitle}>
							FINEDUCOM todos los derechos reservados
						</h4>
						<ul className={styles.footer__groupList}>
							<li className={styles.footer__groupItem}>
								<span>Tratamiento de Datos</span>
							</li>
							<li className={styles.footer__groupItem}>
								<span>Términos y Condiciones</span>
							</li>
							<li className={styles.footer__groupItem}>
								<span>Politica PQRSFD</span>
							</li>
						</ul>
					</div>
				</div>
			</footer>
		</>
	)
}
