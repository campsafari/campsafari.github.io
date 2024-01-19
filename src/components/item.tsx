import Markdown from "react-markdown";
import { tv } from "tailwind-variants";

type Props = {
  title: string;
  subtitle: string;
  date: string;
  description?: string;
  responsibilities?: string;
  tools?: string;
  link?: string;
  expand?: boolean;
};

const itemDetails = tv({
  slots: {
    container: "pb-4 last:border-b-0 print:border-b-2",
    headline: "text-h4 font-bold",
    details: "prose max-w-none ",
  },
  variants: {
    expand: {
      false: {
        headline: "hidden print:block",
        details: "hidden print:block",
        container: "border-b-0",
      },
      true: {
        container: "border-b-2",
      },
    },
  },
});

function Item({
  title,
  subtitle,
  date,
  description,
  responsibilities,
  link,
  tools,
  expand = false,
}: Props) {
  const { headline, details, container } = itemDetails({ expand });

  return (
    <article className={container()}>
      <h2 className="text-h4 font-bold">{title}</h2>
      <h3 className="text-h4 font-bold">{subtitle}</h3>
      <div className="text-h4 font-bold mb-3">{date}</div>

      {description && (
        <Markdown className="prose max-w-none hidden print:block">
          {description}
        </Markdown>
      )}

      {responsibilities && (
        <>
          <h4 className={headline()}>Responsibilities:</h4>
          <Markdown className={details()}>{responsibilities}</Markdown>
        </>
      )}
      {tools && (
        <>
          <h4 className="text-h4 font-bold mt-3 hidden print:block">
            Technologies:
          </h4>
          <div className="prose max-w-none mb-2 hidden print:block">
            {tools}
          </div>
        </>
      )}
      {link && (
        <a className="underline" href={link} target="_blank">
          Link
        </a>
      )}
    </article>
  );
}

export default Item;
