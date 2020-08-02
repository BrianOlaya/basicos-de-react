import React from 'react';


const Footer = ({date}) => ( // aqui se elimino la llave y la palabra return porque, para este ejemplo,  no se necesitaba codigo antes del return. Los () isgnifican return 
        <footer>
            <p>Todos los derechos reservados &copy; {date}</p>
        </footer>
     );

 
export default Footer;

