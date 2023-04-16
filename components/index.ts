import Footer from './Footer';
import Header from './Header';
import Icons from './Icons';
import Buttons from './Buttons';
import Pagination from './Pagination';
import dynamic from 'next/dynamic';
import Question from './Question';

const MyEditor = dynamic(() => import('./Editor'), {
  ssr: false,
});

export { Footer, Header, Icons, Buttons, Pagination, MyEditor, Question};
