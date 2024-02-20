import Link from "next/link";
import PLUS from "../icons/plus-icon";
import classes from "./button.module.css";
function Button() {
  return (
    <Link href="" className={classes.btn}>
      <PLUS />
      <span>Content</span>
    </Link>
  );
}

export default Button;
