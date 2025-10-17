import { type SVGProps } from 'react';

const Cloud9Logo = (props: SVGProps<SVGSVGElement>) => (
  <div className="flex items-center justify-center" {...props}>
    <span className="font-headline font-black text-2xl tracking-tighter text-white">
      Cloud <span className="text-primary">9</span>
    </span>
  </div>
);
export default Cloud9Logo;
