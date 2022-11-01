import Link from "next/link";



const index = () => {
  return (
    <>
      <nav>
        <ul className="menu">
          <li>
          <Link href="/">
             Home
          </Link>
          </li>
          <li>
          <Link href="/about">
             About 
          </Link>
          </li>
          <li>
          <Link href="/contact">
            Contact 
          </Link>
          </li>
          <li>
          <Link href="/blog">
             Blog 
          </Link>
          </li>
          <li>
          <Link href="/product">
           product 
          </Link>
          </li>
          
        </ul>
      </nav>

      <h2 className="text-pera">This is page</h2>
    </>
  );
};

export default index;