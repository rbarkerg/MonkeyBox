import { SocialIcon } from "react-social-icons"


const SocialNetworks = () => {
  return (
    <div>
      <a href="https://www.facebook.com" target="_blank" style={{ margin: 3 }}>
        <SocialIcon network="facebook" />
      </a>
      <a href="https://www.linkedin.com" target="_blank" style={{ margin: 3 }}>
        <SocialIcon network="linkedin" />
      </a>
      <a href="https://www.instagram.com" target="_blank" style={{ margin: 3 }}>
        <SocialIcon network="instagram" />
      </a>

    </div>
  )
}

export default SocialNetworks