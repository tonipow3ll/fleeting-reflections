import { Footer } from 'react-bulma-components'
import { FaGithub, FaEnvelopeOpen } from 'react-icons/fa';

function FooterNav() {
    return(
        <div>
        <Footer className="pt-0 pb-0 fix-footer">
            <p>Made with 🖤 , just for fun
            <a href="https://github.com/tonipow3ll" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a href="mailto:tonipow3ll@gmail.com"><FaEnvelopeOpen /></a>
            </p>
          
        </Footer>
        </div>
    )
}

export default FooterNav;