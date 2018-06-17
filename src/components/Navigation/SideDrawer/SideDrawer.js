import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';
import classes from './SideDrawer.css';

const sideDrawer = (props) => {
  let attachedClases = [classes.sideDrawer, classes.Close];
  if (props.open) {
    attachedClases = [classes.sideDrawer, classes.Open];
  }
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.closed}/>
        <div className={attachedClases.join(' ')}>
          <div className={classes.Logo}>
            <Logo />
          </div>
          <nav>
            <NavigationItems />
          </nav>
        </div>
    </Aux>
  );
}

export default sideDrawer;
