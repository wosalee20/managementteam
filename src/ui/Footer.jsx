import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-stone-800 py-8 text-white">
      <div className="flex justify-center space-x-4">
        <Link to="mailto:managementteams@zoho.com?subject=Subject%20of%20the%20email&body=Body%20of%20the%20email">
          admin@management-team.online
        </Link>
      </div>
      <aside className="mt-4">
        <section>
          <p className="text-center">
            <img
              loading="lazy"
              decoding="async"
              src="../footer-img.jpg"
              alt=""
              width="300"
              height="100"
              className=" filter"
            />
          </p>
        </section>
      </aside>
      <p className="mt-4 text-center">
        Copyright © 2024 Management Team | Powered by Management Team
      </p>
    </footer>
  );
}

export default Footer;
