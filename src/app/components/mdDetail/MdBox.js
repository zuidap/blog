// import "github-markdown-css";
import ReactMarkdown from "react-markdown";
import { Prism } from "react-syntax-highlighter";
import {
  materialLight,
  tomorrow,
} from "react-syntax-highlighter/dist/cjs/styles/prism";

// import rehypeRaw from "rehype-raw";
// import remarkGfm from "remark-gfm";

function MdBox({ source, isDark }) {
  return (
    <ReactMarkdown
      // remarkPlugins={[remarkGfm, { singleTilde: false }]}
      // rehypePlugins={[rehypeRaw]}
      components={{
        code({ inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");

          if (!inline && match) {
            return (
              <Prism
                style={isDark ? tomorrow : materialLight}
                language={match[1]}
                PreTag='div'
                showLineNumbers={true}
                {...props}
              >
                {String(children).replace(/\n$/, "")}
              </Prism>
            );
          } else {
            return (
              <code className={className} {...props}>
                {children}
              </code>
            );
          }
        },
      }}
    >
      {source}
    </ReactMarkdown>
  );
}

export default MdBox;
