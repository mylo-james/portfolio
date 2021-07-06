import contactInfo from '../../../../../data/contactInfo.json';
import { SiAngellist, SiGithub, SiLinkedin } from 'react-icons/si';
function ContactInfo() {
    const {
        name,
        address,
        city,
        state,
        zip,
        phone,
        email,
        linkedIn,
        angelList,
        github,
    } = contactInfo;
    return (
        <div className='info'>
            <div className='info-info'>
                <div>{name}</div>
                <div>{address}</div>
                <div>{`${city}, ${state} ${zip}`}</div>
                <div>{phone}</div>
                <div className='email'>{email}</div>
            </div>
            <div className='links'>
                <SiLinkedin onClick={() => window.open(linkedIn)} />
                <SiGithub onClick={() => window.open(github)} />
                <SiAngellist onClick={() => window.open(angelList)} />
            </div>
        </div>
    );
}

export default ContactInfo;
