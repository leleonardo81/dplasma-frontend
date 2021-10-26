import { connect } from "react-redux";
import { logout } from "store/auth/index";
import { showLoginModal } from "store/general/index";
import NavBar from "./Navbar";

const mapStateToProps = state => ({
  isLoggedIn: state.auth.token
});

const mapActionToProps = {
  showLoginModal: () => showLoginModal(true),
  logout
}


export default connect(mapStateToProps, mapActionToProps)(NavBar);