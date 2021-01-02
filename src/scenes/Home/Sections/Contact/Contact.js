import Form from '../../../../components/Forms/Form';
import Input from '../../../../components/Forms/Input';
import Title from '../../../../components/Title';
import ContactSty from './ContactSty';
import emailjs from 'emailjs-com';

function Contact() {
    const { REACT_APP_SERVICE_ID, REACT_APP_USER_ID } = process.env;
    const onSubmit = async (e) => {
        const res = await emailjs.sendForm(
            REACT_APP_SERVICE_ID,
            'template_a4dhi9r',
            e.target,
            REACT_APP_USER_ID
        );
        if (res.status === 200) {
            console.log(res);
        } else {
            console.error(res.text);
        }
    };
    return (
        <ContactSty>
            <Title title={'Contact Me'} id={'contact'} />
            <Form onSubmit={onSubmit} submitButton>
                <Input required name='name' placeholder='Name' label='Name' />
                <Input
                    required
                    name='subject'
                    placeholder='Subject'
                    label='subject'
                />
                <Input
                    required
                    name='email'
                    placeholder='Email'
                    label='Email'
                />
                <Input
                    name='company'
                    placeholder='Company (optional)'
                    label='Company'
                />
                <Input
                    name='phone'
                    placeholder='Phone Number (optional)'
                    label='phone'
                />

                <Input
                    required
                    name='message'
                    placeholder='Write your message here...'
                    label='Message'
                    type='textarea'
                />
            </Form>
        </ContactSty>
    );
}

export default Contact;
