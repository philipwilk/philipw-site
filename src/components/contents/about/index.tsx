import { h } from 'preact'
import { useTranslation } from 'preact-i18next'

export default function About() {
    // Translation  function from i18next
    const { t, i18n } = useTranslation()
    return (
        <div className='AboutContainer'>
            {t('About')}
        </div>
    )
}