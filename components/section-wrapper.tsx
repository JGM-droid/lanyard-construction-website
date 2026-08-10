import { ReactNode } from 'react';

export function SectionWrapper({ children }: { children: ReactNode }) {
  return <section className="rounded-[2rem] border border-stone-200 bg-white/90 p-8 shadow-soft sm:p-10 lg:p-14">{children}</section>;
}
