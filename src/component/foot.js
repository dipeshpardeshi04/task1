import IconFacebook from '../icons/IconFacebook'
import IconGooglePlus from '../icons/IconGooglePlus'
import IconInstagram from '/icons/IconInstagram'
import IconMessage from '../icons/IconMessage'
import IconPintrest from '../icons/IconPintrest'
import IconTelegram from '../icons/IconTelegram'
import IconTwitter from '../icons/IconTwitter'
import IconYouTube from '../icons/IconYouTube'
import './foot.css'

function Foot() {
    return (
        <>
            <footer className='footer d-flex flex-column justify-content-between flex-md-row'>
                <div className="link-category">
                    <h6 className='pb-2'>Hobbycue</h6>
                    <ul className='p-0'>
                        <a href="#"><li>About Us</li></a>
                        <a href="#"><li>Our Services</li></a>
                        <a href="#"><li>Work with Us</li></a>
                        <a href="#"><li>FAQ</li></a>
                        <a href="#"><li>Contact Us</li></a>
                    </ul>
                </div>
                <div className="link-category ">
                    <h6 className='pb-2'>Hobbycue</h6>
                    <ul className='p-0'>
                        <a href="#"><li>About Us</li></a>
                        <a href="#"><li>Our Services</li></a>
                        <a href="#"><li>Work with Us</li></a>
                        <a href="#"><li>FAQ</li></a>
                        <a href="#"><li>Contact Us</li></a>
                    </ul>
                </div>
                <div className="link-category">
                    <h6 className='pb-2'>Quick Links</h6>
                    <ul className='p-0'>
                        <a href="#"><li>About Us</li></a>
                        <a href="#"><li>Our Services</li></a>
                        <a href="#"><li>Work with Us</li></a>
                        <a href="#"><li>FAQ</li></a>
                        <a href="#"><li>Contact Us</li></a>
                    </ul>
                </div>
                <div className="link-category">
                    <h6 className='pb-2'>Social Media</h6>
                    <ul className='p-0 d-flex justify-content-between'>
                        <a href="#"><IconFacebook /></a>
                        <a href="#"><IconTwitter /></a>
                        <a href="#"><IconInstagram /></a>
                        <a href="#"><IconPintrest /></a>
                        <a href="#"><IconGooglePlus /></a>
                        <a href="#"><IconYouTube /></a>
                        <a href="#"><IconTelegram /></a>
                        <a href="#"><IconMessage /></a>
                    </ul>
                    <h6 className='pb-2 mt-4'>Invite Friends</h6>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Email ID" aria-label="Email ID" aria-describedby="button-addon2" />
                        <button className="btn" type="button" id="invite">Invite</button>
                    </div>
                </div>
            </footer>
            <span className='p-3 w-100 d-block text-center' style={{backgroundColor: "#F7F5F9", fontWeight: "500"}}>© Purple Cues Private Limited</span>
        </>
    )
}

export default Foot