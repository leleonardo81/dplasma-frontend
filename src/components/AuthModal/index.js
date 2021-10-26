import { connect } from "react-redux";
import { showLoginModal } from "store/general";
import { signin, signup } from "thunk/auth";
import AuthModal from "./AuthModal";

const mapStateToProps = state => ({
  open: state.general.showLogin,
  loading: state.auth.loading
});

const mapActionToProps = {
  setShow: showLoginModal,
  signin: (auth,email,password)=>signin({auth,email,password}),
  signup: (auth,email,password)=>signup({auth,email,password}),
}
export default connect(mapStateToProps, mapActionToProps)(AuthModal);