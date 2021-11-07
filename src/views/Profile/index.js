import { push } from "connected-react-router";
import { connect } from "react-redux";
import { updateProfile } from "thunk/profile";
import Profile from "./Profile";

const mapStateToProps = state => ({
  user: state.auth.user
});

const mapActionToProps = {
  updateProfile,
  redirect: () => push('/')
}
export default connect(mapStateToProps, mapActionToProps)(Profile)