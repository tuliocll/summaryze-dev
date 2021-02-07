import "react-tabs/style/react-tabs.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { AiFillEye, AiOutlineDesktop, AiFillCode } from "react-icons/ai";
import ReactMarkdown from "react-markdown";
import LoadingContent from "../LoadingContent";
import NoContent from "../NoContent";

import CodeBlock from "../CodeBlock";

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

    return code;
  }

  return (
    <Tabs>
      <TabList>
        <Tab>
          <div className="row">
            <div className="icon-base blue">
              <AiFillCode />
            </div>
            Markdown Code
          </div>
        </Tab>
        <Tab>
          {" "}
          <div className="row">
            <div className="icon-base purple">
              <AiFillEye />
            </div>
            Preview
          </div>
        </Tab>
        <Tab>
          {" "}
          <div className="row">
            <div className="icon-base pink">
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
          <ReactMarkdown renderers={CodeBlock} children={stringfy()} />
        )}
      </TabPanel>
      <TabPanel>
        {!isFetching && markdown.length > 0 && (
          <div className="markdown-preview">
            {markdown.map((md) => (
              <ReactMarkdown key={md}>{md}</ReactMarkdown>
            ))}
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
