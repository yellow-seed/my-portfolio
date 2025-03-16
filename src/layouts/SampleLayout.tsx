import SampleLayoutHeader from "../headers/SampleLayoutHeader";

interface SampleLayoutProps {
  children: React.ReactNode;
}

function SampleLayout({ children }: SampleLayoutProps) {
  return (
    <>
      <SampleLayoutHeader />
      <main>{children}</main>
    </>
  );
}

export default SampleLayout;