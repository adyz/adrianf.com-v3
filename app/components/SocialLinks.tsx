import socialItems from "../data/socialProfiles"
import Boop from './Boop';

const author = 'Adrian Florescu';

const SocialLinks = () => {
    return (
        <div className="socialLinks">
            {socialItems.map((socialItem, socialItemIndex) => {
                return (
                    <Boop y={2} key={socialItemIndex} >
                        <a
                            rel="noopener noreferrer"
                            target="_blank"
                            title={`${socialItem.alt} profile ${author}`}
                            href={socialItem.link}
                        >
                            <span className="icon">
                                <socialItem.icon />
                            </span>
                            <span className="title">{socialItem.title}</span>
                        </a>
                    </Boop>
                )
            })}
        </div>
    )
}


export default SocialLinks