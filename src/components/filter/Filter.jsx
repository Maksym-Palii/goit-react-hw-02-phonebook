import PropTypes from "prop-types";
import css from "components/filter/Filter.module.css"

export const Filter = ({ filter, findContact }) => {
    return (
        <label className={css.text}>Find contacts by Name
            <input
                className={css.input}
              value={filter}
              onChange={findContact}
              type="text"
              name="filter"/>
          </label>
    )
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    findContact:PropTypes.func.isRequired,
}