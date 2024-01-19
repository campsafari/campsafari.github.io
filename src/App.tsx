import Portfolio from "./data";
import ItemGrid from "./components/item-grid";
import Item from "./components/item";
import Section from "./components/section";
import Markdown from "react-markdown";

function formatDate(datestr: string) {
  if (datestr) {
    const parts: string[] = datestr.split(".");
    const year: number = Number(parts[2]);
    const month: number = Number(parts[1]);
    const day: number = Number(parts[0]);
    const date = new Date(Date.UTC(year, month - 1, day));

    return Intl.DateTimeFormat("en-US", {
      month: "long",
      year: "numeric",
    }).format(date);
  }
  return "";
}

function App() {
  return (
    <div className="container mx-auto">
      <section className="flex flex-row content-between justify-between items-center mb-10">
        <div className="info-box mb-6">
          <div>
            <h2 className={"info-name"}>{Portfolio.info.name}</h2>
            <div>{Portfolio.info.date}</div>
            <div>{Portfolio.info.address}</div>
            <div>
              {Portfolio.info.zip} {Portfolio.info.city}
            </div>
            <div>{Portfolio.info.country}</div>
          </div>
        </div>
        <div className="text-sm">
          <div className="grid grid-cols-2 gap-3">
            <div className="font-bold text-right">Phone</div>
            <div>{Portfolio.info.phone}</div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="font-bold text-right">E-Mail</div>
            <div>{Portfolio.info.email}</div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="font-bold text-right">Social</div>
            <div>
              <a
                href={"https://www.linkedin.com/in/daniel-schillat"}
                target={"blank"}
              >
                LinkedIn
              </a>{" "}
              |{" "}
              <a
                href={"https://www.xing.com/profile/Daniel_Schillat"}
                target={"blank"}
              >
                Xing
              </a>
            </div>
          </div>
        </div>
      </section>

      <Section title="About">
        <Markdown className="prose">{Portfolio.info.intro}</Markdown>
      </Section>

      <Section title={Portfolio.roles.title}>
        <ItemGrid
          className="grid grid-cols-1 md:grid-cols-4 gap-8 print:grid-cols-1"
          items={Portfolio.roles.items}
          renderItem={(item, expanded) => (
            <Item
              key={item.company}
              title={item.company}
              subtitle={item.role}
              date={`${formatDate(item.from)} - ${formatDate(item.to)}`}
              description={item.description}
              responsibilities={item.responsibilities}
              tools={item.tools}
              expand={expanded}
            />
          )}
        />
      </Section>

      <Section title={Portfolio.projects.title}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 print:grid-cols-1">
          {Portfolio.projects.items.map((item, index) => (
            <Item
              key={index}
              title={item.title}
              subtitle={item.role}
              date={`${formatDate(item.from)} - ${formatDate(item.to)}`}
              description={item.description}
              link={item.link}
            />
          ))}
        </div>
      </Section>

      <Section title={Portfolio.awards.title}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-6 gap-x-4 print:grid-cols-3">
          {Portfolio.awards.items.map((item, index) => (
            <Item
              key={index}
              title={item.title}
              subtitle={item.project}
              date={item.date}
              description={item.description}
            />
          ))}
        </div>
      </Section>

      <Section title={Portfolio.education.title}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 print:grid-cols-1">
          {Portfolio.education.items.map((item, index) => (
            <Item
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              date={`${formatDate(item.from)} - ${formatDate(item.to)}`}
            />
          ))}
        </div>
      </Section>
    </div>
  );
}

export default App;
