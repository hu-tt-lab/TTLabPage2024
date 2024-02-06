import { Button } from "../common";

export function Nav() {
  return (
    <ul>
      <li>
        <Button href="/" variant="contained">
          root
        </Button>
      </li>
      <li>
        <Button href="/about" variant="contained">
          about
        </Button>
      </li>
    </ul>
  );
}
