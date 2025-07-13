import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header>
      <Link to="/">Fast Hot Pizza Co.</Link>
      <SearchOrder />

      <p>Hot Pizza</p>
    </header>
  );
}

export default Header;
