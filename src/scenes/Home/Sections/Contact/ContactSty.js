import styled from 'styled-components';
import { accent, secondary } from '../../../../styles/themes';

const ContactSty = styled.div`
    height: 570px;
    border: 1px solid white;
    position: relative;
    padding: 20px;


    label {
        display: none;
    }

    .content {
        display: flex;
        justify-content: space-around;
        width: calc(100% - 40px;)
        height: 100%;
    }

    .form, .info {
        padding: 20px;
        background: ${secondary};
       margin: 20px;
        width: 50%;
        height: 400px;
        max-width: 600px;
        min-width: 450px;
    }

    .info {
        display: flex;
        flex-flow: column;
        justify-content: space-around;
        min-width: 380px;
    }

  

    .links {
        height: 30%;
        display: flex;
        justify-content: space-around;
        align-items: center;

        svg, .angel {
            height: 50px;
            width: 50px;
        }
        
    }

    .links svg:hover {
        path {
            color: ${accent}
        }
    }

    svg {
        margin-top: 2px;
        height: 90%;
        width: 90%;
    }

    .form button {
        font-size: .6em;
        padding: 5px;
        height: 30px;
        margin: 5px;
        width: 100px;
        align-self: flex-end;
    }

    .info button {
        width: 50%;
        align-self: center;
        margin: 20px;
    }

  
    @media screen and (max-width: 875px ) {
        height: 1000px;

        .content {
            flex-flow: column;
        }

        .info, .form {
            margin: 20px auto;
           width: 70%;
           max-width: 700px;
           min-width: 450px;
        }
    }

    table {
        margin: auto;
       
    }

    td {
       padding: 10px;
    }

    td:first-child {
        text-align: right;
    }

   
`;

export default ContactSty;
