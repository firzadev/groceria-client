import { Link } from "wouter";

const TopHeader = () => {
  return (
    <header className="container p-3">
      <div className="flex items-center justify-between">
        <section className="flex items-center gap-2">
          <img src="/public/MapPin.svg" alt="Location Icon" />
          <p className="text-xs leading-4 text-gray-600">
            Lincoln- 344, Illinois, Chicago, USA
          </p>
        </section>

        <nav>
          <ul className="flex items-center gap-1 text-xs leading-4 text-gray-600">
            <li>
              <Link href="/login">Sign In</Link>
            </li>
            <span>/</span>
            <li>
              <Link href="/register">Sign Up</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default TopHeader;
