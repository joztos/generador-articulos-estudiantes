import Image from "next/image";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center w-full mt-5 border-b-2 pb-7 sm:px-4 px-2">
      <div className="flex space-x-3">
        <Link href="/" passHref>
          <div className="flex items-center">
            <div className="object-contain">
              <Image
                alt="Custom Logo"
                src="https://i.im.ge/2023/04/11/IBXuyY.EMDILOGO.png"
                width={120}
                height={48}
                unoptimized={true} // Add this prop if the image doesn't load and your domain is not in the next.config.js
              />
            </div>
          </div>
        </Link>
      </div>
      <div className="sm:w-8 sm:h-[27px] w-8 h-[28px]">
        <Image
          alt="Vercel Icon"
          src="/vercelLogo.png"
          width={32}
          height={28}
        />
      </div>
    </header>
  );
};

export default Header;
