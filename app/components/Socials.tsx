import { socials } from "../content/site";
import { Icon } from "./Icon";

export function Socials() {
  return (
    <ul className="socials">
      {socials.map((social) => (
        <li key={social.icon}>
          <a href={social.href} target="_blank" rel="noreferrer me" aria-label={social.label}>
            <Icon name={social.icon} size={17} />
          </a>
        </li>
      ))}
    </ul>
  );
}
