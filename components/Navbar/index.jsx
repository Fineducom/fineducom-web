import Link from 'next/link'
import Image from 'next/image'
import Styles from './navbar.module.scss'

export default function Navbar() {
	return (
		<div>
			<nav className={Styles.nav}>
				<div className={Styles.container}>
					<div className={Styles.nav__content}>
						<div className={Styles.nav__logo}>
							<Image
								className={Styles.nav__img}
								alt="Logo menu"
								src="/peque2-1.png"
								width={100}
								height={50}
							/>
						</div>
						<ul className={Styles.list}>
							<li className={Styles.list__item}>
								<div
									className={`${Styles.list__bottom} ${Styles.list__bottomClick}`}
								>
									<Link className={Styles.nav__lik} href="/">
										Inico
									</Link>
								</div>
							</li>
							<li className={Styles.list__item}>
								<div
									className={`${Styles.list__bottom} ${Styles.list__bottomClick}`}
								>
									<Link className={Styles.nav__link} href="/credito-personal">
										Nuestros productos
									</Link>
									<div className={Styles.nav__icon}>
										<ion-icon name="chevron-forward-outline"></ion-icon>
									</div>
								</div>
								<ul className={Styles.list__show}>
									<li className={Styles.list__inside}>
										<Link
											href="/creditos-personal"
											className={`${Styles.nav__link} ${Styles.nav__linkInside}`}
										>
											Crédito personal
										</Link>
									</li>
									<li className={Styles.list__inside}>
										<Link
											href="/educacion-financiera"
											className={`${Styles.nav__link} ${Styles.nav__linkInside}`}
										>
											Educación financiera
										</Link>
									</li>
									<li className={Styles.list__inside}>
										<Link
											href="/coashing-empresarial"
											className={`${Styles.nav__link} ${Styles.nav__linkInside}`}
										>
											Coaching empresarial
										</Link>
									</li>
									<li className={Styles.list__inside}>
										<Link
											href="/credito-comunitario"
											className={`${Styles.nav__link} ${Styles.nav__linkInside}`}
										>
											Crédito comunitario
										</Link>
									</li>
								</ul>
							</li>
							<li className={Styles.list__item}>
								<div
									className={`${Styles.list__bottom} ${Styles.list__bottomClick}`}
								>
									<Link className={Styles.nav__link} href="/credito-personal">
										Nosotros
									</Link>
									<ion-icon name="chevron-forward-outline"></ion-icon>
								</div>
								<ul className={Styles.list__show}>
									<li className={Styles.list__inside}>
										<Link
											href="/creditos-personal"
											className={`${Styles.nav__link} ${Styles.nav__linkInside}`}
										>
											Conocenos
										</Link>
									</li>
									<li className={Styles.list__inside}>
										<Link
											href="/educacion-financiera"
											className={`${Styles.nav__link} ${Styles.nav__linkInside}`}
										>
											Nuestro equipo
										</Link>
									</li>
									<li className={Styles.list__inside}>
										<Link
											href="/coashing-empresarial"
											className={`${Styles.nav__link} ${Styles.nav__linkInside}`}
										>
											Treabaja con nosotros
										</Link>
									</li>
								</ul>
							</li>
							<li className={Styles.list__item}>
								<div
									className={`${Styles.list__bottom} ${Styles.list__bottomClick}`}
								>
									<Link className={Styles.nav__link} href="/credito-personal">
										Nuestra conunidad
									</Link>
									<ion-icon name="chevron-forward-outline"></ion-icon>
								</div>
								<ul className={Styles.list__show}>
									<li className={Styles.list__inside}>
										<Link
											href="/creditos-personal"
											className={`${Styles.nav__link} ${Styles.nav__linkInside}`}
										>
											Donde estamos
										</Link>
									</li>
									<li className={Styles.list__inside}>
										<Link
											href="/educacion-financiera"
											className={`${Styles.nav__link} ${Styles.nav__linkInside}`}
										>
											Nuestros beneficiarios
										</Link>
									</li>
									<li className={Styles.list__inside}>
										<Link
											href="/coashing-empresarial"
											className={`${Styles.nav__link} ${Styles.nav__linkInside}`}
										>
											Nuestros aliados
										</Link>
									</li>
								</ul>
							</li>
						</ul>
						<div className={Styles.nav__btn}>
							<Link href="#" className={Styles.nav__login}>
								Ingresar
							</Link>
						</div>
					</div>
				</div>
			</nav>
		</div>
	)
}
