import { Icons } from '@components';

const Footer = () => {
  return (
    <div id="footer" className="w-full bg-zinc-800">
      <div className="max-w-79 h-322 mx-auto flex flex-row p-32px-12px-12px">
        <div className="w-1/12">
          <Icons.SvgLogoSmall className="h-10m -mt-3" />
        </div>
        <div className="w-2/12 justify-center">
          <h1 className="font-semibold text-gray-300 text-13">STACK OVERFLOW</h1>
          <ul className="text-13 text-gray-500 mt-3">
            <li className="cursor-pointer hover:text-gray-600">Questions</li>
            <li className="cursor-pointer hover:text-gray-600">Help</li>
          </ul>
        </div>
        <div className="w-2/12 justify-center">
          <h1 className="font-semibold text-gray-300 text-13">PRODUCTS</h1>
          <ul className="text-13 text-gray-500 mt-3">
            <li className="cursor-pointer hover:text-gray-600">Teams</li>
            <li className="cursor-pointer hover:text-gray-600">Advertising</li>
            <li className="cursor-pointer hover:text-gray-600">Collectives</li>
            <li className="cursor-pointer hover:text-gray-600">Talent</li>
          </ul>
        </div>
        <div className="w-2/12 justify-center">
          <h1 className="font-semibold text-gray-300 text-13">COMPANY</h1>
          <ul className="text-13 text-gray-500 mt-3">
            <li className="cursor-pointer hover:text-gray-600">About</li>
            <li className="cursor-pointer hover:text-gray-600">Press</li>
            <li className="cursor-pointer hover:text-gray-600">Work Here</li>
            <li className="cursor-pointer hover:text-gray-600">Legal</li>
            <li className="cursor-pointer hover:text-gray-600">Privacy Policy</li>
            <li className="cursor-pointer hover:text-gray-600">Terms of Service</li>
            <li className="cursor-pointer hover:text-gray-600">Contact Us</li>
            <li className="cursor-pointer hover:text-gray-600">Cookie Settings</li>
            <li className="cursor-pointer hover:text-gray-600">Cookie Policy</li>
          </ul>
        </div>
        <div className="w-3/12 justify-center">
          <h1 className="font-semibold text-gray-300 text-13">STACK EXCHANGE NETWORK</h1>
          <ul className="text-13 text-gray-500 mt-3">
            <li className="cursor-pointer hover:text-gray-600">Technology</li>
            <li className="cursor-pointer hover:text-gray-600">Culture & recretion</li>
            <li className="cursor-pointer hover:text-gray-600">Life & arts</li>
            <li className="cursor-pointer hover:text-gray-600">Science</li>
            <li className="cursor-pointer hover:text-gray-600">Professional</li>
            <li className="cursor-pointer hover:text-gray-600">Business</li>
            <li className="cursor-pointer hover:text-gray-600 mt-16">API</li>
            <li className="cursor-pointer hover:text-gray-600">Data</li>
          </ul>
        </div>
        <div className="w-4/12 flex flex-col justify-between">
          <div id="footer-contact" className="flex flex-row text-11 text-gray-500">
            <h1 className="cursor-pointer hover:text-gray-600">Blog</h1>
            <h1 className="cursor-pointer hover:text-gray-600">Facebook</h1>
            <h1 className="cursor-pointer hover:text-gray-600">Twitter</h1>
            <h1 className="cursor-pointer hover:text-gray-600">Linkedin</h1>
            <h1 className="cursor-pointer hover:text-gray-600">Instagram</h1>
          </div>
          <p className="text-11 text-gray-500 mb-24">
            Site design / logo © 2023 Stack Exchange Inc; user contributions licensed under
            <span className="underline cursor-pointer"> CC BY-SA.</span>
            <span> rev&nbsp;2022.12.21.43127</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
