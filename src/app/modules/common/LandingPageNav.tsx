import React from 'react'

import huitTempsLogoSm from '../../../asset/Horizontal/8T-White-sm.png'

export default function LandingPageNav() {
    return (
        <nav className='landingPageNav'>
            <div className='sideNav'>
                <img className='imgScale' src={huitTempsLogoSm} alt="" />
            </div>

            <div>
                <a href="/home"> Accueil </a>
            </div>

            <div>
                <a href='#'>Concept</a>
            </div>


            <div>
                <a href='#'>Catégories</a>
            </div>
            <div>
                <a href='#'>Professeurs</a>
            </div>

            <div>
                <a href='#'>Abonnements</a>
            </div>

            <div>
                <a href='#'>Blog</a>
            </div>

            <div>
                <a href='#'> Contacts</a>
            </div>

            <div className='sideNav'>


                <i className="bi bi-search"></i>

            </div>

        </nav>
    )
}
