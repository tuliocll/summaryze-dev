import "react-tabs/style/react-tabs.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { AiFillEye, AiOutlineDesktop, AiFillCode } from "react-icons/ai";
import ReactMarkdown from "react-markdown";
import LoadingContent from "../LoadingContent";
import NoContent from "../NoContent";
import CodeBlock from "../CodeBlock";

import style from "./Tabs.module.css";

function TabsPanel({ markdown, isFetching }) {
  function stringfy() {
    let code = "";
    markdown.forEach((md) => {
      if (code === "") {
        code = `~~~markdown ${md}`;
      } else {
        code = `${code} \n ${md}`;
      }
    });

    code +=
      "\n\n ###### generated with [Summaryze DEV](https://summaryze-dev.vercel.app/)";

    return code;
  }

  return (
    <Tabs>
      <TabList>
        <Tab>
          <div className="row">
            <div className={`${style.icon_base} ${style.blue}`}>
              <AiFillCode />
            </div>
            Markdown Code
          </div>
        </Tab>
        <Tab>
          {" "}
          <div className="row">
            <div className={`${style.icon_base} ${style.purple}`}>
              <AiFillEye />
            </div>
            Preview
          </div>
        </Tab>
        <Tab>
          {" "}
          <div className="row">
            <div className={`${style.icon_base} ${style.pink}`}>
              <AiOutlineDesktop />
            </div>
            Live Editor
          </div>
        </Tab>
      </TabList>

      <TabPanel>
        {isFetching && <LoadingContent />}

        {markdown.length === 0 && <NoContent />}

        {!isFetching && (
          <div className={style.markdown_code}>
            <ReactMarkdown renderers={CodeBlock} children={stringfy()} />
          </div>
        )}
      </TabPanel>
      <TabPanel>
        {!isFetching && markdown.length > 0 && (
          <div className={style.markdown_preview}>
            {markdown.map((md) => (
              <ReactMarkdown key={md}>{md}</ReactMarkdown>
            ))}
            <ReactMarkdown>
              {
                "###### generated with [Summaryze DEV](https://summaryze-dev.vercel.app/)"
              }
            </ReactMarkdown>
          </div>
        )}

        {markdown.length === 0 && <NoContent />}

        {isFetching && <LoadingContent />}
      </TabPanel>
      <TabPanel>
        <h4>Comming soon...</h4>
      </TabPanel>
    </Tabs>
  );
}

export default TabsPanel;
