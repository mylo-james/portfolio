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
        resume,
    } = contactInfo;
    return (
        <div className='info'>
            <table>
                <tbody>
                    <tr>
                        <td>Name:</td>
                        <td>{name}</td>
                    </tr>
                    <tr>
                        <td>Address:</td>
                        <td>{address}</td>
                    </tr>
                    <tr>
                        <td>{/* Blank for Space*/}</td>
                        <td>{`${city}, ${state} ${zip}`}</td>
                    </tr>
                    <tr>
                        <td>Phone:</td>
                        <td>{phone}</td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td className='email'>{email}</td>
                    </tr>
                </tbody>
            </table>
            <button onClick={() => window.open(resume)}>Download Resume</button>
            <div className='links'>
                <SiLinkedin onClick={() => window.open(linkedIn)} />
                <SiGithub onClick={() => window.open(github)} />
                <SiAngellist onClick={() => window.open(angelList)} />
            </div>
        </div>
    );
}

export default ContactInfo;
