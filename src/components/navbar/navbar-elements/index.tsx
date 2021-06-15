import { h } from 'preact'
import { Link } from '@reach/router'
import './index.sass'

export default function NavbarLink(props: { url: string, text: string }) {
    return (
        <div className='navlink'>
            <Link to={`${props.url}`}>
                <p>{props.text}</p>
            </Link>
        </div>
    )
}
