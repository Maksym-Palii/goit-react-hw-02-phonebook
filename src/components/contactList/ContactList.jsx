import PropTypes from "prop-types";

export const ContactList = ({children}) => {
    
    return(
        <ul>
            {children}
        </ul>
    )
}

ContactList.propTypes = {
    children: PropTypes.element.isRequired
}