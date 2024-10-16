import * as runtime from "react/jsx-runtime";
import Image from "next/image";
import { Callout } from "./callout";
import { Code } from "./Code";
import { cn } from "@/src/lib/utils";
import { Suspense } from "react";
import { MdxLink } from "@/src/features/html-components/Link";
import { MdxYouTube } from "@/src/features/MdxYouTube";
import { MdxPre } from "@/src/features/MdxPre";
import { MdxP } from "@/src/features/html-components/MdxP";
import { MdxDiv } from "@/src/features/html-components/MdxDiv";
import { Spacing } from "./Spacing";
const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};
const components = {
  Image,
  Callout,
  Code,
  MdxLink,
  YouTube: MdxYouTube,
  pre: MdxPre,
  p:MdxP,
  MdxDiv,
  Spacing
  // p:MdxP

  // h1:({className,...props}) => (
  //   <h1 className={cn(
  //     "mt-2 text-4xl font-bold tracking-tight",
  //     className
  //   )}
  //   {...props}
  //   >

  //   </h1>
  // )
};
interface MdxProps {
  code: string;
}
export function MDXContent({ code }: MdxProps) {
  const Component = useMDXComponent(code);
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Component components={components} />
    </Suspense>
  );
}
