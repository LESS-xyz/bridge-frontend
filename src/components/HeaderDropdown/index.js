import React from 'react';

import './style.scss';

function HeaderDropdown(props) {
  let {
    label = 'Choose',
    items = [],
    onChange = () => {},
    value = null,
    round = false,
  } = props;

  const ref = React.useRef();

  const [open, setOpen] = React.useState(false);

  const choosenItem = (items && value) ?
  items.filter((item) => item.key===value)[0] : null;

  items = items && items.filter((item) => item.key!==value)

  const handleChoose = (key) => {
    onChange(key)
  }

  const handleClickOutside = (e) => {
    if (e.target !== ref.current) setOpen(false)
  }

  React.useEffect(() => {
    document.addEventListener('click',handleClickOutside)
  },[])

  React.useEffect(() => {
    document.addEventListener('click',handleClickOutside)
  },[items, value])

  return (
    <div className={
      round ? "header-dropdown-round" :
      open ? "header-dropdown-open" : "header-dropdown"
    }>
      <div
      ref={ref}
      className={
        round ? "header-dropdown-label-round" : "header-dropdown-label"
      }
      onClick={() => setOpen(!open)}
      >
        <div className="header-dropdown-label-left">
          {choosenItem &&
          <img
          className="header-dropdown-item-image"
          src={choosenItem.image}
          />
          }
          { (choosenItem ? choosenItem.text : label) }
        </div>

        <div className={open ? "header-dropdown-arrow-up" : "header-dropdown-arrow"}></div>
      </div>

      <div className={open ? "header-dropdown-list-open" : "header-dropdown-list"}>
        { open && items.map((item,ii) => {
          const { key='', text='', image, link } = item;
          return (
          <a
          key={`${key}-${ii}`}
          href={link}
          className="header-dropdown-item"
          // onClick={ () => handleChoose(item.key) }
          >
            { image &&
            <img
            className="header-dropdown-item-image"
            src={ image }
            />
            }
            { text }
          </a>
          )
        })}
      </div>
    </div>
  );
}

export default HeaderDropdown;
