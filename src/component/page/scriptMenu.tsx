import React from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

import style from '../../sass/scriptMenu.module.sass'


interface IProps {
  update: Function
  title: string
}

export default function ScriptMenu(props: IProps) {
  console.log('sssxxx', style)

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const itemClick = (name: string) => {
    handleClose()
    props.update(name)
  }

  const titleFilter = (title: string) => {
    if(title.length > 8) {
      let s = ''
      for(let i=0; i<8; i++) {
        const character = title[i]
        s += character
      }
      s+= '...'
      return s
    } else {
      return title
    }
  }

  return (
    <div className="scriptMenuWrapper">
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        {titleFilter(props.title)}
      </Button>
      <Menu
        id="simple-menu"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        elevation={0}
        getContentAnchorEl={null}
        anchorEl={anchorEl}
        
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={()=> {
          itemClick('the big bang theory')
        }}>TBBT</MenuItem>
        <MenuItem onClick={()=> {
          itemClick('friends')
        }}>Friends</MenuItem>
      </Menu>
    </div>
  );
}

