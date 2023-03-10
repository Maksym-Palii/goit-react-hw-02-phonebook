import PropTypes from "prop-types";
import css from "components/contactItem/ContactItem.module.css"

export const ContactItem = ({ visibleContact, onDeleteContact }) => {
    
    return(
        <>
            {visibleContact.map(({id, name, number }) =>
            (<li className={css.item} key={id}>
                <p className={css.text}>{name}: {number}</p>
                <button className={css.btn} type="button" onClick={()=>onDeleteContact(id)}>Delete</button>
            </li>))}
        </>
    )
}

ContactItem.propTypes = {
    visibleContact: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired,
}