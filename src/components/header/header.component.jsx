import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import { HeaderContainer , LogoContainer , OptionsContainer, OptionDiv, Optionlink} from  './header.styles';

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer  to='/'>
      <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer>
      <Optionlink to='/shop'>
        SHOP
      </Optionlink>
      <Optionlink to='/shop'>
        CONTACT
      </Optionlink>
      {currentUser ? (
        <OptionDiv  onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionDiv>
      ) : (
        <Optionlink to='/signin'>
          SIGN IN
        </Optionlink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);