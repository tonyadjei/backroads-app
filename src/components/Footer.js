import { socialLinks, pageLinks } from '../data'

const Footer = () => {
  return (
    <footer className='section footer'>
      <ul className='footer-links'>
        {pageLinks.map((pageLink) => {
          return (
            <li key={pageLink.id}>
              <a href={pageLink.href} className='footer-link'>
                {pageLink.text}
              </a>
            </li>
          )
        })}
      </ul>
      <ul className='footer-icons'>
        {socialLinks.map((socialLink) => {
          return (
            <li key={socialLink.id}>
              <a
                href={socialLink.href}
                rel='noreferrer'
                target='_blank'
                className='footer-icon'
              >
                <i className={socialLink.icon}></i>
              </a>
            </li>
          )
        })}
      </ul>
      <p className='copyright'>
        copyright &copy; Backroads travel tours company
        <span id='date'>{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  )
}
export default Footer
