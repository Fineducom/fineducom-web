import Image from 'next/image'
import Link from 'next/link'
import style from './navbar.module.scss'
export default function Navbar() {
	return (
		<>
			<nav className={style.nav}>
				<div className={style.nav__container}>
					<Image
						className={style.nav__imag}
						alt="Logo fineducom"
						src="/peque2-1.png"
						width={100}
						height={50}
					/>
					<ul className={style.menu}>
						<li className={style.menu__item}>
							<Link href="/" className={style.nav__link}>
								Inicio
							</Link>
						</li>
						<li
							className={`${style.menu__item} ${
								style[`menu__item--icon-flex`]
							}`}
						>
							<Link href="#" className={style.nav__link}>
								nuestros productos
								<div className={style.nav__icon}>
									<i className="bx bxs-chevron-down"></i>
								</div>
							</Link>

							<ul className={style.menu__nesting}>
								<li className={style.menu__inside}>
									<Link
										href="/creditos-personal"
										className={`${style.nav__link} ${
											style[`nav__link--inside`]
										}`}
									>
										crédito personal
									</Link>
								</li>
								<li className={style.menu__inside}>
									<Link
										href="/educacion-financiera"
										className={`${style.nav__link} ${
											style[`nav__link--inside`]
										}`}
									>
										educación financiera
									</Link>
								</li>
								<li className={style.menu__inside}>
									<Link
										href="/coaching-empresarial"
										className={`${style.nav__link} ${
											style[`nav__link--inside`]
										}`}
									>
										coaching empresarial
									</Link>
								</li>
								<li className={style.menu__inside}>
									<Link
										href="/credito-comunitario"
										className={`${style.nav__link} ${
											style[`nav__link--inside`]
										}`}
									>
										crédito comunitario
									</Link>
								</li>
							</ul>
						</li>
						<li
							className={`${style.menu__item} ${
								style[`menu__item--icon-flex`]
							}`}
						>
							<Link href="#" className={style.nav__link}>
								nosotros
								<div className={style.nav__icon}>
									<i className="bx bxs-chevron-down"></i>
								</div>
							</Link>
							<ul className={style.menu__nesting}>
								<li className={style.menu__inside}>
									<Link
										href="/conocenos"
										className={`${style.nav__link} ${
											style[`nav__link--inside`]
										}`}
									>
										conocenos
									</Link>
								</li>
								<li className={style.menu__inside}>
									<Link
										href="#"
										className={`${style.nav__link} ${
											style[`nav__link--inside`]
										}`}
									>
										nuestro equipo
									</Link>
								</li>
								<li className={style.menu__inside}>
									<Link
										href="/trabaja-con-nosotros"
										className={`${style.nav__link} ${
											style[`nav__link--inside`]
										}`}
									>
										trabaja con nosotros
									</Link>
								</li>
								<li className={style.menu__inside}>
									<Link
										href="#"
										className={`${style.nav__link} ${
											style[`nav__link--inside`]
										}`}
									>
										nuetra comunidad
									</Link>
								</li>
								<li className={style.menu__inside}>
									<Link
										href="#"
										className={`${style.nav__link} ${
											style[`nav__link--inside`]
										}`}
									>
										donde estamos
									</Link>
								</li>
								<li className={style.menu__inside}>
									<Link
										href="#"
										className={`${style.nav__link} ${
											style[`nav__link--inside`]
										}`}
									>
										nuestros aliados
									</Link>
								</li>
							</ul>
						</li>
					</ul>
					<div className={style.nav__btn}>
						<Link href="#" className={`${style[`nav__link-login`]}`}>
							ingresar
						</Link>
					</div>
				</div>
			</nav>
		</>
	)
}
