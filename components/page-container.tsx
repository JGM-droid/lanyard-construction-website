import { ReactNode } from 'react';

export function PageContainer({ children }: { children: ReactNode }) {
  return <div className="mx-auto flex w-full max-w-7xl flex-col px-6 py-10 sm:px-8 lg:px-10 lg:py-16">{children}</div>;
}
