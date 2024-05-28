import { Link } from 'react-router-dom'
import mbLogo from '../assets/monkey-box-logo.png'

const MBHeader = () => {

  return (
    <div className="header">
      <div className='logoContainer'>
        <img className='logo' src={mbLogo} />
        <span className='MBSName'>Monkey Box Software</span>
      </div>
      <div>
        <Link
          className='btn'
          to='/'
        >
          ABOUT US
        </Link>
        <Link
          className='btn'
          to='/services'
        >
          SERVICES
        </Link>
        <Link
          className='btn'
          to='/careers'
        >
          CAREERS
        </Link>
        <Link
          className='btn'
          to='/resources'
        >
          RESOURCES
        </Link>
        <Link
          className='btn'
          to='contactus'
        >
          CONTACT US
        </Link>

      </div>
    </div>
  )
}

export default MBHeader