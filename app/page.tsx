import {redirect} from 'next/navigation';

export const metadata={title:'Agency platform',robots:{index:false,follow:false}};

export default function Home(){
 redirect('/admin');
}
