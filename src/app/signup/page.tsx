import Bare from "../templates/Bare";
import Default from "../templates/Default";
import FormsSignup from '../components/forms/FormsSignup'

export default function Signup() {
  return (
    <Default>
    <Bare>
      <div className="">
        Signup
      </div>
       {/** Form */}
          <FormsSignup />
    </Bare>
    </Default>
  );
}