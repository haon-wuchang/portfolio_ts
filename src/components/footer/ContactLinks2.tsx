import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import axios from 'axios';

interface ContactItem {
    href: string;
    type: string;
  }

const ContactLinks2: React.FC = () => {
    const [contactList,setContactList] = useState<ContactItem[]>([]);
    useEffect(()=>{
        axios('data/contact.json')
        .then(res => {
            setContactList(res.data);
        })
        .catch();
    },[]);

    return (
        <ul className="contact__links">
            {contactList && contactList.map((item) => 
                <li>
                    <a className="contact__link" href={item.href}>
                        {item.type === 'github' && <FontAwesomeIcon icon={faGithub} />}
                        {item.type === 'linkedin' && <FontAwesomeIcon icon={faLinkedin} />}
                    </a>
                </li>            
             )} 
        </ul>
    );
}

export default ContactLinks2;