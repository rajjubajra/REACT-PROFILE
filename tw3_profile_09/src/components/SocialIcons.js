import { SocialIcon } from 'react-social-icons';

function SocialIcons() {
  return (
    
            <div className="flex"> 
              <div className="mr-1">
                <SocialIcon 
                url="http://pinterest.com" 
                network="pinterest" 
                style={{height:25, width: 25}}
                bgColor="#000" 
                target="_blank" />
              </div>
              <div className="mr-1">
                <SocialIcon 
                url="http://instagram.com" 
                network="instagram" 
                style={{height:25, width: 25}}
                bgColor="#000"
                target="_blank"/>
              </div>
              <div className="mr-1">
                <SocialIcon 
                url="http://facebook.com" 
                network="facebook"
                style={{height:25, width: 25}}
                bgColor="#000" 
                target="_blank" />
              </div>       
            </div>
  )
}

export default SocialIcons
