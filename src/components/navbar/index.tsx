import { h } from 'preact'
import { useTranslation } from 'preact-i18next'
import './index.sass'
import {default as NavbarLink} from './navbar-elements'

export default function Nav() {
    // Translation  function from i18next
    const { t, i18n } = useTranslation()
    return (
        <div className='navbar'>
            <NavbarLink url={'/'} text={t('Home')} />
            <NavbarLink url={'/about'} text={t('About')} />
        </div>
    )
}