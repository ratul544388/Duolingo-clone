import { Container } from "./container";
import { Logo } from "./logo";

export const Header = () => {
  return (
    <header className="shadow-sm dark:border h-[75px]">
      <Container className="h-full flex items-center gap-10">
        <Logo />
      </Container>
    </header>
  );
};
