interface Props extends React.PropsWithChildren {
  title: string;
}

function Section({ title, children }: Props) {
  return (
    <section className="mb-12">
      <header className="text-h3 font-bold flex justify-between">
        {title}
      </header>
      <hr className="bg-black w-full block h-0.5 mt-3 mb-6" />
      {children}
    </section>
  );
}

export default Section;
